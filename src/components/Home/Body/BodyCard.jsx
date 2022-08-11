import React from 'react';

const BodyCard = () => {
    return (
        <div>
            <div className={"pl-5 font-mono font-bold text-slate-50 bg-indigo-400 border-indigo-400 text-2xl pt-2 pb-2 h-auto w-96 border-4 rounded-lg drop-shadow-2xl transform hover:translate-x-2 duration-150"}>
                <div className={"text-center pr-5 underline"}>
                    <p>Features</p>
                </div>
                <div className={"flex-col font-normal text-base"} >
                        <div className={"pb-1 text-xl"}>
                            <p className={"text-black"}>1.</p>
                            <p>Unlimited Invoices</p>
                        </div>
                    <div className={"pb-1 text-xl"}>
                        <p className={"text-black"}>2.</p>
                        <p>One Company per user</p>
                    </div >
                    <div className={"pb-1 text-xl"}>
                        <p className={"text-black"}>3.</p>
                        <p>Free and Open Source</p>
                    </div>
                    <div className={"pb-1 text-xl"}>
                        <p className={"text-black"}>4.</p>
                        <p>Built in PDF viewer</p>
                    </div>
                    <div className={"pb-1 text-xl"}>
                        <p className={"text-black"}>5.</p>
                        <p>User help service</p>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default BodyCard;