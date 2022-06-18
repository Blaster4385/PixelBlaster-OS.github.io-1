import React from 'react'

export const Devices = () => {
    return (
        <div className="is-preload">
            <div id="wrapper">
                <Header
                    title="Supported Devices"
                    description="Get Ready to explode your device." />
                <div id="main">
                    <Article
                        id="about"
                        title="About"
                        data="PixelBlaster-OS is a custom ROM based on AOSP. We focus on having a balance of features and stability." />
                    <Article
                        id="features"
                        title="Features"
                        data={<List />} />
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
