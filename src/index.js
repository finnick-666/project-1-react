import React from 'react';

const Header = () => (
        <header>
        <div id="Header">
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
                <div class="container">
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#Navbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a href="#Home" class="navbar-brand">
                        <h3>Finnick</h3>
                    </a>
                    <div class="collapse navbar-collapse" id="Navbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a href="#About" class="nav-link">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a href="#Skills" class="nav-link">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a href="#Resume" class="nav-link">Resume</a>
                            </li>
                            <li class="nav-item">
                                <a href="#Contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    );

const HomePage = () => (
        <section id="Home" class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="welcomePage mx-5 px-5">
                            <h1>Welcome, I'm Finnick.</h1>
                            <div id="clock">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


const AboutMePage = () => (
        <section id="About" class="pt-5">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div id="AboutData">
                            <div class="card">
                                <div class="card-title my-5">
                                    <div class="media">
                                        <img src="../src/asset/shui.jpg" alt="photo" width="250" height="250"
                                            class="img-fluid rounded-top mx-5 d-none d-lg-block"/>
                                        <div class="media-body">
                                            <h3 class="display-4 ml-5">I'm Finnick</h3>
                                            <p class="text-muted ml-5">Programmer</p>
                                            <div class="container">
                                                <table class="table table-responsive ml-4">
                                                    <tr>
                                                        <td class="text-muted">Age</td>
                                                        <td>:</td>
                                                        <td>27 years old</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-muted">Email</td>
                                                        <td>:</td>
                                                        <td>Yao@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-muted">Phone</td>
                                                        <td>:</td>
                                                        <td>11111111111</td>
                                                    </tr>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer bg-danger">
                                    <a href="#"><i class="fa fa-facebook fa-2x mx-3"></i></a>
                                    <a href="#"><i class="fa fa-twitter fa-2x mx-3"></i></a>
                                    <a href="#"><i class="fa fa-github fa-2x mx-3"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="col">
                        <span class="bg-danger text-white">About Me</span>
                        <hr class="bg-danger"/>
                        <p class="lead text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting
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


const SkillsPage = () => (
        <section id="Skills" class="mt-5 pt-5">
            <div class="container">
                <span class="bg-primary text-white">My Skills</span>
                <hr class="bg-primary"/>
                <div class="row">
                    <div class="col">
                        <div class="card bg-white">
                            <h3 class="ml-3 my-3">HTML</h3>
                            <div class="progress mx-3">
                                <div class="progress-bar bg-dark" style="width: 95%">95%</div>
                            </div>
                            <h3 class="ml-3 my-3">CSS</h3>
                            <div class="progress mx-3">
                                <div class="progress-bar bg-dark" style="width: 80%">80%</div>
                            </div>
                            <h3 class="ml-3 my-3">Javascript</h3>
                            <div class="progress mx-3">
                                <div class="progress-bar bg-dark" style="width: 40%">40%</div>
                            </div>
                            <h3 class="ml-3 my-3">SQL</h3>
                            <div class="progress mx-3">
                                <div class="progress-bar bg-dark" style="width: 75%">75%</div>
                            </div>
                            <h3 class="ml-3 my-3">Java</h3>
                            <div class="progress mx-3">
                                <div class="progress-bar bg-dark" style="width: 60%">60%</div>
                            </div>
                            <h3 class="ml-3 my-3">Linux</h3>
                            <div class="progress mx-3">
                                <div class="progress-bar bg-dark" style="width: 50%">50%</div>
                            </div>
                            <h3 class="ml-3 my-3">HTML</h3>
                            <div class="progress mx-3">
                                <div class="progress-bar bg-dark" style="width: 55%">55%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


const ResumePage = () => (
        <section id="Resume">
            <div class="container mt-5 pt-5">
                <span class="bg-info text-white">Resume</span>
                <hr class="bg-info"/>
                <div class="timeline my-3">
                    <div class="box-area">
                        <div class="box"></div>
                        <div class="time">
                            <span>2012</span>
                        </div>
                        <div class="content">
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        </div>
                    </div>
                    <div class="box-area box-right">
                        <div class="box"></div>
                        <div class="time">
                            <span>2012</span>
                        </div>
                        <div class="content">
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        </div>
                    </div>
                    <div class="box-area">
                        <div class="box"></div>
                        <div class="time">
                            <span>2012</span>
                        </div>
                        <div class="content">
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        </div>
                    </div>
                    <div class="box-area box-right">
                        <div class="box"></div>
                        <div class="time">
                            <span>2012</span>
                        </div>
                        <div class="content">
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

const App = () => (
        <div>
            <Header></Header>
            <HomePage></HomePage>
            <AboutMePage></AboutMePage>
            <SkillsPage></SkillsPage>
            <ResumePage></ResumePage>
        </div>
    );

    ReactDOM.render((<App />), document.querySelector('#root'));