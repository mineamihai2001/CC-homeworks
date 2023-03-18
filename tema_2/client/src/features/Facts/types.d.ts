export enum Category {
    GENERAL = "general",
    HISTORY = "history",
    GEOGRAPHY = "geography",
    SCIENCE = "science",
    SPORT = "sport",
}

export interface IFact {
    category?: Category;
    question: string;
    answer: string;
}
