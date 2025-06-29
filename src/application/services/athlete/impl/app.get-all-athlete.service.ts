import { PageAthlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";
import { AthleteService } from "../app.athlete.service";
import { Injectable } from "@nestjs/common";
import { GetAthleteOutput, GetDetailAthlete } from "src/infraestructure/rest/athlete/outputs/app.get-athlete.output";
import { GetAthleteInput } from "src/infraestructure/rest/athlete/inputs/app.get-athlete.input";
import { Output } from "src/infraestructure/rest/athlete/outputs/app.output";
import { PageOutput } from "src/infraestructure/rest/athlete/outputs/app.page.output";

@Injectable()
export class GetAllAtheleteService extends AthleteService<GetAthleteInput, Promise<Output<GetAthleteOutput>>> {

    async execute(input: GetAthleteInput): Promise<Output<GetAthleteOutput>> {
        const athletes = await this.athleteRepository.getAll(input);
        return Output.create(this.mapperOutput(athletes), {pagination: PageOutput.create(athletes)});
    }


    private mapperOutput(PageAthlete: PageAthlete): GetAthleteOutput {
        const athletesDetail: GetDetailAthlete[] = [];
        PageAthlete.data.forEach((athlete) => {
            const output = GetDetailAthlete.create(athlete);
            athletesDetail.push(output);
        })
        return GetAthleteOutput.create(athletesDetail);
    }

}