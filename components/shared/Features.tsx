import { faGroupArrowsRotate, faHandshake, faPeopleGroup, faScroll } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faPhone, faEyes, faRegistered, faIdCard, faIdCardAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import { useAuth } from "../../context/AuthContext";

const incentives = [
    {
        name: 'Notice the person in need',
        description: "The first thing to bring the change is to notice the need and talk with the person.",
        imageSrc: faCompass,
    },
    {
        name: 'Register the person',
        description: 'After you log in to the system, you are able to create a profile of a person who is willing to share their time and talents with others. The profile contains personal information about the person, their skills, and goals.',
        imageSrc: faIdCardAlt,
    },
    {
        name: 'Let other people contact the person',
        description: "The created profile will be publicly available, so the person who would use the help will be able to find people to help them or just to talk to and spend some time together.",
        imageSrc: faGroupArrowsRotate,
    },
    {
        name: 'Create new relations',
        description: "When people can find each other we believe that we are capable of introducing new human relations to the society.",
        imageSrc: faPeopleGroup,
    },
]

function Features() {
    const { login, logout } = useAuth();

    return (
        <div className="relative overflow-hidden pt-3 pb-32">
            <div className="relative">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-1 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div className="bg-gray-50">
                            <div className="mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                                    {incentives.map((incentive) => (
                                        <div key={incentive.name}>
                                            <FontAwesomeIcon icon={incentive.imageSrc} className="h-16 w-16 text-pelorous-500 mx-auto"  aria-hidden="true" />
                                            <h3 className="mt-6 text-xl font-bold tracking-tight text-pelorous-600">{incentive.name}</h3>
                                            <p className="mt-2 text-lg text-gray-500">{incentive.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">

                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                        <div>

                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">The second start</h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    Have you ever thought of the potential we waste just by accepting retirement as the time in life when you don't have to do anything.<br />
                                    As long as the people stay active they are able to do much more which can improve both their mental and psychical health.<br />
                                    Unfortunately, a lot of people who are more experienced in life don't have a lot of activities in their lives.<br />
                                    Don't let it happen to all people that are close to you that have so much to offer to the society!<br />
                                    Help them register on our platform and find a new purpose in life.
                                </p>
                                <div className="mt-6">
                                    <div className="mt-6">
                                        {<a
                                            href="#"
                                            className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-pelorous-600 to-pelorous-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-pelorous-700 hover:to-pelorous-700"
                                        >
                                            Register at the portal
                                        </a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-200 pt-6">
                            <blockquote>
                                <div>
                                    <p className="text-base text-gray-500">
                                        &ldquo;I wish that my grandpa had some goal in his life. After the grandkids grew up and didn't have as much time to spend with him, his life slowed up a lot. This caused loneliness and even problems with mobility. Now family visits are almost the only joy for him, and we wish for him to be active in social life again."
                                    
                                        &rdquo;
                                    </p>
                                </div>
                                <footer className="mt-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=20"
                                                alt=""
                                            />
                                        </div>
                                        <div className="text-base font-medium text-gray-700">
                                            Zofia, grandchild
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:mt-0">
                        <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://images.unsplash.com/photo-1613147474738-b988fa947e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=20"
                                alt="Second start"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24">
                <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                    <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                        <div>

                            <div className="mt-6">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                    Create social bonds
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                It is never too late to make new friends and create new relationships. <br/>
We believe we are able to change the way that people are co-existing in the society by helping them to create social bond with people who live close.<br/>
The number of possible types of collaboration among the people is infinite, and the only thing limiting us is our own imagination.<br/>
Join the platform to start a new journey in your life.                            </p>
                                <div className="mt-6">
                                    {<a
                                        href="#"
                                        className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-pelorous-600 to-pelorous-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-pelorous-700 hover:to-pelorous-700"
                                    >
                                        Register at the portal
                                    </a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                        <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                            <img
                                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                src="https://images.unsplash.com/photo-1494438043283-22a3c46831a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=20"
                                alt="Customer profile user interface"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;