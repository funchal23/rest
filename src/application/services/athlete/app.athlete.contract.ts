import { AthleteDomain } from "src/domain/athlete/app.athlete.domain";
import { GetAthleteInput } from "src/infraestructure/rest/athlete/inputs/app.get-athlete.input";
import { Athlete, PageAthlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";

export interface AtheleteContract {

    create(athlete: AthleteDomain): void;
    getAll(input: GetAthleteInput): Promise<PageAthlete>;
    getByCode(code: string): Promise<Athlete>;
    delete(code: string): void;

}