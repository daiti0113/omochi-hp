import {format} from "date-fns"
import {zonedTimeToUtc} from "date-fns-tz"

type Props = {
  dateString: string
  showTime?: boolean
}

const DateFormatter = ({dateString, showTime}: Props) => {
    const date = zonedTimeToUtc(dateString, "Asia/Tokyo")
    return <time dateTime={dateString}>{format(date, showTime ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd")}</time>
}

export default DateFormatter
