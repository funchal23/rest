import { DuoDomain } from "../duo/app.duo.domain";

export class GameDomain {
    duos: DuoDomain[];
    codeDuoWinner: number;
    codeOrder?: number;
}