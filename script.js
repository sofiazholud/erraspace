// Поточна мова — зчитуємо збережену або UA за замовчуванням
let currentLang = localStorage.getItem('erraLang') || 'ua';

// Переклади
const translations = {
  ua: {
    subtitle: "Простір, де тіло знаходить опору, а розум — тишу.",
    socialTitle: "Ми в соцмережах",
    directionsTitle: "Напрямки",
    contactsTitle: "Контакти",
    contactsSubtitle: "Студія йоги та фітнесу у Вишгороді та Міжріччі",
    footerText: "© 2026 Erra Studio. Всі права захищені.",
    phoneLabel1: "Адміністратор:",
    phoneLabel2: "Адміністратор:",
    bannerText: "🎁 Пробне заняття — 250 грн.",
    bannerSubtext: "Запишись і переконайся особисто.",
    "hero-location": "Вишгород · Міжріччя",
    "hero-tagline": "Не знаєш з чого почати?\nМи підкажемо.",
    "hero-sub": "Йога, пілатес і фітнес поруч із домом — м'яко, безпечно, без «фітнес-агресії».",
    "hero-main-btn": "Допоможіть мені обрати",
    "hero-secondary-link": "або переглянути всі напрямки",
    "trust-1": "🎁 Пробне заняття — 250 грн",
    "trust-2": "Підійде для новачків",
    "trust-3": "Безпечне навантаження",
    "nav-home": "Головна",
    "nav-classes": "Напрямки",
    "nav-locations": "Локації",
    "nav-about": "Про нас",
    "dir-fly-yoga": "Флай Йога",
    "dir-ishvara-yoga": "Ішвара Йога",
    "dir-iyengar-yoga": "Йога Айенгара",
    "dir-pilates": "Пілатес",
    "dir-functional-training": "Функціональні тренування",
    "dir-fly-kids": "Флай Кідс",
    "dir-pregnancy-yoga": "Йога для вагітних",
    "dir-adho-yoga": "Адхо-йога",
    "dir-private-lesson": "Індивідуальні тренування",
    "cta-button": "Записатися на заняття",
    "address-1": "📍 Вишгород, пр. Шевченка 6А",
    "address-2": "📍 КМ Міжріччя, вул. Фісташкова 60",
    "nav-btn-1": "Навігація",
    "nav-btn-2": "Навігація",
    "btn-schedule": "Розклад",
    "btn-price": "Абонементи",

    // Блок "для кого"
    "for-whom-title": "Обери заняття під свій стан",
    "for-whom-subtitle": "У ERRA SPACE ми допомагаємо знайти формат, у якому тілу безпечно, а розуму — спокійно.",
    "fw-1-title": "Я новачок і хвилююся",
    "fw-1-text": "М'які заняття з увагою до тіла, дихання і опори. Без гонитви й «треба через біль».",
    "fw-1-rec": "Рекомендуємо: Ішвара-йога, Йога Айенгара",
    "fw-1-btn": "Записатися на пробне заняття",
    "fw-2-title": "Болить спина / сидяча робота",
    "fw-2-text": "Знімаємо напругу, розвантажуємо хребет, повертаємо легкість руху.",
    "fw-2-rec": "Рекомендуємо: Флай-йога, Пілатес",
    "fw-2-btn": "Записатися",
    "fw-3-title": "Хочу навантаження і тонус",
    "fw-3-text": "Динамічні, силові заняття без хаосу — з відчуттям тіла і контролю.",
    "fw-3-rec": "Рекомендуємо: Адхо-йога, Функціональні тренування",
    "fw-3-btn": "Записатися",
    "fw-4-title": "Вагітність",
    "fw-4-text": "Безпечний простір і уважний супровід на кожному етапі.",
    "fw-4-rec": "Рекомендуємо: Йога для вагітних",
    "fw-4-btn": "Записатися",
    "for-whom-hint": "Ми підкажемо формат, якщо сумніваєтесь — просто напишіть нам.",

    // Завершальний блок
    "closing-text": "Ти не маєш бути готовою.",
    "closing-subtext": "Достатньо просто прийти.",
    "closing-btn": "Записатися на пробне заняття",

    // Локації
    "loc-vysh-name": "ERRA SPACE Вишгород",
    "loc-mr-name": "ERRA SPACE Міжріччя",
    "loc-vysh-instagram": "📸 Instagram: @erraspace.ua",
    "loc-mr-instagram": "📸 Instagram: @erraspace_mr",
    "loc-btn-schedule-1": "Розклад",
    "loc-btn-signup-1": "Записатися",
    "loc-btn-schedule-2": "Розклад",
    "loc-btn-signup-2": "Записатися",

    // Про нас
    "about-mission-title": "Наша місія",
    "about-mission-subtitle": "Не просто студія — простір турботи про людину",
    "about-mission-text": "ERRA SPACE — це місце, де кожне заняття стає актом турботи про себе. Ми поєднуємо рух, усвідомленість і спокій у форматі, який органічно вписується в повсякденне життя — поруч із домом, без зайвого шуму й «фітнес-агресії».",
    "about-values-title": "Наші цінності",
    "val-1-title": "Спокій і підтримка",
    "val-1-text": "Ми створюємо середовище, де можна бути собою — без порівнянь, без тиску, без оцінок. Тут ваш темп є правильним темпом.",
    "val-2-title": "Професійність",
    "val-2-text": "Досвідчені тренери, коректна робота з тілом і безпечне навантаження — основа кожного заняття. Результат без шкоди для здоров'я.",
    "val-3-title": "Ком'юніті",
    "val-3-text": "Ми — не масмаркет. Ми — спільнота людей, які обирають свідомий рух. Тут знайомляться, підтримують і надихають одне одного.",
    "val-4-title": "Тіло + внутрішній стан",
    "val-4-text": "Фізична форма та внутрішній баланс — для нас це єдине ціле. Кожне заняття працює з обома вимірами одночасно.",
    "about-who-title": "Для кого ми",
    "about-who-subtitle": "ERRA SPACE відкритий для всіх, хто шукає свідомий рух",
    "who-1-title": "Жінки та чоловіки",
    "who-1-text": "Для тих, хто шукає м'який, усвідомлений підхід до фізичної активності — незалежно від рівня підготовки.",
    "who-2-title": "Вагітні",
    "who-2-text": "Спеціальні програми для підтримки тіла та емоційного стану на кожному етапі вагітності.",
    "who-3-title": "Діти",
    "who-3-text": "Fly Kids — заняття, що розвивають гнучкість, координацію та любов до руху з дитинства.",
    "who-4-title": "Початківці та досвідчені",
    "who-4-text": "Ми зустрічаємо кожного там, де він є зараз. Без вимог — лише бажання рухатися вперед.",
    "cta-button-about": "Записатися на заняття",
    "about-btn-classes": "Переглянути напрямки",

    // Напрямки (classes.html)
    "classes-yoga-title": "🧘 Йога",
    "classes-yoga-subtitle": "М'який, свідомий підхід до тіла та внутрішнього стану",
    "c-fly-yoga-title": "Флай Йога",
    "c-fly-yoga-desc": "Практика у спеціальних гамаках, що дарує відчуття польоту та легкості. Допомагає зняти напругу з хребта, розвиває гнучкість і додає енергії. Ідеально для тих, хто хоче поєднати рух із глибоким розслабленням.",
    "c-iyengar-yoga-title": "Йога Айенгара",
    "c-iyengar-yoga-desc": "Методика, що акцентує увагу на точності виконання асан і правильному вирівнюванні тіла. Використання пропсів робить практику доступною для будь-якого рівня підготовки.",
    "c-ishvara-yoga-title": "Ішвара Йога",
    "c-ishvara-yoga-desc": "Напрям хатха-йоги з увагою до внутрішніх принципів роботи з тілом. Практика пояснює причини труднощів в асанах та допомагає зібрати тіло в цілісність.",
    "c-adho-yoga-title": "Адхо-йога",
    "c-adho-yoga-desc": "Поєднання гнучкості та сили, статики й динаміки, дихальних і медитативних технік. Базується на науковому підході до фізіології — кожен результат зрозумілий і відчутний.",
    "c-pregnancy-yoga-title": "Йога для вагітних",
    "c-pregnancy-yoga-desc": "М'які практики для підтримки фізичного стану та емоційного балансу майбутніх мам. Вправи адаптовані для різних термінів вагітності та допомагають підготуватися до пологів.",
    "classes-fitness-title": "💪 Фітнес",
    "classes-fitness-subtitle": "Сила, витривалість і баланс — без «фітнес-агресії»",
    "c-pilates-title": "Пілатес",
    "c-pilates-desc": "Система вправ для зміцнення м'язів, розвитку гнучкості та формування здорової постави. Покращує координацію та дарує відчуття легкості у рухах.",
    "c-functional-title": "Функціональні тренування",
    "c-functional-desc": "Комплекс вправ для розвитку сили, витривалості та мобільності. Готує тіло до щоденних навантажень, покращує фізичну форму та підвищує загальну працездатність.",
    "c-private-title": "Індивідуальні тренування",
    "c-private-desc": "Персональний формат, що враховує ваші цілі, стан здоров'я та рівень підготовки. Тренер будує програму спеціально під вас — без шаблонів, лише те, що потрібно саме вашому тілу.",
    "classes-kids-title": "🧒 Для дітей",
    "classes-kids-subtitle": "Рух, радість і впевненість у собі з раннього віку",
    "c-fly-kids-title": "Флай Кідс",
    "c-fly-kids-desc": "Веселі та безпечні заняття у гамаках для дітей. Розвивають гнучкість, координацію та впевненість у собі, даруючи малюкам радість руху й нові емоції.",

    "modal-title-fly-yoga": "Флай Йога",
    "modal-desc-fly-yoga": "Практика у спеціальних гамаках, що дарує відчуття польоту та легкості. Вона допомагає зняти напругу з хребта, розвиває гнучкість і додає енергії. Ідеально підходить для тих, хто хоче поєднати фізичну активність із глибоким розслабленням.",
    "modal-title-ishvara-yoga": "Ішвара Йога",
    "modal-desc-ishvara-yoga": "Це напрям хатха-йоги, що вирізняється увагою до внутрішніх принципів роботи з тілом. Вони пояснюють, чому певні асани не виходять, де помилка і як її виправити. Практика допомагає зібрати тіло в цілісність, узгодити роботу м'язів і поступово підвищувати якість виконання асан.",
    "modal-title-iyengar-yoga": "Йога Айенгара",
    "modal-desc-iyengar-yoga": "Методика, що акцентує увагу на точності виконання асан і правильному вирівнюванні тіла. Використання допоміжних матеріалів робить практику доступною для всіх рівнів та сприяє поступовому й безпечному розвитку.",
    "modal-title-pilates": "Пілатес",
    "modal-desc-pilates": "Система вправ для зміцнення м'язів, розвитку гнучкості та формування здорової постави. Пілатес допомагає відчути контроль над тілом, покращує координацію та дарує відчуття легкості у рухах.",
    "modal-title-functional-training": "Функціональні тренування",
    "modal-desc-functional-training": "Комплекс вправ, спрямований на розвиток сили, витривалості та мобільності. Заняття готують тіло до щоденних навантажень, покращують фізичну форму та підвищують загальну працездатність.",
    "modal-title-fly-kids": "Флай Кідс",
    "modal-desc-fly-kids": "Веселі та безпечні заняття у гамаках для дітей. Вони розвивають гнучкість, координацію та впевненість у собі, даруючи малюкам радість руху й нові емоції.",
    "modal-title-pregnancy-yoga": "Йога для вагітних",
    "modal-desc-pregnancy-yoga": "М'які практики, що підтримують фізичний стан і емоційний баланс майбутніх мам. Вправи адаптовані для різних етапів вагітності та допомагають підготувати тіло до пологів.",
    "modal-title-adho-yoga": "Адхо-йога",
    "modal-desc-adho-yoga": "Практика, яка поєднує гнучкість і силову роботу, статику й динаміку, витривалість і баланс, а також дихальні та медитативні техніки. ADHO yoga базується на науковому підході до фізіології практики, щоб кожен процес і результат були зрозумілі й відчутні.",
    "modal-title-private-lesson": "Індивідуальні тренування",
    "modal-desc-private-lesson": "Персональний формат тренування, який враховує ваші цілі, стан здоров'я та рівень підготовки. Тренер будує програму спеціально під вас — без шаблонів, лише те, що потрібно саме вашому тілу."
  },
  en: {
    subtitle: "A space where the body finds support, and the mind finds stillness.",
    socialTitle: "We are on social media",
    directionsTitle: "Classes",
    contactsTitle: "Contacts",
    contactsSubtitle: "Yoga and fitness studio in Vyshhorod and Mizhrichchia",
    footerText: "© 2026 Erra Studio. All rights reserved.",
    phoneLabel1: "Administrator:",
    phoneLabel2: "Administrator:",
    bannerText: "🎁 Trial class — 250 UAH.",
    bannerSubtext: "Sign up and see for yourself.",
    "hero-location": "Vyshhorod · Mizhrichchia",
    "hero-tagline": "Not sure where to start?\nWe'll help you choose.",
    "hero-sub": "Yoga, pilates and fitness close to home — gentle, safe, without 'fitness aggression'.",
    "hero-main-btn": "Help me choose",
    "hero-secondary-link": "or browse all classes",
    "trust-1": "🎁 Trial class — 250 UAH",
    "trust-2": "Perfect for beginners",
    "trust-3": "Safe for your body",
    "nav-home": "Home",
    "nav-classes": "Classes",
    "nav-locations": "Locations",
    "nav-about": "About",
    "dir-fly-yoga": "Fly Yoga",
    "dir-ishvara-yoga": "Ishvara Yoga",
    "dir-iyengar-yoga": "Iyengar Yoga",
    "dir-pilates": "Pilates",
    "dir-functional-training": "Functional Training",
    "dir-fly-kids": "Fly Kids",
    "dir-pregnancy-yoga": "Pregnancy Yoga",
    "dir-adho-yoga": "Adho Yoga",
    "dir-private-lesson": "Private Lesson",
    "cta-button": "Book a class",
    "address-1": "📍 Vyshhorod, Shevchenka Ave 6A",
    "address-2": "📍 KM Mizhrichchia, Fistashkova St 60",
    "nav-btn-1": "Navigation",
    "nav-btn-2": "Navigation",
    "btn-schedule": "Schedule",
    "btn-price": "Subscriptions",

    // For whom block
    "for-whom-title": "Choose a class for your state of mind",
    "for-whom-subtitle": "At ERRA SPACE we help you find a format where your body feels safe and your mind — calm.",
    "fw-1-title": "I'm a beginner and I'm nervous",
    "fw-1-text": "Gentle classes with attention to body, breath and grounding. No rush, no 'push through the pain'.",
    "fw-1-rec": "We recommend: Ishvara Yoga, Iyengar Yoga",
    "fw-1-btn": "Book a trial class",
    "fw-2-title": "Back pain / desk job",
    "fw-2-text": "We release tension, decompress the spine and restore ease of movement.",
    "fw-2-rec": "We recommend: Fly Yoga, Pilates",
    "fw-2-btn": "Book a class",
    "fw-3-title": "I want a workout and tone",
    "fw-3-text": "Dynamic, strength-focused classes without chaos — with body awareness and control.",
    "fw-3-rec": "We recommend: Adho Yoga, Functional Training",
    "fw-3-btn": "Book a class",
    "fw-4-title": "Pregnancy",
    "fw-4-text": "A safe space with attentive support at every stage.",
    "fw-4-rec": "We recommend: Pregnancy Yoga",
    "fw-4-btn": "Book a class",
    "for-whom-hint": "Not sure which format is right for you? Just reach out — we'll help you choose.",

    // Closing block
    "closing-text": "You don't have to be ready.",
    "closing-subtext": "Just come.",
    "closing-btn": "Book a trial class",

    // Locations
    "loc-vysh-name": "ERRA SPACE Vyshhorod",
    "loc-mr-name": "ERRA SPACE Mizhrichchia",
    "loc-vysh-instagram": "📸 Instagram: @erraspace.ua",
    "loc-mr-instagram": "📸 Instagram: @erraspace_mr",
    "loc-btn-schedule-1": "Schedule",
    "loc-btn-signup-1": "Book a class",
    "loc-btn-schedule-2": "Schedule",
    "loc-btn-signup-2": "Book a class",

    // About
    "about-mission-title": "Our mission",
    "about-mission-subtitle": "More than a studio — a space of care for people",
    "about-mission-text": "ERRA SPACE is a place where every class becomes an act of self-care. We combine movement, mindfulness and calm in a format that fits naturally into everyday life — close to home, without noise or 'fitness aggression'.",
    "about-values-title": "Our values",
    "val-1-title": "Calm and support",
    "val-1-text": "We create an environment where you can be yourself — without comparisons, pressure or judgement. Your pace is the right pace.",
    "val-2-title": "Professionalism",
    "val-2-text": "Experienced instructors, correct body work and safe load levels are the foundation of every class. Results without harm to your health.",
    "val-3-title": "Community",
    "val-3-text": "We are not a mass-market gym. We are a community of people who choose conscious movement. A place to connect, support and inspire each other.",
    "val-4-title": "Body + inner state",
    "val-4-text": "Physical fitness and inner balance are one and the same for us. Every class works on both dimensions at once.",
    "about-who-title": "Who we are for",
    "about-who-subtitle": "ERRA SPACE is open to everyone seeking conscious movement",
    "who-1-title": "Women and men",
    "who-1-text": "For those seeking a gentle, mindful approach to physical activity — regardless of fitness level.",
    "who-2-title": "Pregnant women",
    "who-2-text": "Special programmes to support the body and emotional wellbeing at every stage of pregnancy.",
    "who-3-title": "Children",
    "who-3-text": "Fly Kids — classes that develop flexibility, coordination and a love of movement from an early age.",
    "who-4-title": "Beginners and experienced",
    "who-4-text": "We meet everyone where they are right now. No requirements — just the desire to move forward.",
    "cta-button-about": "Book a class",
    "about-btn-classes": "View classes",

    // Classes page
    "classes-yoga-title": "🧘 Yoga",
    "classes-yoga-subtitle": "A gentle, mindful approach to body and inner state",
    "c-fly-yoga-title": "Fly Yoga",
    "c-fly-yoga-desc": "Practice in special hammocks that gives a feeling of flight and lightness. Helps relieve spinal tension, develops flexibility and boosts energy. Ideal for combining physical activity with deep relaxation.",
    "c-iyengar-yoga-title": "Iyengar Yoga",
    "c-iyengar-yoga-desc": "A method that emphasizes precision in asana execution and correct body alignment. Use of props makes the practice accessible to any level.",
    "c-ishvara-yoga-title": "Ishvara Yoga",
    "c-ishvara-yoga-desc": "A Hatha yoga approach with focus on internal principles of body work. The practice explains the causes of difficulty in poses and helps integrate the body into wholeness.",
    "c-adho-yoga-title": "Adho Yoga",
    "c-adho-yoga-desc": "A combination of flexibility and strength, static and dynamic elements, breathing and meditative techniques. Based on a scientific approach to physiology — every result is clear and felt.",
    "c-pregnancy-yoga-title": "Pregnancy Yoga",
    "c-pregnancy-yoga-desc": "Gentle practices to support the physical condition and emotional balance of expectant mothers. Exercises are adapted for different pregnancy stages and help prepare the body for childbirth.",
    "classes-fitness-title": "💪 Fitness",
    "classes-fitness-subtitle": "Strength, endurance and balance — without 'fitness aggression'",
    "c-pilates-title": "Pilates",
    "c-pilates-desc": "A system of exercises to strengthen muscles, increase flexibility and develop healthy posture. Improves coordination and provides a sense of ease in movement.",
    "c-functional-title": "Functional Training",
    "c-functional-desc": "A set of exercises for strength, endurance and mobility. Prepares the body for daily demands, improves fitness and increases overall performance.",
    "c-private-title": "Private Lessons",
    "c-private-desc": "A personalized training format tailored to your goals, health and fitness level. Your trainer builds a programme specifically for you — no templates, only what your body truly needs.",
    "classes-kids-title": "🧒 For children",
    "classes-kids-subtitle": "Movement, joy and confidence from an early age",
    "c-fly-kids-title": "Fly Kids",
    "c-fly-kids-desc": "Fun and safe hammock classes for children. They develop flexibility, coordination and confidence, giving kids joy of movement and new experiences.",

    "modal-title-fly-yoga": "Fly Yoga",
    "modal-desc-fly-yoga": "Practice in special hammocks that gives a feeling of flight and lightness. It helps relieve spinal tension, develops flexibility and boosts energy. Ideal for those who want to combine physical activity with deep relaxation.",
    "modal-title-ishvara-yoga": "Ishvara Yoga",
    "modal-desc-ishvara-yoga": "A Hatha yoga approach distinguished by internal principles of body work. These principles explain why certain poses fail, where the mistake is and how to correct it. The practice helps integrate the body, coordinate muscle work and gradually improve posture and alignment.",
    "modal-title-iyengar-yoga": "Iyengar Yoga",
    "modal-desc-iyengar-yoga": "A method that emphasizes precision in asana execution and correct body alignment. Use of props makes the practice accessible to all levels and supports gradual, safe progress.",
    "modal-title-pilates": "Pilates",
    "modal-desc-pilates": "A system of exercises to strengthen muscles, increase flexibility and develop healthy posture. Pilates improves body control, coordination and provides a sense of ease in movement.",
    "modal-title-functional-training": "Functional Training",
    "modal-desc-functional-training": "A set of exercises aimed at building strength, endurance and mobility. These sessions prepare the body for daily demands, improve fitness and increase overall performance.",
    "modal-title-fly-kids": "Fly Kids",
    "modal-desc-fly-kids": "Fun and safe hammock classes for children. They develop flexibility, coordination and confidence, giving kids joy of movement and new experiences.",
    "modal-title-pregnancy-yoga": "Pregnancy Yoga",
    "modal-desc-pregnancy-yoga": "Gentle practices that support the physical condition and emotional balance of expectant mothers. Exercises are adapted for different pregnancy stages and help prepare the body for childbirth.",
    "modal-title-adho-yoga": "Adho Yoga",
    "modal-desc-adho-yoga": "A practice combining flexibility and strength work, static and dynamic elements, endurance and balance, along with breathing and meditative techniques. ADHO yoga is grounded in scientific understanding of physiological processes during practice, making outcomes clear and measurable.",
    "modal-title-private-lesson": "Private Lesson",
    "modal-desc-private-lesson": "A personalized training format tailored to your goals, health condition and fitness level. Your trainer builds a program specifically for you — no templates, only what your body truly needs."
  }
};

// Функція перемикання мови
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('erraLang', lang);

  const dict = translations[lang] || {};

  // Універсальний цикл — для всіх ключів у словнику
  for (const key in dict) {
    const el = document.getElementById(key);
    if (el) {
      el.textContent = dict[key];
    }
  }

  // Ручні винятки для camelCase ключів
  const safeGet = id => document.getElementById(id);
  if (safeGet("subtitle"))          safeGet("subtitle").textContent          = dict.subtitle || "";
  if (safeGet("social-title"))      safeGet("social-title").textContent      = dict.socialTitle || "";
  if (safeGet("directions-title"))  safeGet("directions-title").textContent  = dict.directionsTitle || "";
  if (safeGet("contacts-title"))    safeGet("contacts-title").textContent    = dict.contactsTitle || "";
  if (safeGet("contacts-subtitle")) safeGet("contacts-subtitle").textContent = dict.contactsSubtitle || "";
  if (safeGet("footer-text"))       safeGet("footer-text").textContent       = dict.footerText || "";
  if (safeGet("phone-label-1"))     safeGet("phone-label-1").textContent     = dict.phoneLabel1 || "";
  if (safeGet("phone-label-2"))     safeGet("phone-label-2").textContent     = dict.phoneLabel2 || "";
  if (safeGet("banner-text"))       safeGet("banner-text").textContent       = dict.bannerText || "";
  if (safeGet("banner-subtext"))    safeGet("banner-subtext").textContent    = dict.bannerSubtext || "";

  // hero-tagline має перенос рядка
  if (safeGet("hero-tagline") && dict["hero-tagline"]) {
    safeGet("hero-tagline").innerHTML = dict["hero-tagline"].replace("\n", "<br>");
  }
}

// Відкриття модального вікна
function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;

  const dict = translations[currentLang] || {};

  const titleEl = document.getElementById(`modal-title-${id}`);
  const descEl  = document.getElementById(`modal-desc-${id}`);

  if (titleEl && dict[`modal-title-${id}`]) titleEl.textContent = dict[`modal-title-${id}`];
  if (descEl  && dict[`modal-desc-${id}`])  descEl.textContent  = dict[`modal-desc-${id}`];

  modal.classList.add("show");
  modal.classList.remove("hide");
}

// Закриття модального вікна
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("hide");
    setTimeout(() => {
      modal.classList.remove("show");
    }, 300);
  }
}

// Закриття при кліку на фон
window.onclick = function(event) {
  const modals = document.getElementsByClassName("modal");
  for (let i = 0; i < modals.length; i++) {
    if (event.target === modals[i]) {
      closeModal(modals[i].id);
    }
  }
};

// Закриття по Esc
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
      closeModal(modals[i].id);
    }
  }
});

// Застосувати збережену мову при завантаженні
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
