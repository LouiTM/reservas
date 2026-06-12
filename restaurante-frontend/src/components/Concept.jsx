import { useState } from 'react';
import fish from '../assets/fish.png';
import veggie from '../assets/veggie.png';

export default function Concept() {
  const [isSwapped, setIsSwapped] = useState(false);

  return (
    <section id="concepto" className="section-concepto">
      <div className="concepto-grid">
        <div className="concepto-texto">
          <p className="section-tag">一、心</p>
          <h2>素材と向き合う</h2>
          <div className="linea-decorativa"></div>
          <p className="poetic-text">
            正しく熟成された魚はまるで新しい魚食の世界。<br/>
            無添加にこだわり志賀島で無農薬・オーガニックで育てられた野菜たちも加わり、心にも体にも嬉しい地元志賀島の旬を安心安全な食事で届けたい。
          </p>
        </div>

        {/* トランプ入れ替えカード */}
        <div
          className={`card-stack ${isSwapped ? 'is-swapped' : ''}`}
          onMouseEnter={() => setIsSwapped(true)}
          onMouseLeave={() => setIsSwapped(false)}
        >
          {/* 1枚目（手前） */}
          <div className="card-item card-front">
            <img src={fish} alt="丸良の仕入れ" />
          </div>
          {/* 2枚目（後ろ・薄く見えている） */}
          <div className="card-item card-back">
            <img src={veggie} alt="丸良の素材" />
          </div>
        </div>

      </div>
    </section>
  );
}