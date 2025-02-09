'use server'
import {revalidatePath} from "next/cache";
import {createCar, deleteCar, updateCar} from "@/services/api.service";
import {ICar} from "@/models/ICars";


export const saveCar = async (formData:FormData) => {
    const car:ICar = {
        brand:formData.get('brand') as string,
        price:Number(formData.get('price')),
        year:Number(formData.get('year')),
    }

    const createdCar = await createCar(car)
    console.log(createdCar)
    revalidatePath('/')
};
export const updaterCar = async (formData:FormData) => {
    const id = formData.get('id')
    const car:ICar = {
        brand:formData.get('brand') as string,
        price:Number(formData.get('price')),
        year:Number(formData.get('year')),
    }

    const updatedCar = await updateCar(car,`${id}`)
    console.log(updatedCar)
    revalidatePath('/')
};

export const carDelete = async (id:number) => {
    const deletedCar = await deleteCar(`${id}`);
    console.log(deletedCar)
    revalidatePath('/')
}
