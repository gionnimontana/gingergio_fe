import { useQuery } from "@tanstack/react-query";
import { queryCacheTime } from "../../constants/settings";
import { pb } from "../../helpers/pb";

export function useRecipes() {
    return useQuery({
        queryKey: [`recipes`],
        queryFn: async () => {
            const response = pb.collection('recipes').getFullList();
            return response;
        }, 
        gcTime: queryCacheTime, 
        staleTime: queryCacheTime 
    });
}
  