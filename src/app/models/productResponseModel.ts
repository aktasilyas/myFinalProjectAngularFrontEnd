import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponceModel extends ResponseModel{
    data:Product[];
  

}