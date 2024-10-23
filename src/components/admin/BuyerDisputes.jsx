import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"
import { AlertCircle, Filter, SortAsc, SortDesc, Eye, Plus, Check, X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters long" }),
  details: z.string().min(20, { message: "Details must be at least 20 characters long" }),
});

const Disputes = () => {
  const [disputes, setDisputes] = useState([
    {
      id: 1,
      title: 'Issue with Delivery',
      status: 'Pending',
      raisedBy: 'Buyer',
      details: 'The product was not delivered on time.',
      createdAt: '2024-10-08',
    },
    {
      id: 2,
      title: 'Product Not as Described',
      status: 'Resolved',
      raisedBy: 'Seller',
      details: 'The buyer claimed the product quality was not as described.',
      createdAt: '2024-09-25',
    },
  ]);

  const [viewDispute, setViewDispute] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortConfig, setSortConfig] = useState({ key: 'createdAt', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [showNewDisputeDialog, setShowNewDisputeDialog] = useState(false);
  const disputesPerPage = 5;

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const filteredDisputes = disputes
    .filter(dispute => filterStatus === 'all' || dispute.status === filterStatus)
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
      if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  const indexOfLastDispute = currentPage * disputesPerPage;
  const indexOfFirstDispute = indexOfLastDispute - disputesPerPage;
  const currentDisputes = filteredDisputes.slice(indexOfFirstDispute, indexOfLastDispute);

  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      direction: prevConfig.key === key && prevConfig.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const handleStatusUpdate = (id, newStatus) => {
    setDisputes(disputes.map(dispute =>
      dispute.id === id ? { ...dispute, status: newStatus } : dispute
    ));
  };

  const onSubmitNewDispute = (data) => {
    setDisputes([
      ...disputes,
      { ...data, id: disputes.length + 1, status: 'Pending', createdAt: new Date().toISOString().slice(0, 10) },
    ]);
    setShowNewDisputeDialog(false);
    reset();
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Dispute Management</CardTitle>
        <CardDescription>View and manage your disputes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={() => handleSort('createdAt')}>
              {sortConfig.key === 'createdAt' && sortConfig.direction === 'asc' ? <SortAsc /> : <SortDesc />}
            </Button>
          </div>
          <Dialog open={showNewDisputeDialog} onOpenChange={setShowNewDisputeDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Raise New Dispute
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Raise a New Dispute</DialogTitle>
                <DialogDescription>
                  Please provide details about your dispute.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmitNewDispute)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Dispute Title"
                    {...register("title")}
                  />
                  {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Dispute Details"
                    {...register("details")}
                  />
                  {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details.message}</p>}
                </div>
                <DialogFooter>
                  <Button type="submit">Submit Dispute</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Raised By</TableHead>
              <TableHead>
                <Button variant="ghost" onClick={() => handleSort('createdAt')}>
                  Date
                  {sortConfig.key === 'createdAt' && (sortConfig.direction === 'asc' ? <SortAsc className="ml-2 h-4 w-4" /> : <SortDesc className="ml-2 h-4 w-4" />)}
                </Button>
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentDisputes.map((dispute) => (
              <TableRow key={dispute.id}>
                <TableCell>{dispute.title}</TableCell>
                <TableCell>
                  <Badge variant={dispute.status === 'Resolved' ? 'success' : 'warning'}>
                    {dispute.status}
                  </Badge>
                </TableCell>
                <TableCell>{dispute.raisedBy}</TableCell>
                <TableCell>{dispute.createdAt}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => setViewDispute(dispute)}>
                          <Eye className="mr-2 h-4 w-4" /> View
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{viewDispute?.title}</DialogTitle>
                          <DialogDescription>Dispute Details</DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 space-y-2">
                          <p><strong>Status:</strong> {viewDispute?.status}</p>
                          <p><strong>Raised By:</strong> {viewDispute?.raisedBy}</p>
                          <p><strong>Date:</strong> {viewDispute?.createdAt}</p>
                          <p><strong>Details:</strong> {viewDispute?.details}</p>
                        </div>
                        {viewDispute?.status === 'Pending' && (
                          <DialogFooter>
                            <Button onClick={() => handleStatusUpdate(viewDispute.id, 'Resolved')}>
                              Mark as Resolved
                            </Button>
                          </DialogFooter>
                        )}
                      </DialogContent>
                    </Dialog>
                    {dispute.status === 'Pending' && (
                      <Button variant="outline" size="sm" onClick={() => handleStatusUpdate(dispute.id, 'Resolved')}>
                        <Check className="mr-2 h-4 w-4" /> Resolve
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
              <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} />
            </PaginationItem>
            {[...Array(Math.ceil(filteredDisputes.length / disputesPerPage))].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => setCurrentPage(index + 1)} isActive={currentPage === index + 1}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredDisputes.length / disputesPerPage)))} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
};

export default Disputes;