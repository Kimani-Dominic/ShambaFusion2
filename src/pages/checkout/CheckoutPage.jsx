import { Checkout } from "@/components/client/Checkout";

function CheckoutPage() {
    return (
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
            <Checkout />
        </div>
      )
}

export default CheckoutPage;