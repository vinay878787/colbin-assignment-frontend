## Recruitment Platform Frontend

NOTE: USE PRODUCTION ONLY IF YOU WERE NOT ABLE TO SETUP LOCALLY. THIS IS A FREE TIER SERVICE . IT MIGHT BREAK ANYTIME SOON WITHIN A WEEK . IF YOU USE PRODUCTION , YOU DONT NEED TO SETUP DB
DELOYED PRODUCTION FRONTEND LINK : https://colbin-assignment-frontend.vercel.app/

DEPLOYED PRODUCTION BACKEND LINK : https://colbin-assignment-backend.onrender.com

A modern, responsive recruitment platform frontend built with React, TypeScript, Vite, MUI, Tailwind CSS, TanStack Query, React Hook Form, Axios, and React Toastify.

---

### 🚀 Features
- Registration, Login, and Profile screens
- Responsive, minimalist UI with MUI and Tailwind
- Toast notifications for feedback
- API integration with backend (Node.js/Express/MongoDB)
- Environment-based API domain switching

---

### 🛠️ Tools & Libraries
- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Fast dev/build tool
- **MUI**: Material UI components
- **Tailwind CSS**: Utility-first CSS for layout/responsiveness
- **TanStack Query**: Data fetching and caching
- **React Hook Form**: Form management
- **Axios**: HTTP requests
- **React Toastify**: Toast notifications

---

### ⚡ Quick Setup

#### 1. Clone the repository
```sh
git clone https://github.com/your-username/colbin-assignment-frontend.git
```

#### 2. Install dependencies
```sh
npm install
```

#### 3. Set up environment variables
NOTE: PLEASE USE PRODUCTION LINK ONLY IF YOU ARE NOT ABLE TO RUN LOCALLY . THIS IS A FREE TIER SERVICE . IT MIGHT BREAK IN COUPLE OF DAYS . IF YOU USE PRODUCTION LINK , YOU DONT NEED TO SETUP DATABASE.

Create a `.env` file in the root of `frontend/`:
```env
# Local development
VITE_API_BASE_URL=http://localhost:3000/api/users
              OR
# Production (uncomment and set your domain)
# VITE_API_BASE_URL=https://colbin-assignment-backend.onrender.com/api/users
```

#### 4. Start the development server
```sh
npm run dev
```

#### 5. Build for production
```sh
npm run build
```

#### 6. Preview production build
```sh
npm run preview
```

---

### 📁 Project Structure
```
frontend/
  .env                # API base URL config
  src/
    pages/            # Home, Register, Login, Profile screens
    components/       # Navbar, shared UI
    services/         # API calls (auth.ts)
    interfaces/       # TypeScript interfaces
    constants/        # API base URL
    utils/            # Error handler
    assets/           # Images/icons
    index.css         # Tailwind styles
    App.tsx           # Main app component
    routes.tsx        # Routing
```

---

### 📝 Notes
- Make sure your backend is running and CORS is enabled for the frontend domain.
- Update `.env` for your production API domain when deploying.
- All API calls use the domain from `.env` for easy switching.

---

### 💡 Useful Commands
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm install <package>` — Add new dependency

---

### 🤝 Backend
See the backend README for setup and API details.
