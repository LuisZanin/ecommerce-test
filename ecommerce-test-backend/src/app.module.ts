import { Module } from '@nestjs/common';
import { ProductsModule } from './product/product.module';	
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/ecommerceDB'),
  ProductsModule
  ],
})
export class AppModule {}
