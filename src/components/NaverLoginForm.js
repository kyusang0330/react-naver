import React, {useState} from 'react';
import {UseForm} from 'react-hook-form';

const NaverLoginForm = () => {
    const {register, handleSubmit} = useForm();
    const [data, setData] = useState();
    return (
        <div>
            <form>
                <label></label>
            </form>
        </div>
    )
}

export default NaverLoginForm;