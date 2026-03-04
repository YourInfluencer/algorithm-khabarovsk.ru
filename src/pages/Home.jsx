export default function Home({ phone, tg, wa }) {
  return (
    <>
      <section className="hero">
        <div className="wrap heroGrid">
          <div>
            <h1>Ремонт техники и IT-помощь во Владивостоке</h1>
            <p className="muted">
              Телевизоры • компьютеры • ноутбуки • принтеры • Wi-Fi/сеть • IP-камеры.
            </p>

            <div className="cta">
              <a className="btn btnPrimary" href={`tel:${String(phone).replace(/[^\d]/g, "")}`}>Позвонить</a>
              <a className="btn btnGhost" href={tg} target="_blank" rel="noreferrer">Telegram</a>
              <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>

            <div className="miniInfo">
              <span className="pill">Цена до работ</span>
              <span className="pill">Гарантия</span>
              <span className="pill">Выезд</span>
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">С чего начать</div>
            <ol className="miniList">
              <li>Откройте «Услуги» и выберите проблему</li>
              <li>Или сразу перейдите в «Заявка»</li>
              <li>Мы перезвоним и подскажем варианты</li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}