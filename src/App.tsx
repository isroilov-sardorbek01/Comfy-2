import { FC } from "react";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

const App: FC = () => {
    return (
        <div className="">
            <HeaderTop></HeaderTop>
            <Header></Header>
            <Routes>
                <Route index element={<Products></Products>}></Route>
            </Routes>
        </div>
    );
};

export default App;
