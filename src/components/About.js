import React from 'react';

function About(props) {
    // const Background = "./bg.jpg";
    return (
        <section style={{ Background: "#000", marginTop: "100px" }}>
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20 cc-profile-image">
                    <div className="flex flex-col justify-center items-center ">
                        <a href="#about" style={{ position: "relative" }}>
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src="./yaqub_img.jpg"
                            />
                        </a>
                    </div>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-small text-white">
                        Hi I'm Yaqub,&nbsp;
                        <br /> A Fullstack Software Developer
                    </h1>
                    <h2 className="title-font sm:text-4xl  mb-4 font-small text-white"> Click on the voice icon at the bottom left corner &amp; say <span style={{ fontWeight: 'bolder', color: "yellow" }}>PLEASE HELP</span><br />
                        to use this Voice Asisted Portfolio App
                    </h2>
                    <div id="about" className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>

            </div>
            <div class=" flex flex-wrap mb-2  overflow-hidden justify-center" style={{ margin: "10px", padding: "10px" }}>
                <div class="md:flex bg-white rounded-xl shadow-md" style={{ padding: "10px" }}>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold" style={{ padding: "10px", margin: "10px", color: "black" }}><h1>About</h1> </div>
                        <div style={{ padding: "10px", margin: "5px", color: "black" }}>
                            <p>Hello! I am <span style={{ fontWeight: "bolder" }}>Yaqub Adesola</span>. Computer Scientist, Software Engineer &amp; Web Developer.</p><br />
                            <p>A seasoned programmer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.  <br /></p><br />
                            <small>I have problem-solving abilities to overcome glitches with creative solutions that are strategically designed to last long-term.<br />I equally have the ability to listen carefully to
                                feedback and to determine modifications for optimal user-function. &nbsp;&nbsp;&nbsp;I love coding</small><br />

                        </div>
                    </div>
                    <div class="p-8">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold" style={{ padding: "10px", margin: "10px", color: "black" }}><h1>Basic Information</h1></div>
                        <div style={{ padding: "10px", margin: "5px", color: "black" }}>

                            <table class="table-auto">

                                <thead>
                                </thead>
                                <tbody>
                                    <tr class="bg-emerald-200">
                                        <td><span style={{ fontWeight: "bolder" }}>NAME:</span></td>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;RAHEEM YAQUB ADESOLA</td>
                                    </tr>
                                    <tr class="bg-emerald-200">
                                        <td><span style={{ fontWeight: "bolder" }}>D.O.B:</span></td>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;22 August 1986</td>
                                    </tr>
                                    <tr class="bg-emerald-200">
                                        <td><span style={{ fontWeight: "bolder" }}>EMAIL:</span></td>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;yaqub.adesola@gmail.com.</td>
                                    </tr>
                                    <tr class="bg-emerald-200">
                                        <td><span style={{ fontWeight: "bolder" }}>PHONE:</span></td>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;+234-807-454-4422</td>
                                    </tr>
                                    <tr class="bg-emerald-200">
                                        <td><span style={{ fontWeight: "bolder" }}>ADDRESS:</span></td>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;Lagos, Nigeria</td>
                                    </tr>
                                    <tr class="bg-emerald-200">
                                        <td><span style={{ fontWeight: "bolder" }}>LANGUAGE:</span></td>
                                        <td>&nbsp;&nbsp;&nbsp;&nbsp;English</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;