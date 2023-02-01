import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try{
    const app = await NestFactory.create(AppModule);
    await app.listen(5000);
    app.enableCors()
  } catch (e) {
    console.log(e)
  }

}
bootstrap();
