import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/app.module'
import { BadRequestException, ValidationError, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe(
    {
      enableDebugMessages: true,
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        console.error(JSON.stringify(validationErrors));
        return new BadRequestException(validationErrors);
      }
    }
  ))
  await app.listen(3000)
}
bootstrap()
