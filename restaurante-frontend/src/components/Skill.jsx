import taisho from '../assets/taisho.png';

export default function Skill() {
  return (
    <section id="skill" className="section-skill">
      <div className="skill-grid">

        {/* 左：大将プロフィール */}
        <div className="skill-profile">
          <p className="section-tag">三、技</p>
          <h2>その技術とは</h2>
          <div className="linea-decorativa"></div>
          <div className="skill-profile-card">
            <div className="skill-profile-img-wrapper">
              <img src={taisho} alt="大将プロフィール" />
              <span className="skill-profile-name">佐藤 晋太郎</span>
            </div>
            <div className="skill-profile-text">
              <p className="skill-career">福岡市内の寿司屋にて10年修業。
                <br/>志賀島に戻り、地元の漁師と直接繋がりながら
                <br/>「島の魚を最高の状態で届ける」ことを使命とする。
              </p>
            </div>
          </div>
        </div>

        {/* 右：熟成技術の説明 */}
        <div className="skill-technique">
          <h2>まるりょうの熟成</h2>
          <div className="linea-decorativa"></div>
          <div className="skill-technique-list">
            <div className="skill-technique-item">
              <span className="skill-technique-num">壱</span>
              <div>
                <h4>下処理</h4>
                <p>漁師から直接仕入れた鮮度が最高の魚を一尾ずつ<a href="https://tsumotoshiki.com/?srsltid=AfmBOoo3mS6fnIbxUpUcwp4v5EoBxMWZ4LOM_gP1yQ-zPWYYeCthDVhk" target="_blank" rel="noopener noreferrer">津本式</a>の血抜きや冷やしこみ行う。</p>
              </div>
            </div>
            <div className="skill-technique-item">
              <span className="skill-technique-num">弐</span>
              <div>
                <h4>熟成管理</h4>
                <p>魚種ごとに異なる温度・湿度・期間で管理。旨味が最大になる瞬間を逃さず、最適なタイミングで提供する。</p>
              </div>
            </div>
            <div className="skill-technique-item">
              <span className="skill-technique-num">参</span>
              <div>
                <h4>日々の仕込み</h4>
                <p>包丁一本で引き出す、素材本来の味。余分な調味に頼らず、魚の持つ甘みと香りを最大限に生かす。</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}