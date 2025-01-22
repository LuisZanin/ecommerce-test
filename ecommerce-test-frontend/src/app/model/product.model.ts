import { ProductCategory } from "../product/enums/product.enum";

export interface Product {
    _id: string;

    name: string;
  
    price: number;

    imageUrl: string;
  
    productCategory: ProductCategory;
  
    description: string;
  
    isEnable: boolean;
  }