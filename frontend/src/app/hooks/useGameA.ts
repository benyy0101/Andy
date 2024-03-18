import { useQuery } from "@tanstack/react-query";
import { CategoriesResponse, GameResultRequest, GameResultResponse, GamebyCategoryResponse, ProblemResultRequest, ProblemResultResponse, ReexamineRequest, ReexamineResponse, WrongProblemsReqeust, WrongProblemsResponse } from "../_models/gameA.interface";
import { getCategories, getGamebyCategory,getGameResult, getWrongProblems, reexamine, sendProblemResult } from "../api/game";

// GAME-001
export const useCategories = () => {
    const query = useQuery<CategoriesResponse>({
        queryKey:["categories"],
        queryFn: getCategories
    });

    return query;
};

// GAME-002
export const useGamebyCategory = (question_category_seq: number) => {
    const query = useQuery<GamebyCategoryResponse>({
        queryKey:["game",{"type":"A"}],
        queryFn: () => getGamebyCategory({question_category_seq}),
    })

    return query;
}

// GAME-003
export const useProblemResult = (user: string, data: GameResultRequest) =>{
    const query = useQuery<GameResultResponse>({
        queryKey:["problemResult",{gameData: data, user}],
        queryFn: () => getGameResult(data),

    });
    return query;
};

// GAME-004
export const useSendResult = (user: string, data: ProblemResultRequest) =>{
    const query = useQuery<ProblemResultResponse>({
        queryKey:["sendResult",{resultData: data, user}],
        queryFn: () => sendProblemResult(data), 
    });
    return query;
}

// GAME-005: Needs to be pagninated
export const useWrongProblems = (user:string, data: WrongProblemsReqeust) =>{
    const query = useQuery<WrongProblemsResponse>({
        queryKey:["wrongProblems",{user, data}],
        queryFn: () => getWrongProblems(data),
    });
    return query;
};

// GAME-006
export const useReexamine = (user:string, data: ReexamineRequest) =>{
    const query = useQuery<ReexamineResponse>({
        queryKey:["reexamine"],
        queryFn: () => reexamine(data),
    });
    return query;
};

