import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ProductsInteface } from "../utilTYpes";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductsDetails: FC = () => {
    const [product, setProduct] = useState<ProductsInteface | null>(null);
    const [selectedColor, setSelectedColor] = useState("");
    const [amount, setAmount] = useState<number | string>(1);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios
                .get(
                    `https://strapi-store-server.onrender.com/api/products/${id}`
                )
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response.data);
                        setProduct(response.data.data);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    function handlePlusCart() {
        const data = {
            id: product?.id,
            count: amount,
            color: selectedColor,
            product,
        };
        const existLocal = JSON.parse(localStorage.getItem("product") || "[]");
        existLocal.push(data);
        localStorage.setItem("product", JSON.stringify(existLocal));
    }
    return (
        <div className="">
            <div className="container">
                <div className="flex detailb gap-3">
                    <Link to="/" className="text-[15px] hover:underline">
                        Home
                    </Link>
                    <div className="text-[#B5BCC7]">&gt;</div>
                    <Link
                        to="/products"
                        className="text-[15px] hover:underline"
                    >
                        Products
                    </Link>
                </div>
                {product ? (
                    <div className="flex justify-between gap-2">
                        <div className="left">
                            <img
                                className="w-[500px] h-[400px] object-cover rounded-md"
                                src={product.attributes.image}
                                width={500}
                                height={300}
                                alt=""
                            />
                        </div>
                        <div className="right w-[550px]">
                            <h1 className="text-[40px] font-bold text-[#394E6A]">
                                {product.attributes.title}
                            </h1>
                            <h1 className="text-[25px] font-bold text-[#C7C9D1] mb-4">
                                {product.attributes.company}
                            </h1>
                            <h1 className="text-[20px] text-[#394E6A] mb-4">
                                ${product.attributes.price}
                            </h1>
                            <p className="text-[16px] leading-7 mb-7 text-[#394E6A] font-medium">
                                {product.attributes.description}
                            </p>
                            <h1 className="font-bold text-[20px] text-[#394E6A]">
                                Colors
                            </h1>
                            <div className="flex gap-3 mt-4 mb-4">
                                {product.attributes.colors.length &&
                                    product.attributes.colors.map(
                                        (color, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className={`cursor-pointer rounded-full w-[20px] h-[20px] inline-block`}
                                                    style={{
                                                        backgroundColor: color,
                                                        border:
                                                            selectedColor ===
                                                            color
                                                                ? "2px solid black"
                                                                : "none",
                                                    }}
                                                    onClick={() => {
                                                        setSelectedColor(color);
                                                    }}
                                                ></span>
                                            );
                                        }
                                    )}
                            </div>
                            <div className="">
                                <h1 className="text-[#394E6A] text-[16px] font-bold">
                                    Amount
                                </h1>
                                <select
                                    className="w-[300px] p-3 mb-10 border-[1px] rounded-md  border-[#463AA1] mt-3"
                                    value={amount}
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                            </div>
                            <button
                                onClick={handlePlusCart}
                                className="p-3 bg-[#463AA1] mb-[100px] text-[14px] text-[#D1D4ED] font-bold rounded-md"
                            >
                                ADD TO BAG
                            </button>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-center font-bold text-[35px]">
                        LOADING..
                    </h1>
                )}
            </div>
        </div>
    );
};
export default ProductsDetails;
