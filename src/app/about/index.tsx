import { Syne } from "next/font/google";
import { FC } from "react";
import { FaHeart } from "react-icons/fa";

interface AboutProps {}

const syne = Syne({ subsets: ["latin"], weight: ["800"] });
const syneRegular = Syne({ subsets: ["latin"], weight: ["700"] });
const About: FC<AboutProps> = ({}) => {
    return (
        <section className="my-20 flex flex-col">
            <h1 style={syne.style} className="text-6xl sm:text-7xl md:text-8xl">
                I Bring Ideas to Life{" "}
                <FaHeart className="inline text-red-500" />
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full flex-1 py-16 gap-10">
                <div className="col-span-2 flex flex-col gap-10 text-xl">
                    <p>
                        As a creative web developer, my passion lies in building
                        unique web experiences that captivate and engage users.
                        With my extensive skill set which includes tools which
                        fit together perfectly, I have the toolset necessary to
                        bring ideas to life.
                    </p>
                    <p>
                        I specialize in creating custom websites that showcase
                        your brand's personality and convey your message to your
                        audience in a clear and visually stunning way. My
                        designs are always tailored to meet your specific needs,
                        and I take great care to ensure that every element of
                        your site is optimized for both user experience and
                        search engine optimization.
                    </p>
                    <p>
                        Whether you're looking to build a simple, responsive
                        website or a complex, interactive web application, I am
                        here to help. With my expertise in the latest web
                        development technologies and my commitment to delivering
                        exceptional results, I am confident that I can create a
                        unique web experience that exceeds your expectations.
                    </p>
                    <p>
                        So, if you're looking for a creative web developer who
                        can bring your ideas to life and help you stand out in a
                        crowded online marketplace, look no further. Let's work
                        together to create a website that reflects your brand's
                        values, engages your audience, and helps you achieve
                        your business goals.
                    </p>
                </div>
                <div className="flex flex-row md:flex-col">
                    <div className="flex-1 sm:flex-auto w-full">
                        <h3 style={syneRegular.style} className="text-2xl mb-5">
                            Frontend Tools
                        </h3>
                        <ul>
                            <li>React JS</li>
                            <li>Next JS</li>
                            <li>Typescript</li>
                            <li>Zustand</li>
                            <li>Javascript</li>
                            <li>HTML 5</li>
                        </ul>
                        <h3
                            style={syneRegular.style}
                            className="text-2xl mt-10 mb-5"
                        >
                            UI Libraries
                        </h3>
                        <ul>
                            <li>Radix UI</li>
                            <li>Tailwind CSS</li>
                            <li>CSS</li>
                            <li>Framer Motion</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;