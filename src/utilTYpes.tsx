export interface ProductInclude {
    category: string;
    colors: string[];
    company: string;
    createdAt: string;
    description: string;
    featured: boolean;
    image: string;
    price: string;
    publishedAt: string;
    shipping: boolean;
    title: string;
    updatedAt: string;
}
export interface ProductsInteface {
    id: number;
    attributes: ProductInclude;
}
