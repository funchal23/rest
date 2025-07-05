import { Link } from "src/infraestructure/rest/athlete/outputs/app.link.output";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Athlete {

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    document: string;

    @Column()
    code: string;
}

export class PageAthlete {
    data: Athlete[];
    total: number;
    page: number;
    size: number;
    hasNext: boolean;
    links: Link[];

    constructor(data: Athlete[], total: number, page:number, size:number, links: Link[]){
        const totalPages = Math.ceil(total / size);
        this.hasNext = page < totalPages;
        this.data = data;
        this.total = total;
        this.page = page;
        this.size = size;
        this.links = links;
    }

    static create(data: Athlete[], total: number, page:number, size:number, links: Link[]){
        return new PageAthlete(data, total, page, size, links);
    }
}