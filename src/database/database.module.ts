import { Module } from '@nestjs/common';
import { DatabaseRepository } from './repositories/database.repository';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
  providers: [DatabaseRepository],
  exports: [DatabaseRepository, TypeOrmModule],
})
export class DatabaseModule {}


if (process.env.NODE_ENV !== 'production') {
  console.log(
    'DATABASE_URL:' + process.env.DATABASE_URL,
    'HOST_DATABASE:' + process.env.HOST_DATABASE,
    'PORT_DATABASE:' + Number(process.env.PORT_DATABASE),
    'USER_DATABASE:' + process.env.USER_DATABASE,
    'PASS_DATABASE:' + process.env.PASS_DATABASE,
    'NAME_DATABASE:' + process.env.NAME_DATABASE,
  );
}
