import { useQuery } from "@tanstack/react-query";
import { CategoriesResponse, GamebyCategoryResponse } from "../_models/gameA.interface";
import { getCategories } from "../api/game";
import { useCallback } from "react";

export const useCategories = () => {
    const query = useQuery<CategoriesResponse>({
        queryKey:["categories"],
        queryFn: getCategories
    });

    return query;
};

export const useGamebyCategory = () => {
    const query = useQuery<GamebyCategoryResponse>({
        queryKey:[""]
    })
}
