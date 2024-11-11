// src/components/ProductCard.jsx
import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus } from 'lucide-react'
import { useCart } from '@/hooks/useCart'

const ProductCard = ({ product }) => {
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () => setQuantity(prev => prev + 1)
    const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

    const handleAddToCart = () => {
        addToCart({ ...product, quantity })
        setQuantity(1) // Reset quantity after adding to cart
    }

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
                <img src={product.imageUrl} alt={`${product.name} ${product.size}`} className="w-full h-48 object-cover rounded-md" />
                <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-2xl font-bold">KES {product.price.toFixed(2)}</p>
            <p className="text-muted-foreground">{product.size}</p>
                {product.farmer && (
                        <div className="mt-4 bg-gray-100 p-3 rounded">
                            <h4 className="text-sm font-medium text-gray-700">Farmer: {product.farmer.name || "Unknown"}</h4>
                            <p className="text-sm text-gray-600">{product.farmer.location || "Location not specified"}</p>
                            <p className="text-xs text-gray-500 mt-1">{product.farmer.bio || "No bio available"}</p>
                        </div>
                )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={decrementQuantity} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
                </Button>
                <span className="text-xl font-semibold">{quantity}</span>
                <Button variant="outline" size="icon" onClick={incrementQuantity} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
                </Button>
            </div>
            <Button className="w-full bg-green-500" onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;

