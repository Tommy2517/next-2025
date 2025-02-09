import Form from "next/form";
import {saveCar} from "@/server-actions/serverActions";
import Cars from "@/components/Cars/Cars";

const LoginPage = async () => {
    return (
        <>
            <Form action={saveCar} className={'flex flex-col w-32 gap-3 text-red-400'}>
                <input type="text" name={'brand'}/>
                <input type="text" name={'price'}/>
                <input type="text" name={'year'}/>
                <button>send</button>
            </Form>
            <div>
                <Cars/>
            </div>
        </>
    );
};
export default LoginPage