import { Athlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";

export class DuoDomain {
    athletes: Athlete[];
    code: number;
    numberDefeats: number = 0;

    public defeat(){
        this.numberDefeats = this.numberDefeats + 1;
    }
}