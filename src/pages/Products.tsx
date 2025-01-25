import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ProductsInteface } from "../utilTYpes";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products: FC = () => {
    const [products, setProducts] = useState<ProductsInteface[]>([]);
    const [curentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `https://strapi-store-server.onrender.com/api/products?page=${curentPage}`
            )
            .then((response) => {
                if (response.status == 200) {
                    console.log(response);
                    setProducts(response.data.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [curentPage]);

    function handleChange(event: React.ChangeEvent<unknown>, page: number) {
        setCurrentPage(page);
    }

    function handleRedirect(
        event: React.MouseEvent<HTMLDivElement>,
        id: number
    ) {
        console.log(event);
        navigate(`/details/${id}`);
    }
    return (
        <div className="products">
            <div className="container products-container">
                <div className=" flex flex-wrap justify-center gap-5 mb-10">
                    {products.length > 0 ? (
                        products.map((value, index) => {
                            return (
                                <div
                                    onClick={(e) => {
                                        handleRedirect(e,value.id);
                                    }}
                                    className="product w-[300px]  p-[10px] text-center rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-[0.5s]"
                                    key={index}
                                >
                                    <img
                                        src={value.attributes.image}
                                        className="object-cover rounded-xl w-full h-[200px]"
                                        alt="Img"
                                    />
                                    <h1>{value.attributes.title}</h1>
                                    <h1>{value.attributes.price}$</h1>
                                </div>
                            );
                        })
                    ) : (
                        <h1 className="load-pr">LOADING</h1>
                    )}
                </div>
                <div className="products_paginate">
                    <Pagination
                        onChange={handleChange}
                        page={curentPage}
                        count={3}
                        color="primary"
                    />
                </div>
            </div>
        </div>
    );
};
export default Products;
