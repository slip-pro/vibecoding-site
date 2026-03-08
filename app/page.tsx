export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Вайбкодинг — создай сайт с AI',
    description:
      'Бесплатный курс из двух частей: от нуля до ' +
      'задеплоенного сайта и профессионального AI-workflow.',
    provider: {
      '@type': 'Organization',
      name: 'kkts.ai',
      url: 'https://kkts.ai',
    },
    isAccessibleForFree: true,
    inLanguage: 'ru',
    url: 'https://vibecoding.kkts.ai',
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        name: 'От нуля до деплоя',
        courseMode: 'online',
      },
      {
        '@type': 'CourseInstance',
        name: 'Профессиональный AI-workflow',
        courseMode: 'online',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F9FAFB]">
      {/* eslint-disable-next-line react/no-danger -- static JSON-LD, no user input */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md shadow-lg shadow-emerald-500/5">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt="vibecoding"
              className="h-7 w-auto"
            />
            <span className="font-mono font-bold text-base tracking-tight text-emerald-500">
              vibecoding
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium uppercase tracking-wider text-[#9CA3AF]">
            <a
              href="#courses"
              className="hover:text-emerald-500 transition-colors"
            >
              Курсы
            </a>
            <a
              href="#roadmap"
              className="hover:text-emerald-500 transition-colors"
            >
              Программа
            </a>
            <a
              href="https://kkts.ai/workshops/vibe-coding"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 transition-colors"
            >
              Для команд
            </a>
          </nav>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative pt-20 pb-16 border-b border-white/10 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-20" />

        {/* Pulsing blobs */}
        <div
          className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-emerald-500/20 animate-pulse-slow"
          style={{ filter: 'blur(100px)' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-40 right-1/4 w-72 h-72 rounded-full bg-fuchsia-500/15 animate-pulse-slow"
          style={{
            filter: 'blur(100px)',
            animationDelay: '1.5s',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 left-1/2 w-80 h-80 rounded-full bg-emerald-500/10 animate-pulse-slow"
          style={{
            filter: 'blur(100px)',
            animationDelay: '3s',
          }}
          aria-hidden="true"
        />

        {/* Decorative SVG lines */}
        <svg
          className="absolute top-12 left-0 w-full h-px"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-line-1" x1="0" x2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(16,185,129,0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="url(#hero-line-1)"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute bottom-20 left-0 w-full h-px"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="hero-line-2" x1="0" x2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="40%" stopColor="rgba(16,185,129,0.2)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="url(#hero-line-2)"
            strokeWidth="1"
          />
        </svg>

        <div className="relative max-w-5xl mx-auto px-6">
          <h1 className="font-mono font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
            Создай сайт с AI.
            <br />
            Построй процесс.
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-[#9CA3AF] leading-relaxed">
            Курс из двух частей: от нулевого опыта до задеплоенного
            сайта и профессионального AI-workflow. Без знания кода.
          </p>

          {/* Info bar */}
          <div className="mt-10 inline-flex flex-wrap gap-px rounded-2xl overflow-hidden">
            <div className="glass-card flex items-center gap-6 sm:gap-8 px-6 py-3 rounded-2xl">
              {[
                '2 курса',
                'Бесплатно',
                'На русском',
                'Для новичков',
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm sm:text-base text-[#9CA3AF] whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-[#0A0A0A] font-semibold text-lg hover:bg-emerald-400 transition-colors duration-200"
            >
              Начать сейчас
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-[#9CA3AF]">
            by{' '}
            <a
              href="https://kkts.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              kkts.ai
            </a>
          </p>
        </div>
      </section>

      {/* ===== WHAT IS VIBECODING ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
            Что такое вайбкодинг?
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-[#9CA3AF] leading-relaxed">
            Вайбкодинг — это новый подход к созданию сайтов.
            Ты описываешь что хочешь, а AI пишет код за тебя.
            Никаких курсов по программированию, никакого Stack
            Overflow. Просто диалог с AI — и сайт готов.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" />
                  </svg>
                ),
                title: 'Опиши — не кодируй',
                text: 'Скажи AI что хочешь — получи готовый код',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
                title: 'За вечер',
                text: 'Первый сайт можно создать и задеплоить за несколько часов',
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                    <line x1="14" y1="4" x2="10" y2="20" />
                  </svg>
                ),
                title: 'Как профессионалы',
                text: 'Те же инструменты, что используют разработчики',
              },
            ].map((card) => (
              <div key={card.title} className="relative rounded-2xl">
                <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
                <div className="glass-card relative rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                  {card.icon}
                  <h3 className="mt-4 font-mono font-bold text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[#9CA3AF] leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 sm:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
            Как это работает
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-[#9CA3AF] leading-relaxed">
            Три шага — и ты уже создаёшь.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: '01',
                title: 'Установи AI-редактор',
                text: 'Скачай Cursor — это VS Code с AI внутри. Мы проведём через установку.',
              },
              {
                step: '02',
                title: 'Скажи что хочешь',
                text: 'Опиши AI свой сайт: тему, цвета, разделы. Он создаст первую версию.',
              },
              {
                step: '03',
                title: 'Итерируй и деплой',
                text: 'Правь через диалог, пока не понравится. Потом — в интернет.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <span className="font-mono text-5xl font-bold text-emerald-500/20">
                  {item.step}
                </span>
                <h3 className="mt-2 font-mono font-bold text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-[#9CA3AF] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES ===== */}
      <section id="courses" className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
            Два курса — один путь
          </h2>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Course 1 */}
            <div className="relative rounded-2xl">
              <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
              <div className="glass-card relative rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
                <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Часть 1
                </span>
                <h3 className="mt-5 font-mono font-bold text-2xl">
                  От нуля до деплоя
                </h3>
                <p className="mt-3 text-[#9CA3AF] leading-relaxed">
                  Проведём тебя через все этапы: от установки
                  инструментов до работающего сайта в интернете
                  с доменом и HTTPS.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[#9CA3AF]">
                  {[
                    'Установка Node.js и Cursor',
                    'Создание сайта на Next.js',
                    'Git и GitHub',
                    'Упаковка в Docker',
                    'Покупка домена и VPS',
                    'Деплой с HTTPS',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5" aria-hidden="true">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-[#9CA3AF]">
                  ~4 часа
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href="https://github.com/slip-pro/vibecoding-intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-[#0A0A0A] font-semibold hover:bg-emerald-400 transition-colors duration-200"
                  >
                    Открыть на GitHub
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="relative rounded-2xl">
              {/* Fuchsia decorative blob */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-fuchsia-500/15 animate-pulse-slow"
                style={{ filter: 'blur(60px)' }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
              <div className="glass-card relative rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 flex flex-col">
                <span className="inline-block self-start px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
                  Часть 2
                </span>
                <h3 className="mt-5 font-mono font-bold text-2xl">
                  Профессиональный AI-workflow
                </h3>
                <p className="mt-3 text-[#9CA3AF] leading-relaxed">
                  Научим работать с AI системно: CLAUDE.md,
                  бэклог, спринты, субагенты, MCP и хуки.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[#9CA3AF]">
                  {[
                    'CLAUDE.md — память AI для проекта',
                    'Бэклог и планирование',
                    'Скиллы: /sprint, /close, /plan',
                    'Субагенты: @developer, @auditor',
                    'MCP — инструменты для AI',
                    'Хуки — автоматические проверки',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-fuchsia-400 mt-0.5" aria-hidden="true">
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-[#9CA3AF]">
                  ~3 часа
                </p>
                <div className="mt-auto pt-8">
                  <a
                    href="https://github.com/slip-pro/vibecoding-workflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-[#0A0A0A] font-semibold hover:bg-emerald-400 transition-colors duration-200"
                  >
                    Открыть на GitHub
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROADMAP ===== */}
      <section id="roadmap" className="py-20 sm:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
            Программа
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-[#9CA3AF] leading-relaxed">
            14 фаз — от первого знакомства до профессионального workflow.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-2">
            {/* Part 1 phases */}
            <div>
              <h3 className="font-mono font-bold text-lg text-emerald-400 mb-6">
                Часть 1: От нуля до деплоя
              </h3>
              <div className="space-y-0">
                {[
                  {
                    n: 0,
                    title: 'Знакомство',
                    motto: 'Вайбкодинг — это диалог, не монолог',
                  },
                  {
                    n: 1,
                    title: 'Node.js',
                    motto: 'Мотор для сайтов',
                  },
                  {
                    n: 2,
                    title: 'Next.js',
                    motto: 'Фундамент дома',
                  },
                  {
                    n: 3,
                    title: 'Tailwind + AI',
                    motto: 'Краска, AI — художник',
                  },
                  {
                    n: 4,
                    title: 'Git и GitHub',
                    motto: 'Машина времени для кода',
                  },
                  {
                    n: 5,
                    title: 'Docker',
                    motto: 'Чемодан для переезда',
                  },
                  {
                    n: 6,
                    title: 'Домен и VPS',
                    motto: 'Твой компьютер в облаке',
                  },
                  {
                    n: 7,
                    title: 'Деплой',
                    motto: 'Печать на документе',
                  },
                ].map((phase, i, arr) => (
                  <div key={phase.n} className="flex gap-4">
                    {/* Timeline column */}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-emerald-500/50 bg-emerald-500/10 flex items-center justify-center text-xs font-mono font-bold text-emerald-400">
                        {phase.n}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-px flex-1 bg-emerald-500/20 min-h-[2rem]" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-6">
                      <p className="font-mono font-bold text-sm">
                        {phase.title}
                      </p>
                      <p className="text-sm text-[#9CA3AF]">
                        {phase.motto}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Part 2 phases */}
            <div>
              <h3 className="font-mono font-bold text-lg text-fuchsia-400 mb-6">
                Часть 2: AI-workflow
              </h3>
              <div className="space-y-0">
                {[
                  {
                    n: 8,
                    title: 'CLAUDE.md',
                    motto: 'Память, которая не забывает',
                  },
                  {
                    n: 9,
                    title: 'Бэклог',
                    motto: 'Мечта, записанная на бумаге',
                  },
                  {
                    n: 10,
                    title: 'Скиллы',
                    motto: 'Марафон из маленьких шагов',
                  },
                  {
                    n: 11,
                    title: 'Субагенты',
                    motto: 'Каждому по специальности',
                  },
                  {
                    n: 12,
                    title: 'MCP',
                    motto: 'Руки для AI',
                  },
                  {
                    n: 13,
                    title: 'Хуки',
                    motto: 'AI, который себя проверяет',
                  },
                ].map((phase, i, arr) => (
                  <div key={phase.n} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full border-2 border-fuchsia-500/50 bg-fuchsia-500/10 flex items-center justify-center text-xs font-mono font-bold text-fuchsia-400">
                        {phase.n}
                      </div>
                      {i < arr.length - 1 && (
                        <div className="w-px flex-1 bg-fuchsia-500/20 min-h-[2rem]" />
                      )}
                    </div>
                    <div className="pb-6">
                      <p className="font-mono font-bold text-sm">
                        {phase.title}
                      </p>
                      <p className="text-sm text-[#9CA3AF]">
                        {phase.motto}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOU GET ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
            Что ты получишь
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                ),
                title: 'Работающий сайт',
                text: 'С доменом, HTTPS и Docker',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M12 2a4 4 0 0 1 4 4c0 1.95-2 4-4 4S8 7.95 8 6a4 4 0 0 1 4-4z" />
                    <path d="M18 14a4 4 0 0 1 4 4c0 1.95-2 4-4 4s-4-2.05-4-4a4 4 0 0 1 4-4z" />
                    <path d="M6 14a4 4 0 0 1 4 4c0 1.95-2 4-4 4s-4-2.05-4-4a4 4 0 0 1 4-4z" />
                    <line x1="12" y1="10" x2="18" y2="14" />
                    <line x1="12" y1="10" x2="6" y2="14" />
                  </svg>
                ),
                title: 'AI как партнёр',
                text: 'Научишься ставить задачи и получать результат',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M9 21V9" />
                  </svg>
                ),
                title: 'Система работы',
                text: 'Бэклог, спринты, качество — как в команде',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                ),
                title: 'Настроенные инструменты',
                text: 'Claude Code, MCP, хуки готовы к работе',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                title: 'Понимание стека',
                text: 'Next.js, Docker, nginx, Git — не магия',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                ),
                title: 'Процесс, а не разовый результат',
                text: 'Умеешь дорабатывать и улучшать',
              },
            ].map((card) => (
              <div key={card.title} className="relative rounded-2xl">
                <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
                <div className="glass-card relative rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                  {card.icon}
                  <h3 className="mt-3 font-mono font-bold text-base">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#9CA3AF] leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== AUTHORS ===== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
            Авторы
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-[#9CA3AF] leading-relaxed">
            Курс создан командой Кактус.AI — мы помогаем
            компаниям внедрять AI: обучаем команды, запускаем
            пилоты и разворачиваем безопасную AI-инфраструктуру.
          </p>

          <div className="mt-10 max-w-xl">
            <div className="relative rounded-2xl">
              <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
              <div className="glass-card relative rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.svg"
                    alt="kkts.ai"
                    className="h-10 w-auto"
                  />
                  <h3 className="font-mono font-bold text-xl text-emerald-500">
                    kkts.ai
                  </h3>
                </div>
                <p className="mt-3 text-[#9CA3AF] leading-relaxed">
                  Подразделение ScrumTrek по внедрению AI.
                  18 лет трансформаций, 1 300+ обученных
                  специалистов, 50+ компаний на сопровождении.
                </p>
                <div className="mt-4">
                  <a
                    href="https://kkts.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                  >
                    kkts.ai
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR TEAMS ===== */}
      <section className="py-20 sm:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="glass-card relative rounded-2xl p-8 sm:p-12 hover:border-fuchsia-500/50 transition-all duration-300">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
                Для организаций
              </span>
              <h2 className="mt-5 font-mono font-bold text-3xl sm:text-4xl tracking-tight">
                Фабрика вайб-кодинга
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-[#9CA3AF] leading-relaxed">
                Двухдневный хакатон + 4-8 недель сопровождения.
                Ваши менеджеры и продакты научатся создавать
                IT-продукты с помощью AI-агентов — без навыков
                программирования.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[#9CA3AF]">
                {[
                  'Рабочие прототипы ко второму дню',
                  'Снижение зависимости от подрядчиков',
                  'Продакты, PM, предприниматели, CTO',
                  'Очно или онлайн',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-fuchsia-400 mt-0.5" aria-hidden="true">
                      &#10003;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href="https://kkts.ai/workshops/vibe-coding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-fuchsia-600 text-white font-semibold text-lg hover:bg-fuchsia-500 transition-colors duration-200"
                >
                  Узнать подробнее
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-20 sm:py-28 border-t border-white/10 overflow-hidden">
        {/* Decorative blob */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-500/10 animate-pulse-slow"
          style={{ filter: 'blur(100px)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <h2 className="font-mono font-bold text-3xl sm:text-4xl tracking-tight">
            Готов начать?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-[#9CA3AF] leading-relaxed">
            Часть 1 занимает несколько часов. Начни сегодня
            вечером — завтра у тебя будет свой сайт в интернете.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/slip-pro/vibecoding-intro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-[#0A0A0A] font-semibold text-lg hover:bg-emerald-400 transition-colors duration-200"
            >
              Начать с Части 1
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="https://github.com/slip-pro/vibecoding-workflow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-[#F9FAFB] font-semibold text-lg hover:bg-white/5 transition-colors duration-200"
            >
              Часть 2
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-[#9CA3AF]">
            Бесплатно &middot; На русском &middot; Для полных
            новичков
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#9CA3AF]">
          <span>&copy; {new Date().getFullYear()} kkts.ai</span>
          <a
            href="https://kkts.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F9FAFB] transition-colors"
          >
            kkts.ai
          </a>
        </div>
      </footer>
    </main>
  );
}
