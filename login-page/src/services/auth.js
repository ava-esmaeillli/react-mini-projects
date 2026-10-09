const TOKEN_KEY = "token";

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "123456") {
        const token = "fake-token-" + Date.now();
        resolve(token);
      } else {
        reject(new Error("Invalid username or password!"));
      }
    }, 1000);
  });
};

export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
