import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Progress } from "../ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { ScrollArea } from "../ui/scroll-area"
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Upload, AlertCircle, Leaf, Sprout, Zap, Book, ThumbsUp, ThumbsDown, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'

const PestControl = () => {
  const [cropType, setCropType] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [treatment, setTreatment] = useState('');

  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing the camera:", err);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const imageDataUrl = canvasRef.current.toDataURL('image/jpeg');
      setImagePreview(imageDataUrl);
      
      fetch(imageDataUrl)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "captured_image.jpg", { type: "image/jpeg" });
          setSelectedImage(file);
        });

      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const analyzeImage = async () => {
    setIsLoading(true);
    // In a real application, this would be an API call to your AI model
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API delay
    setAnalysis({
      disease: "Late Blight",
      confidence: 0.92,
      symptoms: "Dark brown spots on leaves, white fuzzy growth on undersides, rapid wilting.",
      causes: "Caused by the oomycete pathogen Phytophthora infestans. Thrives in cool, wet conditions.",
      recommendations: [
        "Remove and destroy infected plant parts",
        "Apply fungicide as a preventive measure",
        "Improve air circulation around plants",
        "Water at the base of plants to keep foliage dry"
      ],
      resources: [
        { title: "Late Blight Management", url: "https://example.com/late-blight" },
        { title: "Organic Control Methods", url: "https://example.com/organic-methods" }
      ]
    });
    setIsLoading(false);
  };

  const submitFeedback = () => {
    console.log("Feedback submitted:", feedback);
    alert("Thank you for your feedback!");
    setFeedback('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await analyzeImage();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="pt-20 pb-8 px-4">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Pest & Disease Prediction</CardTitle>
            <CardDescription>Upload an image of your plant for AI-powered disease detection and treatment recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="crop-type">Crop Type</Label>
                <Select value={cropType} onValueChange={setCropType}>
                  <SelectTrigger id="crop-type">
                    <SelectValue placeholder="Select crop type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tomatoes">Tomatoes</SelectItem>
                    <SelectItem value="french-beans">French Beans</SelectItem>
                    <SelectItem value="potatoes">Potatoes</SelectItem>
                    <SelectItem value="corn">Corn</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Image Input</Label>
                <div className="flex flex-col items-center justify-center w-full">
                  {imagePreview ? (
                    <div className="relative w-full h-64">
                      <img
                        src={imagePreview}
                        alt="Selected plant"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setSelectedImage(null);
                          setImagePreview(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <Label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-10 h-10 mb-3 text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                      <Input id="dropzone-file" type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                    </Label>
                  )}
                  <video ref={videoRef} className="hidden" />
                  <canvas ref={canvasRef} className="hidden" width="800" height="600" />
                  <div className="flex justify-center mt-4 space-x-4">
                    <Button type="button" onClick={() => fileInputRef.current.click()}>
                      Upload Image
                    </Button>
                    <Button type="button" onClick={startCamera}>
                      <Camera className="w-4 h-4 mr-2" />
                      Open Camera
                    </Button>
                  </div>
                  {videoRef.current && videoRef.current.srcObject && (
                    <Button type="button" onClick={captureImage} className="mt-2">
                      Capture Image
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Symptoms (Optional)</Label>
                <Textarea
                  id="symptoms"
                  placeholder="Describe the observed symptoms..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full" disabled={!selectedImage || isLoading}>
                {isLoading ? "Analyzing..." : "Analyze Image"}
              </Button>
            </form>

            {analysis && (
              <div className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Analysis Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold">Detected Disease:</p>
                        <p>{analysis.disease}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Confidence Level:</p>
                        <Progress value={analysis.confidence * 100} className="w-full" />
                        <p className="text-sm text-right">{(analysis.confidence * 100).toFixed(1)}%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="symptoms" className="mt-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                    <TabsTrigger value="causes">Causes</TabsTrigger>
                    <TabsTrigger value="actions">Actions</TabsTrigger>
                    <TabsTrigger value="resources">Resources</TabsTrigger>
                  </TabsList>
                  <TabsContent value="symptoms">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          Symptoms
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{analysis.symptoms}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="causes">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Leaf className="w-5 h-5 mr-2" />
                          Causes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{analysis.causes}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="actions">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Recommended Actions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc pl-5 space-y-2">
                          {analysis.recommendations.map((action, index) => (
                            <li key={index}>{action}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="resources">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Book className="w-5 h-5 mr-2" />
                          Further Resources
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {analysis.resources.map((resource, index) => (
                            <li key={index}>
                              <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                {resource.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Feedback</CardTitle>
                <CardDescription>Help us improve our disease detection model</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Share your thoughts on the analysis..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" onClick={() => setFeedback(feedback + " The analysis was accurate.")}>
                    <ThumbsUp className="w-4 h-4 mr-2" /> Accurate
                  </Button>
                  <Button variant="outline" onClick={() => setFeedback(feedback + " The analysis needs improvement.")}>
                    <ThumbsDown className="w-4 h-4 mr-2" /> Needs Improvement
                  </Button>
                </div>
                <Button onClick={submitFeedback} disabled={!feedback}>Submit Feedback</Button>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PestControl;