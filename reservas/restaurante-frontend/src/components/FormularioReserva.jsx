import { useState } from 'react';

export default function FormularioReserva() {
    const [formData, setFormData] = useState({
        nombreCliente: '',
        email: '',
        fecha: '',
        hora: '',
        cantidadPersonas: 1,
        comentarios: ''
    });

    const [mensaje, setMensaje] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje('ご予約を送信中...');

        try {
            const response = await fetch('http://localhost:8080/api/reservas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMensaje('ご予約が確定いたしました。ご来店を心よりお待ちしております。🎉');
                setFormData({ nombreCliente: '', email: '', fecha: '', hora: '', cantidadPersonas: 1, comentarios: '' });
            } else {
                setMensaje('エラーが発生しました。お手数ですが再度お試しいただくか、お電話にてご連絡ください。');
            }
        } catch (error) {
            console.error('Error:', error);
            setMensaje('サーバーに接続できませんでした。バックエンドが起動しているかご確認ください。');
        }
    };

    return (
        <div className="form-container">
            <h2>ご予約</h2>
            <p className="form-subtitle">オンラインでのご予約は、ご来店日の前日まで承っております。</p>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>お名前（フルネーム）</label>
                    <input type="text" name="nombreCliente" value={formData.nombreCliente} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>メールアドレス</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group row">
                    <div>
                        <label>ご来店日</label>
                        <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>ご来店時間</label>
                        <input type="time" name="hora" value={formData.hora} onChange={handleChange} required />
                    </div>
                </div>

                <div className="form-group">
                    <label>ご予約人数</label>
                    <input type="number" name="cantidadPersonas" min="1" value={formData.cantidadPersonas} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>ご要望・アレルギー等（任意）</label>
                    <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} placeholder="お席のご希望やアレルギーがございましたらご記入ください。" />
                </div>

                <button type="submit" className="btn-submit">
                    この内容で予約する
                </button>
            </form>

            {mensaje && <p className="form-message">{mensaje}</p>}
        </div>
    );
}