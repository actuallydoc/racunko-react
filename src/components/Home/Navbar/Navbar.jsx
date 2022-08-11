import React from 'react';
import Navitem from './NavItem';

const Navbar = () => {
    return (

        <div className={"flex p-2 text-xl text-slate-200 drop-shadow-2xl bg-gradient-to-r from-sky-500 to-indigo-500"}>

            <div className={"flex space-x-3"}>
                <div className={"mx-2 ml-5"}>
                    <Navitem name={"Home"} path={"/"} />
                </div>
                <div className={"justify-center text-center"}>
                    <Navitem name={"About"} path={"/about"} />
                </div>
                <div className={"justify-center text-center"}>
                    {/*RENDER A MODAL WINDOW POPUP WITH CONTACT INFORMATION ABOUT THE COMPANY */}
                    <Navitem name={"Contact"} path={""} />
                </div>
                <div className={"justify-center text-center"}>
                    <Navitem name={"About"} path={"/about"} />
                </div>
            </div>

            <div className={"ml-auto justify-center text-center mx-10"}>
                <Navitem name={"Signup"} path={"/signup"} />
            </div>
            <div className={"justify-center text-center mr-5"}>
                <Navitem name={"Login"} path={"/login"} />
            </div>
        </div>

    );
};

export default Navbar;