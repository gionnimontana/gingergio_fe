import { useQuery } from "@tanstack/react-query";
import { queryCacheTime } from "../../constants/settings";
import { pb } from "../../helpers/pb";

export function useWarehouse() {
    return useQuery({
        queryKey: [`warehouse`],
        queryFn: async () => {
            const response = pb.collection('warehouse').getFullList({
                expand: 'bottle_type,recipe',
            });
            return response;
        }, 
        gcTime: queryCacheTime, 
        staleTime: queryCacheTime 
    });
}
  