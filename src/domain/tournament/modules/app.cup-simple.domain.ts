import { GameDomain } from "../game/app.tournament.domain";
import { ModuleTournament } from "./app.module";

export class CupSimpleDomain extends ModuleTournament {

    constructor(allGames: GameDomain[]) {
        super(allGames);
    }

    init(allGames: GameDomain[]): void {
        const tournament = new CupSimpleDomain(allGames);
    }

    point(game: GameDomain): void {
        const winner = game.duos.find(duo => duo.code === game.codeDuoWinner);
        const loser = game.duos.find(duo => duo.code !== game.codeDuoWinner);

        if (!winner || !loser) {
            throw new Error('Não foi possível determinar o vencedor ou o perdedor. Verifique os dados do jogo.');
        }

        this.duosDesqualified.push(loser);
        this.duosWinner.push(winner);

        this.validNextStep();
    }

    private validNextStep(){
    }
}