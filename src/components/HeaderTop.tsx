import { FC } from "react";

const HeaderTop: FC = () => {
    return (
        <div className="bg-[#021431]  text-[#BBC9D1]">
            <div className="container flex  justify-end gap-3 p-[10px] text-[15px]">
                <h1>Sign in / Guest</h1>
                <h1> Create Account</h1>
            </div>
        </div>
    );
};
export default HeaderTop;
