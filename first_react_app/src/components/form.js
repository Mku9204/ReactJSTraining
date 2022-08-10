import React from 'react'
import Button from './button';

const myForm = () => {
    return (
        <form>
            <label for="name">Name</label>
            <input type="text"
                name="name" id="" placeholder="Name" />
            <label for="surname">Surname</label>
            <input type="text"
                name="surname" id="" placeholder="Surname" />
            <label for="email">email</label>
            <input type="email"
                name="email" id="" placeholder="email address" />
            <label for="password">Password</label>
            <input type="password"
                name="password" id="" placeholder="password" />
            <Button name="submit" msg="Form is Submit successfully" />
        </form>
    );
};
export default myForm;