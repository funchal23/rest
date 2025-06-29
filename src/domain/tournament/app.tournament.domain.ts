import { CreateTournamentInput } from "src/infraestructure/rest/tournament/input/app.create-tournament.input";
import { ModuleTournament } from "./modules/app.module";
import { GameDomain } from "./game/app.tournament.domain";

export class TournamentDomain {
    name: string;
    description: string;
    dateCreation: Date;
    dateEvent: Date;
    tournament: ModuleTournament;

    constructor(input: CreateTournamentInput) {
        this.name = input.name;
        this.description = input.description;
        this.dateEvent = input.dateEvent;
        this.tournament = input.module;
        this.dateCreation = new Date();
        this.validCreate(this);
    }

    public init(allGames: GameDomain[]) {
        this.validInit(this);
        this.tournament.init(allGames);
    }

    static create(input: CreateTournamentInput) {
        return new TournamentDomain(input);
    }

    private validCreate(tournament: TournamentDomain) {
        if (tournament.dateEvent < new Date()) {
            throw new Error('Data do evento não pode ser menor que a data atual');
        }
    }

    private validInit(tournament: TournamentDomain) {
        if (tournament.dateEvent != new Date()) {
            throw new Error('Data do evento incorreto, garanta que você esta iniciando no dia correto ');
        }
    }
}