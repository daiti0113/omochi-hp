import {SectionContainer} from "../molecules/SectionContainer"

// eslint-disable-next-line max-lines-per-function
export const FAQ = () => {
    return (
        <SectionContainer>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Frequently asked questions</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>

                    <div className="flex flex-col max-w-screen-sm border-t mx-auto">
                        <div className="border-b">
                            <div className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
                                <span className="md:text-lg font-semibold transition duration-100">How does the product work?</span>

                                <span className="text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="hidden text-gray-500 mb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>

                        <div className="border-b">
                            <div className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
                                <span className="md:text-lg font-semibold transition duration-100">What are the features?</span>

                                <span className="text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="hidden text-gray-500 mb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>

                        <div className="border-b">
                            <div className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
                                <span className="md:text-lg font-semibold transition duration-100">What about integrations?</span>

                                <span className="text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="hidden text-gray-500 mb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>

                        <div className="border-b">
                            <div className="flex justify-between text-black hover:text-indigo-500 active:text-indigo-600 cursor-pointer gap-2 py-4">
                                <span className="md:text-lg font-semibold transition duration-100">Is support available?</span>

                                <span className="text-indigo-500 rotate-180">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>

                            <p className="text-gray-500 mb-4">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}
