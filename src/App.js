import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/Pages/About";
import { useEffect } from "react";
import ErrorPage from "./components/Pages/ErrorPage";
import Dashboard from "./components/Pages/Dashboard";
import BookList from "./components/Pages/BookList";
import UserManagement from "./components/Pages/UserManagement";
import BookDetails from "./components/Pages/BookDetails";
import Profile from "./components/Pages/Profile";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="dashbord" element={<Dashboard />} />
        <Route path="booklist" element={<BookList />} />
        <Route path="booklist/:bookId" element={<BookDetails />} />
        <Route path="user_management" element={<UserManagement />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
