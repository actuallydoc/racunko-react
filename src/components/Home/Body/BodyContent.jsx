import React from 'react';
import BodyCard from "./BodyCard";
import BodyImage from "./BodyImage";
import UpperBody from "./UpperBody";
import {useNavigate} from "react-router-dom";

const BodyContent = () => {
    const navigate = useNavigate()
    const handleClick =() =>{
        navigate('/signup')
    }
    return(
        <div className={""}>
            <div>
                <UpperBody/>
            </div>
            <div className={"flex container pl-5"}>
                <div className={"mr-auto pt-5"}>
                    <BodyCard/>
                </div>
            <div className={"ml-2 m-auto"}>
                <div className={"pt-2 rounded-lg border-2 pt-4 pb-4 bg-gradient-to-r from-sky-500 to-indigo-500"}>
                    <div className={"object-center"}>
                        <BodyImage/>
                    </div>
                    <div className={"ml-auto mr-auto text-slate-200 pt-3 text-center"}>
                        <button onClick={handleClick} className={"cursor-pointer bg-sky-400 border-1 p-1 pl-3 pr-3 rounded-lg hover:scale-105 duration-150"}>Join</button>
                    </div>
                </div>
            </div>


            </div>

        </div>
    )
}

export default BodyContent;