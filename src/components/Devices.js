import React from 'react'
import Article from "./Article"
import Footer from "./Footer"
import Header from "./Header"
import IFrame from "./IFrame"
import List from "./List"
import { Helmet } from "react-helmet";
import { useState } from "react";



const Devices = () => {
    const [header_list] = useState([<a href="#about">Abouts</a>,<a href="#features">Features</a>,<a href="/downloads">Downloads</a>,<a href="#maintain">Maintain</a>]);
    return (
        <div className="is-preload">
            <div id="wrapper">
                <Header
                    title="Supported Devices"
                    description="Get Ready to explode your device." 
                    data={header_list}
                    />
                <div id="main">
                    <Article
                        id="about"
                        title="About"
                        data="PixelBlaster-OS is a custom ROM based on AOSP. We focus on having a balance of features and stability." />
                    <Article
                        id="maintain"
                        title="Maintainership"
                        data={<IFrame url="https://docs.google.com/forms/d/1aJDw13eONbdGxp7mBGqdQ4Mm_Om1_-PfZqUi1Wd0FkM/viewform?embedded=true" />} />
                </div>
                <Helmet>
                    <script type="text/javascript" src="../assets/js/jquery.min.js"></script>
                    <script type="text/javascript" src="../assets/js/browser.min.js"></script>
                    <script type="text/javascript" src="../assets/js/breakpoints.min.js"></script>
                    <script type="text/javascript" src="../assets/js/util.js"></script>
                    <script type="text/javascript" src="../assets/js/main.js"></script>
                </Helmet>
                <Footer />
            </div>
            <div id="bg"></div>
        </div>
    )
}
export default Devices
