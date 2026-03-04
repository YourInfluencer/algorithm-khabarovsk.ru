import { useState } from "react";

function digitsOnly(s) {
  return String(s || "").replace(/[^\d]/g, "");
}

export default function Home({ phone, tg, wa, onOpenContacts, onLeadSubmit }) {
  const [resultText, setResultText] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setResultText("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      comment: String(fd.get("comment") || ""),
    };

    // на всякий (у тебя ещё есть проверка в App.jsx)
    if (digitsOnly(payload.phone).length < 10) {
      setResultText("Введите телефон (минимум 10 цифр).");
      return;
    }

    try {
      setSending(true);
      const data = await onLeadSubmit(payload);
      if (data?.ok) {
        setResultText(`Спасибо! Заявка отправлена ✅ №${data.id}`);
        e.currentTarget.reset();
      }
    } catch (err) {
      console.error(err);
      setResultText("Не удалось отправить. Проверь, что сервер запущен.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="hero" id="home">
        <div className="wrap heroGrid">
          <div>
            <h1>Ремонт техники и IT-помощь во Владивостоке</h1>
            <p className="muted">
              Телевизоры • компьютеры • ноутбуки • принтеры • сеть/Wi-Fi • IP-камеры • другая техника.
            </p>

            <div className="cta">
              <a className="btn btnPrimary" href="/#/call">Вызвать мастера</a>
              <a className="btn btnGhost" href={`tel:${digitsOnly(phone)}`}>Позвонить</a>
              <button className="btn btnGhost" type="button" onClick={onOpenContacts}>Контакты</button>
            </div>

            <div className="miniInfo">
              <span className="pill">Согласуем цену до работ</span>
              <span className="pill">Гарантия</span>
              <span className="pill">Выезд по городу</span>
            </div>
          </div>

          <div className="card">
            <div className="cardTitle">Как получить помощь быстро</div>
            <ol className="miniList">
              <li>Напишите модель и что происходит</li>
              <li>Мы скажем варианты и ориентир по цене</li>
              <li>Согласуем время — и решаем</li>
            </ol>

            <div className="cta" style={{ marginTop: 12 }}>
              <a className="btn btnPrimary" href={tg} target="_blank" rel="noreferrer">Написать в Telegram</a>
              <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRUST */}
      <section className="section" id="trust">
        <div className="wrap">
          <h2>Почему нам доверяют</h2>
          <p className="muted">
            Без сложных слов. Наша задача — чтобы вам было понятно, удобно и спокойно.
          </p>

          <div className="trustGrid">
            <div className="trustCard">
              <div className="trustIcon">✅</div>
              <div className="trustTitle">Цена до начала работ</div>
              <div className="trustText">
                Сначала диагностика и объяснение вариантов — потом решение. Без “сюрпризов” в конце.
              </div>
            </div>

            <div className="trustCard">
              <div className="trustIcon">🧾</div>
              <div className="trustTitle">Понятно объясняем</div>
              <div className="trustText">
                Говорим простыми словами: что сломалось, что можно сделать и сколько это будет стоить.
              </div>
            </div>

            <div className="trustCard">
              <div className="trustIcon">🛠️</div>
              <div className="trustTitle">Решаем под ключ</div>
              <div className="trustText">
                Не только “починили”, но и проверили: интернет, обновления, приложения, печать, настройки.
              </div>
            </div>

            <div className="trustCard">
              <div className="trustIcon">⏱️</div>
              <div className="trustTitle">Быстрое реагирование</div>
              <div className="trustText">
                Можно написать в Telegram/WhatsApp — часто уже по описанию понятно, куда копать.
              </div>
            </div>

            <div className="trustCard">
              <div className="trustIcon">🛡️</div>
              <div className="trustTitle">Гарантия</div>
              <div className="trustText">
                На выполненные работы. Если вопрос по нашей части — разберёмся без нервов.
              </div>
            </div>

            <div className="trustCard">
              <div className="trustIcon">🏠</div>
              <div className="trustTitle">Дом и офис</div>
              <div className="trustText">
                Работаем и с домашней техникой, и с офисной: ПК, сеть, принтеры, камеры, ТВ.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="help">
        <div className="wrap">
          <h2>Чем помогаем</h2>
          <div className="card">
            <ul className="list">
              <li><b>Телевизоры</b> — не включается, нет изображения/звука, подсветка, HDMI, Smart TV.</li>
              <li><b>Компьютеры/ноутбуки</b> — тормозит, перегрев, не включается, ошибки, апгрейд, система.</li>
              <li><b>Принтеры/МФУ</b> — не печатает/не сканирует, Wi-Fi, драйверы, подключение.</li>
              <li><b>Wi-Fi/роутер</b> — слабый сигнал, обрывы, настройка сети.</li>
              <li><b>IP-камеры</b> — настройка, удалённый доступ, запись.</li>
              <li><b>Другая техника</b> — подскажем по модели/симптомам, стоит ли ремонтировать.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="consult">
        <div className="wrap">
          <h2>Консультация</h2>
          <div className="card">
            <p className="muted">
              Чтобы мы ответили быстро — напишите: <b>модель</b>, <b>что происходит</b>, <b>после чего началось</b>.
            </p>
            <div className="cta">
              <a className="btn btnPrimary" href={tg} target="_blank" rel="noreferrer">Telegram</a>
              <a className="btn btnGhost" href={wa} target="_blank" rel="noreferrer">WhatsApp</a>
              <button className="btn btnGhost" type="button" onClick={onOpenContacts}>Контакты</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="feedback">
        <div className="wrap">
          <h2>Оставьте заявку — мы перезвоним</h2>
          <div className="card">
            <p className="muted">Опишите проблему в двух словах — мы уточним детали и предложим решение.</p>

            <form className="leadForm" onSubmit={submit}>
              <input className="input" name="name" placeholder="Имя" autoComplete="name" />
              <input className="input" name="phone" placeholder="Телефон" autoComplete="tel" inputMode="tel" required />
              <textarea className="input" name="comment" placeholder="Что сломалось? (модель, симптомы)" rows={3} />

              <button className="btn btnPrimary" type="submit" disabled={sending}>
                {sending ? "Отправляем..." : "Отправить"}
              </button>

              {resultText && <div className="sentOk">{resultText}</div>}
            </form>
          </div>
        </div>
      </section>

      <section className="section" id="call">
        <div className="wrap">
          <h2>Вызвать мастера</h2>
          <div className="card">
            <p className="muted">Нажмите «Контакты» — можно сразу позвонить или написать.</p>
            <div className="cta">
              <button className="btn btnPrimary" type="button" onClick={onOpenContacts}>Контакты</button>
              <a className="btn btnGhost" href={`tel:${digitsOnly(phone)}`}>Позвонить</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}