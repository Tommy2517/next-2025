import {getAllCars} from "@/services/api.service";
import Car from "@/components/Cars/Car";
import React from "react";

const Cars = async () => {
    const cars = await getAllCars()
    return (
        <div>
            {cars.reverse().map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;