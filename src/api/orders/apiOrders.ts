import { UserStore } from "helpers/useUser/useUser";
import { pb } from "../../helpers/pb";
import { BasketStore } from "../../helpers/useBasket";

interface OrderOptions {
    delivery?: 'onsite' | 'remote';
    name?: string;
    surname?: string;
    address?: string;
    note?: string;
    deliveryDate?: Date;
    pickupDate?: Date;
}

export const confirmOrder = async (options: OrderOptions, user: UserStore | undefined, basket: BasketStore): Promise<boolean> => {
    if (!user || !user.model || !user.model.id) throw 'genericError';
    if (!options.delivery) throw 'genericError';
    if (!options.name) throw 'nameError';
    if (!options.surname) throw 'surnameError';
    if (options.delivery === 'remote' && !options.address) throw 'addressError';
    if (options.delivery === 'onsite' && !options.pickupDate) throw 'dateError';
    let success = false;
    try {
        const date = options.delivery === 'onsite' ? options.pickupDate : options.deliveryDate;
        const content = Object.keys(basket).reduce((acc: {[key: string]: number}, key: string) => {
            acc[key] = basket[key].quantity;
            return acc;
        }, {});

        const data: any = {
            "user": user.model.id,
            "name": options.name,
            "surname": options.surname,
            "basket": content,
            "confirmed": false,
            "delivered": false,
            "updates": null,
            "type": options.delivery,
        }
        
        if (options.delivery === 'remote') {
            data['address'] = options.address;
        }
        if (options.note) {
            data['note'] = options.note;
        }
        if (date) {
            data['desired_delivery'] = date;
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