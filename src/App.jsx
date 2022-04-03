import React from "react";
import "../src/App.css";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import ErrorPage from "./pages/ErrorPage";
import Topbar from "./components/Common/Topbar/topbar";
import NewBlog from "./pages/NewBlog/newblog";
import Login from "./pages/Login/login";
import Settings from "./pages/Settings/settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/register";
import EmptyList from "./components/Common/EmptyList/emptylist";

function App() {
  const user = true;
  return (
    <React.Fragment>
      <Router>
        <Topbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/newblog"
              element={user ? <NewBlog /> : <Register />}
            />
            <Route
              path="/settings"
              element={user ? <Settings /> : <Register />}
            />
            <Route path="/register" element={<Register />} />

            <Route
              path="*"
              element={
                <>
                  <ErrorPage />
                  <EmptyList />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
