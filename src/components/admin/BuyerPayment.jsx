import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { CreditCard, Smartphone, Building } from 'lucide-react'
import TransactionHistory from './BuyerTransactionHistory';

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    phoneNumber: '',
    accountNumber: '',
    bankName: '',
  });

  const handleMethodChange = (e) => {
    setSelectedMethod(e.target.value);
    setPaymentDetails({
      phoneNumber: '',
      accountNumber: '',
      bankName: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the payment based on the selected method
    console.log('Payment Details:', paymentDetails);
    alert(`Payment method: ${selectedMethod} \nDetails: ${JSON.stringify(paymentDetails)}`);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Choose Payment Method</CardTitle>
        <CardDescription>Select your preferred payment option</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="payment" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="history">Transaction History</TabsTrigger>
          </TabsList>
          <TabsContent value="payment">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="payment-method">Select Payment Method</Label>
                <Select onValueChange={handleMethodChange} value={selectedMethod}>
                  <SelectTrigger id="payment-method">
                    <SelectValue placeholder="Choose Payment Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mpesa">
                      <div className="flex items-center">
                        <Smartphone className="mr-2 h-4 w-4" />
                        MPesa
                      </div>
                    </SelectItem>
                    <SelectItem value="airtel_money">
                      <div className="flex items-center">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Airtel Money
                      </div>
                    </SelectItem>
                    <SelectItem value="bank_transfer">
                      <div className="flex items-center">
                        <Building className="mr-2 h-4 w-4" />
                        Bank Transfer
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(selectedMethod === 'mpesa' || selectedMethod === 'airtel_money') && (
                <div className="space-y-2">
                  <Label htmlFor="phone-number">Phone Number</Label>
                  <Input
                    id="phone-number"
                    type="tel"
                    name="phoneNumber"
                    value={paymentDetails.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              )}

              {selectedMethod === 'bank_transfer' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="bank-name">Bank Name</Label>
                    <Input
                      id="bank-name"
                      type="text"
                      name="bankName"
                      value={paymentDetails.bankName}
                      onChange={handleInputChange}
                      placeholder="Enter your bank name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input
                      id="account-number"
                      type="text"
                      name="accountNumber"
                      value={paymentDetails.accountNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your account number"
                      required
                    />
                  </div>
                </>
              )}

              <Button type="submit" className="w-full">
                <CreditCard className="mr-2 h-4 w-4" /> Proceed to Payment
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="history">
            <TransactionHistory />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
    </div>
  );
};

export default PaymentMethods;
