(function(){
  // ---- Header scroll state ----
  const header = document.getElementById('siteHeader');
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 40);
    toTop.classList.toggle('show', y > 600);
  });
  toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // ---- Mobile nav ----
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    navLinks.classList.remove('open');
  }));

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  // ---- Animated counters ----
  const counters = document.querySelectorAll('[data-count]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const duration = 1600;
        const start = performance.now();
        function tick(now){
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString();
        }
        requestAnimationFrame(tick);
        countIO.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(el => countIO.observe(el));

  // ---- Testimonial carousel ----
  const track = document.getElementById('testTrack');
  const cards = track.children;
  let perView = window.innerWidth <= 760 ? 1 : 3;
  let index = 0;
  function updatePerView(){ perView = window.innerWidth <= 760 ? 1 : 3; index = 0; move(); }
  function move(){
    const cardWidth = cards[0].getBoundingClientRect().width + 22;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
  }
  document.getElementById('testNext').addEventListener('click', () => {
    index = Math.min(index + 1, cards.length - perView);
    move();
  });
  document.getElementById('testPrev').addEventListener('click', () => {
    index = Math.max(index - 1, 0);
    move();
  });
  window.addEventListener('resize', updatePerView);

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ---- Donation amount buttons ----
  document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('customAmount').value = '';
    });
  });
  document.querySelectorAll('.freq-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.freq-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // ---- Toast helper ----
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  function showToast(msg){
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
  }

  // ---- Form submissions (demo) ----
  document.getElementById('donateSubmit').addEventListener('click', () => {
    showToast('Thank you! Your generosity means the world to us.');
  });
  ['volunteerForm','partnerForm','contactForm'].forEach(id => {
    const form = document.getElementById(id);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const messages = {
        volunteerForm: "Application received — we'll be in touch soon!",
        partnerForm: "Thanks for reaching out — our team will contact you shortly.",
        contactForm: "Message sent — we'll reply within 48 hours."
      };
      showToast(messages[id]);
      form.reset();
    });
  });
})();