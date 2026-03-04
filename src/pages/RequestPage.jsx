import { useState } from "react";

function digitsOnly(s) {
  return String(s || "").replace(/[^\d]/g, "");
}

export default function RequestPage({ onLeadSubmit }) {
  const [sending, setSending] = useState(false);
  const [resultText, setResultText] = useState("");

  async function submit(e) {
    e.preventDefault();
    setResultText("");

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      comment: String(fd.get("comment") || ""),
      source: "request_page",
    };

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
      setResultText("Не удалось отправить. Попробуйте ещё раз.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section">
      <div className="wrap">
        <h1 className="pageTitle">Заявка</h1>
        <div className="card">
          <p className="muted">Оставьте контакты и кратко опишите проблему — мы перезвоним.</p>

          <form className="leadForm" onSubmit={submit}>
            <input className="input" name="name" placeholder="Имя" autoComplete="name" />
            <input className="input" name="phone" placeholder="Телефон" autoComplete="tel" inputMode="tel" required />
            <textarea className="input" name="comment" placeholder="Модель и симптомы" rows={4} />

            <button className="btn btnPrimary" type="submit" disabled={sending}>
              {sending ? "Отправляем..." : "Отправить"}
            </button>

            {resultText && <div className="sentOk">{resultText}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}