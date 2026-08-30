import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Pets from "./pages/Pets";
import PetDetails from "./pages/PetDetails";
import AddPet from "./pages/AddPet";
import EditPet from "./pages/EditPet";
import Favorites from "./pages/Favorites";
import AdoptionForm from "./pages/AdoptionForm";
import Requests from "./pages/Requests";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/add-pet" element={<AddPet />} />
        <Route path="/edit-pet/:id" element={<EditPet />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/adopt/:id" element={<AdoptionForm />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;