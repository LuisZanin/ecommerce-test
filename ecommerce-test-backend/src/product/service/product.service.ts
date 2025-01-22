import { Model } from 'mongoose';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schema/product.schema';
import { CreateProductDto } from '../dto/product.create-product.dto';
import { UpdateProductDto } from '../dto/product.update-product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const existingProduct = await this.productModel.findOne({ name: createProductDto.name }).exec();
    if (existingProduct) {
      throw new Error('Já existe um Produto com este nome, favor informar outro nome.');
    }
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException('Produto não encontrado.');
    }
    return product;
  }

  async findByCategory(category: string): Promise<Product[]> {
    const products = await this.productModel.find({ productCategory: category }).exec();
    if (!products || products.length === 0) {
      throw new NotFoundException('Nenhum produto encontrado para esta categoria.');
    }
    return products;
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    const existingProduct = await this.productModel.findOne({ name: updateProductDto.name }).exec();
    if (existingProduct && existingProduct._id.toString() !== id) {
      throw new ConflictException('Já existe um Produto com este nome, favor informar outro nome.');
    }
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
    if (!updatedProduct) {
      throw new NotFoundException('Produto não encontrado.');
    }
    return updatedProduct;
  }

  async delete(id: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id).exec();
    if (!deletedProduct) {
      throw new NotFoundException('Produto não encontrado.');
    }
    return deletedProduct;
  }
}
