import React from 'react';

const SocialItem = ({img, name, link, alt , width ,height}) => {
    return (
        <div className={"flex space-x-1 cursor-pointer"}>
            <img src={img} width={width} height={height} alt={alt}/>
            <a href={link}>{name}</a>
        </div>
    );
};

export default SocialItem;