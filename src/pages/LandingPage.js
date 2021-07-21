import React from 'react'
//import styles from '../pagesstyles/LandingPage.css'
import Helmet from 'react-helmet'

export const LandingPage = () => {
    return (
        <div id="main">
            <Helmet>
                <link rel="stylesheet" href='../src/pagesstyles/LandingPage.module.css' />
            </Helmet>

            <header id="header">

                <div id="HeaderImageContainer">
                    <img id="header-img" src="https://live-core-image-service.vivialplatform.net/images/109948/240x240/cropped_piano_shop_logo_caps_081016_l.hdCp0qTm.jpg.webp"></img>
                </div>

                <nav id="nav-bar">
                    <ul>
                        <li class="nav-link" href="#features"><a href="#features" target="_self">Features</a></li>
                        <li class="nav-link" href="#HowItWorks"><a href="#HowItWorks">How It Works</a></li>
                        <li class="nav-link" href="#price"><a href="#price">Pricing</a></li>
                    </ul>
                </nav>

            </header>

            <div id="titleform">
                <h1>Handcrafted, Home-made, Masterpieces</h1>
                <form id="form" action="https://www.freecodecamp.org/email-submit">
                    <input type="email" name="email" placeholder="Enter your email address" id="email" required></input>
                    <input type="submit" id="submit" value="Get Started"></input>
                </form>
            </div>

            <div id="features">
                <div id="featdesc">
                    <div id="icon"><i class="fas fa-3x fa-fire"></i></div>
                    <h2>Premium Materials</h2>
                    <p>Our trombones use the shiniest bras which is sourced locally. This will increase the longevity of your purchase.</p>
                </div>
                <div id="featdesc">
                    <div id="icon"><i class="fas fa-3x fa-truck"></i></div>
                    <h2>Fast Shipping</h2>
                    <p>We make sure you recieve your trombone as soon as we have finished making it. We also provide free returns if you are not satisfied.</p>
                </div>
                <div id="featdesc">
                    <div id="icon"><i class="fas fa-3x fa-battery-full"></i></div>
                    <h2>Quality Assurance</h2>
                    <p>For every purchase you make, we will ensure there are no damages or faults and we will check and test the pitch of your instrument.</p>
                </div>
            </div>

            <div className="frCont" id="HowItWorks">

                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/VSuCdvcDWTM"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>

            </ div>

            <div id="pricingContainer">

                <section id="pricing"><a id="price"></a>

                    <div class="product" id="Grand">
                        <div id="items">Grand Piano</div>
                        <h3>$600</h3>
                        <ol>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum dolor</li>
                            <li>Lorem Ipsum</li>
                        </ol>
                        <button class="btn">Select</button>
                    </div>

                    <div class="product" id="Upright">
                        <div id="items">Upright Piano</div>
                        <h3>$900</h3>
                        <ol>
                            <li> Lorem Ipsum </li>
                            <li> Lorem Ipsum </li>
                            <li> Lorem Ipsum dolor </li>
                            <li> Lorem Ipsum </li>
                        </ol>
                        <button>Select</button>
                    </div>

                    <div class="product" id="Electronic">
                        <div id="items">Electronic Piano</div>
                        <h3>$1200</h3>
                        <ol>
                            <li> Lorem Ipsum </li>
                            <li> Lorem Ipsum </li>
                            <li> Lorem Ipsum dolor </li>
                            <li> Lorem Ipsum </li>
                        </ol>
                        <button>Select</button>
                    </div>

                </section>

            </ div>

            <footer>
                <ul>
                    <li id="fli"><a href="#main">Privacy</a></li>
                    <li id="fli"><a href="#main">Terms</a></li>
                    <li id="fli"><a href="#main">Contact</a></li>
                </ul>
                <span id="CRtps">Copyright 2016, Original Trombones</span>
            </footer>
        </div >
    )
}

export const LPAppWrapper = () => {
    return (
        <section id="RQMAppWrapper" >
            <LandingPage />
        </section>
    );
}

export default LPAppWrapper;





