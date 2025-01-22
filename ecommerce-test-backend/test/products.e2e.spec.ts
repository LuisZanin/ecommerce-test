import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { ProductsService } from '../src/product/service/product.service';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('Produtos e2e', () => {
  let app: INestApplication;
  
  const productsService = { 
    findAll: () => [
        { 
            name: 'Produto 1', 
            imageUrl: 'http://localhost:3000/products/1',
            price: 100, 
            description: 'Descrição do produto 1', 
            isEnable: true
        }
    ] 
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ProductsService)
      .useValue(productsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET /products`, () => {
    return request(app.getHttpServer())
      .get('/products') 
      .expect(200)
      .expect(productsService.findAll());  
  });

  afterAll(async () => {
    await app.close();  
  });
});
