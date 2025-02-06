export interface Product {
    id: string;
    title: string;
    body: string;
    brand: string;
    date: string;
    comments: ProductComment[];
}

export interface ProductComment {
    id: string;
    text: string;
    username: string;
}