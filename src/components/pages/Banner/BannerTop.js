import React from 'react';
import star from "../../../images/star.png";
import live from "../../../images/live.png";
import job from "../../../images/job.png";
import support from "../../../images/support.png";

const BannerTop = () => {
    return (
        <div className='container'>
            <div className="text-center my-4">
                <h2>What is special about our course?</h2>
            </div>
            <div className='row row-cols-sm-1 row-cols-md-4 m-2 g-4'>
                <div className="col bg-light shadow p-4 rounded">
                    <div>
                        <img className='img-fluid mb-2' src={star} alt="" />
                    </div>
                    <div>
                        <h5>These are Complete course:</h5>
                        <p>Everything from zero to getting a job as a junior web developer has been taught over and over again.</p>
                    </div>
                </div>
                <div className="col bg-light shadow p-4 rounded">
                    <div>
                        <img className='img-fluid mb-2' src={live} alt="" />
                    </div>
                    <div>
                        <h5>Live sessions:</h5>
                        <p>Each milestone will have one or two live conceptual sessions. There, the main concepts will be cleared through new projects.</p>
                    </div>
                </div>
                <div className="col bg-light shadow p-4 rounded">
                    <div>
                        <img className='img-fluid mb-2' src={support} alt="" />
                    </div>
                    <div>
                        <h5>Unlimited Support:</h5>
                        <p>Any of your questions will be answered within 24 hours during the course (excluding holidays).</p>
                    </div>
                </div>
                <div className="col bg-light shadow p-4 rounded">
                    <div>
                        <img className='img-fluid mb-2' src={job} alt="" />
                    </div>
                    <div>
                        <h5>Job Placement Coach:</h5>
                        <p>Those who will get opportunity in SCIC. And that's exactly what our job placement team will send their resume to different companies with more personalized training.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;