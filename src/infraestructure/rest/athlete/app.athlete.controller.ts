import { CreateAthleteInput } from './inputs/app.create-athlete.input';
import { GetByCodeAthleteOutput } from './outputs/app.get-by-code-athlete.output';
import { GetAthleteOutput } from './outputs/app.get-athlete.output';
import { CreateAthleteService } from 'src/application/services/athlete/impl/app.create-athlete.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { GetAllAtheleteService } from 'src/application/services/athlete/impl/app.get-all-athlete.service';
import { CreateAthleteOutput } from './outputs/app.create-athlete.output';
import { GetByCodeAthleteService } from 'src/application/services/athlete/impl/app.get-by-code-athlete.service';
import { DeleteAthleteService } from 'src/application/services/athlete/impl/app.delete-athlete.service';
import { GetAthleteInput } from './inputs/app.get-athlete.input';
import { Output } from './outputs/app.output';

@Controller('athlete')
export class AthleteController {
  constructor(
    private readonly createAthleteService: CreateAthleteService,
    private readonly getAllAthleteService: GetAllAtheleteService,
    private readonly getByCodeAthleteService: GetByCodeAthleteService,
    private readonly deleteAthleteService: DeleteAthleteService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(
    @Query('filter') filter: string,
    @Query('page') page: number,
    @Query('size') size: number
  ): Promise<Output<GetAthleteOutput>> {
    return this.getAllAthleteService.execute(GetAthleteInput.create(filter, page, size));
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() input: CreateAthleteInput): Promise<Output<CreateAthleteOutput>> {
    return this.createAthleteService.execute(input);
  }

  @Get(':code')
  @HttpCode(HttpStatus.OK)
  find(@Param() params: any): Promise<Output<GetByCodeAthleteOutput>> {
    return this.getByCodeAthleteService.execute(params.code);
  }

  @Delete(':code')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param() params: any) {
    this.deleteAthleteService.execute(params.code);
  }
}
