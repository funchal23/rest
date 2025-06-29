import { ModuleTournament } from "src/domain/tournament/modules/app.module";

export class CreateTournamentInput {
    name: string;
    description: string;
    dateEvent: Date;
    module: ModuleTournament;
}