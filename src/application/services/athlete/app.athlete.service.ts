import { Injectable } from "@nestjs/common";
import { AthleteRepository } from "src/infraestructure/database/memory/repository/app.athlete.repository";

@Injectable()
export abstract class AthleteService<INPUT, OUTPUT> {
    constructor(public readonly athleteRepository: AthleteRepository){}
    abstract execute(input: INPUT): OUTPUT;
}