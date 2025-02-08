import {FC} from "react";
import {SearchParams} from "next/dist/server/request/search-params";

type Props = {
    params:Promise<{id:string}>,
    searchParams:Promise<SearchParams>
}

const UsersPage  :FC<Props> = async ({params, searchParams}) => {
    const {data} = await searchParams
    let obj = null
    if (typeof data === "string")
        obj = JSON.parse(data) as IUser

    const {id} = await params
    return (
        <>
            user page {id}
            <br/>
            {obj && obj.email}
        </>
    );
};
export default UsersPage;