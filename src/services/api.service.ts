import {ICar} from "@/models/ICars";

const baseUrl = 'http://owu.linkpc.net/carsAPI/v1'

export const getAllCars = async (): Promise<ICar[]> => {
    return await fetch(baseUrl + '/cars')
        .then(res => res.json())
};

export const createCar = async (data: ICar): Promise<ICar> => {
    return await fetch(baseUrl + '/cars', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())
}
export const updateCar = async (data: ICar, id:string): Promise<Response> => {
    return await fetch(baseUrl + '/cars/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
}

export const deleteCar = async (id: string): Promise<Response> => {
    return await fetch(baseUrl + '/cars/' + id, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"}
    })
};
