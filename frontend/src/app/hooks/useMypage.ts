import { useQuery } from "@tanstack/react-query"
import { MyInfoByDateRequest, MyInfoByMonthRequest, MyInfoByMonthResponse } from "../_models/mypage.interface"
import { getMyInfoByDate, getMyInfoByMonth } from "../api/mypage"

export const useMypageByMonth = (data: MyInfoByMonthRequest | null) =>{
    
    const query = useQuery<MyInfoByMonthResponse>({
        queryKey:["mypageByMonth"],
        queryFn: () => getMyInfoByMonth(data),
    })

    return query;
}

export const useMypageByDate = (data:MyInfoByDateRequest) => {
    const query = useQuery<MyInfoByDateRequest>({
        queryKey:["mypageByDate"],
        queryFn: () => getMyInfoByDate(data),
    });
}