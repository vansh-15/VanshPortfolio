import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutVansh extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "experience": <Experience />,
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />,
            "certifications": <Certifications />,
            "resume": <Resume />,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about vansh" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                
                <div
                    id="experience"
                    tabIndex="0"
                    onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "experience"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                        " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }>
                    <img
                        className="w-3 md:w-4"
                        alt="Vansh experience"
                        src="./themes/Yaru/status/education.svg"
                    />
                    <span className="ml-1 md:ml-2 text-gray-50">
                        Experience
                    </span>
                </div>

                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vansh' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vansh' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vansh' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="certifications" tabIndex="0" onFocus={this.changeScreen}
                    className={
                        (this.state.active_screen === "certifications"
                            ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
                            : " hover:bg-gray-50 hover:bg-opacity-5 ") +
                        " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
                    }
                    >
                    <img
                        className="w-3 md:w-4"
                        alt="Vansh certifications"
                        src="./themes/Yaru/status/education.svg"
                    />
                    <span className="ml-1 md:ml-2 text-gray-50">
                        Certifications
                    </span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="vansh's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
                <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/vansh9patel/button" title="Sponsor vansh9patel" width={"100%"} height={"100%"} ></iframe>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutVansh;

export const displayAboutVansh = () => {
    return <AboutVansh />;
}

function About() {
    return (
        <>
            <div className="w-20 md:w-28 my-4 bg-white rounded-full">
                <img
                    className="w-full"
                    src="./images/logos/bitmoji.png"
                    alt="Vansh Mishra"
                />
            </div>

            <div className="mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>
                    My name is <span className="font-bold">Vansh Mishra</span>,
                </div>

                <div className="font-normal ml-1">
                    I'm a{" "}
                    <span className="text-pink-600 font-bold">
                        Cybersecurity Enthusiast & Management Trainee @Deloitte
                    </span>
                </div>
            </div>

            <div className="mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>

            <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">

                <li className="list-pc">
                    I'm a <span className="font-medium">Management Trainee at Deloitte</span>,
                    working in the technology and enterprise application space.
                    My current work involves the Microsoft ecosystem, while I continue
                    to build my expertise in <span className="font-medium">Cybersecurity</span>.
                </li>

                <li className="mt-3 list-building">
                    I enjoy learning how software, systems and security work together
                    and building projects that help me strengthen my technical skills.
                </li>

                <li className="mt-3 list-time">
                    Outside of technology, I enjoy playing guitar, exploring new
                    things and spending time on projects that challenge me to learn.
                </li>

                <li className="mt-3 list-star">
                    My long-term goal is to build a strong career in
                    <span className="font-medium"> Cybersecurity and Security Engineering</span>.
                </li>

                <li className="mt-3 list-mail">
                    Feel free to reach out at{" "}
                    <a
                        className="text-underline"
                        href="mailto:vanshmi2246@gmail.com"
                    >
                        <u>vanshmi2246@gmail.com</u>
                    </a>
                    .
                </li>

            </ul>
        </>
    )
}

function Experience() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Experience

                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <div className="w-10/12 mt-5">

                {/* Deloitte */}
                <div className="border-l-2 border-gray-400 pl-4">

                    <div className="text-lg md:text-xl font-bold">
                        Deloitte
                    </div>

                    <div className="text-base md:text-lg mt-1 text-gray-200">
                        Management Trainee
                    </div>

                    <div className="text-sm text-gray-400 mt-1">
                        Technology & Transformation
                    </div>

                    <ul className="mt-4 text-sm md:text-base emoji-list">

                        <li className="list-arrow mt-3 leading-tight">
                            Working with Microsoft technologies and
                            enterprise application development.
                        </li>

                        <li className="list-arrow mt-3 leading-tight">
                            Gaining hands-on experience with
                            <strong> Power Apps, Power Automate, Power Pages
                            </strong> and <strong>Dataverse</strong>.
                        </li>

                        <li className="list-arrow mt-3 leading-tight">
                            Developing knowledge of
                            <strong> Microsoft Dynamics 365 </strong>
                            and its enterprise application ecosystem.
                        </li>

                        <li className="list-arrow mt-3 leading-tight">
                            Working with concepts related to
                            <strong> C#, .NET and Dataverse plugins </strong>
                            as part of my technical development.
                        </li>

                        <li className="list-arrow mt-3 leading-tight">
                            Continuously expanding my technical skills across
                            enterprise software development and cybersecurity.
                        </li>

                    </ul>

                </div>
                {/* Cosine Theta */}
                <div className="border-l-2 border-gray-400 pl-4 mt-8">

                    <div className="text-lg md:text-xl font-bold">
                        Cosine Theta Ltd.
                    </div>

                    <div className="text-base md:text-lg mt-1 text-gray-200">
                        Android Development Intern
                    </div>

                    <div className="text-sm text-gray-400 mt-1">
                        Internship
                    </div>

                    <ul className="mt-4 text-sm md:text-base emoji-list">

                        <li className="list-arrow mt-3 leading-tight">
                            Worked on Android application development
                            during my internship.
                        </li>

                        <li className="list-arrow mt-3 leading-tight">
                            Gained practical experience in mobile application
                            development and software development workflows.
                        </li>

                        <li className="list-arrow mt-3 leading-tight">
                            Worked with Android development concepts while
                            building and improving application functionality.
                        </li>

                    </ul>

                </div>

            </div>
        </>
    )
}

function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Education
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Sikkim Manipal University
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2026 - 2028</div>
                    <div className=" text-sm md:text-base">Master's in Computer Applications</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">GPA &nbsp; 4.0/4.0</div>
                </li>
                <li className="list-disc">
                    <div className=" text-lg md:text-xl mt-4 text-left font-bold leading-tight">
                        Allenhouse Business School - ABS
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2023 - 2026</div>
                    <div className=" text-sm md:text-base">Bachelor of Computer Applications</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA &nbsp; 8.6/10</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        Class 12<sup>th</sup>
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">2022 - 2023</div>
                    <div className=" text-sm md:text-base">Maths, Physics, Chemistry</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">Percentile Rank &nbsp; 87%</div>
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className="list-arrow mt-4 leading-tight">
                    My technical interests span across
                    <strong className="text-ubt-gedit-orange">
                        {" "}Cybersecurity, Enterprise Technologies and Software Development.
                    </strong>
                </li>

                <li className="list-arrow mt-4 leading-tight">
                    I am currently building hands-on experience with
                    <strong className="text-ubt-gedit-orange">
                        {" "}Microsoft Power Platform, Dynamics 365 and Cybersecurity.
                    </strong>
                </li>
            </ul>

            {/* Cybersecurity */}
            <div className="w-full md:w-10/12 mt-6">
                <div className="text-sm md:text-base text-center font-bold">
                    Cybersecurity
                </div>

                <div className="flex flex-wrap justify-center items-center mt-2">

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Linux-FCC624?style=flat&logo=linux&logoColor=black"
                        alt="Vansh Linux"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Nmap-2C3E50?style=flat&logo=nmap&logoColor=white"
                        alt="Vansh Nmap"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Burp%20Suite-FF6633?style=flat&logo=burpsuite&logoColor=white"
                        alt="Vansh Burp Suite"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Wireshark-1679A7?style=flat&logo=wireshark&logoColor=white"
                        alt="Vansh Wireshark"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/OWASP-000000?style=flat&logo=owasp&logoColor=white"
                        alt="Vansh OWASP"
                    />

                </div>
            </div>

            {/* Microsoft & Enterprise */}
            <div className="w-full md:w-10/12 mt-6">
                <div className="text-sm md:text-base text-center font-bold">
                    Microsoft & Enterprise Technologies
                </div>

                <div className="flex flex-wrap justify-center items-center mt-2">

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Power%20Apps-742774?style=flat&logo=powerapps&logoColor=white"
                        alt="Vansh Power Apps"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Power%20Automate-0066FF?style=flat&logo=powerautomate&logoColor=white"
                        alt="Vansh Power Automate"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Power%20Pages-742774?style=flat&logo=microsoft&logoColor=white"
                        alt="Vansh Power Pages"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Dataverse-742774?style=flat&logo=microsoft&logoColor=white"
                        alt="Vansh Dataverse"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Dynamics%20365-002050?style=flat&logo=microsoftdynamics365&logoColor=white"
                        alt="Vansh Dynamics 365"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/C%23-239120?style=flat&logo=csharp&logoColor=white"
                        alt="Vansh C Sharp"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/.NET-512BD4?style=flat&logo=dotnet&logoColor=white"
                        alt="Vansh .NET"
                    />

                </div>
            </div>

            {/* Programming */}
            <div className="w-full md:w-10/12 mt-6">
                <div className="text-sm md:text-base text-center font-bold">
                    Programming
                </div>

                <div className="flex flex-wrap justify-center items-center mt-2">

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white"
                        alt="Vansh Java"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white"
                        alt="Vansh Python"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"
                        alt="Vansh JavaScript"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/SQL-4479A1?style=flat&logo=mysql&logoColor=white"
                        alt="Vansh SQL"
                    />

                </div>
            </div>

            {/* Tools */}
            <div className="w-full md:w-10/12 mt-6 mb-6">
                <div className="text-sm md:text-base text-center font-bold">
                    Tools & Platforms
                </div>

                <div className="flex flex-wrap justify-center items-center mt-2">

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
                        alt="Vansh Git"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"
                        alt="Vansh GitHub"
                    />

                    <img
                        className="m-1"
                        src="https://img.shields.io/badge/VS%20Code-007ACC?style=flat&logo=visualstudiocode&logoColor=white"
                        alt="Vansh VS Code"
                    />

                </div>
            </div>
        </>
    )
}

function Certifications() {
    return (
        <>
            <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Certifications

                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            <div className="w-10/12 mt-5">

                {/* PL-900 */}
                <div className="border-l-2 border-gray-400 pl-4">

                    <div className="text-lg md:text-xl font-bold">
                        Microsoft Certified: Power Platform Fundamentals
                    </div>

                    <div className="text-sm text-gray-400 mt-1">
                        PL-900
                    </div>

                    <div className="text-sm md:text-base mt-2">
                        Microsoft
                    </div>

                    <div className="text-sm text-gray-300 mt-2">
                        Score: <strong>814</strong>
                    </div>

                </div>

            </div>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "UbuntuOS Portfolio",
            date: "Apr 2021",
            link: "https://github.com/vansh9patel/vansh9patel.github.io",
            description: [
                "Personal portfolio website of theme Ubuntu 20.04, made using NEXT.js & tailwind CSS",
            ],
            domains: ["javascript", "next.js", "tailwindcss"]
        },
        {
            name: "Crypto Crack",
            date: "Dec 2025",
            link: "https://github.com/vansh-15/CryptoCrack",
            description: [
                "A one solution Password Storage and authenticity checker platform !",
            ],
            domains: ["javascript", "chrome-extension"]
        },
        // {
        //     name: "CodeConnect",
        //     date: "Nov 2021",
        //     link: "https://github.com/vansh9patel/CodeConnect-frontend",
        //     description: [
        //         "A multi-language pair-programming platform with the features of video meeting and whiteboard. Built with React.js, Tailwind CSS, Chakra UI, Express & Socket.io.",
        //     ],
        //     domains: ["javascript", "tailwindcss"]
        // },
        // {
        //     name: "Ad Free Spotify",
        //     date: "Jun 2021",
        //     link: "https://github.com/vansh9patel/ad-free-spotify",
        //     description: [
        //         "Chrome extension to automatically mute/unmute Spotify tab when Advertisement starts and ends!",
        //     ],
        //     domains: ["javascript", "chrome-extension"]
        // },
        // {
        //     name: "economist.com Unlocked",
        //     date: "Mar 2021",
        //     link: "https://github.com/vansh9patel/economist.com-unlocked",
        //     description: [
        //         "A chrome extension to read Paid Articles for Free & with no Ads, no subscription, no memberships!",
        //     ],
        //     domains: ["javascript", "chrome-extension"]
        // },
        // {
        //     name: "Flutter banking app",
        //     date: "Jan 2021",
        //     link: "https://github.com/vansh9patel/flutter-banking-app",
        //     description: [
        //         "A Flutter & Firebase project for creating transactions between different Users and displaying the history of transactions done by all.",
        //     ],
        //     domains: ["flutter", "firestore", "dart", "firebase auth"]
        // },
        // {
        //     name: "CPU scheduling application",
        //     date: "Dec 2020",
        //     link: "https://github.com/vansh9patel/CPU-Scheduling-APP-React-Native",
        //     description: [
        //         "React Native Application to visualize the CPU Scheduling algorithms with different Processes and Animations with gannt chart.",
        //     ],
        //     domains: ["react-native", "javascript"]
        // },
        // {
        //     name: "Meditech Healthcare WebApp",
        //     date: "Nov 2020",
        //     link: "https://github.com/vansh9patel/Meditech-Healthcare",
        //     description: [
        //         "Developed Web Application to predict and diagnose diseases from x-ray images.",
        //     ],
        //     domains: ["javascript", "html5", "sass", "firebase", "tensorflow"]
        // },
        // {
        //     name: "Problem Recommendation System",
        //     date: "Sep 2020",
        //     link: "https://github.com/vansh9patel/Improve-Codeforces",
        //     description: [
        //         "Django web application to suggest practice problems from the areas in which the user struggles to get pass in code-forces.",
        //     ],
        //     domains: ["django", "python", "codeforces-api", "javascript"]
        // },
        // {
        //     name: "Cleanliness Automation",
        //     date: "Dec 2019",
        //     link: "https://github.com/vansh9patel/CPU-Scheduling-APP-React-Native",
        //     description: [
        //         "Developed Web Applications to automate Garbage collection and extraction systems for SSIP hackathon",
        //     ],
        // }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>

            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=vansh9patel&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                return <span key={index} className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/VanshMishraDeloitte.pdf" title="vansh mishra resume" frameBorder="0"></iframe>
    )
}