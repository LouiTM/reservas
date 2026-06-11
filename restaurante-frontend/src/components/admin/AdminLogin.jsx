import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_PASSWORD = 'maruryou2026'; // ← 好きなパスワードに変更

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('admin_auth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('パスワードが正しくありません。');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h1 className="admin-login-title">丸良　管理画面</h1>
        <div className="admin-login-line"></div>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label>パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
            />
          </div>
          {error && <p className="admin-error">{error}</p>}
          <button type="submit" className="admin-btn-login">ログイン</button>
        </form>
      </div>
    </div>
  );
}