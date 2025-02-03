import { api } from "@/lib/axios"

export interface DispatchOrderrParams {
    orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderrParams) {
    await api.patch(`/orders/${orderId}/dispatch`)
}
