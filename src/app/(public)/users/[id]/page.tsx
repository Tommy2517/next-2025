import {FC} from "react";

type Props = {
    params:{id:string}
}

const Page:FC<Props> = ({params}) => {
    const {id} = params
    console.log(id)
    return (
        <div className={'bg-gray-500 h-64 w-1/2'}>
            user by id {id}
        </div>
    );
};

export default Page;