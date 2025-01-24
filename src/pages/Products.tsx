import axios from "axios";
import { FC, useEffect, useState } from "react";

const Products: FC = () => {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        axios
            .get("https://strapi-store-server.onrender.com/api/products")
            .then((response) => {
                if (response.status == 200) {
                    console.log(response);

                    setProducts(response.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="">
            <div className="container products-container flex flex-wrap justify-center gap-5 mb-10">
                {products.length > 0 ? (
                    products.map((value, index) => {
                        return (
                            <div
                                className="product w-[300px]  p-10 text-center rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-[1s]"
                                key={index}
                            >
                                <img
                                    src={value.attributes.image}
                                    className="object-cover rounded-xl w-full h-[200px]"
                                    alt="Img"
                                />
                                <h1>{value.attributes.title}</h1>
                                <h1>{value.attributes.price}</h1>
                            </div>
                        );
                    })
                ) : (
                    <h1 className="load-pr">LOADING</h1>
                )}
            </div>
        </div>
    );
};
export default Products;
