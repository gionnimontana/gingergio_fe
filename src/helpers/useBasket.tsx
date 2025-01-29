import { useEffect, useState } from "react";
import { BasketItem } from "../types/basket";
import { makeObservable } from "./makeObservable";
import { BottleType } from "../queries/bottle_type";

const basketKey = 'basket';

const initialBasket = localStorage.getItem(basketKey) ? JSON.parse(localStorage.getItem(basketKey)!) : {};
const basketStore = makeObservable(initialBasket);

export interface BasketStore {
    [nameAndFormat: string]: BasketItem
}

const useBasket = () => {
    const [basket, setBasket] = useState<BasketStore>(basketStore.get());

    useEffect(() => {
        const storedBasketRaw = localStorage.getItem(basketKey);
        const storedBasket = storedBasketRaw ? JSON.parse(storedBasketRaw) : [];
        if (storedBasket) {
            basketStore.set(storedBasket);
        }
        return basketStore.subscribe(setBasket)
    }, []);

    return {
        basket,
        nonEmptyList: Object.values(basket).filter(item => item.quantity > 0),
        getTotalItemNumber: () => Object.values(basket).reduce((acc, item) => acc + item.quantity, 0),
        update: (basketItem: BasketItem) => {
            const key = `${basketItem.name}-${basketItem.format}`;
            basketStore.set({ ...basketStore.get(), [key]: basketItem });
            localStorage.setItem(basketKey, JSON.stringify(basketStore.get()));
        },
        isEmpty: () => {
            return Object.values(basket).reduce((acc, item) => acc + item.quantity, 0) === 0;
        },
        getTotalPrice: () => Object.values(basket).reduce((acc, item) => acc + item.price * item.quantity, 0),
        getTotalCashback: () => Object.values(basket).reduce((acc, item) => acc + item.cashback * item.quantity, 0),
        getPriceByName: (name: string) => {
            return Object.values(basket).filter(item => item.name === name).reduce((acc, item) => acc + item.price * item.quantity, 0);
        },
        getCashbackByName: (name: string) => {
            return Object.values(basket).filter(item => item.name === name).reduce((acc, item) => acc + item.cashback * item.quantity, 0);
        },
        getItemQuantity: (name: string, format: string) => {
            const key = `${name}-${format}`;
            return basket[key] ? basket[key].quantity : 0;
        },
        fromBottleTypeToBasketItem: (bottleType: BottleType, name: string, quantity: number): BasketItem => {
            return {
                name,
                format: bottleType.name,
                price: bottleType.price,
                cashback: bottleType.return_price,
                quantity
            };
        },
    };
}

export default useBasket;