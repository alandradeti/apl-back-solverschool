import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MateriaModule } from './materias/materia.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlternativaModule } from './alternativas/alternativa.module';
import { PerguntaModule } from './perguntas/pergunta.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST_DATABASE,
      port: Number(process.env.PORT_DATABASE),
      username: process.env.USER_DATABASE,
      password: process.env.PASS_DATABASE,
      database: process.env.NAME_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
      ssl:
        process.env.VERIFY_SSL_DATABASE === 'true'
          ? { rejectUnauthorized: false }
          : false,
    }),
    MateriaModule,
    PerguntaModule,
    AlternativaModule,
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
