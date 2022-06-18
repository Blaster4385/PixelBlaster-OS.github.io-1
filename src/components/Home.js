import Article from "./Article"
import Footer from "./Footer"
import Header from "./Header"
import IFrame from "./IFrame"
import List from "./List"
import { useState } from "react";

const Home = () => {
    const [list, setList] = useState(["A","B","C"]);
    const [header_list] = useState([<a href="#about">Abouts</a>,<a href="#features">Features</a>,<a href="/downloads">Downloads</a>,<a href="#maintain">Maintain</a>]);

    return (

        <div className="is-preload">
            <div id="wrapper">
                <Header
                    title="PixelBlaster-OS"
                    description="Get Ready to explode your device."
                    data={header_list} />
                <div id="main">
                    <Article
                        id="about"
                        title="About"
                        data="PixelBlaster-OS is a custom ROM based on AOSP. We focus on having a balance of features and stability." />
                    <Article
                        id="features"
                        title="Features"
                        data={<List data={list} />} />
                    <Article
                        id="maintain"
                        title="Maintainership"
                        data={<IFrame url="https://docs.google.com/forms/d/1aJDw13eONbdGxp7mBGqdQ4Mm_Om1_-PfZqUi1Wd0FkM/viewform?embedded=true" />} />
                </div>
                <Footer />
            </div>
            <div id="bg"></div>
        </div>
    )
}

export default Home