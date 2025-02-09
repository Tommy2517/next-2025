import Form from "next/form";
import {getMeals, saverMeal} from "@/saver actions/saverActions";

const LoginPage = async () => {
    const mealsArray = await getMeals()
    return (
        <>
            {/*<form action="/submit">*/}
            {/*    <input type="text" name={'name'}/>*/}
            {/*    <button>send</button>*/}
            {/*</form>*/}
            {/*<Form action={'/submit'}>*/}
            {/*    <input type="text" name={'name'}/>*/}
            {/*    <button>send</button>*/}

            {/*</Form>*/}
            <Form action={saverMeal}>
                <input type="text" name={'title'}/>
                <input type="text" name={'creator'}/>
                <button>send</button>

            </Form>
            <div>
                {mealsArray.map(meal =>
                    <div key={meal.id}>
                        title - {meal.title}
                        <br/>
                        creator - {meal.creator}
                    </div>)}
            </div>
        </>
    );
};
export default LoginPage