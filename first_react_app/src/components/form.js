import React from 'react'
import Button from './button';

const MyForm = () => {
    return (
        <form>

            <input type="text" name="name" placeholder="Name" />
            <br />
            <input type="text" name="surname" placeholder="Surname" />
            <br />
            <input type="email" name="email" placeholder="email address" />
            <br />
            <input type="password" name="password" placeholder="password" />
            <br />
            <Button name="submit" msg="Form is Submit successfully" />
        </form>
    );
}
export default MyForm;