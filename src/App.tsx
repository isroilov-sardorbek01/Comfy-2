import { FC } from "react";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ProductsDetails from "./pages/ProductsDetails";
import Cart from "./pages/Cart";

const App: FC = () => {
    return (
        <div className="">
            <HeaderTop></HeaderTop>
            <Header></Header>
            <Routes>
                <Route index element={<Products></Products>}></Route>
                <Route
                    path="/details/:id"
                    element={<ProductsDetails></ProductsDetails>}
                ></Route>
                <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
        </div>
    );
};

export default App;
