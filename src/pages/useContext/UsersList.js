import React, { useContext } from "react";
import clsx from "clsx";

import { UsersContext } from "./Context";

const UsersList = (props) => {
    const usersContext = useContext(UsersContext);

    // @ts-ignore
    const { users, selectedUser, setSelectedUser } = usersContext;

    return (
        <div>
            <div>Users: </div>
            {users.map((user) => {
                // compose class name
                const userItemClassNames = clsx("user-item", {
                    "user-item-selected": user.id === selectedUser.id
                });

                return (
                    <div
                        className={userItemClassNames}
                        key={user.id}
                        onClick={() => setSelectedUser(user)}
                    >
                        {user.name}
                    </div>
                );
            })}
        </div>
    );
};

export default UsersList;
