import { CreateAthleteInput } from "src/infraestructure/rest/athlete/inputs/app.create-athlete.input";
import { v4 as uuidv4 } from 'uuid';

export class AthleteDomain {
    name: string;
    surname: string;
    document: string;
    code: string;

    constructor(readonly input: CreateAthleteInput) {
        this.name = input.name;
        this.surname = input.surname;
        this.document = input.document;
        this.code = uuidv4()
    }


    static create(input: CreateAthleteInput): AthleteDomain {
        return new AthleteDomain(input);
    }
}