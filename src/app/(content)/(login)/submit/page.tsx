import {FC} from "react";
import {Params} from "next/dist/server/request/params";

type Props = {
    searchParams:Promise<{
        [key:string]:string | string [] | undefined
    }>
}

const SubmitPage:FC<Props> = async ({searchParams}) => {
    const data = await searchParams
    return (
        <>
            SubmitPage { data.name}
        </>
    );
};
export default SubmitPage