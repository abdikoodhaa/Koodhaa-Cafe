import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/admin/AdminDashboard';
import Login from './components/admin/Login';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  if (isAdmin) {
    return isLoggedIn ? (
      <>
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
          <h1 className="text-xl font-bold text-amber-900">KOODHAA CAFE Admin</h1>
          <div className="space-x-4">
            <button
              onClick={() => setIsAdmin(false)}
              className="text-amber-800 hover:text-amber-700"
            >
              View Site
            </button>
            <button
              onClick={handleLogout}
              className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700"
            >
              Logout
            </button>
          </div>
        </div>
        <AdminDashboard />
      </>
    ) : (
      <Login onLogin={handleLogin} />
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar onAdminClick={() => setIsAdmin(true)} />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}