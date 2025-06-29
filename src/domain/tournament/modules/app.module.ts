import { DuoDomain } from "../duo/app.duo.domain";
import { GameDomain } from "../game/app.tournament.domain";
import { AthleteDomain } from "src/domain/athlete/app.athlete.domain";

export abstract class ModuleTournament {
    duosWinner: DuoDomain[];
    duosRecap: DuoDomain[];
    duosDesqualified: DuoDomain[];
    games: GameDomain[];
    allGames: GameDomain[];
    athletes?: AthleteDomain[];
    allDuos?: DuoDomain[];
    abstract init(games: GameDomain[]): void;
    abstract point(game: GameDomain): void;

    constructor(games: GameDomain[]){
        this.games = games;
        this.allGames = games;
    }
}