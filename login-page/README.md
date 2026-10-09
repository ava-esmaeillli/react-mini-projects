# Login Page

A responsive login page built with React and Tailwind CSS, including form validation, a simulated authentication flow, token storage, and protected routes.

## 🚀 Live Demo

[View Live Demo](https://ava-esmaeillli.github.io/react-mini-projects/login-page/)

## ✨ Features

- Pixel-focused implementation of a Figma design
- Fully responsive layout (the image panel is hidden on small screens)
- Form validation (empty fields, minimum password length)
- Simulated login API with loading state
- Error message on failed login
- Token saved in `localStorage` after a successful login
- Protected `/dashboard` route (redirects to `/login` without a token)
- Public `/login` route (redirects to `/dashboard` if already logged in)
- Logout that removes the token

## 🛠️ Tech Stack

- [React](https://react.dev/) (Vite)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## Demo Credentials

There is no real backend. The login is simulated in `src/services/auth.js`:

| Username | Password |
| -------- | -------- |
| `admin`  | `123456` |

## 🚀 Getting Started

1. Clone the repository and go to the project folder:

```bash
   git clone https://github.com/YOUR-USERNAME/react-mini-projects.git
   cd react-mini-projects/login-page
```

2. Install dependencies:

```bash
   npm install
```

3. Start the development server:

```bash
   npm run dev
```

4. Open the address shown in the terminal (usually `http://localhost:5173`).

## 📁 Project Structure

```
src/
├── assets/          # Images and icons
├── components/      # Reusable components (Input, SocialButton)
├── pages/           # Pages (Login, Dashboard)
├── routes/          # Route guards (ProtectedRoute, PublicRoute)
├── services/        # Auth logic and token handling (auth.js)
├── App.jsx          # Routes definition
├── index.css        # Tailwind import and theme colors
└── main.jsx         # App entry point
```

## 🎯 How It Works

1. The user submits the form and the inputs are validated.
2. `login()` simulates an API call (1 second delay) and returns a token or an error.
3. On success, the token is saved in `localStorage` and the user is redirected to `/dashboard`.
4. `ProtectedRoute` checks for the token before showing the dashboard.
5. Logout removes the token and redirects to `/login`.

## 🔍 Test Scenarios

- Empty username or password shows a validation error
- Password shorter than 6 characters shows an error
- Wrong credentials show an error after the loading state
- Correct credentials redirect to the dashboard
- Visiting `/dashboard` without a token redirects to `/login`
- Visiting `/login` with a token redirects to `/dashboard`
- Logout removes the token and returns to the login page
