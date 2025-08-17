const form = document.querySelector(".form");
const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
};
const rules = [
  {
    input: "name",
    validate: (value) => value.trim().length >= 3,
    message: "Name must have at least 3 letters",
  },
  {
    input: "name",
    validate: (value) => value.trim() !== "",
    message: "Enter name",
  },
  {
    input: "email",
    validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    message: "Enter correct email",
  },
  {
    input: "password",
    validate: (value) => value.trim().length >= 6,
    message: "Password must have at least 6 simbols",
  },
  {
    input: "password",
    validate: (value) => !/\s/.test(value),
    message: "Пароль не должен содержать пробелов",
  },
];
function clearErrors() {
  document.querySelectorAll(".error-text").forEach((el) => el.remove());
}
function showError(inputEl, message) {
  const errorEl = document.createElement("div");
  errorEl.classList.add("error-text");
  errorEl.innerHTML = message;
  inputEl.parentElement.appendChild(errorEl);
}
form.addEventListener("submit", (el) => {
  el.preventDefault();
  clearErrors();
  let isValid = true;
  for (const key in inputs) {
    const inputEl = inputs[key];
    const rule = rules.find(
      (rule) => rule.input == key && !rule.validate(inputEl.value)
    );
    if (rule) {
      showError(inputEl, rule.message);
      isValid = false;
    }
  }
  if (isValid) {
    const message = document.createElement("div");
    message.classList.add("done");
    message.innerHTML = "The form is done";
    form.append(message);
    form.reset();
    setInterval(() => message.remove(), 3000)
  }
});
