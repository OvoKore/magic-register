import { Card } from "./Card";

export interface Collection {
    id: number;
    name: string;
    cards: Card[];
}