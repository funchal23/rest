import { Injectable } from "@nestjs/common";
import { AthleteService } from "../app.athlete.service";

@Injectable()
export class DeleteAthleteService extends AthleteService<string, void> {

    async execute(code: string): Promise<void> {
        this.athleteRepository.delete(code);
    }
}