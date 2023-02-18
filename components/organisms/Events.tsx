import Link from "next/link"
import {useEffect, useState} from "react"
import {Headline} from "../atoms/Headline"
import {SectionContainer} from "../molecules/SectionContainer"
import fetchJsonp from "fetch-jsonp"
import DateFormatter from "../date-formatter"

// eslint-disable-next-line max-lines-per-function
export const Events = () => {
    const [events, setEvents] = useState<ConnpassResponse["events"]>([])
    useEffect(() => {
        const fetch = async () => {
            const res = await getEvents()
            setEvents(res)
        }
        fetch()
    }, [])

    return (
        <SectionContainer>
            <Headline>イベント情報</Headline>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto mb-10 md:mb-16 mt-6">
                <span className="inline-block leading-normal">沖縄県内のIT系の</span>
                <span className="inline-block leading-normal">イベント情報をご紹介します。</span>
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
                {events.length > 0
                    ? events.map((event) => <Event event={event} key={event.event_id} />)
                    : <p className="text-center mx-auto pb-10">現在、イベント情報はありません</p>
                }
            </div>
        </SectionContainer>
    )
}

type ConnpassResponse = {
    results_start: number
    results_returned: number
    results_available: number
    events: Array<{
        event_id: number
        title: string
        catch: string
        description: string
        event_url: string
        started_at: string
        ended_at: string
        owner_display_name: string
        place: string
    }>
}

const getEvents = async () => {
    try {
        const res = await fetchJsonp("https://connpass.com/api/v1/event/?keyword=%E6%B2%96%E7%B8%84&order=2&count=5")
        const connpassResponse = await res.json() as ConnpassResponse
        return connpassResponse.events
    } catch {
        return []
    }
}

const Event = ({event}: {event: ConnpassResponse["events"][number]}) => {
    return (
        <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
            <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-gray-400 text-sm"><DateFormatter dateString={event.started_at} showTime /></span>

                <h2 className="text-gray-800 text-xl font-bold">
                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">{event.title}</a>
                </h2>

                <p className="text-gray-500">{event.catch}</p>

                <div>
                    <Link href={event.event_url} className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100">詳しく見る</Link>
                </div>
            </div>
        </div>
    )
}
