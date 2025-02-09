'use client'
import {FC, useState} from "react";
import {carDelete, updaterCar} from "@/server-actions/serverActions";
import Form from "next/form";
import {ICar} from "@/models/ICars";

type Props = {
    car:ICar & {id:string}
}
const Car:FC<Props> = ({car}) => {
    const [update, setUpdate] = useState<boolean>(false)
    return (
        <div className={'my-2'}>
            id - {car.id} ||
            brand - {car.brand} ||
            price - {car.price} ||
            <button className={'bg-red-900 rounded ml-3 px-2'} onClick={()=>{carDelete(car.id)}}>Delete</button>
            <button className={'bg-yellow-600 rounded ml-3 px-2'} onClick={()=>{setUpdate(!update)}}>Update</button>
            {update &&
                <Form action={updaterCar} className={'flex flex-col w-32 gap-3 text-red-400'}>
                    <input type="hidden" name="id" value={car.id}/>
                    <input type="text" name={'brand'} placeholder={car.brand}/>
                    <input type="text" name={'price'} placeholder={car.price + ''}/>
                    <input type="text" name={'year'} placeholder={car.year + ''}/>
                    <button>Update</button>
                </Form>
            }
        </div>
    );
};

export default Car;