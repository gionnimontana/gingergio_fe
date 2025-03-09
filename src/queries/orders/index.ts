import { useQuery } from "@tanstack/react-query";
import { queryCacheTime } from "../../constants/settings";
import { pb } from "../../helpers/pb";

export interface Order {
    confirmed: boolean;
    user: string;
    type: 'onsite'|'remote';
    basket: { [key: string]: number };
    name: string;
    surname: string;
    address: string;
    notes: string;
    updates: string;
    desired_delivery: string; // Consider using Date if parsing
    delivered: boolean;
    created: string;
    updated: string;
}

export function useOrders() {
    return useQuery({
        queryKey: [`orders`],
        queryFn: async () => {
            const response = await pb.collection('orders').getFullList() as any;
            if (Array.isArray(response)) {
                return response as Order[];
            }
        }, 
        gcTime: queryCacheTime, 
        staleTime: queryCacheTime 
    });
}
  