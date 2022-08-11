import Navbar from "./components/Home/Navbar/Navbar";
import React, {useEffect} from "react";
import ToastNoti from './components/Home/Toast/ToatNoti'
import BodyContent from "./components/Home/Body/BodyContent";
import {toast} from "react-toastify";
import Footer from './components/Home/Footer/Footer'
export default function App() {

    useEffect(() => {
        toast("This website uses cookies to improve user experience!");

    }, [])
    return (
        <div className={"h-screen flex flex-col"}>
            <div>
                <ToastNoti HideProgressBar={true}/>
            </div>
            <header>
                <title>Računko Home</title>
                <Navbar/>
            </header>
            <div>
             <BodyContent/>
            </div>
            <div className={"bg-gray-800 bottom-0 h-4/6"}>
                    <Footer/>
            </div>

        </div>
    )
}
