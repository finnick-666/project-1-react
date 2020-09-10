import React from 'react';

const SkillsPage = () => (
    <section id="Skills" className="mt-5 pt-5">
        <div className="container">
            <span className="bg-primary text-white">My Skills</span>
            <hr className="bg-primary"/>
            <div className="row">
                <div className="col">
                    <div className="card bg-white">
                        <h3 className="ml-3 my-3">HTML</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar bg-dark" style="width: 95%">95%</div>
                        </div>
                        <h3 className="ml-3 my-3">CSS</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar bg-dark" style="width: 80%">80%</div>
                        </div>
                        <h3 className="ml-3 my-3">Javascript</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar bg-dark" style="width: 40%">40%</div>
                        </div>
                        <h3 className="ml-3 my-3">SQL</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar bg-dark" style="width: 75%">75%</div>
                        </div>
                        <h3 className="ml-3 my-3">Java</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar bg-dark" style="width: 60%">60%</div>
                        </div>
                        <h3 className="ml-3 my-3">Linux</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar bg-dark" style="width: 50%">50%</div>
                        </div>
                        <h3 className="ml-3 my-3">HTML</h3>
                        <div className="progress mx-3">
                            <div className="progress-bar bg-dark" style="width: 55%">55%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SkillsPage;