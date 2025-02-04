import { http, HttpResponse } from "msw"
import { getDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period"

export const getDailyRevenueInPeriodMock = http.get<
    never,
    never,
    getDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
    return HttpResponse.json([
        { date: "01/01/2025", receipt: 2000 },
        { date: "02/01/2025", receipt: 1500 },
        { date: "03/01/2025", receipt: 1700 },
        { date: "04/01/2025", receipt: 1290 },
        { date: "05/01/2025", receipt: 1283 },
        { date: "06/01/2025", receipt: 1617 },
        { date: "07/01/2025", receipt: 2006 },
    ])
})
