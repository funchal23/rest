import { Athlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";

export class GetByCodeAthleteOutput {
    name: string;
    surname: string;
    document: string;
    code: string;

    constructor(athlete: Athlete) {
        this.name = athlete.name;
        this.surname = athlete.surname;
        this.document = athlete.document;
        this.code = athlete.code;
    }

    static create(athlete: Athlete): GetByCodeAthleteOutput {
        return new GetByCodeAthleteOutput(athlete);
    }
}