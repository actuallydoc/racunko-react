import React from 'react';
import ReviewCard from './ReviewCard';
const Reviews = () => {
    return (
        <div className={"flex flex-col "}>
            <div>
                <div className={"font-bold font-mono text-center pb-2 text-4xl justify-center items-center"}>
                    <p>User Reviews</p>
                </div>
            </div>
        <div className={"flex pl-5 pt-5 space-x-5 pb-5"}>
            <div className={""}>
                <ReviewCard userFull={"The Rock"} job={"Software Developer"} Content={"This application helped us in the company"} Image={"https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"}/>
            </div>
            <div className={""}>
                <ReviewCard userFull={"The Rock"} job={"Software Developer"} Content={"This application helped us in the company"} Image={"https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"}/>
            </div>
            <div className={""}>
                <ReviewCard userFull={"The Rock"} job={"Software Developer"} Content={"This application helped us in the company"} Image={"https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"}/>
            </div>
            <div className={""}>
                <ReviewCard userFull={"The Rock"} job={"Software Developer"} Content={"This application helped us in the company"} Image={"https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"}/>
            </div>

            </div>
        </div>
    );
};

export default Reviews;