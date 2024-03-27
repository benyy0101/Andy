import {
  ProblemResultResponse,
  ReexamineResponse,
  WrongProblemsResponse,
  ReexamineRequest,
  GamebyCategoryResponse,
  GamebyCategoryRequest,
  WrongProblemsReqeust,
  GameResultResponse,
  GameResultRequest,
  Category,
} from "../_models/gameA.interface";
import { gameAxios, localAxios, quizAxios } from "./http-commons";

// GAME-001
export const getCategories = async (): Promise<Category[]> => {
  const response = await quizAxios.get("/game/category");
  return response.data;
};

// GAME-002
export const getGamebyCategory = async (
  request: GamebyCategoryRequest,
): Promise<GamebyCategoryResponse> => {
  const response = await quizAxios.get(
    `/game/${request.question_category_seq}`,
  );
  return response.data;
};

// GAME-003
export const sendProblemResult = async (
  request: FormData,
): Promise<ProblemResultResponse> => {
  const response = await gameAxios.post("/game", request);
  return response.data;
};

// GAME-004
export const getGameResult = async (
  request: GameResultRequest,
): Promise<GameResultResponse> => {
  const response = await quizAxios.post("/game/result", request);
  return response.data;
};

// GAME-005
export const getWrongProblems = async (
  request: WrongProblemsReqeust,
): Promise<WrongProblemsResponse> => {
  const response = await localAxios.get(`/game/review/${request.child_seq}`);
  return response.data;
};

// GAME-006
export const reexamine = async (
  request: ReexamineRequest,
): Promise<ReexamineResponse> => {
  const response = await localAxios.patch("/game/review", request);
  return response.data;
};
