import React from "react";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { SignInPage } from "./pages/SignInPage";
import { CartPage } from "./pages/CartPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { PageTransition } from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/CartContext";
import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/new"
          element={
            <PageTransition>
              <CategoryPage title="New Arrivals" />
            </PageTransition>
          }
        />
        <Route
          path="/women"
          element={
            <PageTransition>
              <CategoryPage title="Women's Collection" />
            </PageTransition>
          }
        />
        <Route
          path="/men"
          element={
            <PageTransition>
              <CategoryPage title="Men's Collection" />
            </PageTransition>
          }
        />
        <Route
          path="/sale"
          element={
            <PageTransition>
              <CategoryPage title="Sale Items" />
            </PageTransition>
          }
        />
        <Route
          path="/signin"
          element={
            <PageTransition>
              <SignInPage />
            </PageTransition>
          }
        />
        <Route
          path="/cart"
          element={
            <PageTransition>
              <CartPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
export function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </Router>
    </CartProvider>
  );
}
