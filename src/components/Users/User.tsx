import {FC} from "react";
import Link from "next/link";

type Props = {
    user: IUser
}
const User: FC<Props> = ({user}) => {

    return (
        <div>
            <Link href={{pathname: '/users/' + user.id, query: {data: JSON.stringify(user)}}}>
                id - {user.id} ---
                email - {user.email}
            </Link>
        </div>
    );
};

export default User;