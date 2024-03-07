import { CategoriesResponse } from "../_models/gameA.interface";
import { localAxios } from "./http-commons";

export const getCategories = async () => {
    try{
        const response = await localAxios.get("/game/category");
        return response.data;
    }
    catch (error){
        throw error;
    }
}

export const getGamebyCategory = async (question_category_seq: number) => {
    try{
        const response = await localAxios.get(`/game/${question_category_seq}`);
        return response.data;
    }
    catch (error){
        throw error;
    }
}
