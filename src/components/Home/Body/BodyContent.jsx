import React from 'react';
import BodyCard from "./BodyCard";
import BodyImage from "./BodyImage";
import UpperBody from "./UpperBody";

const BodyContent = () => {
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
                    <div className={"ml-auto mr-auto text-slate-200 pt-4 m-2 text-center hover:scale-105 duration-150"}>
                        <p className={"cursor-pointer bg-sky-400 border-1 rounded-lg p-1 pl-4 pr-4"}>Join</p>
                    </div>
                </div>
            </div>


            </div>

        </div>
    )
}

export default BodyContent;