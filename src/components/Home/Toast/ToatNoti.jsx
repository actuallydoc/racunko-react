import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ToatNoti = ({HideProgressBar}) => {
    return (
        <div className={"absolute"}>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={HideProgressBar}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
            />
        </div>
    )
    }


export default ToatNoti;