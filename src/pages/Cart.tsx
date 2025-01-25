import { FC, useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: string;
    image: string;
}

interface CartItem {
    id: number;
    count: number;
    color: string;
    product: Product;
}

const Cart: FC = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        // localStorage dan barcha mahsulotlarni olish
        const products = JSON.parse(localStorage.getItem("product") || "[]");
        setCart(products);
    }, []);

    return (
        <div className="">
            <div className="container">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.product.image}
                                alt={item.product.title}
                            />
                            <h3>{item.product.title}</h3>
                            <p>{item.product.price}</p>
                            <p>Color: {item.color}</p>
                            <p>Quantity: {item.count}</p>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
