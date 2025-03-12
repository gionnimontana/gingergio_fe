import { UserStore } from "helpers/useUser/useUser";
import { pb } from "../../helpers/pb";
import { BasketStore } from "../../helpers/useBasket";

export interface OrderOptions {
    delivery?: 'onsite' | 'remote';
    name?: string;
    surname?: string;
    address?: string;
    note?: string;
    desired_delivery?: Date;
}

export const confirmOrder = async (options: OrderOptions, user: UserStore | undefined, basket: BasketStore): Promise<boolean> => {
    if (!user || !user.model || !user.model.id) throw 'genericError';
    if (!options.delivery) throw 'genericError';
    if (!options.name) throw 'nameError';
    if (!options.desired_delivery) throw 'dateError';
    if (options.delivery === 'remote' && !options.address) throw 'addressError';
    let success = false;
    try {
        const content = Object.keys(basket).reduce((acc: {[key: string]: number}, key: string) => {
            acc[key] = basket[key].quantity;
            return acc;
        }, {});

        const data: any = {
            "user": user.model.id,
            "name": options.name,
            "basket": content,
            "confirmed": false,
            "delivered": false,
            "updates": null,
            "type": options.delivery,
        }

        if (options.surname) {
            data['surname'] = options.surname;
        }
        
        if (options.delivery === 'remote') {
            data['address'] = options.address;
        }
        if (options.note) {
            data['note'] = options.note;
        }
        if (options.desired_delivery) {
            data['desired_delivery'] = options.desired_delivery;
        }
        
        const response = await pb.collection('orders').create(data);
        if (!response) throw 'genericError';
        success = true;
    } catch (e: any) {
        throw 'genericError';
    } finally {
        return success;
    }
}