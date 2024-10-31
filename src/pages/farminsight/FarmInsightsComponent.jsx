import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Implementation of the FarmInsights class
class FarmInsights {
  constructor(crop_type, crop_stage, insights = '') {
    this.crop_type = crop_type;
    this.crop_stage = crop_stage;
    this.insights = insights;
    this.created_at = new Date();
  }

  toString() {
    return `${this.crop_type} at ${this.crop_stage} stage: ${this.insights}`;
  }

  async generate_ai_insights() {
    try {
      const response = await axios.post('/api/generate-insights', {
        crop_type: this.crop_type,
        crop_stage: this.crop_stage,
      });
      return response.data.insights;
    } catch (error) {
      console.error('Error generating AI insights:', error);
      throw error;
    }
  }

  async save() {
    if (!this.insights) {
      this.insights = await this.generate_ai_insights();
    }
    try {
      await axios.post('/api/farm-insights/', {
        crop_type: this.crop_type,
        crop_stage: this.crop_stage,
        insights: this.insights,
      });
    } catch (error) {
      console.error('Error saving farm insights:', error);
      throw error;
    }
  }
}

const cropTypes = [
  { value: 'tomatoes', label: 'Tomatoes' },
  { value: 'french beans', label: 'French Beans' },
  { value: 'potatoes', label: 'Potatoes' },
  { value: 'corn', label: 'Corn' },
  { value: 'wheat', label: 'Wheat' },
];

const cropStages = [
  { value: 'planting', label: 'Planting' },
  { value: 'seedling', label: 'Seedling' },
  { value: 'vegetative', label: 'Vegetative' },
  { value: 'flowering', label: 'Flowering' },
  { value: 'fruiting', label: 'Fruiting' },
  { value: 'harvesting', label: 'Harvesting' },
];

const FarmInsightsComponent = () => {
  const [cropType, setCropType] = useState('');
  const [cropStage, setCropStage] = useState('');
  const [insights, setInsights] = useState('');
  const [createdAt, setCreatedAt] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const farmInsights = new FarmInsights(cropType, cropStage);
      await farmInsights.save();
      setInsights(farmInsights.insights);
      setCreatedAt(farmInsights.created_at);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="pt-20 pb-8 px-4">
        <Card className="w-full max-w-md mx-auto mt-8">
          <CardHeader>
            <CardTitle>Farm Insights Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="crop-type">Crop Type</Label>
                <Select value={cropType} onValueChange={setCropType} required>
                  <SelectTrigger id="crop-type">
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropTypes.map((crop) => (
                      <SelectItem key={crop.value} value={crop.value}>
                        {crop.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="crop-stage">Crop Stage</Label>
                <Select value={cropStage} onValueChange={setCropStage} required>
                  <SelectTrigger id="crop-stage">
                    <SelectValue placeholder="Select crop stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {cropStages.map((stage) => (
                      <SelectItem key={stage.value} value={stage.value}>
                        {stage.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full">Generate Insights</Button>
            </form>

            {insights && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Generated Insights</h2>
                <Textarea readOnly className="mt-2" value={insights} rows={4} />
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Created At:</strong> {createdAt ? createdAt.toLocaleString() : ''}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default FarmInsightsComponent;