import { getMonthRevenue } from "@/api/get-month-revenue"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"
import { DollarSign } from "lucide-react"

export function MonthRevenueCard() {
    const { data: monthRevenue } = useQuery({
        queryFn: getMonthRevenue,
        queryKey: ["metrics", "month-receipt"],
    })

    return (
        <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-semibold">
                    Receita total (mês)
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tight">
                    R$ 1248,60
                </span>
                <span className="block text-xs text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">
                        +2%
                    </span>{" "}
                    em relação ao mês passado
                </span>
            </CardContent>
        </Card>
    )
}
