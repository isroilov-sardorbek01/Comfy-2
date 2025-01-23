import { FC } from "react";
import { useState } from "react";

const Card: FC = () => {
    const [user, setUser] = useState<userType[]>([]);

    interface userType {
        name: string;
        id: number;
        age: number;
    }
    const users = [
        { id: 1, name: "John", age: 11 },
        { id: 1, name: "John", age: 11 },
        { id: 1, name: "John", age: 11 },
        { id: 1, name: "John", age: 11 },
    ];

    setUser(users);

    return (
        <div>
            <div className="">
                {user.length > 0 &&
                    user.map((value, index) => {
                        return (
                            <div className="" key={index}>
                                <h1>{value.age}</h1>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Card;
