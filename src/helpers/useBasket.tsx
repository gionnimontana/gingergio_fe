import { useEffect, useState } from "react";
import { BasketItem } from "../types/basket";
import { makeObservable } from "./makeObservable";

const basketKey = 'basket';

const basketStore = makeObservable([]);

const useBasket = () => {
    const [basket, setBasket] = useState<BasketItem[]>(basketStore.get());

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
        add: (item: BasketItem) => {
            const newBasket = [...basketStore.get(), item];
            basketStore.set(newBasket);
            localStorage.setItem(basketKey, JSON.stringify(newBasket));
        },
        remove: (index: number) => {
            const newBasket = [...basketStore.get()];
            newBasket.splice(index, 1);
            basketStore.set(newBasket);
            localStorage.setItem(basketKey, JSON.stringify(newBasket));
        },
        clear: () => {
            basketStore.set([]);
            localStorage.setItem(basketKey, JSON.stringify([]));
        }
    };
}

export default useBasket;