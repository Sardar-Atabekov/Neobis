let userStatus = { h: "Мембер", n: "Мембер", m: "Ментор", t: "Тимлид" };

let congestionStatus = {
  0: "Свободен",
  25: "Немного занят",
  50: "Частично занят",
  75: "Загружен",
  100: "Очень загружен",
};

let projectStatus = {
  a: "Активный",
  f: "Заморожен",
  c: "Завершенный",
};

let projectType = {
  1: "Внутренний проект",
  2: "Социальный проект",
  3: "Коммерческий проект",
  4: "Продукт",
};

let userRole = {
  3: "Тимлид",
  1: "Менеджер клуба",
  2: "Координатор проектов",
  5: "Обычный пользователь",
};

export { userStatus, congestionStatus, projectStatus, projectType, userRole };
