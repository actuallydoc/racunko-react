import React from 'react';
import { Link } from "react-router-dom";
const Navitem = ({name, path}) => {
    return (
        <div className={"cursor-pointer text-slate-200 transition transform hover:scale-110 duration-150 hover:text-white"}>
            <Link to={path}>{name}</Link>
        </div>
    );
};

export default Navitem;