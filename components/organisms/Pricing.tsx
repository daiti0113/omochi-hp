// eslint-disable-next-line max-lines-per-function
export const Pricing = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">料金プラン</h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-12 mb-6 md:mb-8">
                    {/* <!-- plan - start --> */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col border rounded-lg gap-4 p-4 pt-6">
                            <h3 className="text-gray-800 text-2xl font-semibold text-center">START</h3>
                            <div className="flex justify-center items-end gap-1">
                                <span className="text-4xl text-gray-800 font-bold">¥6,000</span>
                                <span className="text-gray-500">/ 月</span>
                            </div>
                            <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                                + ¥30,000 の制作費
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-100 rounded-lg space-y-3 px-4 py-6">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">1.000 MB file storage</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">2.000 MB bandwidth per month</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">200 tasks per month</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Comunity support</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- plan - end --> */}

                    {/* <!-- plan - start --> */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col border border-indigo-500 rounded-lg relative gap-4 p-4 pt-6">
                            <div className="flex justify-center absolute -top-3 inset-x-0">
                                <span className="h-6 flex justify-center items-center bg-indigo-500 text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1">一番人気</span>
                            </div>
                            <h3 className="text-gray-800 text-2xl font-semibold text-center">BUSINESS</h3>
                            <div className="flex justify-center items-end gap-1">
                                <span className="text-4xl text-gray-800 font-bold">¥8,000</span>
                                <span className="text-gray-500">/ 月</span>
                            </div>
                            <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                                + ¥50,000 の制作費
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-100 rounded-lg space-y-3 px-4 py-6">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Unlimited file storage</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">10 GB bandwidth per month</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">10.000 tasks per month</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Email support</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">100 Webhooks</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- plan - end --> */}

                    {/* <!-- plan - start --> */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col border rounded-lg gap-4 p-4 pt-6">
                            <h3 className="text-gray-800 text-2xl font-semibold text-center">PREMIUM</h3>
                            <div className="flex justify-center items-end gap-1">
                                <span className="text-4xl text-gray-800 font-bold">¥10,000</span>
                                <span className="text-gray-500">/ 月</span>
                            </div>
                            <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                                + ¥60,000 の制作費
                            </div>
                        </div>

                        <div className="flex-1 bg-gray-100 rounded-lg space-y-3 px-4 py-6">
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Unlimited file storage</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Unlimited bandwidth per month</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">1.000.000 tasks per month</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Email and phone support</span>
                            </div>
                            <div className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 shrink-0 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Unlimited Webhooks</span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- plan - end --> */}
                </div>
            </div>
        </div>
    )
}