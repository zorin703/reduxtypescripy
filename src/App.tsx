import React from 'react';
import UserList from "./componenets/UserList";
import TodoList from "./componenets/TodoList";

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoList/>
        </div>
    );
};

export default App;