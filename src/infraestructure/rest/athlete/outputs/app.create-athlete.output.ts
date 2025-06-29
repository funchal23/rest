import { Athlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";

export class CreateAthleteOutput {
    name: string;
    code: string;

    constructor(athlete: Athlete) {
        this.name = athlete.name;
        this.code = athlete.code;
    }


    static create(athlete: Athlete): CreateAthleteOutput {
        return new CreateAthleteOutput(athlete);
    }
}