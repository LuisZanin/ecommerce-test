import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ProductCategory } from '../enums/product.category.enum';

export type ProductDocument = HydratedDocument<Product>;

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, enum: ProductCategory})
  productCategory: ProductCategory;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, default: true })
  isEnable: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
