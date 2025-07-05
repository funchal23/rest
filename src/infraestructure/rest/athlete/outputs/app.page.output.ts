import { PageAthlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";

export class PageOutput {
    total: number;
    page: number;
    size: number;
    hasNext: boolean;

    constructor(page: PageAthlete) {
        this.total = page.total;
        this.page = page.page;
        this.size = page.size;
        this.hasNext = page.hasNext;
    }

    static create(page: PageAthlete): PageOutput {
        return new PageOutput(page);
    }
}