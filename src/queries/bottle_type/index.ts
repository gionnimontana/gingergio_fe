import { useQuery } from "@tanstack/react-query";
import { queryCacheTime } from "../../constants/settings";
import { pb } from "../../helpers/pb";

export interface BottleType {
    id: string;
    name: string;
    price: number;
    return_price: number;
    capacity: number;
}

export function useBottleType() {
    return useQuery({
        queryKey: [`bottle_type`],
        queryFn: async (): Promise<BottleType[]> => {
            const response = await pb.collection('bottle_type').getFullList() as any;
            if (Array.isArray(response)) {
                return response as BottleType[];
            }
            return [];

        }, 
        gcTime: queryCacheTime, 
        staleTime: queryCacheTime 
    });
}
  