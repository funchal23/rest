import { PageAthlete } from "src/infraestructure/database/memory/entity/app.athlete.entity";

export class PageOutput {
    total: number;
    page: number;
    size: number;

    constructor(page: PageAthlete) {
        this.total = page.total;
        this.page = page.page;
        this.size = page.size;
    }

    static create(page: PageAthlete): PageOutput {
        return new PageOutput(page);
    }
}