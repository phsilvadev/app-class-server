import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  // app.setBaseViewsDir(join(__dirname, '..', '..', 'views'));
  // app.setViewEngine('hbs');

  // hbs.registerPartials(join(__dirname, '..', '..', 'views', 'partials'));

  // app.set('view options', { layout: 'layout' }); // Definindo o layout padrão

  await app.listen(3000);
}
bootstrap();
