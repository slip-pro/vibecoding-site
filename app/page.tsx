export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F9FAFB]">
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
            Двухчастный курс: от нулевого опыта до задеплоенного
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
            by kkts.ai
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
                icon: '\u{1F4AC}',
                title: 'Опиши — не кодируй',
                text: 'Скажи AI что хочешь — получи готовый код',
              },
              {
                icon: '\u26A1',
                title: 'За вечер',
                text: 'Первый сайт можно создать и задеплоить за несколько часов',
              },
              {
                icon: '\u{1F680}',
                title: 'Как профессионалы',
                text: 'Те же инструменты, что используют разработчики',
              },
            ].map((card) => (
              <div key={card.title} className="relative rounded-2xl">
                <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
                <div className="glass-card relative rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                  <span
                    className="text-3xl"
                    role="img"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
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
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-[#0A0A0A] font-semibold hover:bg-emerald-400 transition-colors duration-200"
                  >
                    Открыть курс
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
                    'CLAUDE.md — память AI для твоего проекта',
                    'Бэклог и планирование',
                    'Скиллы: /sprint, /close, /plan',
                    'Субагенты: @developer, @auditor, @tester',
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
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-[#0A0A0A] font-semibold hover:bg-emerald-400 transition-colors duration-200"
                  >
                    Открыть курс
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
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
                icon: '\u{1F310}',
                title: 'Работающий сайт',
                text: 'С доменом, HTTPS и Docker',
              },
              {
                icon: '\u{1F916}',
                title: 'AI как партнёр',
                text: 'Научишься ставить задачи и получать результат',
              },
              {
                icon: '\u{1F4CB}',
                title: 'Система работы',
                text: 'Бэклог, спринты, качество — как в команде',
              },
              {
                icon: '\u{1F527}',
                title: 'Настроенные инструменты',
                text: 'Claude Code, MCP, хуки готовы к работе',
              },
              {
                icon: '\u{1F4A1}',
                title: 'Понимание стека',
                text: 'Next.js, Docker, nginx, Git — не магия',
              },
              {
                icon: '\u{1F3AF}',
                title: 'Процесс, а не разовый результат',
                text: 'Умеешь дорабатывать и улучшать',
              },
            ].map((card) => (
              <div key={card.title} className="relative rounded-2xl">
                <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
                <div className="glass-card relative rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                  <span
                    className="text-2xl"
                    role="img"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
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
            Курс создан командой kkts.ai — мы строим AI-системы
            и учим работать с AI продуктивно.
          </p>

          <div className="mt-10 max-w-xl">
            <div className="relative rounded-2xl">
              <div className="absolute inset-0 bg-grid opacity-30 rounded-2xl" />
              <div className="glass-card relative rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300">
                <h3 className="font-mono font-bold text-xl">
                  kkts.ai
                </h3>
                <p className="mt-3 text-[#9CA3AF] leading-relaxed">
                  Команда разработчиков и продакт-менеджеров,
                  которые используют AI в ежедневной работе
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-4 text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                >
                  kkts.ai
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

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-500 text-[#0A0A0A] font-semibold text-lg hover:bg-emerald-400 transition-colors duration-200"
            >
              Начать с Части 1
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-[#9CA3AF]">
            Бесплатно &middot; На русском &middot; Для полных
            новичков
          </p>
        </div>
      </section>
    </main>
  );
}
