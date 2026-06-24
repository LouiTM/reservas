import { useState, useMemo } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE;

function isHolidayOrWeekend(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDay();
  return day === 0 || day === 6; // 日曜=0, 土曜=6（祝日は後で対応可）
}

function needsConfirmation(dateStr, timeStr) {
  if (!dateStr || !timeStr) return false;
  if (!isHolidayOrWeekend(dateStr)) return false;
  // 11:00〜11:59はオープン直後なので確認不要
  const hour = parseInt(timeStr.split(':')[0], 10);
  return hour !== 11;
}

const INITIAL_FORM = { name: '', date: '', time: '', clientNo: 1, comment: '' };

export default function FormularioReserva() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [mensaje, setMensaje] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  // 明日の日付は1回だけ計算する
  const minDate = useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }, []);

  // 関数型更新でクロージャ問題を回避
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitReservation = async () => {
    setShowConfirm(false);
    setMensaje('ご予約を送信中...');
    try {
      const response = await fetch(`${API_BASE}/api/reservas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setMensaje('ご予約が確定いたしました。ご来店を心よりお待ちしております。');
        setFormData(INITIAL_FORM);
      } else {
        setMensaje('エラーが発生しました。お手数ですが再度お試しいただくか、お電話にてご連絡ください。');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('サーバーに接続できませんでした。バックエンドが起動しているかご確認ください。');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (needsConfirmation(formData.date, formData.time)) {
      setShowConfirm(true);
    } else {
      submitReservation();
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>お名前（フルネーム）</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group row">
          <div>
            <label>ご来店日</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={minDate}
              required
            />
          </div>
          <div>
            <label>ご来店時間</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>ご予約人数</label>
          <input type="number" name="clientNo" min="1" value={formData.clientNo} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>ご要望・アレルギー等（任意）</label>
          <textarea name="comment" value={formData.comment} onChange={handleChange} placeholder="お席のご希望やアレルギーがございましたらご記入ください。" />
        </div>

        <button type="submit" className="btn-submit">この内容で予約する</button>
      </form>

      {mensaje && <p className="form-message">{mensaje}</p>}

      {/* 確認モーダル */}
      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-modal">
            <p className="confirm-message">
              土日祝日は11時のオープン直後のお時間以外、ご予約のお客様よりも先にご来店されたお客様を優先してご案内しております。そのため、お待ちいただく場合がございますが、よろしいでしょうか。
            </p>
            <div className="confirm-buttons">
              <button className="btn-confirm-ok" onClick={submitReservation}>
                予約する
              </button>
              <button className="btn-confirm-cancel" onClick={() => setShowConfirm(false)}>
                戻る
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}