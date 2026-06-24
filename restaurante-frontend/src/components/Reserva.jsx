import FormularioReserva from './FormularioReserva';
import tatePhoto from '../assets/tatephoto.png';

export default function Reserva({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section-reserva">
      <div className="reserva-grid">
        <div className="reserva-texto-left">
          <h2>ご予約</h2>
          <div className="linea-decorativa"></div>
          <p>オンラインでのご予約は、ご来店日の前日まで承っております。</p>
          <FormularioReserva />
        </div>
        <div className="reserva-imagen-right">
          <img src={tatePhoto} alt="丸良の空間" />
        </div>
      </div>
    </section>
  );
}