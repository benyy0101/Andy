export interface CategoriesResponse {
    categories: Category[];
}

export interface Category{
    question_category_seq: number;
    question_category_name: string;
}

export interface GamebyCategoryRequest {
    question_category_seq: number;
}

export interface GamebyCategoryResponse {
    problems: Problem[];
}

export interface Problem{
    question_seq: number;
    question_picture: string;
    question_name:string;
}

