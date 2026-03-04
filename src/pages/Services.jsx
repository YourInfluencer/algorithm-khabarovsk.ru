export default function Services() {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="pageTitle">Услуги</h1>
        <p className="muted">
          Что ремонтируем и с чем чаще всего обращаются.
        </p>

        <div className="card">
          <div className="cardTitle">Частые проблемы</div>
          <ul className="list">
            <li>Телевизор не включается / нет изображения / HDMI</li>
            <li>ПК/ноутбук тормозит / не включается / перегрев</li>
            <li>Принтер не печатает / не сканирует / Wi-Fi</li>
            <li>Проблемы с Wi-Fi/роутером/интернетом</li>
            <li>IP-камеры: настройка, удалённый доступ, запись</li>
          </ul>
          <p className="muted small">Для заявки перейдите на страницу «Заявка».</p>
        </div>
      </div>
    </section>
  );
}