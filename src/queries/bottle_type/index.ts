import { useQuery } from "@tanstack/react-query";
import { queryCacheTime } from "../../constants/settings";
import { pb } from "../../helpers/pb";

export function useBottleType() {
    return useQuery({
        queryKey: [`bottle_type`],
        queryFn: async () => {
            const response = pb.collection('bottle_type').getFullList();
            return response;
        }, 
        gcTime: queryCacheTime, 
        staleTime: queryCacheTime 
    });
}
  