import {getAllUsers} from "@/services/api.service";
import User from "@/components/Users/User";

const Users = async () => {
    const users = await getAllUsers()
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>
            )}
        </div>
    );
};

export default Users;