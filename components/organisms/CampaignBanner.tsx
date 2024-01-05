import {useState} from "react"

export const CampaignBanner = () => {
    const [isShown, setIsShown] = useState(true)

    if (!isShown) return null

    return (
        <div id="marketing-banner" tabIndex={-1} className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-gradient-to-r to-emerald-600/60 from-sky-400/60 backdrop-blur-[2px] rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-14">
            <div className="flex flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0">
                <span className="text-black self-start text-md font-semibold whitespace-nowrap md:self-center">【先着5名様限定】</span>
                <p className="flex items-center text-xs md:text-sm font-semibold text-neutral-600 ml-2">月額 ¥3,000 でホームページが作れるキャンペーン実施中！</p>
            </div>
            <div className="flex items-center flex-shrink-0">
                <a href="https://omochi-okinawa.com/campaign/be_past_work" className="px-5 py-2 me-2 text-xs font-bold text-primary-500 bg-white rounded-md hover:bg-neutral-400 focus:ring-4 focus:ring-primary-300 focus:outline-none mr-4">詳しく見る</a>
                <button onClick={() => setIsShown(false)} type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center ml-auto text-black hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close banner</span>
                </button>
            </div>
        </div>
    )
}
