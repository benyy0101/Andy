import { CategoriesResponse, ProblemResultRequest, ProblemResultResponse, ReexamineResponse, WrongProblemsResponse, ReexamineRequest, GamebyCategoryResponse, GamebyCategoryRequest, WrongProblemsReqeust, GameResultResponse, GameResultRequest, } from "../_models/gameA.interface";
import { localAxios } from "./http-commons";

//GAME-001
export const getCategories = async (): Promise<CategoriesResponse> => {
    try{
        const response = await localAxios.get("/game/category");
        return response.data;
    }
    catch (error){
        throw error;
    }
}

//GAME-002
export const getGamebyCategory = async (request: GamebyCategoryRequest): Promise<GamebyCategoryResponse> => {
    try{
        const response = await localAxios.get(`/game/${request.question_category_seq}`);
        return response.data;
    }
    catch (error){
        throw error;
    }
}

//GAME-003
export const getGameResult = async (request:GameResultRequest ) : Promise<GameResultResponse> => {
    try{
        const response = await localAxios.post("/game/result", request);
        return response.data;
    }
    catch (e){
        throw e;
    }
};

//GAME-004
export const sendProblemResult = async (request: ProblemResultRequest) : Promise<ProblemResultResponse> => {
    try{
        const response = await localAxios.post("/game/result", request);
        return response.data;
    }
    catch (error){
        throw error;
    }

}

//GAME-005
export const getWrongProblems = async (request: WrongProblemsReqeust) : Promise<WrongProblemsResponse> => {
    try{
        const response = await localAxios.get(`/game/review/${request.child_seq}`);
        return response.data;
    }
    catch (error){
        throw error;
    }
}

//GAME-006
export const reexamine = async (request: ReexamineRequest) : Promise<ReexamineResponse>=> {
    try{
        const response = await localAxios.patch("/game/review", request);
        return response.data;
    }
    catch (error){
        throw error;
    }
}

