import { render } from "@testing-library/react"
import { OrderStatus } from "./order-status"

describe("Order status", () => {
    it("should display the right text when order status is pending", () => {
        /* Pending */
        const wrapper = render(<OrderStatus status="pending" />)

        wrapper.debug()

        const statusText = wrapper.getByText("Pendente")
        const badgeElement = wrapper.getByTestId("badge")

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass("bg-slate-400")
    })

    it("should display the right text when order status is canceled", () => {
        /* Pending */
        const wrapper = render(<OrderStatus status="canceled" />)

        wrapper.debug()

        const statusText = wrapper.getByText("Cancelado")
        const badgeElement = wrapper.getByTestId("badge")

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass("bg-rose-500")
    })

    it("should display the right text when order status is delivering", () => {
        /* Pending */
        const wrapper = render(<OrderStatus status="delivering" />)

        wrapper.debug()

        const statusText = wrapper.getByText("Em entrega")
        const badgeElement = wrapper.getByTestId("badge")

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass("bg-amber-500")
    })

    it("should display the right text when order status is processing", () => {
        /* Pending */
        const wrapper = render(<OrderStatus status="processing" />)

        wrapper.debug()

        const statusText = wrapper.getByText("Em preparo")
        const badgeElement = wrapper.getByTestId("badge")

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass("bg-amber-500")
    })

    it("should display the right text when order status is delivered", () => {
        /* Pending */
        const wrapper = render(<OrderStatus status="delivered" />)

        wrapper.debug()

        const statusText = wrapper.getByText("Entregue")
        const badgeElement = wrapper.getByTestId("badge")

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass("bg-emerald-500")
    })
})
