

import React, { useState, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Upload, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-500 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Branding */}
        <div className="text-xl font-bold">
          <Link to="/" className="text-white hover:text-gray-200">
            ShambaFusion
          </Link>
        </div>
        
        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/market" className="hover:text-gray-300">Market</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          <Link to="/admin-panel" className="hover:text-gray-300">Account</Link>
        </nav>
      </div>
    </header>
  )
}

export default function DiseaseModelForm() {
  const [cropType, setCropType] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [symptoms, setSymptoms] = useState('')
  const [treatment, setTreatment] = useState('')
  const fileInputRef = useRef(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
      }
    } catch (err) {
      console.error("Error accessing the camera:", err)
    }
  }

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
      const imageDataUrl = canvasRef.current.toDataURL('image/jpeg')
      setImagePreview(imageDataUrl)
      
      // Convert data URL to Blob
      fetch(imageDataUrl)
        .then(res => res.blob())
        .then(blob => {
          const file = new File([blob], "captured_image.jpg", { type: "image/jpeg" })
          setImage(file)
        })

      // Stop the video stream
      const stream = videoRef.current.srcObject
      const tracks = stream.getTracks()
      tracks.forEach(track => track.stop())
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend or disease model
    console.log({ cropType, image, symptoms, treatment })
    // Reset form after submission
    setCropType('')
    setImage(null)
    setImagePreview(null)
    setSymptoms('')
    setTreatment('')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="pt-20 pb-8 px-4">
        <Card className="w-full max-w-md mx-auto mt-8">
          <CardHeader>
            <CardTitle>Disease Model Input</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setImage(null)
                          setImagePreview(null)
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
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

              <div className="space-y-2">
                <Label htmlFor="treatment">Treatment (Optional)</Label>
                <Textarea
                  id="treatment"
                  placeholder="Known treatment options..."
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                />
              </div>

              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}