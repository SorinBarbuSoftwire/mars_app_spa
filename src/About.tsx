import React from "react";
import './style/About.css';
import aboutPhoto from './media/aboutImg.png'

function About() {

    return (
        <body>
            <div id="aboutMainDiv">
                <img id="headerImg" src={aboutPhoto} alt="aboutImg"/>
                <div id="aboutContentDiv">
                    <div id="aboutLeftDiv">
                        <h2>About NASA</h2>
                        <br/>
                        <p>
                            The National Aeronautics and Space Administration is America’s civil
                            space program and the global leader in space exploration.
                            The agency has a diverse workforce of just under 18,000 civil servants,
                            and works with many more U.S. contractors, academia, and international
                            and commercial partners to explore, discover, and expand knowledge for
                            the benefit of humanity. With an annual budget of $23.2 billion in Fiscal
                            Year 2021, which is less than 0.5% of the overall U.S. federal budget,
                            NASA supports more than 312,000 jobs across the United States, generating
                            more than $64.3 billion in total economic output (Fiscal Year 2019).
                        </p>
                        <p>
                            At its 20 centers and facilities across the country – and the only National
                            Laboratory in space – NASA studies Earth, including its climate, our Sun, and
                            our solar system and beyond. We conduct research, testing, and development to
                            advance aeronautics, including electric propulsion and supersonic flight.
                            We develop and fund space technologies that will enable future exploration
                            and benefit life on Earth.
                        </p>
                        <p>
                            NASA also leads a Moon to Mars exploration approach, which includes working
                            with U.S. industry, international partners, and academia to develop new technology,
                            and send science research and soon humans to explore the Moon on Artemis missions
                            that will help prepare for human exploration of the Red Planet. In addition to those
                            major missions, the agency shares what it learns so that its information can make life
                            better for people worldwide. For example, companies use NASA discoveries and technologies
                            to create new products for the public. To ensure future success for the agency and the nation,
                            NASA also supports education efforts in STEM with an emphasis on increasing diversity in
                            our future workforce.
                        </p>
                    </div>
                    <div id="aboutRightDiv">
                        <div id="aboutRightTopDiv">
                            <div id="aboutRightTopLeftDiv">
                                <img className="aboutRightImg"
                                     src="https://www.marketplace.org/wp-content/uploads/2019/07/moonlanding.jpg?fit=2880%2C1621"
                                     alt="moon landing"
                                />
                            </div>
                            <div id="aboutRightTopRightDiv">
                                <br/>
                                <h2>NASA Leadership</h2>
                                <p>
                                    NASA is led by Administrator Bill Nelson, who
                                    became the agency's 14th administrator on May 3, 2021. Nelson
                                    served in the U.S. Senate for 18 years from Florida and as
                                    a payload specialist on space shuttle mission 61-C in 1986.
                                </p>
                            </div>
                        </div>
                        <div id="aboutRightBottomDiv">
                            <img className="aboutRightImg"
                                 src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ja2V0fGVufDB8fDB8fHww&w=1000&q=80"
                                 alt="rocket"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default About;