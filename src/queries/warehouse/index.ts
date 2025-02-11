import { useQuery } from "@tanstack/react-query";
import { queryCacheTime } from "../../constants/settings";
import { pb } from "../../helpers/pb";
import { BasketItem } from "../../types/basket";

interface Warehouse {
    id: string;
    expand: {
        bottle_type: {
            id: string;
            name: string;
            price: number;
            return_price: number;
            capacity: number;
        };
        recipe: {
            id: string;
            name: string;
        };
    }
    bottle_type: string;
    recipe: string;
    quantity: number;
    age_of_filling: number;
    age_of_maturity: number;
    age_of_expiring: number;
}

export function useWarehouse() {
    return useQuery({
        queryKey: [`warehouse`],
        queryFn: async (): Promise<Warehouse[]> => {
            const response = pb.collection('warehouse').getFullList({
                expand: 'bottle_type,recipe'
            }) as any;
            return response as Warehouse[];
        }, 
        gcTime: queryCacheTime, 
        staleTime: queryCacheTime 
    });
}

export const getNameAndFormatWarehouse = (warehouse: Warehouse[] | undefined, recipeName: string, formatName: string): number => {
    if (!warehouse) {
        return 0;
    }
    const targets = warehouse.filter((wh) => wh.expand.recipe.name === recipeName && wh.expand.bottle_type.name === formatName);
    const quantity = targets.reduce((acc, curr) => acc + curr.quantity, 0);
    return quantity;
}

export const checkIfNonWarehouseProducts = (warehouse: Warehouse[] | undefined, basketList: BasketItem[]): boolean => {
    let nonWarehouseProducts = false;
    basketList.forEach((item) => {
        const wareHouseQuantity = getNameAndFormatWarehouse(warehouse, item.name, item.format);
        const orderQuantity = item.quantity;
        if (wareHouseQuantity < orderQuantity) {
            nonWarehouseProducts = true;
        }
    });
    return nonWarehouseProducts;
}