import { Input, Button } from '@mui/material';
import { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


const Resetpassword = () => {

    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const params = useParams;
    const token = params().token
    const id = params().id

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password1 === password2) {
            Axios.post(`${process.env.REACT_APP_BASE_URL}/changepassword/${token}/${id}`, {
                password: password1
            }).then(res => alert(res.data.msg))
        } else {
            alert('passwords does not match ');

        }
        setPassword1('')
        setPassword2('')
    }
    return <div className='resetpassword'>
        <form className='form' onSubmit={handleSubmit}>
            <Input type='password' placeholder='Enter new password' value={password1} onChange={(e) => setPassword1(e.target.value)} required />
            <Input type='password' placeholder='Confirm password' value={password2} onChange={(e) => setPassword2(e.target.value)} required />
            <Button type='submit'>Reset Password</Button>
        </form>
    </div>
}


export default Resetpassword;