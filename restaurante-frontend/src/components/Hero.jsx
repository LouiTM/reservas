import shop from '../assets/shop.png';

export default function Hero() {
  return (
    <header className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content-left">
          <h2 className="hero-title-vertical">
            <span className="hero-title-span-right" style={{ display: 'block' }}>海が主役</span>
            <span className="hero-title-span-left" style={{ display: 'block' }}>今日も</span>
          </h2>
        </div>
        <div className="hero-content-right">
          <p className="hero-subtitle">地魚・熟成専門店</p>
        </div>
      </div>
    </header>
  );
}