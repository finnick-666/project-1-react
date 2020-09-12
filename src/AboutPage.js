import React from 'react';


const AboutMePage = () => (
    <section id="About" className="pt-5">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="AboutData">
                        <div className="card">
                            <div className="card-title my-5">
                                <div className="media">
                                    <img src="../src/asset/shui.jpg" alt="photo" width="250" height="250"
                                        className="img-fluid rounded-top mx-5 d-none d-lg-block"/>
                                    <div className="media-body">
                                        <h3 className="display-4 ml-5">I'm Finnick</h3>
                                        <p className="text-muted ml-5">Programmer</p>
                                        <div className="container">
                                            <table className="table table-responsive ml-4">
                                                <tbody>
                                                <tr>
                                                    <td className="text-muted">Age</td>
                                                    <td>:</td>
                                                    <td>27 years old</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">Email</td>
                                                    <td>:</td>
                                                    <td>Yao@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-muted">Phone</td>
                                                    <td>:</td>
                                                    <td>11111111111</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-danger">
                                <a href="#"><i className="fa fa-facebook fa-2x mx-3"></i></a>
                                <a href="#"><i className="fa fa-twitter fa-2x mx-3"></i></a>
                                <a href="#"><i className="fa fa-github fa-2x mx-3"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <span className="bg-danger text-white">About Me</span>
                    <hr className="bg-danger"/>
                    <p className="lead text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                        an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                        has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutMePage;