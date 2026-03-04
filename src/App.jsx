import { useEffect, useState } from "react";
import "./App.css";

const PHONE = "+7 (000) 000-00-00"; // потом заменишь
const TG = "https://t.me/username"; // потом заменишь
const WA = "https://wa.me/70000000000"; // потом заменишь

function getTheme() {
  const saved = localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light"; // по умолчанию светлая
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

export default function App() {
  const [theme, setThemeState] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <>
      <header className="topbar">
        <div className="wrap topbarRow">
          <div className="logo">Лого</div>

          <nav className="nav">
            <a href="#prices">Цены</a>
            <a href="#consult">Консультация</a>
            <a className="btn" href="#callback">Обратный звонок</a>
            <a className="btn btnGhost" href="#call">Вызвать мастера</a>

            <button
              className="btn btnGhost"
              type="button"
              onClick={() => setThemeState(theme === "light" ? "dark" : "light")}
              aria-label="Переключить тему"
              title="Светлая / тёмная"
            >
              {theme === "light" ? "☀️" : "🌙"}
            </button>
          </nav>
        </div>

        <div className="wrap subRow">
          <div className="muted">Работаем с 9:00 до 22:00 (UTC+10)</div>
          <div className="links">
            <a href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>{PHONE}</a>
            <span className="dot">•</span>
            <a href={TG} target="_blank" rel="noreferrer">Telegram</a>
            <span className="dot">•</span>
            <a href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap heroGrid">
            <div>
              <h1>Ремонт техники и IT-помощь во Владивостоке</h1>
              <p className="muted">
                Компьютеры • ноутбуки • Mac • планшеты • принтеры • IP-камеры.
              </p>
              <div className="cta">
                <a className="btn" href="#call">Вызвать мастера</a>
                <a className="btn btnGhost" href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>Позвонить</a>
              </div>
            </div>

            <div className="card">
              <div className="cardTitle">Быстро и понятно</div>
              <div className="muted">Согласуем цену → делаем → гарантия.</div>
              <div className="pillRow">
                <span className="pill">Выезд</span>
                <span className="pill">Офис</span>
                <span className="pill">Гарантия</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="prices">
          <div className="wrap">
            <h2>Цены</h2>
            <div className="card">
              <div className="row"><span>Диагностика</span><b>от … ₽</b></div>
              <div className="row"><span>Настройка / обслуживание</span><b>от … ₽</b></div>
              <div className="row"><span>Ремонт / замена деталей</span><b>от … ₽</b></div>
              <p className="muted small">Прайс позже расширим.</p>
            </div>
          </div>
        </section>

        <section className="section" id="consult">
          <div className="wrap">
            <h2>Консультация</h2>
            <div className="card">
              <p className="muted">Напиши в Telegram/WhatsApp — скажем варианты.</p>
              <div className="cta">
                <a className="btn btnGhost" href={TG} target="_blank" rel="noreferrer">Telegram</a>
                <a className="btn btnGhost" href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="callback">
          <div className="wrap">
            <h2>Обратный звонок</h2>
            <div className="card">
              <p className="muted">Пока заглушка. Потом подключим форму.</p>
              <div className="cta">
                <a className="btn" href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>Позвонить</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="call">
          <div className="wrap">
            <h2>Вызвать мастера</h2>
            <div className="card">
              <p className="muted">Заявка по телефону или в мессенджере.</p>
              <div className="cta">
                <a className="btn" href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}>Позвонить</a>
                <a className="btn btnGhost" href={TG} target="_blank" rel="noreferrer">Telegram</a>
                <a className="btn btnGhost" href={WA} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="wrap footerRow">
            <div className="muted">© {new Date().getFullYear()} Сергей — сервис</div>
            <div className="muted">Владивосток • UTC+10</div>
          </div>
        </footer>
      </main>
    </>
  );
}