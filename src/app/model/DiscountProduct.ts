import {Product} from "./Product";
import {Voucher} from "./Voucher";

export class DiscountProduct {
  discountProductId ?: any;
  product ?: Product;
  voucher ?: Voucher;

  public DiscountProduct(discountProductId: any, product: Product, voucher: Voucher){
    this.discountProductId = discountProductId;
    this.product = product;
    this.voucher = voucher;
  }
}
