import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Star, MessageSquare, Send } from 'lucide-react';

// Sample review data
const initialReviews = [
  { id: 1, rating: 5, comment: "Great quality produce! Highly recommend.", date: '2024-10-05' },
  { id: 2, rating: 4, comment: "Good service but delivery was delayed.", date: '2024-10-01' },
  { id: 3, rating: 3, comment: "Average experience, could improve.", date: '2024-09-28' },
];

const ReviewsFeedbacks = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating > 0 && newReview.comment) {
      const updatedReviews = [
        ...reviews,
        { id: reviews.length + 1, ...newReview, date: new Date().toISOString().split('T')[0] }
      ];
      setReviews(updatedReviews);
      setNewReview({ rating: 0, comment: '' });
    }
  };

  const averageRating = reviews.length
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Reviews and Feedbacks</h2>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Overall Rating</CardTitle>
          <CardDescription>Based on {reviews.length} reviews</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <span className="text-4xl font-bold">{averageRating}</span>
            <StarRating rating={Math.round(averageRating)} />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="reviews" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
          <TabsTrigger value="leave-review">Leave a Review</TabsTrigger>
        </TabsList>
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {reviews.length === 0 ? (
                <p className="text-center text-gray-500">No reviews yet. Be the first to leave a review!</p>
              ) : (
                <ul className="space-y-4">
                  {reviews.map(review => (
                    <li key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <StarRating rating={review.rating} />
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="leave-review">
          <Card>
            <CardHeader>
              <CardTitle>Leave a Review</CardTitle>
              <CardDescription>Share your experience with us</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                        className={`focus:outline-none ${
                          star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        <Star className="h-8 w-8 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Review
                  </label>
                  <Textarea
                    id="comment"
                    name="comment"
                    value={newReview.comment}
                    onChange={handleReviewChange}
                    rows={4}
                    placeholder="Tell us about your experience..."
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Submit Review
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReviewsFeedbacks;