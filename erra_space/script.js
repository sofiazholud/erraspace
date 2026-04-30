// Поточна мова
let currentLang = 'ua';

// Переклади
const translations = {
  ua: {
    subtitle: "Простір, який піклується не лише про фізичний, а і про внутрішній стан.",
    socialTitle: "Ми в соцмережах",
    directionsTitle: "Напрямки",
    contactsTitle: "Контакти",
    footerText: "© 2026 Erra Studio. Всі права захищені.",
    phoneLabel1: "Адміністратор:",
    phoneLabel2: "Адміністратор:",
    "dir-fly-yoga": "Флай Йога",
    "dir-ishvara-yoga": "Ішвара Йога",
    "dir-iyengar-yoga": "Йога Айенгара",
    "dir-pilates": "Пілатес",
    // "dir-fly-pilates": "Флай Пілатес",
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

    // Модальні заголовки та описи
    "modal-title-fly-yoga": "Флай Йога",
    "modal-desc-fly-yoga": "Практика у спеціальних гамаках, що дарує відчуття польоту та легкості. Вона допомагає зняти напругу з хребта, розвиває гнучкість і додає енергії. Ідеально підходить для тих, хто хоче поєднати фізичну активність із глибоким розслабленням.",
    "modal-title-ishvara-yoga": "Ішвара Йога",
    "modal-desc-ishvara-yoga": "Це напрям хатха-йоги, що вирізняється увагою до внутрішніх принципів роботи з тілом. Вони пояснюють, чому певні асани не виходять, де помилка і як її виправити. Практика допомагає зібрати тіло в цілісність, узгодити роботу м’язів і поступово підвищувати якість виконання асан.",
    "modal-title-iyengar-yoga": "Йога Айенгара",
    "modal-desc-iyengar-yoga": "Методика, що акцентує увагу на точності виконання асан і правильному вирівнюванні тіла. Використання допоміжних матеріалів робить практику доступною для всіх рівнів та сприяє поступовому й безпечному розвитку.",
    "modal-title-pilates": "Пілатес",
    "modal-desc-pilates": "Система вправ для зміцнення м’язів, розвитку гнучкості та формування здорової постави. Пілатес допомагає відчути контроль над тілом, покращує координацію та дарує відчуття легкості у рухах.",
    // "modal-title-fly-pilates": "Флай Пілатес",
    // "modal-desc-fly-pilates": "Поєднання класичного пілатесу з елементами роботи у гамаках. Це сучасний формат тренувань, який робить вправи більш динамічними, додає нові відчуття та допомагає швидше досягати результатів.",
    "modal-title-functional-training": "Функціональні тренування",
    "modal-desc-functional-training": "Комплекс вправ, спрямований на розвиток сили, витривалості та мобільності. Заняття готують тіло до щоденних навантажень, покращують фізичну форму та підвищують загальну працездатність.",
    "modal-title-fly-kids": "Флай Кідс",
    "modal-desc-fly-kids": "Веселі та безпечні заняття у гамаках для дітей. Вони розвивають гнучкість, координацію та впевненість у собі, даруючи малюкам радість руху й нові емоції.",
    "modal-title-pregnancy-yoga": "Йога для вагітних",
    "modal-desc-pregnancy-yoga": "М’які практики, що підтримують фізичний стан і емоційний баланс майбутніх мам. Вправи адаптовані для різних етапів вагітності та допомагають підготувати тіло до пологів.",
    "modal-title-adho-yoga": "Адхо-йога",
    "modal-desc-adho-yoga": "Практика, яка поєднує гнучкість і силову роботу, статику й динаміку, витривалість і баланс, а також дихальні та медитативні техніки. ADHO yoga базується на науковому підході до фізіології практики, щоб кожен процес і результат були зрозумілі й відчутні.",
    "modal-title-private-lesson": "Індивідуальні тренування",
    "modal-desc-private-lesson": "Персональний формат тренування, який враховує ваші потреби та рівень підготовки."
  },
  en: {
    subtitle: "A space that cares not only about the physical but also the inner state.",
    socialTitle: "We are on social media",
    directionsTitle: "Directions",
    contactsTitle: "Contacts",
    footerText: "© 2026 Erra Studio. All rights reserved.",
    phoneLabel1: "Administrator:",
    phoneLabel2: "Administrator:",
    "dir-fly-yoga": "Fly Yoga",
    "dir-ishvara-yoga": "Ishvara Yoga",
    "dir-iyengar-yoga": "Iyengar Yoga",
    "dir-pilates": "Pilates",
    // "dir-fly-pilates": "Fly Pilates",
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

    // Modal titles and descriptions
    "modal-title-fly-yoga": "Fly Yoga",
    "modal-desc-fly-yoga": "Practice in special hammocks that gives a feeling of flight and lightness. It helps relieve spinal tension, develops flexibility and boosts energy. Ideal for those who want to combine physical activity with deep relaxation.",
    "modal-title-ishvara-yoga": "Ishvara Yoga",
    "modal-desc-ishvara-yoga": "A Hatha yoga approach distinguished by internal principles of body work. These principles explain why certain poses fail, where the mistake is and how to correct it. The practice helps integrate the body, coordinate muscle work and gradually improve posture and alignment.",
    "modal-title-iyengar-yoga": "Iyengar Yoga",
    "modal-desc-iyengar-yoga": "A method that emphasizes precision in asana execution and correct body alignment. Use of props makes the practice accessible to all levels and supports gradual, safe progress.",
    "modal-title-pilates": "Pilates",
    "modal-desc-pilates": "A system of exercises to strengthen muscles, increase flexibility and develop healthy posture. Pilates improves body control, coordination and provides a sense of ease in movement.",
    // "modal-title-fly-pilates": "Fly Pilates",
    // "modal-desc-fly-pilates": "A blend of classical Pilates with hammock-based elements. This modern training format makes exercises more dynamic, introduces new sensations and helps achieve results faster.",
    "modal-title-functional-training": "Functional Training",
    "modal-desc-functional-training": "A set of exercises aimed at building strength, endurance and mobility. These sessions prepare the body for daily demands, improve fitness and increase overall performance.",
    "modal-title-fly-kids": "Fly Kids",
    "modal-desc-fly-kids": "Fun and safe hammock classes for children. They develop flexibility, coordination and confidence, giving kids joy of movement and new experiences.",
    "modal-title-pregnancy-yoga": "Pregnancy Yoga",
    "modal-desc-pregnancy-yoga": "Gentle practices that support the physical condition and emotional balance of expectant mothers. Exercises are adapted for different pregnancy stages and help prepare the body for childbirth.",
    "modal-title-adho-yoga": "Adho Yoga",
    "modal-desc-adho-yoga": "A practice combining flexibility and strength work, static and dynamic elements, endurance and balance, along with breathing, meditative techniques and relaxation. ADHO yoga is grounded in scientific understanding of physiological processes during practice, making outcomes clear and measurable.",
    "modal-title-private-lesson": "Private lesson",
    "modal-desc-private-lesson": "A personalized training format tailored to your needs and fitness level"
}
};

// Функція перемикання мови
function setLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang] || {};

  // Універсальний цикл: підставляє значення для елементів, id яких збігаються з ключами
  for (const key in dict) {
    const el = document.getElementById(key);
    if (el) {
      el.textContent = dict[key];
    }
  }

  // Ручні винятки для ключів, які у словнику мають camelCase, а в HTML — з дефісами
  const safeGet = id => document.getElementById(id);
  if (safeGet("subtitle")) safeGet("subtitle").textContent = dict.subtitle || "";
  if (safeGet("social-title")) safeGet("social-title").textContent = dict.socialTitle || "";
  if (safeGet("directions-title")) safeGet("directions-title").textContent = dict.directionsTitle || "";
  if (safeGet("contacts-title")) safeGet("contacts-title").textContent = dict.contactsTitle || "";
  if (safeGet("footer-text")) safeGet("footer-text").textContent = dict.footerText || "";
  if (safeGet("phone-label-1")) safeGet("phone-label-1").textContent = dict.phoneLabel1 || "";
  if (safeGet("phone-label-2")) safeGet("phone-label-2").textContent = dict.phoneLabel2 || "";
}

// Відкриття модального вікна (підстановка тексту перед показом)
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

// Застосувати мову при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
});
