import React from "react";
import { UsersContextProvider } from "./Context";
import UsersList from "./UsersList";
import UserDeails from "./UserDetails";

const App = () => {
    const users = [{ id: 1, name: "John" }, { id: 2, name: "Joanna" }];
    return (
        <div className="app">
            <UsersContextProvider users={users}>
                <div className="users-container">
                    <UsersList /><br/>
                    <UserDeails />
                </div>
            </UsersContextProvider>
        </div>
    );
};

export default App;
