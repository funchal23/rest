import { Athlete, PageAthlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";

export class GetAthleteOutput {
    athletes: GetDetailAthlete[];

    constructor(athletes: GetDetailAthlete[]) {
        this.athletes = athletes;
    }

    static create(athletes: GetDetailAthlete[]): GetAthleteOutput {
        return new GetAthleteOutput(athletes);
    }
}

export class GetDetailAthlete {
    name: string;
    code: string;
    meta: any;

    constructor(athlete: Athlete) {
        this.name = athlete.name;
        this.code = athlete.code;
        this.meta = this.createLinks();
    }

    static create(athlete: Athlete): GetDetailAthlete {
        return new GetDetailAthlete(athlete);
    }

    private createLinks() {
        return {
            _links: [
                { rel: 'delete', href: `/athlete/${this.code}`, method: 'DELETE' }
            ]
        }
    }
}