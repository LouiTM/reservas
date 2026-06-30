import { Routes, Route } from 'react-router-dom';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Menu from './components/Menu';
import Reserva from './components/Reserva';
import Footer from './components/Footer';
import Skill from './components/Skill';
import './App.css';

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
    <Routes>
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/*" element={
        <div className="site-container">
          {renderOpening && (
            <div className="opening-screen">
              <div className="opening-text-container">
                <h1 className="opening-text-horizontal">
                  <span>このサイトは本店とは</span>
                  <span>関係がありません</span>
                </h1>
              </div>
            </div>
          )}
          <Navbar onReservaClick={scrollToReservas} />
          <Hero />
          <Concept />
          <Menu />
          <Skill />
          <Reserva sectionRef={reservaRef} />
          <Footer />
        </div>
      } />
    </Routes>
  );
}

export default App;