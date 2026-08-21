import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Images, MapPin, X } from 'lucide-react';

const photo = '/TBN-PIX/about_img.jpg';
const galleryItems = [
  { id: 1, title: 'School Support Initiative', category: 'Outreach', album: 'Education in Action', date: '2024', location: 'Warri, Delta State', description: 'Making school essentials and encouragement accessible to young learners.', image: photo },
  { id: 2, title: 'Back-to-School Campaign', category: 'Campaigns', album: 'Education in Action', date: '2024', location: 'Warri South', description: 'A joyful day of learning support, mentorship and new possibilities.', image: photo },
  { id: 3, title: 'Free Medical Outreach', category: 'Outreach', album: 'Health & Hope', date: '2024', location: 'Lagos Community', description: 'Bringing essential checks, care and reassurance closer to families.', image: photo },
  { id: 4, title: 'Community Clean-Up', category: 'Community', album: 'Cleaner Neighbourhoods', date: '2024', location: 'Urban Settlement', description: 'Neighbours and volunteers working side by side for healthier shared spaces.', image: photo },
  { id: 5, title: 'Youth Leadership Summit', category: 'Workshops', album: 'Youth Leadership', date: '2024', location: 'National Outreach', description: 'Young people gathering to grow skills, confidence and civic purpose.', image: photo },
  { id: 6, title: 'Food Relief Distribution', category: 'Projects', album: 'Food & Family Care', date: '2024', location: 'Grassroots Communities', description: 'Supporting vulnerable households with dignity, warmth and practical care.', image: photo },
  { id: 7, title: 'Volunteer Field Day', category: 'Events', album: 'People of TBN', date: '2024', location: 'Delta State', description: 'The hands and hearts behind every TBN intervention.', image: photo },
  { id: 8, title: 'Community Conversations', category: 'Community', album: 'People of TBN', date: '2024', location: 'Lagos', description: 'Listening first, then building lasting solutions together.', image: photo },
];
const filters = ['All', 'Events', 'Outreach', 'Projects', 'Community', 'Workshops', 'Campaigns'];

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeItem, setActiveItem] = useState(null);
  const [visible, setVisible] = useState(false);
  const filteredItems = useMemo(() => activeFilter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter), [activeFilter]);

  useEffect(() => {
    const gallery = document.querySelector('.journey-gallery');
    if (!gallery) return undefined;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.12 });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!activeItem) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveItem(null);
      if (event.key === 'ArrowRight') changeItem(1);
      if (event.key === 'ArrowLeft') changeItem(-1);
    };
    document.addEventListener('keydown', onKeyDown); document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; };
  }, [activeItem]);
  const changeItem = (direction) => {
    const index = filteredItems.findIndex((item) => item.id === activeItem.id);
    setActiveItem(filteredItems[(index + direction + filteredItems.length) % filteredItems.length]);
  };

  return <section id="gallery" className="journey-gallery section-padding"><div className="container">
    <div className="gallery-intro"><div className="section-header"><span className="eyebrow">Our visual journal</span><h2>Our journey, in the moments that matter.</h2><p>These photographs capture TBN in motion: showing up, listening closely and working alongside communities to create meaningful impact.</p></div><div className="gallery-intro-mark"><span>Our journey</span><i /> <span>Our activities</span><i /> <span>Our people</span><i /> <strong>Our impact</strong></div></div>
    <div className="gallery-filters" aria-label="Filter gallery items">{filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? 'is-active' : ''} aria-pressed={activeFilter === filter}>{filter}</button>)}</div>
    <div className={'gallery-grid ' + (visible ? 'is-visible' : '')}>{filteredItems.map((item, index) => <button className={'gallery-card gallery-card-' + ((index % 5) + 1)} key={item.id} onClick={() => setActiveItem(item)} style={{ '--delay': `${index * 70}ms` }}><img src={item.image} alt={`${item.title}, ${item.location}`} /><span className="gallery-card-shade" /><span className="gallery-card-content"><span className="gallery-album"><Images size={14} /> {item.album}</span><span className="gallery-card-title">{item.title}</span><span className="gallery-card-meta">{item.date} · {item.location}</span></span></button>)}</div>
    <div className="gallery-cta"><div><span className="eyebrow">Be part of what comes next</span><h3>Every act of care becomes part of a bigger story.</h3></div><a className="btn btn-forest" href="#volunteer">Get involved with TBN <ArrowRight size={18} /></a></div>
  </div>{activeItem && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`${activeItem.title} details`} onClick={() => setActiveItem(null)}><div className="lightbox-panel" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" onClick={() => setActiveItem(null)} aria-label="Close gallery viewer"><X size={22} /></button><div className="lightbox-image"><img src={activeItem.image} alt={`${activeItem.title}, ${activeItem.location}`} /></div><div className="lightbox-details"><span className="gallery-album gallery-album-dark"><Images size={14} /> {activeItem.album}</span><h3>{activeItem.title}</h3><p>{activeItem.description}</p><div className="lightbox-meta"><span><Calendar size={16} /> {activeItem.date}</span><span><MapPin size={16} /> {activeItem.location}</span></div></div><button className="lightbox-nav lightbox-prev" onClick={() => changeItem(-1)} aria-label="Previous photo"><ChevronLeft size={24} /></button><button className="lightbox-nav lightbox-next" onClick={() => changeItem(1)} aria-label="Next photo"><ChevronRight size={24} /></button></div></div>}</section>;
}
