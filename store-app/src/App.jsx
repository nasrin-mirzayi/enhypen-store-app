import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import DetailsPage from "./pages/DetailsPage";

import { useSettings } from "./context/SettingsContext";

export default function App() {
  const { state } = useSettings();

  useEffect(() => {
    document.body.setAttribute("data-theme", state.theme);
  }, [state.theme]);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>

    </BrowserRouter>
  );
}