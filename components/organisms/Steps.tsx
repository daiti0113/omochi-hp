import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"

// eslint-disable-next-line max-lines-per-function
export const Steps = () => {
    return (
        <SectionContainer>
            <Headline>制作の流れ</Headline>
            <div className="mt-12 md:mt-20">
                <div className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 mr-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <span className="text-2xl">1</span>
                            </div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">1</span> - Idea</div>
                                <div className="p-3 text-3xl text-gray-800 font">Find your best idea</div>
                                <div className="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                            </div>
                            <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 1" className="object-scale-down" /></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 ml-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">2</div>
                            </div>
                        </div>
                        <div className="h-full border-r-4 border-transparent">
                            <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">2</span> - Collaboration</div>
                                <div className="p-3 text-3xl text-gray-800 font">Find your team and collaborate</div>
                                <div className="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                            </div>
                            <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 2" className="object-scale-down" /></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row-reverse">
                    <div className="border-t-4 border-l-4 border-transparent">
                        <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
                </div>
                <div className="flex flex-row">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 mr-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">3</div>
                            </div>
                        </div>
                        <div className="h-full border-l-4 border-transparent">
                            <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">3</span> - Planification</div>
                                <div className="p-3 text-3xl text-gray-800 font">Make a good plan and prepare tasks</div>
                                <div className="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                            </div>
                            <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 3" className="object-scale-down" /></div>
                        </div>
                    </div>
                </div>
                <div className="flex items-start flex-row">
                    <div className="border-t-4 border-r-4 border-transparent">
                        <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
                    </div>
                    <div className="border-t-4 border-transparent flex-auto">
                        <div className="h-16 border-b-4 border-gray-300 border-dashed"></div>
                    </div>
                    <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
                </div>
                <div className="flex flex-row-reverse">
                    <div className="hidden md:flex flex-col items-center">
                        <div className="w-32 ml-4 flex flex-col items-center justify-center">
                            <div className="border rounded-full w-14 h-14 flex items-center justify-center">
                                <div className="text-2xl">4</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-auto border rounded border-gray-300">
                        <div className="flex md:flex-row flex-col items-center">
                            <div className="flex-auto">
                                <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500"><span className="font-black">4</span> - Implementation</div>
                                <div className="p-3 text-3xl text-gray-800 font">Execute, impletement your solution</div>
                                <div className="px-3 pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis, voluptates error alias dolorem praesentium sit soluta iure incidunt labore explicabo eaque, quia architecto veritatis dolores, enim consequatur nihil ipsum.</div>
                            </div>
                            <div className="md:w-96 w-full p-5"><img src="https://image.flaticon.com/icons/svg/1330/1330216.svg" alt="step 4" className="object-scale-down" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}