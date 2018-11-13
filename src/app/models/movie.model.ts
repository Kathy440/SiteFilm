export class Movie {
    synopsis: string;
    image: string;
    loveIts: number;
    dontLoveIts: number;
    constructor(public title: string, public author: string, public type: string) {

    }
}