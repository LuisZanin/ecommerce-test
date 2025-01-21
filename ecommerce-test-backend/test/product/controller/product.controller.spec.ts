import { ProductsController } from '../../../src/product/controller/product.controller';
import { ProductsService } from '../../../src/product/service/product.service';
import { Product } from '../../../src/product/schema/product.schema';
import { ProductCategory } from '../../../src/product/enums/product.category.enum';
import { Model } from 'mongoose';

describe('ProductsController', () => {
  let productsController: ProductsController;
  let productsService: ProductsService;

  const mockProductModel = {
    find: jest.fn(),
    create: jest.fn(),
  } as Partial<Model<Product>>;

  beforeEach(() => {
    productsService = new ProductsService(mockProductModel as Model<Product>);
    productsController = new ProductsController(productsService);
  });

  describe('findAll', () => {
    it('deve retornar todos os produtos cadastrados', async () => {
      const result: Product[] = [
        {
          name: 'Produto Teste',
          price: 100,
          productCategory: ProductCategory.MEMORIAS_RAM,
          description: 'Descrição do produto teste',
          isEnable: true,
        } as Product,
      ];

      jest.spyOn(productsService, 'findAll').mockResolvedValue(result);

      expect(await productsController.findAll()).toBe(result);
    });
  });

  describe('create', () => {
    it('deve criar um novo produto', async () => {
      const product: Product = {
        name: 'Produto Teste',
        price: 100.00,
        productCategory: ProductCategory.MEMORIAS_RAM,
        description: 'Descrição do produto teste',
        isEnable: true,
      } as Product;

      jest.spyOn(productsService, 'create').mockResolvedValue(product);

      expect(await productsController.create(product)).toBe(product);
    });
  });

  describe('findOne', () => {
    it('deve retornar um produto pelo id', async () => {
      const product: Product = {
        _id: '1',
        name: 'Produto Teste',
        price: 100.00,
        productCategory: ProductCategory.MEMORIAS_RAM,
        description: 'Descrição do produto teste',
        isEnable: true,
      } as Product;

      jest.spyOn(productsService, 'findOne').mockResolvedValue(product);

      expect(await productsController.findOne('1')).toBe(product);
    });
  });

  describe('update', () => {
    it('deve atualizar um produto pelo id', async () => {
      const product: Product = {
        _id: '1',
        name: 'Produto Teste',
        price: 100.00,
        productCategory: ProductCategory.MEMORIAS_RAM,
        description: 'Descrição do produto teste',
        isEnable: true,
      } as Product;

      jest.spyOn(productsService, 'update').mockResolvedValue(product);

      expect(await productsController.update('1', product)).toBe(product);
    });
  });

  describe('delete', () => {
    it('deve deletar um produto pelo id', async () => {
      const product: Product = {
        _id: '1',
        name: 'Produto Teste',
        price: 100.00,
        productCategory: ProductCategory.MEMORIAS_RAM,
        description: 'Descrição do produto teste',
        isEnable: true,
      } as Product;

      jest.spyOn(productsService, 'delete').mockResolvedValue(product);

      expect(await productsController.delete('1')).toBe(product);
    });
  });
});
