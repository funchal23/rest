import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateAthleteService } from './application/services/athlete/impl/app.create-athlete.service';
import { AthleteController } from './infraestructure/rest/athlete/app.athlete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Athlete } from './infraestructure/database/memory/entity/app.athlete.entity';
import { GetAllAtheleteService } from './application/services/athlete/impl/app.get-all-athlete.service';
import { AthleteRepository } from './infraestructure/database/memory/repository/app.athlete.repository';
import { GetByCodeAthleteService } from './application/services/athlete/impl/app.get-by-code-athlete.service';
import { DeleteAthleteService } from './application/services/athlete/impl/app.delete-athlete.service';
import { AthleteMiddleware } from './infraestructure/rest/athlete/middleware/app.athlete.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:', // Isso faz o SQLite operar em memória
      entities: [Athlete], // Registre suas entidades aqui
      synchronize: true, // Isso sincroniza o schema do banco de dados com suas entidades (use com cuidado em produção)
      logging: false, // Desative o log do TypeORM se preferir
    }),
    TypeOrmModule.forFeature([Athlete])
  ],
  controllers: [AppController, AthleteController],
  providers: [AppService, CreateAthleteService, GetAllAtheleteService, AthleteRepository, GetByCodeAthleteService, DeleteAthleteService],
})
export class AppModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AthleteMiddleware)
      .forRoutes(AthleteController);
  }
}
