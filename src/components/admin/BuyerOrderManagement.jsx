import { useState } from 'react';
import ordersData from '../../data/orders';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { Calendar, Search, SortAsc, SortDesc, Download, Eye, XCircle } from 'lucide-react';

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState(ordersData);
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const ordersPerPage = 5;

  // Filter and sort orders
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterAndSortOrders(e.target.value, sortConfig);
  };

  const filterAndSortOrders = (term, sort) => {
    let filtered = ordersData.filter(
      (order) =>
        order.date.includes(term) ||
        order.status.toLowerCase().includes(term.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (a[sort.key] < b[sort.key]) return sort.direction === 'asc' ? -1 : 1;
      if (a[sort.key] > b[sort.key]) return sort.direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredOrders(filtered);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    setSortConfig({ key, direction });
    filterAndSortOrders(searchTerm, { key, direction });
  };

  // Pagination
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Update order status
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = filteredOrders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setFilteredOrders(updatedOrders);
  };

  // Export to CSV
  const exportToCSV = () => {
    const headers = ['Order ID', 'Date', 'Status', 'Total Amount', 'Products'];
    const csvContent = [
      headers.join(','),
      ...filteredOrders.map(order => 
        [order.id, order.date, order.status, order.totalAmount, order.products.join('; ')].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'orders.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>My Orders</CardTitle>
        <CardDescription>Manage and view your order history</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-8"
            />
          </div>
          <Button onClick={exportToCSV} variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export to CSV
          </Button>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">
                <Button variant="ghost" onClick={() => handleSort('id')}>
                  Order ID
                  {sortConfig.key === 'id' && (sortConfig.direction === 'asc' ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />)}
                </Button>
              </TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('date')}>
                  Date
                  {sortConfig.key === 'date' && (sortConfig.direction === 'asc' ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />)}
                </Button>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total Amount</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge variant={order.status === 'Completed' ? 'success' : order.status === 'Pending' ? 'warning' : 'secondary'}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">${order.totalAmount}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setSelectedOrder(order)}>
                          <Eye className="mr-2 h-4 w-4" /> View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Order Details</DialogTitle>
                          <DialogDescription>Order ID: {selectedOrder?.id}</DialogDescription>
                        </DialogHeader>
                        {selectedOrder && (
                          <div className="mt-4">
                            <p><strong>Date:</strong> {selectedOrder.date}</p>
                            <p><strong>Status:</strong> {selectedOrder.status}</p>
                            <p><strong>Total Amount:</strong> ${selectedOrder.totalAmount}</p>
                            <p><strong>Products:</strong></p>
                            <ul className="list-disc ml-5">
                              {selectedOrder.products.map((product, index) => (
                                <li key={index}>{product}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                    {order.status === 'Pending' && (
                      <Button variant="destructive" size="sm" onClick={() => updateOrderStatus(order.id, 'Cancelled')}>
                        <XCircle className="mr-2 h-4 w-4" /> Cancel
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
            </PaginationItem>
            {[...Array(Math.ceil(filteredOrders.length / ordersPerPage))].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => paginate(index + 1)} isActive={currentPage === index + 1}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(filteredOrders.length / ordersPerPage)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
};

export default OrderManagement;