import Navbar from "./components/Home/Navbar/Navbar";
import React, {useEffect} from "react";
import ToastNoti from './components/Home/Toast/ToatNoti'
import BodyContent from "./components/Home/Body/BodyContent";
import {toast} from "react-toastify";
import Footer from './components/Home/Footer/Footer'
import News from "./components/Home/News/News";
import {Divider} from "@mui/material";
import {useCookies} from "react-cookie";
import Reviews from "./components/Home/Reviews/Reviews";
export default function App() {
    const [cookies, setCookie] = useCookies();

    useEffect(() => {
        if (!cookies['cookie-consent']) {
            setCookie('cookie-consent', 'true', {path: '/'});
            console.log("Cookie was not found for consent")
            toast("This website uses cookies to improve user experience!");
        }
        if (cookies['cookie-consent'] === 'true') {
            console.log("Cookie was found for consent")
        }

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
            <div>
                <Divider variant="middle"/>
            </div>
            <div>
                <Reviews/>
            </div>
            <div>
                <Divider variant="middle"/>
            </div>
            <div>
                <News/>
            </div>

            <div className={"bg-gray-800 bottom-0 h-4/6"}>
                    <Footer/>
            </div>

        </div>
    )
}
