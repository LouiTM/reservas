import sasimi from '../assets/sasimi.png';
import sushi from '../assets/sushi.png';
import marutei from '../assets/marutei.png';
import don from '../assets/don.png';
export default function Menu() {
  return (
    <section id="menu" className="section-menu">
      <p className="section-tag">二、味</p>
      <h2>お品書き</h2>
      <p className="menu-intro-text">その四季や旬に合った最高の素材のお料理をお届けします。</p>
      
      <div className="menu-grid">
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={sushi} 
              alt="寿司ランチセット" 
            />
          </div>
          <h3>寿司ランチセット</h3>
        </div>
        
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={sasimi} 
              alt="刺身定食" 
            />
          </div>
          <h3>刺身定食</h3>
        </div>
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={marutei} 
              alt="まるりょう定食" 
            />
          </div>
          <h3>まるりょう定食</h3>
        </div>
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={marutei}
              alt="軽ランチセット" 
            />
          </div>
          <h3>軽ランチセット</h3>
        </div>
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={don} 
              alt="漁師丼" 
            />
          </div>
          <h3>漁師丼</h3>
        </div>
        <div className="menu-item">
          <div className="menu-img-wrapper">
            <img 
              src={marutei} 
              alt="単品メニュー数々" 
            />
          </div>
          <h3>単品メニュー数々</h3>
        </div>
      </div>
    </section>
  );
}