import { Injectable } from "@nestjs/common";
import { AthleteService } from "../app.athlete.service";
import { GetByCodeAthleteOutput } from "src/infraestructure/rest/athlete/outputs/app.get-by-code-athlete.output";
import { Athlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";
import { Output } from "src/infraestructure/rest/athlete/outputs/app.output";

@Injectable()
export class GetByCodeAthleteService extends AthleteService<string, Promise<Output<GetByCodeAthleteOutput>>> {

    async execute(code: string): Promise<Output<GetByCodeAthleteOutput>> {
        const athlete = await this.athleteRepository.getByCode(code);
        return Output.create({athlete: this.mapperOutput(athlete)}, {});
    }


    private mapperOutput(athlete: Athlete): GetByCodeAthleteOutput {
        return GetByCodeAthleteOutput.create(athlete);
    }
}