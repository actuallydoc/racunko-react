import React from 'react';
import SocialItem from "./SocialItem";

const Footer = () => {
    return (
        <div className={"flex pt-3 p-2 text-slate-200"}>
            <div className={"flex space-x-52"}>
            <div>
                <div className={"flex pl-3 space-x-2 underline "}>
                    <a href="/" className={"text-left"}>Home</a>
                    <a href="/about" className={"text-left"}>About</a>
                    <p className={"text-left"}>Contact</p>
                    <a href="/tos" className={"text-left"}>Terms of service</a>
                    <a href="/privacy" className={"text-left"}>Privacy</a>
                </div>
                <div>
                    <div className={"pl-3 pt-7 pb-2"}>
                        <div className={"font-bold"}>
                            <p>Računko s.p.</p>
                        </div>
                        <div>
                            <p>Velika Loka 21, 1290 Grosuplje, Slovenija</p>
                        </div>
                        <div className={"underline pt-5"}>
                            <p>Računko © 2020 Copyright, all rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"ml-auto mr-auto pt-3"}>
                <div className={"font-bold ml-auto mr-auto text-center pb-2"}>
                    <p>Social media</p>
                </div>
                <div className={"flex pl-3 space-x-2 underline"}>

                        <SocialItem name={"Facebook"} link={"https://facebook.com/test"} img={"https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"} alt={"Fb link"} height={"20px"} width={"20px"}/>

                        <SocialItem name={"Twitter"} link={"https://facebook.com/test"} img={"https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg"} alt={"Twitter link"} height={"20px"} width={"23px"}/>

                        <SocialItem name={"Instagram"} link={"https://facebook.com/test"} img={"https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"} alt={"Instagram link"} height={"20px"} width={"23px"}/>

                        <SocialItem name={"Github"} link={"https://github.com/"} img={"https://cdn-icons-png.flaticon.com/512/25/25231.png"} alt={"Github link"} height={"20px"} width={"23px"}/>

                        <SocialItem name={"LinkedIn"} img={"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"} alt={"Linkedin link"} height={"20px"} width={"25px"}/>
                </div>
            </div>
            <div className={"pt-2 flex flex-col rounded-xl pl-1 pr-1"}>
                    <p>We are using cookies to ensure that we give you the best experience on our website.</p>
                    <p>By continuing to use this site you are agreeing to our use of cookies.</p>
                    <p>Read our privacy policy</p>
            </div>
                </div>
        </div>
    )
};

export default Footer;