export enum Category {
    GENERAL = "general",
    HISTORY = "history",
    GEOGRAPHY = "geography",
    SCIENCE = "science",
    SPORT = "sport",
}

export interface IFact {
    id?: string;
    category?: Category;
    question: string;
    answer: string;
}
