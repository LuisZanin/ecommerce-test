import { IsBoolean, IsNumber, IsString, IsEnum, IsNotEmpty, Min } from 'class-validator';
import { ProductCategory } from '../enums/product.category.enum';

export class CreateProductDto {
  @IsString({ message: 'Nome do produto inválido, favor informar um nome válido.' })
  @IsNotEmpty({ message: 'O Nome do produto não deve estar em branco, favor inserir.' })
  readonly name: string;

  @IsString({ message: 'Url da imagem inválida, favor informar uma url válida.' })
  readonly imageUrl: string;

  @IsNumber({}, { message: 'Preço do produto inválido, favor informar um preço válido.' })
  @IsNotEmpty({ message: 'O Preço do produto não deve estar em branco, favor inserir.' })
  @Min(0, { message: 'O Preço do produto não pode ser negativo, favor informar um preço válido.' })
  readonly price: number;

  @IsEnum(ProductCategory, { message: `Categoria inválida, as categorias permitidas são: ${Object.values(ProductCategory).join(', ')}` })
  readonly productCategory: ProductCategory;

  @IsString({ message: 'Descrição do produto inválida, favor informar uma descrição válida.' })
  @IsNotEmpty({ message: 'A Descrição do produto não deve estar em branco, favor inserir.' })
  readonly description: string;

  @IsBoolean()
  readonly isEnable: boolean;
}
