import fish from '../assets/fish.png';

export default function Concept() {
  return (
    <section id="concepto" className="section-concepto">
      <div className="concepto-grid">
        <div className="concepto-texto">
          <p className="section-tag">一、心</p>
          <h2>素材と向き合う</h2>
          <div className="linea-decorativa"></div>
          <p className="poetic-text">
            正しく熟成された魚はまるで新しい魚食の世界⁡<br/>島でとれた海と山の幸を安心安全な食事で届けたい
          </p>
        </div>
        <div className="concepto-imagen">
          <img 
            src={fish} 
            alt="丸良の仕入れ" 
          />
        </div>
      </div>
    </section>
  );
}