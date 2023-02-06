import {format} from "date-fns"
import {zonedTimeToUtc} from "date-fns-tz"

type Props = {
  dateString: string
}

const DateFormatter = ({dateString}: Props) => {
    const date = zonedTimeToUtc(dateString, "Asia/Tokyo")
    return <time dateTime={dateString}>{format(date, "yyyy-MM-dd")}</time>
}

export default DateFormatter
