import { UserList } from "../../components/user-list/users";
import { USERS } from "../../constants";

export const Main = () => {
    return (
        <div>
            <h1>Main Page</h1>
            <UserList users = {USERS} />
        </div>
    )
};