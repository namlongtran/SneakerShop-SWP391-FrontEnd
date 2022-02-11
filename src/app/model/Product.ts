import {Category} from "./Category";
import {Attribute} from "./Attribute";

export class Product {
  productId ?: any;
  name ?: any;
  category ?: Category;
  price ?: any;
  description ?: any;
  status ?: any;
  image ?: any;
  attributes ?: Attribute[] = [];

}

