import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STATUS_LABELS = {
  PENDING:   '未確認',
  CONFIRMED: '確認済',
  CANCELLED: 'キャンセル',
};

const STATUS_COLORS = {
  PENDING:   '#b8922a',
  CONFIRMED: '#5a8a5a',
  CANCELLED: '#8a5a5a',
};

export default function AdminDashboard() {
  const [reservas, setReservas] = useState([]);
  const [changes, setChanges] = useState({}); // { id: newStatus }
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') !== 'true') {
      navigate('/admin');
    }
  }, [navigate]);

  useEffect(() => {
    fetchReservas();
  }, []);

  const fetchReservas = () => {
    setLoading(true);
    fetch('http://localhost:8080/api/reservas')
      .then(res => res.json())
      .then(data => {
        setReservas(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleStatusChange = (id, newStatus) => {
    setChanges(prev => ({ ...prev, [id]: newStatus }));
  };

  const handleSave = async () => {
  setSaving(true);
  try {
    // 全ての変更をまずDBに反映（キャンセル含む）
    for (const [id, status] of Object.entries(changes)) {
      await fetch(`http://localhost:8080/api/reservas/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
    }

    // キャンセルが1件でもあれば全キャンセルを一括削除
    const hasCancel = Object.values(changes).some(s => s === 'CANCELLED');
    if (hasCancel) {
      await fetch('http://localhost:8080/api/reservas/cancelled', {
        method: 'DELETE',
      });
    }

    setChanges({});
    fetchReservas();
  } catch (error) {
    console.error('更新失敗:', error);
  }
  setSaving(false);
};

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    navigate('/admin');
  };

  const getStatus = (r) => changes[r.id] ?? r.status ?? 'PENDING';
  const hasChanges = Object.keys(changes).length > 0;

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1 className="admin-title">予約管理</h1>
        <button className="admin-btn-logout" onClick={handleLogout}>ログアウト</button>
      </div>

      {loading ? (
        <p className="admin-loading">読み込み中...</p>
      ) : reservas.length === 0 ? (
        <p className="admin-empty">予約はまだありません。</p>
      ) : (
        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>お名前</th>
                <th>来店日</th>
                <th>時間</th>
                <th>人数</th>
                <th>ご要望</th>
                <th>ステータス</th>
              </tr>
            </thead>
            <tbody>
              {reservas.map(r => {
                const currentStatus = getStatus(r);
                const isChanged = changes[r.id] !== undefined;
                return (
                  <tr key={r.id} className={isChanged ? 'admin-row-changed' : ''}>
                    <td>{r.name}</td>
                    <td>{r.date}</td>
                    <td>{r.time}</td>
                    <td>{r.clientNo}名</td>
                    <td className="admin-td-comment">{r.comment || '—'}</td>
                    <td>
                      <select
                        className="admin-status-select"
                        value={currentStatus}
                        onChange={(e) => handleStatusChange(r.id, e.target.value)}
                        style={{ color: STATUS_COLORS[currentStatus] }}
                      >
                        {Object.entries(STATUS_LABELS).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* 右下固定の更新ボタン */}
      {hasChanges && (
        <button
          className={`admin-btn-save ${saving ? 'is-saving' : ''}`}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? '更新中...' : '更新する'}
        </button>
      )}
    </div>
  );
}