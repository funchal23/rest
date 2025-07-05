import { CreateAthleteInput } from 'src/infraestructure/rest/athlete/inputs/app.create-athlete.input';
import { Injectable } from '@nestjs/common';
import { AthleteService } from '../app.athlete.service';
import { AthleteDomain } from 'src/domain/athlete/app.athlete.domain';
import { CreateAthleteOutput } from 'src/infraestructure/rest/athlete/outputs/app.create-athlete.output';
import { Athlete } from 'src/infraestructure/database/memory/entity/app.athlete.entity';
import { Output } from 'src/infraestructure/rest/athlete/outputs/app.output';

@Injectable()
export class CreateAthleteService extends AthleteService<CreateAthleteInput, Promise<Output<CreateAthleteOutput>>> {

    async execute(input: CreateAthleteInput): Promise<Output<CreateAthleteOutput>> {
        const athlete = AthleteDomain.create(input);
        const athleteCreated = await this.athleteRepository.create(athlete);
        const athleteOutput = this.mapperOutput(athleteCreated);
        return Output.create({athlete: athleteOutput}, {_links: athleteOutput.createLinks()});
    }


    private mapperOutput(athlete: Athlete): CreateAthleteOutput {
        return CreateAthleteOutput.create(athlete);
    }
}
