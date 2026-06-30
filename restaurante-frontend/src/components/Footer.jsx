import { Link } from 'react-router-dom'; // ← ★これを一番上に追加します

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">たべもの処 まるりょう</div>
      <div className="footer-info-grid">
        <div className="footer-info-block">
          <h4>【 営業時間 】</h4>
          <p>12時(土日祝11時) ～ 15時 (LO 14時30分)⁡⁡ </p>
          <p>夜は予約のみになります</p>
          <p>定休日︰火・水</p>
        </div>
        <div className="footer-info-block">
          <h4>【 地図 】</h4>
          <p>〒811-0323 福岡市東区志賀島468-1</p>
          <p>TEL: 0926036498</p>
          <p className="footer-instagram">Instagram: @tabemono_maruryou</p>
        </div>
      </div>
      
      <p className="copyright">
        © 2026 丸良. All Rights Reserved.
        {/* ▼ お店の人だけが分かる、目立たない管理画面リンク ▼ */}
        <Link to="/admin" style={{ color: '#2a2018', textDecoration: 'none', marginLeft: '16px' }}>
          Admin
        </Link>
      </p>
    </footer>
  );
}