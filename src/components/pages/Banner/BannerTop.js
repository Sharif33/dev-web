import React from 'react';
import star from "../../../images/star.png";
import live from "../../../images/live.png";
import job from "../../../images/job.png";
import support from "../../../images/support.png";

const BannerTop = () => {
    return (
        <div className='container'>
            <div className="text-center my-4">
                <h2  className='text-center fw-bold text-warning mb-5'>What is special about our course?</h2>
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

            <div className='mt-5 text-center'>
                <h1 className='text-center fw-bold text-warning mb-5'>Student Says</h1>
              <div className='row m-2'>
                <div className="col-md-4 shadow m-2">
                <div>
                <img className='img-fluid mb-2' src={support} alt="" />
                <p>Very effective and caring course. Thank you so much everyone related to this journey who have worked hard and made us hard working. Special thanks for giving access to contents after finishing. Please consider modules about php/larevel, React Native, Redux in ACC though</p>
                </div>
                </div>
                <div className="col-md-4 m-2">
                <div>
                <img className='img-fluid mb-2' src={support} alt="" />
                <p>Very effective and caring course. Thank you so much everyone related to this journey who have worked hard and made us hard working. Special thanks for giving access to contents after finishing. Please consider modules about php/larevel, React Native, Redux in ACC though</p>
                </div>
                </div>
            </div>  
            </div>
            
        </div>
    );
};

export default BannerTop;