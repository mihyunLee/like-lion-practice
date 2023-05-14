import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import ProductDetailNotice from "./Pages/ProductDetailNotice";
import Cart from "./Pages/Cart";
import User from "./Pages/User";
import Coupon from "./Pages/Coupon";
import Question from "./Pages/Question";
import Notice from "./Pages/Notice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<Home />} />
        {/* 상품 상세 */}
        <Route path="/products/:id/*" element={<Outlet />}>
          <Route path="" element={<ProductDetail />} />
          <Route path="notice/" element={<ProductDetailNotice />} />
        </Route>
        {/* 장바구니 */}
        <Route path="/cart" element={<Cart />} />
        {/* 유저 */}
        <Route path="/users/*" element={<Outlet />}>
          <Route path="" element={<User />} />
          <Route path="coupon/" element={<Coupon />} />
          <Route path="question/" element={<Question />} />
          <Route path="notice/" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
