export default function Consult({ tg, wa, onOpenContacts }) {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="pageTitle">Консультация</h1>
        <div className="card">
          <p className="muted">
            Чтобы мы ответили быстро — напишите: <b>модель</b>, <b>симптомы</b>, <b>после чего началось</b>.
          </p>

          <div className="cta">
            <a className="btn btnPrimary" href={tg} target="_blank" rel="noreferrer">Telegram</a>
            <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
            <button className="btn btnGhost" type="button" onClick={onOpenContacts}>Контакты</button>
          </div>
        </div>
      </div>
    </section>
  );
}