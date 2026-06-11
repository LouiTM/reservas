import sasimi from '../assets/sasimi.png';
import sushi from '../assets/sushi.png';

export default function Menu() {
  return (
    <section id="menu" className="section-menu">
      <p className="section-tag">二、味</p>
      <h2>おまかせ</h2>
      <p className="menu-intro-text">その日の海の機嫌に合わせ、最高の素材を厳選いたします。</p>
      
      <div className="menu-grid">
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={sushi} 
              alt="特選おまかせ握り" 
            />
          </div>
          <h3>特選おまかせ握り</h3>
        </div>
        
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={sasimi} 
              alt="極上 潮の逸品" 
            />
          </div>
          <h3>極上 潮の逸品料理</h3>
        </div>
      </div>
    </section>
  );
}