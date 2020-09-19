module.exports.validateLogin = (username, password) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Имя пользователя не может быть пустым";
  }

  if (password.trim() === "") {
    errors.password = "Пароль не может быть пустым";
  }
  return {
    errors,
    validate: Object.keys(errors).length > 0,
  };
};

module.exports.validateRegister = (
  username,
  password,
  confirmPassword,
  email
) => {
  const errors = {};
  if (username.trim() === "") {
    errors.username = "Имя пользователя не может быть пустым";
  }
  if (email.trim() === "") {
    errors.email = "Электронная почта не может быть пустой";
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Введите кореектную электронную почту";
    }
  }
  if (password.trim() === "") {
    errors.password = "Пароль не может быть пустым";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Пароли не совпадают";
  }

  return {
    errors,
    validate: Object.keys(errors).length > 0,
  };
};
