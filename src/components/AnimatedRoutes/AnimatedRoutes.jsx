import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { SpinnerFallback } from "../Spinner";

const Menu = lazy(() => import('../../Page/Menu'))
const Cart = lazy(() => import('../../Page/Cart'))
function AnimatedRoutes() {

  const location = useLocation()
  return (
    <AnimatePresence location={location} key={location.pathname}>
      <Suspense fallback={<SpinnerFallback />}>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default AnimatedRoutes