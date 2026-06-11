import { useState, useEffect } from 'react';

export default function Navbar({ onReservaClick }) {
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール位置を監視して、ナビゲーションの見た目を変える
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-logo-container">
        <span
          className="nav-logo-text"
          onClick={() => {
            window.scrollTo(0, 0);
            window.location.reload();
          }}
          style={{ cursor: 'pointer' }}>たべもの処 まるりょう</span>
      </div>
      <div className="nav-links">
        <a href="#concepto">一、心</a>
        <a href="#menu">二、味</a>
        <a href="#skill">三、技</a>
        <button onClick={onReservaClick} className="btn-nav-reserva">
          ご予約
        </button>
      </div>
    </nav>
  );
}