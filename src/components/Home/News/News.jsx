import React, {useEffect} from 'react';
import NewsCard from "./NewsCard";

const News = () => {
    useEffect(() => {
        console.log("News");

    }, [])
    return (
        <div className={"pt-5 pb-5 pl-5"}>
            <div className={"text-center text-4xl pb-4 font-mono font-bold "}>
                <p>News</p>
            </div>
            <div className={"flex space-x-10"}>
                <div>
                    <NewsCard title={"Update 1.0"} date={"04.02.2022"} content={"Added some sdfsdmfoisdfnmdspafmsfmadpsfamosp"} link={"https://github.com/actuallydoc/racunko-react/commits/master"}/>

                </div>
                <div>
                    <NewsCard title={"Update 1.0"} date={"04.02.2022"} content={"Added some sdfsdmfoisdfnmdspafmsfmadpsfamosp"} link={"https://github.com/actuallydoc/racunko-react/commits/master"}/>

                </div>
                <div>
                    <NewsCard title={"Update 1.0"} date={"04.02.2022"} content={"Added some sdfsdmfoisdfnmdspafmsfmadpsfamosp"} link={"https://github.com/actuallydoc/racunko-react/commits/master"}/>

                </div>
                <div>
                    <NewsCard title={"Update 1.0"} date={"04.02.2022"} content={"Added some sdfsdmfoisdfnmdspafmsfmadpsfamosp"} link={"https://github.com/actuallydoc/racunko-react/commits/master"}/>

                </div>

            </div>

        </div>

    )
    }
    
;

export default News;