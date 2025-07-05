import { Athlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";
import { Link } from "./app.link.output";

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

    public createLinks(): Link[]{
        return [
            {rel: 'self', href: `/athlete/${this.code}`, method: 'GET'},
            {rel: 'delete', href: `/athlete/${this.code}`, method: 'DELETE'}
        ]
    }
}