import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Menu from './components/Menu';
import FormularioReserva from './components/FormularioReserva';
import Footer from './components/Footer';
import './App.css';
import tatePhoto from './assets/tatephoto.png';
import fish from './assets/fish.png';
import sasimi from './assets/sasimi.png';
import sushi from './assets/sushi.png';
import veggie from './assets/veggie.png';


function App() {
  const [renderOpening, setRenderOpening] = useState(true);
  const reservaRef = useRef(null);

  // オープニングアニメーション制御（4.5秒）
  useEffect(() => {
    const timer = setTimeout(() => {
      setRenderOpening(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // 各パーツから呼ばれるスクロール関数
  const scrollToReservas = () => {
    reservaRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="site-container">
      
      {/* 1. 圧倒的な「間」を感じる縦書きオープニング */}
      {renderOpening && (
        <div className="opening-screen">
          <div className="opening-text-container">
            <h1 className="opening-text-horizontal">今日も海が主役。</h1>
          </div>
        </div>
      )}

      {/* 2. メインウェブサイトのコンポーネント配置 */}
      <Navbar onReservaClick={scrollToReservas} />
      
      <Hero onReservaClick={scrollToReservas} />

      <Concept />

      <Menu />

      {/* 3. 三、予約セクション（【大改造】左：テキスト＆フォーム / 右：縦長写真） */}
      <section ref={reservaRef} className="section-reserva">
        <div className="reserva-grid">
          
          {/* 左側：テキストと予約フォーム */}
          <div className="reserva-texto-left">
            <p className="section-tag">三、結</p>
            <h2>ご予約</h2>
            <div className="linea-decorativa"></div>
            <p className="reserva-poetic-text">
              志賀島の海の恵みと、職人の熟成の技。
            </p>
            <FormularioReserva />
          </div>

          {/* 右側：凛とした和の縦長写真 */}
          <div className="reserva-imagen-right">
            {/* 落ち着いた割烹や和の空間をイメージした縦長の写真 */}
            <img
              src={tatePhoto}
              alt="丸良の空間"
            />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;