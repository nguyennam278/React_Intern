import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUsers";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Route, Link, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Home from "./components/Home";
import Login from "./components/Login";
function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="app-container">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<TableUsers />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
