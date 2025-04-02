import { useQuery } from "@tanstack/react-query";
import { queryCacheTime } from "../../constants/settings";
import { pb } from "../../helpers/pb";

export function useProducts() {
    return useQuery({
        queryKey: [`products`],
        queryFn: async () => {
            const response = pb.collection('products').getFullList();
            return response;
        }, 
        gcTime: queryCacheTime, 
        staleTime: queryCacheTime 
    });
}
  