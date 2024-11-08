import React from 'react';
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Search, Filter, ShoppingCart } from 'lucide-react'

const CustomHeader = () => {
  return (
    <header className="bg-white shadow-lg mt-12 py-6 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Search Bar */}
          <div className="relative w-full sm:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="text"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full rounded-full border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* Filter Button */}
            <Button variant="outline" className="flex items-center space-x-2 rounded-full">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>

            {/* Shopping Cart */}
            <Button variant="ghost" className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 snipcart-checkout">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 px-2 py-1 text-xs font-bold rounded-full snipcart-items-count">
                0
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CustomHeader;