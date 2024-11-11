import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ShoppingCart, X, Minus, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ShambaShoppingCart() {
    const navigate = useNavigate();
    const {cart, removeFromCart, updateQuantity, total} = useCart();
    const [isOpen, setIsOpen] = useState(false)

    const handleRemove = (productID) => {
        removeFromCart(productID)
    }

    const handleQuantityChange = (productID, newQuantity) => {
        updateQuantity(productID, newQuantity)
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4 text-amber-200" />
                {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.length}
                    </span>
                )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                {cart.length === 0 ? (
                <p className="text-center py-4">Your cart is empty.</p>
                ) : (
                <div className="mt-8 space-y-4">
                    {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.size}</p>
                            <p className="text-sm font-medium">KES{item.price}</p>
                        </div>
                        </div>
                        <div className="flex items-center space-x-2">
                        <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => handleRemove(item.id)}
                            aria-label="Remove item"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        </div>
                    </div>
                    ))}
                    <div className="flex justify-between items-center font-bold pt-4">
                    <span>Total:</span>
                    <span>KES {total}</span>
                    </div>
                    
                    <Button className="w-full" onClick={() => {setIsOpen(false); navigate('/checkout')}}>
                    Proceed to Checkout
                    </Button>
                </div>
                )}
            </SheetContent>
        </Sheet>
    );
}