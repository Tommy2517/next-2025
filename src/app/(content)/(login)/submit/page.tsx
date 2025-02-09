import {FC} from "react";

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