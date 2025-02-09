'use server'
import sql from 'better-sqlite3';
import {revalidatePath} from "next/cache";

const db = sql('meals.db')

export const saverMeal = async (formData:FormData) => {
    console.log(formData)

    const titleValue = formData.get('title')
    const creatorValue = formData.get('creator')

    db.prepare(`insert into meals(title, creator) values(?,?)`)
        .run(titleValue, creatorValue)
    // redirect('/users') //go to
    revalidatePath('/')


};


type Meal ={
    id:number,
    title:string,
    creator:string
}
export const getMeals = async ():Promise<Meal[]> => {
    return db.prepare<Meal[]>('select * from meals').all() as Meal[]
}