import { Pageable } from "./gameA.interface";

interface Exam {
  exam_score: number;
  // 게임 카테고리 이름
  question_category_name: string;
  // 게임 A, 게임 B
  mode: string;
}

// MYPAGE-001
export interface MyInfoByMonthRequest {
  child_seq: number;
  year: number;
  month: number;
}

export interface MyInfoByMonthResponse {
  exams: string[];
}

// MYPAGE-002
export interface MyInfoByDateRequest {
  child_seq: number;
  year: number;
  month: number;
  day: number;
}

export interface MyInfoByDateResponse {
  page: Pageable;
  exam: Exam[];
}
