import { createContext, FC, } from "react";
interface ThemeContextType{
    theme: 'light'| 'dark',
}



const App:FC = () => {

    return (
        <div className="">
            <div className="container"></div>
        </div>
    );
};
export default App;
