import { useQuery } from "@tanstack/react-query";
import { CategoriesResponse, GamebyCategoryResponse } from "../_models/gameA.interface";
import { getCategories, getGamebyCategory } from "../api/game";
import { useCallback } from "react";

export const useCategories = () => {
    const query = useQuery<CategoriesResponse>({
        queryKey:["categories"],
        queryFn: getCategories
    });

    return query;
};

export const useGamebyCategory = (question_category_seq: number) => {
    const query = useQuery<GamebyCategoryResponse>({
        queryKey:["game",{"type":"A"}],
        queryFn: () => getGamebyCategory({question_category_seq}),
    })
}

export const useProblemResult = () =>{

};

export const useWrongProblems = () =>{

};

export const useReexamine = () =>{

};

