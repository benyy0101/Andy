import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { MyInfoByDateRequest, MyInfoByMonthRequest, MyInfoByMonthResponse, MyInfoByDateResponse } from "../_models/mypage.interface"
import { getMyInfoByDate, getMyInfoByMonth } from "../api/mypage"

export const useMypageByMonth = (data: MyInfoByMonthRequest | null) =>{
    
    const query = useQuery<MyInfoByMonthResponse>({
        queryKey:["mypageByMonth"],
        queryFn: () => getMyInfoByMonth(data),
    })

    useEffect(() => {
        if (data) {
          query.refetch();
        }
      }, [data, query]);

    return query;
}

export const useMypageByDate = (data:MyInfoByDateRequest) => {
    const query = useQuery<MyInfoByDateResponse>({
        queryKey:["mypageByDate"],
        queryFn: () => getMyInfoByDate(data),
    });

    useEffect(() => {
        if (data) {
          query.refetch();
        }
      }, [data, query]);

    return query;
}