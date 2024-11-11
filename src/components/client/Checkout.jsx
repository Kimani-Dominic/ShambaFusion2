import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/hooks/use-toast";

export function Checkout() {
    const {cart, total, clear} = useCart()
    const {toast} = useToast()
    const [isProcessing, setIsProcessing] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setIsProcessing(true)

        //api call here
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsProcessing(false)
        clearCart()
        toast({
            title: 'Order Placed',
            description: 'Thank you for the purchase',
        })
    }

    if (cart.length === 0) {
        return <p className="text-center py-4">Your cart is empty. Add some products to checkout.</p>
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.name} ({item.size}) x{item.quantity}</span>
                <span>KES {(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className="flex justify-between items-center font-bold pt-4">
              <span>Total:</span>
              <span>KES {total}</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" required />
            </div>
            <Button type="submit" className="w-full bg-green-500" disabled={isProcessing}>
              {isProcessing ? 'Processing...' : 'Place Order'}
            </Button>
          </form>
        </div>
    )
}