export class User {
    name: string;
    surname: string;
    age: number;
}

export class Poll {
    authorId: string;
    name: string;
    options: string[];
    votes: number[];
}