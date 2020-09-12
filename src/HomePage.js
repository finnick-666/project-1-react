import React from 'react';

const HomePage = () => (
    
    <section id="Home" className="pt-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="welcomePage mx-5 px-5">
                        <h1>Welcome, I'm Finnick.</h1>
                        <div id="clock">
                            <h2>{new Date().toLocaleString()}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HomePage; 