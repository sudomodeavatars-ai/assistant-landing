const features = [
  {
    title: "Дневной ориентир",
    text: "Показывает, сколько комфортно тратить до следующего дохода.",
    icon: "compass",
    tone: "mint",
  },
  {
    title: "Цели без давления",
    text: "Помогает копить на важное и видеть прогресс.",
    icon: "target",
    tone: "blue",
  },
  {
    title: "Проверка покупки",
    text: "Показывает, как покупка повлияет на месяц и цель.",
    icon: "bag",
    tone: "coral",
  },
  {
    title: "Разбор месяца",
    text: "Объясняет, что сильнее всего влияет на ваш план.",
    icon: "pie",
    tone: "teal",
  },
];

const steps = [
  {
    title: "Добавьте базовые вводные",
    text: "Доход, обязательные расходы и цель.",
    card: "inputs",
  },
  {
    title: "Получите финансовый статус",
    text: "Ассистент покажет ориентир на день и главный риск.",
    card: "status",
  },
  {
    title: "Проверяйте решения спокойнее",
    text: "Смотрите, как покупки влияют на цель и план месяца.",
    card: "impact",
  },
];

const scenarios = [
  {
    title: "Сегодня",
    text: "Статус месяца, дневной ориентир и главный риск.",
    variant: "today",
    icon: "shield",
  },
  {
    title: "Можно ли купить?",
    text: "Проверьте покупку до оплаты и увидьте последствия.",
    variant: "purchase",
    icon: "bag",
  },
  {
    title: "Цель в плане",
    text: "Следите за прогрессом и сроком без давления.",
    variant: "goal",
    icon: "target",
  },
];

const privacyRows = [
  {
    title: "Используемые данные",
    text: "Посмотрите, какие данные используются для расчёта вашего статуса и рекомендаций.",
    icon: "database",
    tone: "blue",
  },
  {
    title: "Удалить данные",
    text: "Удалите все загруженные данные из приложения в один клик.",
    icon: "trash",
    tone: "coral",
  },
  {
    title: "Как работает расчёт",
    text: "Узнайте, какие факторы учитываются и как формируется ваш ориентир.",
    icon: "book",
    tone: "mint",
  },
];

const faqs = [
  {
    question: "Нужно ли подключать банк?",
    answer:
      "Нет, на старте можно начать без подключения банка. Достаточно нескольких базовых вводных, чтобы получить первый финансовый статус.",
  },
  {
    question: "Ассистент имеет доступ к моим деньгам?",
    answer:
      "Нет. Ассистент не совершает операций, не делает переводы и не принимает решений за вас.",
  },
  {
    question: "Это инвестиционный советник?",
    answer:
      "Нет. Ассистент не даёт инвестиционных рекомендаций и не обещает доходность. Он помогает с бюджетом, целями и повседневными тратами.",
  },
  {
    question: "Что такое финансовый статус?",
    answer:
      "Это простой обзор: сколько можно тратить, где есть риск и как текущий план влияет на ваши цели.",
  },
  {
    question: "Можно ли удалить данные?",
    answer:
      "Да. Пользователь должен иметь возможность изменить или удалить данные в настройках.",
  },
  {
    question: "Что делает функция “Можно ли купить?”",
    answer:
      "Она показывает, как покупка повлияет на дневной ориентир, цель и план месяца.",
  },
];

function icon(name, className = "") {
  const common = `class="icon ${className}" viewBox="0 0 24 24" fill="none" aria-hidden="true"`;
  const paths = {
    arrow: `<path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    play: `<path d="M8.5 6.8v10.4c0 .8.9 1.3 1.6.9l8.1-5.2c.6-.4.6-1.4 0-1.8L10.1 5.9c-.7-.4-1.6.1-1.6.9Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>`,
    menu: `<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    shield: `<path d="M12 3.5 19 6v5.2c0 4.3-2.8 7.5-7 9.3-4.2-1.8-7-5-7-9.3V6l7-2.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m8.8 12.1 2 2 4.5-4.7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    lock: `<path d="M7 10V7a5 5 0 0 1 10 0v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M6.5 10h11A1.5 1.5 0 0 1 19 11.5v7A1.5 1.5 0 0 1 17.5 20h-11A1.5 1.5 0 0 1 5 18.5v-7A1.5 1.5 0 0 1 6.5 10Z" stroke="currentColor" stroke-width="1.8"/><path d="M12 14v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    user: `<path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.8"/>`,
    compass: `<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><path d="m15.7 8.3-2.1 5.3-5.3 2.1 2.1-5.3 5.3-2.1Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>`,
    target: `<circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M15.2 8.8 19 5m-1 0h2v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    bag: `<path d="M7 9V7a5 5 0 0 1 10 0v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M5.5 9h13l-1 11h-11l-1-11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m9.2 14 1.8 1.8 3.8-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    pie: `<path d="M12 3.5v8.5h8.5A8.5 8.5 0 1 1 12 3.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3.8a8.5 8.5 0 0 1 6.2 6.2H14V3.8Z" fill="currentColor" opacity=".25"/>`,
    wallet: `<path d="M4.5 7.5h13A2.5 2.5 0 0 1 20 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 17V7a2.5 2.5 0 0 1 2.5-2.5h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16 12h4v4h-4a2 2 0 1 1 0-4Z" stroke="currentColor" stroke-width="1.8"/><path d="M6 8h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    chart: `<path d="M4 19V5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M4 17c3-3.8 6-4.4 9-3 3 1.5 4.5-.8 7-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 19h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    database: `<ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" stroke-width="1.8"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke="currentColor" stroke-width="1.8"/><path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" stroke-width="1.8"/><path d="m14.7 10.4 1.3 1.3 3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    trash: `<path d="M4 7h16M10 11v6m4-6v6M8 7l.7 13h6.6L16 7M9 7l1-3h4l1 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    book: `<path d="M5 4.5h9a3 3 0 0 1 3 3v12H8a3 3 0 0 1-3-3v-12Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M17 7.5h2v12h-2M8 8h5M8 12h5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>`,
    mail: `<path d="M4.5 6.5h15v11h-15v-11Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m5 7 7 6 7-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
    check: `<path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`,
    chevron: `<path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    sparkle: `<path d="M12 2.8c1.1 5 4.2 8.1 9.2 9.2-5 1.1-8.1 4.2-9.2 9.2-1.1-5-4.2-8.1-9.2-9.2 5-1.1 8.1-4.2 9.2-9.2Z" fill="currentColor"/>`,
    flame: `<path d="M12.2 21c-4.1 0-6.8-2.6-6.8-6.2 0-2.7 1.7-4.9 4.4-6.9.1 1.7.8 3 2.1 3.9 1.7-2.4 1.7-5.2.5-8.4 3.7 2.3 6.2 5.7 6.2 9.7 0 4.7-3 7.9-6.4 7.9Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M13.2 17.5c1.1-1.4.8-3.1-.4-4.7-1.3 1.3-2.2 2.4-2.2 3.7 0 1.1.8 2 1.9 2 .2 0 .5-.3.7-1Z" fill="currentColor" opacity=".22"/>`,
    bell: `<path d="M18 16v-5a6 6 0 0 0-12 0v5l-1.8 2h15.6L18 16ZM10 20h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>`,
  };
  return `<svg ${common}>${paths[name] || paths.sparkle}</svg>`;
}

function logo(markOnly = false) {
  return `
    <a class="logo" href="#top" aria-label="Ассистент">
      <span class="logo-mark">
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <defs>
            <linearGradient id="logoGradient" x1="8" x2="56" y1="8" y2="56" gradientUnits="userSpaceOnUse">
              <stop stop-color="#2563FF"/>
              <stop offset=".42" stop-color="#00D4FF"/>
              <stop offset=".68" stop-color="#00C49A"/>
              <stop offset="1" stop-color="#FF7A59"/>
            </linearGradient>
          </defs>
          <path d="M32 4c3 14 12 23 28 28-16 5-25 14-28 28C29 46 20 37 4 32 20 27 29 18 32 4Z" fill="url(#logoGradient)"/>
          <path d="M32 14c2 9 8 15 18 18-10 3-16 9-18 18-2-9-8-15-18-18 10-3 16-9 18-18Z" fill="#fff" opacity=".9"/>
        </svg>
      </span>
      ${markOnly ? "" : `<span class="logo-text"><strong>Ассистент</strong><small>для финансовой ясности</small></span>`}
    </a>
  `;
}

function button(label, href = "#waitlist", variant = "primary", iconName = "arrow") {
  return `
    <a class="btn btn-${variant}" href="${href}">
      <span>${label}</span>
      ${iconName ? icon(iconName) : ""}
    </a>
  `;
}

function badge(label, iconName = "sparkle") {
  return `<span class="badge">${icon(iconName)}${label}</span>`;
}

function blob(className) {
  return `<span class="blob ${className}" aria-hidden="true"></span>`;
}

function metric(label, value, delta, tone = "mint") {
  return `
    <div class="metric">
      <span>${label}</span>
      <strong>${value}</strong>
      <small class="${tone}">${delta}</small>
    </div>
  `;
}

function progressBar(value = 75, tone = "blue") {
  return `
    <div class="progress" aria-hidden="true">
      <span class="${tone}" style="width:${value}%"></span>
    </div>
  `;
}

function lineChart(className = "") {
  return `
    <svg class="line-chart ${className}" viewBox="0 0 320 130" role="img" aria-label="График динамики расходов">
      <path d="M20 108H300M20 70H300M20 32H300" stroke="#E6EBF3" stroke-width="2"/>
      <path d="M20 102C45 82 58 86 82 73C108 59 130 68 154 50C178 33 204 44 224 31C252 13 270 28 300 11" fill="none" stroke="#2563FF" stroke-width="5" stroke-linecap="round"/>
      <path d="M20 111C48 96 66 98 90 87C120 73 136 83 162 67C189 50 213 61 235 47C262 30 278 42 300 25" fill="none" stroke="#00C49A" stroke-width="5" stroke-linecap="round"/>
      <text x="20" y="126" fill="#69768D" font-size="14">1 апр</text>
      <text x="139" y="126" fill="#69768D" font-size="14">15 апр</text>
      <text x="258" y="126" fill="#69768D" font-size="14">30 апр</text>
    </svg>
  `;
}

function donutChart(value = 75, tone = "mint") {
  const stroke = value === 40 ? "#FF7A59" : "#00C49A";
  return `
    <div class="donut">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle cx="60" cy="60" r="44" fill="none" stroke="#E9EEF6" stroke-width="12"/>
        <circle cx="60" cy="60" r="44" fill="none" stroke="${stroke}" stroke-width="12" stroke-linecap="round" pathLength="100" stroke-dasharray="${value} 100" transform="rotate(-90 60 60)"/>
      </svg>
      <strong>${value}%</strong>
    </div>
  `;
}

function phoneHeader() {
  return `
    <div class="phone-status"><span>9:41</span><span></span><span>●●●</span></div>
    <div class="app-top">
      ${logo()}
      <span class="avatar"></span>
    </div>
  `;
}

function statusCard(compact = false) {
  return `
    <article class="status-card ${compact ? "compact" : ""}">
      <div class="status-card-head">
        <div>
          <span>Финансовый статус</span>
          <strong>Месяц в хорошем темпе</strong>
        </div>
        <span class="round-check">${icon("check")}</span>
      </div>
      <div class="metrics-grid">
        ${metric("Доходы", "180 000 ₽", "+8 250 ₽")}
        ${metric("Расходы", "74 500 ₽", "-2 150 ₽", "coral")}
        ${metric("Свободно", "42 680 ₽", "+10 400 ₽")}
      </div>
    </article>
  `;
}

function spendingCard() {
  return `
    <article class="mini-card">
      <div class="card-row">
        <span>Сегодня потрачено</span>
        <small>из 2 450 ₽</small>
      </div>
      <strong class="amount">1 250 ₽</strong>
      ${progressBar(62)}
      <div class="card-row muted"><span>Осталось на день</span><b>1 200 ₽</b></div>
    </article>
  `;
}

function goalCard() {
  return `
    <article class="mini-card goal-card">
      <h4>Цель на отпуск в Грузии</h4>
      <div class="goal-body">
        <span class="goal-image"></span>
        <div>
          ${progressBar(75, "mint")}
          <strong>75%</strong>
          <small>90 000 ₽ из 120 000 ₽</small>
        </div>
      </div>
    </article>
  `;
}

function riskCard() {
  return `
    <article class="risk-card">
      <span class="icon-box coral">${icon("flame")}</span>
      <div>
        <strong>Главный риск</strong>
        <span>Частые мелкие покупки</span>
      </div>
      <b>72%</b>
    </article>
  `;
}

function purchaseCard() {
  return `
    <article class="purchase-card">
      <span class="icon-box coral">${icon("bag")}</span>
      <div>
        <strong>Проверить покупку</strong>
        <span>Узнайте, вписывается ли покупка в ваш бюджет и цели</span>
      </div>
      <span class="circle-arrow">${icon("chevron")}</span>
    </article>
  `;
}

function phoneScreenToday() {
  return `
    ${phoneHeader()}
    ${statusCard(true)}
    ${spendingCard()}
    ${riskCard()}
    <article class="mini-card chart-card">
      <div class="card-row"><b>Динамика расходов</b><small>76%</small></div>
      ${lineChart("small")}
    </article>
  `;
}

function phoneScreenPurchase() {
  return `
    ${phoneHeader()}
    <h3 class="phone-title">Проверить покупку</h3>
    <article class="product-card">
      <span class="headphones"></span>
      <div><b>Наушники</b><strong>25 990 ₽</strong><small>Техника</small></div>
    </article>
    <article class="mini-card impact-list">
      <h4>Как это повлияет на бюджет</h4>
      <p><span>Остаток на день</span><b>-1 690 ₽</b></p>
      <p><span>Остаток до конца месяца</span><b>21 340 ₽</b></p>
      <p><span>Достижение цели «Отпуск»</span><b>-2%</b></p>
    </article>
    <article class="risk-card slim">
      <span class="icon-box coral">${icon("shield")}</span>
      <div><strong>Покупка увеличивает риск</strong><span>Вероятность 72%</span></div>
      ${icon("chart")}
    </article>
    <button class="phone-button">Покупку можно себе позволить</button>
    <button class="phone-button ghost">Отложить покупку</button>
  `;
}

function phoneScreenGoal() {
  return `
    ${phoneHeader()}
    <h3 class="phone-title">Цель в плане</h3>
    <article class="mini-card goal-detail">
      <div class="goal-body">
        <span class="goal-image"></span>
        <div>
          <b>Отпуск в Грузии</b>
          <strong>75%</strong>
          ${progressBar(75, "mint")}
          <small>из 120 000 ₽</small>
        </div>
      </div>
    </article>
    <article class="mini-card impact-list">
      <h4>План и срок</h4>
      <p><span>Целевая сумма</span><b>120 000 ₽</b></p>
      <p><span>Срок</span><b>31 июля 2026</b></p>
      <p><span>Осталось</span><b>82 дня</b></p>
    </article>
    <article class="mini-card chart-card">
      <div class="card-row"><b>Прогресс</b><small>12 450 ₽ / мес</small></div>
      <div class="bars">
        ${Array.from({ length: 18 }, (_, index) => `<span style="height:${18 + index * 4}px"></span>`).join("")}
      </div>
    </article>
    <button class="phone-button ghost accent">Как ускорить достижение цели</button>
  `;
}

function phoneMockup(variant = "today", extraClass = "") {
  const screens = {
    today: phoneScreenToday,
    purchase: phoneScreenPurchase,
    goal: phoneScreenGoal,
  };
  return `
    <div class="phone ${extraClass}">
      <div class="phone-frame">
        <span class="phone-notch"></span>
        <div class="phone-screen">
          ${(screens[variant] || screens.today)()}
        </div>
      </div>
    </div>
  `;
}

function header() {
  return `
    <header class="site-header">
      <div class="header-shell">
        ${logo()}
        <nav class="desktop-nav" aria-label="Главная навигация">
          <a href="#features">Возможности</a>
          <a href="#how">Как это работает</a>
          <a href="#privacy">Приватность</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div class="header-actions">
          <a class="login-link" href="#waitlist">Войти</a>
          ${button("Попробовать без банка", "#waitlist", "primary small", null)}
        </div>
        <button class="menu-button" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Открыть меню">
          ${icon("menu")}
        </button>
      </div>
      <nav id="mobileNav" class="mobile-nav" aria-label="Мобильная навигация">
        <a href="#features">Возможности</a>
        <a href="#how">Как это работает</a>
        <a href="#privacy">Приватность</a>
        <a href="#faq">FAQ</a>
        ${button("Попробовать без банка", "#waitlist", "primary small", null)}
      </nav>
    </header>
  `;
}

function hero() {
  return `
    <section class="hero section" id="top">
      ${blob("hero-blob-one")}
      ${blob("hero-blob-two")}
      ${blob("hero-blob-three")}
      <span class="sparkle sparkle-a">${icon("sparkle")}</span>
      <span class="sparkle sparkle-b">${icon("sparkle")}</span>
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          ${badge("Ваш личный финансовый помощник")}
          <h1>Понимайте свои деньги <span>спокойнее</span></h1>
          <p class="lead">Ассистент помогает разобраться с бюджетом, целями и тратами — без сложных таблиц, давления и подключения банка на старте.</p>
          <div class="hero-buttons">
            ${button("Получить ранний доступ")}
            ${button("Посмотреть демо", "#scenarios", "secondary", "play")}
          </div>
          <div class="trust-bullets">
            <div>${icon("shield")}<span>Без подключения банка на старте</span></div>
            <div>${icon("lock")}<span>Без доступа к вашим деньгам</span></div>
            <div>${icon("user")}<span>Решение остаётся за вами</span></div>
          </div>
        </div>
        <div class="hero-visual reveal delay-1">
          ${phoneMockup("today", "hero-phone")}
        </div>
      </div>
    </section>
  `;
}

function featureCard(item) {
  return `
    <article class="feature-card reveal">
      <span class="icon-orb ${item.tone}">${icon(item.icon)}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <span class="card-arrow ${item.tone}">${icon("chevron")}</span>
    </article>
  `;
}

function benefits() {
  return `
    <section class="section benefits" id="features">
      ${blob("benefit-blob")}
      <div class="container">
        <div class="section-heading reveal">
          ${badge("Преимущества")}
          <h2>Что умеет <span>Ассистент</span></h2>
          <p>Всё, чтобы понимать деньги без стресса и лишней сложности.</p>
        </div>
        <div class="features-grid">
          ${features.map(featureCard).join("")}
        </div>
        <div class="section-note reveal">
          ${logo(true)}
          <span>Ассистент анализирует, объясняет и помогает принимать решения каждый день.</span>
        </div>
      </div>
    </section>
  `;
}

function inputStepCard() {
  return `
    <article class="ui-card inputs-card">
      <h4>Ваши вводные</h4>
      <div class="input-row">${icon("wallet")}<span>Доход</span><b>180 000 ₽</b></div>
      <div class="input-row coral">${icon("lock")}<span>Обязательные расходы</span><b>74 500 ₽</b></div>
      <div class="input-row blue">${icon("target")}<span>Цель<br><strong>Отпуск в Грузии</strong></span><b>75%</b></div>
      ${progressBar(75, "mint")}
    </article>
  `;
}

function statusStepCard() {
  return `
    <article class="ui-card status-step">
      <div class="status-pill">${icon("check")}<b>Месяц в хорошем темпе</b><span>Цель остаётся в плане</span></div>
      ${spendingCard()}
      ${riskCard()}
    </article>
  `;
}

function impactStepCard() {
  return `
    <article class="ui-card impact-card">
      <h4>Как покупка влияет на план</h4>
      <div class="impact-row coral">${icon("bag")}<span>Покупка</span><b>−3 490 ₽</b></div>
      <div class="impact-row">${icon("target")}<span>Цель «Отпуск в Грузии»</span><b>75% → 74%</b></div>
      <div class="chart-title"><span>План на месяц</span><small>План / Факт</small></div>
      ${lineChart("small")}
    </article>
  `;
}

function stepCard(step, index) {
  const cards = { inputs: inputStepCard, status: statusStepCard, impact: impactStepCard };
  return `
    <article class="step reveal delay-${index}">
      <div class="step-copy">
        <span class="step-number">${index + 1}</span>
        <div>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
        </div>
      </div>
      ${cards[step.card]()}
    </article>
  `;
}

function howItWorks() {
  return `
    <section class="section how" id="how">
      ${blob("how-blob-left")}
      ${blob("how-blob-right")}
      <div class="container">
        <div class="section-heading centered reveal">
          ${logo(true)}
          <h2>Как это работает</h2>
          <p>Первый полезный результат — за несколько простых шагов.</p>
        </div>
        <div class="steps-grid">
          ${steps.map(stepCard).join("")}
        </div>
        <div class="center-action reveal">${button("Попробовать без банка", "#waitlist", "secondary sparkle-btn", "sparkle")}</div>
      </div>
    </section>
  `;
}

function scenariosSection() {
  return `
    <section class="section scenarios" id="scenarios">
      ${blob("scenario-blob-left")}
      ${blob("scenario-blob-right")}
      <div class="container">
        <div class="section-heading centered reveal">
          ${badge("Продукт в действии")}
          <h2>Главные сценарии <span>в одном месте</span></h2>
          <p>Откройте приложение и сразу поймите, что происходит с деньгами.</p>
        </div>
        <div class="scenario-grid">
          ${scenarios
            .map(
              (scenario, index) => `
                <article class="scenario reveal delay-${index}">
                  ${phoneMockup(scenario.variant)}
                  <div class="scenario-caption">
                    <span class="icon-box ${index === 1 ? "coral" : index === 2 ? "blue" : "mint"}">${icon(scenario.icon)}</span>
                    <div><h3>${scenario.title}</h3><p>${scenario.text}</p></div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function privacyPanel() {
  return `
    <article class="privacy-panel reveal delay-1">
      <header>
        <span class="icon-box blue">${icon("shield")}</span>
        <div>
          <h3>Настройки приватности</h3>
          <p>Управляйте данными и решайте, что использовать для расчёта и отображения.</p>
        </div>
      </header>
      <div class="privacy-list">
        ${privacyRows
          .map(
            (row) => `
              <div class="privacy-row">
                <span class="icon-box ${row.tone}">${icon(row.icon)}</span>
                <div><strong>${row.title}</strong><span>${row.text}</span></div>
                ${icon("chevron")}
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="privacy-note">
        ${icon("lock")}
        <span>Проектируем продукт с учётом приватности и контроля данных.</span>
      </div>
    </article>
  `;
}

function privacy() {
  const cards = [
    ["shield", "Без подключения банка на старте", "Первый статус можно получить по нескольким простым вводным."],
    ["compass", "Прозрачный расчёт", "Всегда можно посмотреть, как сформирован ориентир и статус."],
    ["user", "Данные под вашим контролем", "Вы сами решаете, что добавить, изменить или удалить."],
  ];

  return `
    <section class="section privacy" id="privacy">
      ${blob("privacy-blob")}
      <div class="container privacy-grid">
        <div class="privacy-copy reveal">
          <h2>Приватность и контроль — с <span>первого экрана</span></h2>
          <p>Ассистент помогает понять деньги, не забирая контроль у вас.</p>
          <div class="trust-stack">
            ${cards
              .map(
                ([iconName, title, text], index) => `
                  <article>
                    <span class="icon-box ${index === 1 ? "blue" : index === 2 ? "coral" : "mint"}">${icon(iconName)}</span>
                    <div><h3>${title}</h3><p>${text}</p></div>
                  </article>
                `,
              )
              .join("")}
          </div>
          ${button("Узнать, как это работает", "#how", "primary", "arrow")}
        </div>
        ${privacyPanel()}
      </div>
    </section>
  `;
}

function explanation() {
  return `
    <section class="section explanation">
      <div class="container explanation-grid">
        <div class="explanation-copy reveal">
          ${badge("Финансовая ясность", "sparkle")}
          <h2>Понимайте деньги без сложных таблиц</h2>
          <p>Ассистент собирает всё важное, расставляет приоритеты и даёт понятные подсказки — без ручного контроля каждой траты.</p>
          <ul class="check-list">
            <li>${icon("check")} Дневной ориентир и главный риск</li>
            <li>${icon("check")} Проверка покупок и влияние на цели</li>
            <li>${icon("check")} План на месяц и динамика расходов</li>
          </ul>
        </div>
        <article class="dashboard-card reveal delay-1">
          ${statusCard(true)}
          ${spendingCard()}
          ${riskCard()}
          <div class="chart-shell">
            <div class="chart-title"><b>Динамика расходов</b><small>План / Факт</small></div>
            ${lineChart()}
          </div>
        </article>
      </div>
    </section>
  `;
}

function waitlist() {
  return `
    <section class="section waitlist" id="waitlist">
      ${blob("waitlist-blob-one")}
      ${blob("waitlist-blob-two")}
      <div class="container">
        <article class="waitlist-card reveal">
          <div class="waitlist-copy">
            ${logo()}
            <h2>Начните с первого <span>финансового статуса</span></h2>
            <p>Поймите бюджет, цели и траты — без сложных таблиц, давления и подключения банка на старте.</p>
            <div class="hero-buttons">
              ${button("Получить ранний доступ")}
              ${button("Посмотреть демо", "#scenarios", "secondary", "play")}
            </div>
          </div>
          <form class="email-form" id="waitlistForm">
            <label>
              ${icon("mail")}
              <input type="email" name="email" placeholder="Ваш e-mail" required />
            </label>
            <button type="submit">Записаться в список ожидания</button>
            <p class="form-message" role="status" aria-live="polite"></p>
          </form>
          <div class="trust-line">
            <span>${icon("shield")}Без подключения банка на старте</span>
            <span>${icon("lock")}Без доступа к вашим деньгам</span>
            <span>${icon("user")}Решение остаётся за вами</span>
          </div>
        </article>
      </div>
    </section>
  `;
}

function faq() {
  return `
    <section class="section faq" id="faq">
      <div class="container faq-grid">
        <div class="section-heading reveal">
          ${badge("FAQ")}
          <h2>Вопросы, которые помогают начать спокойнее</h2>
          <p>Коротко о данных, доступе и первом финансовом статусе.</p>
        </div>
        <div class="faq-list reveal delay-1">
          ${faqs
            .map(
              (item, index) => `
                <details ${index === 0 ? "open" : ""}>
                  <summary><span>${item.question}</span>${icon("chevron")}</summary>
                  <p>${item.answer}</p>
                </details>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function footer() {
  const cols = [
    ["Продукт", "Возможности", "Безопасность", "Тарифы"],
    ["Компания", "О нас", "Блог", "Контакты"],
    ["Поддержка", "FAQ", "Помощь", "Обратная связь"],
  ];

  return `
    <footer class="footer">
      <div class="container footer-shell">
        <div>
          ${logo()}
          <p>Ваш личный помощник в мире финансовой ясности.</p>
        </div>
        ${cols
          .map(
            ([title, ...links]) => `
              <nav aria-label="${title}">
                <strong>${title}</strong>
                ${links.map((link) => `<a href="#top">${link}</a>`).join("")}
              </nav>
            `,
          )
          .join("")}
      </div>
      <div class="container footer-bottom">
        <span>© 2026 Ассистент. Все права защищены.</span>
        <a href="#privacy">Политика конфиденциальности</a>
        <a href="#privacy">Условия использования</a>
      </div>
    </footer>
  `;
}

function app() {
  return `
    ${header()}
    <main>
      ${hero()}
      ${benefits()}
      ${howItWorks()}
      ${scenariosSection()}
      ${privacy()}
      ${explanation()}
      ${waitlist()}
      ${faq()}
    </main>
    ${footer()}
  `;
}

document.querySelector("#root").innerHTML = app();

const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobileNav");

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  mobileNav.classList.toggle("open", !expanded);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("open");
  });
});

document.querySelector("#waitlistForm")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector(".form-message");
  message.textContent = "Готово. Мы сохранили e-mail для раннего доступа.";
  form.reset();
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));
