import React, {useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastNoti from '../components/Home/Toast/ToatNoti';
const Login = () => {
    useEffect(() => {
        //Check if there is a cookie otherwise stay on the login page and show a toast message
        toast("Login required!");
    }, [])
    return (
    <div>
        <h2>Login page</h2>
        <div>
            <ToastNoti HideProgressBar={false} />
        </div>
    </div>
);
}
export default Login;