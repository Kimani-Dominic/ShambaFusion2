import React, { useState } from 'react'; // Only one import for React and useState
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Ensure 'Link' is correctly imported from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

// Mock function for translation (replace with actual implementation)
const translateToSwahili = (text) => {
  return `Swahili: ${text}`;
}

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-green-500 text-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Branding */}
        <div className="text-xl font-bold">
          <Link href="/" className="text-white hover:text-gray-200">
            ShambaFusion
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/market" className="hover:text-gray-300">Market</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/admin-panel" className="hover:text-gray-300">Account</Link>
        </nav>
      </div>
    </header>
  );
}

export default function DiseaseDetailsPage({ details }) {
  const [isSwahili, setIsSwahili] = useState(false);

  // Fallback in case details is not provided
  if (!details) {
    return (
      <div className="min-h-screen bg-gray-100 pt-16">
        <Header />
        <div className="w-full max-w-3xl mx-auto mt-8">
          <p className="text-center text-red-500">No disease details available.</p>
        </div>
      </div>
    );
  }

  const translate = (text) => {
    return isSwahili ? translateToSwahili(text) : text;
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <Header />
      <Card className="w-full max-w-3xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>{translate(details.disease_name)}</CardTitle>
          <CardDescription>{translate(`Crop Type: ${details.crop_type}`)}</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="symptoms">
              <AccordionTrigger>{translate("Symptoms")}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5">
                  {details.symptoms && details.symptoms.length > 0 ? (
                    details.symptoms.map((symptom, index) => (
                      <li key={index}>{translate(symptom)}</li>
                    ))
                  ) : (
                    <li>{translate("No symptoms available")}</li>
                  )}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="treatment">
              <AccordionTrigger>{translate("Treatment")}</AccordionTrigger>
              <AccordionContent>
                <p>{translate(details.treatment || "No treatment information available.")}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="additional-info">
              <AccordionTrigger>{translate("Additional Information")}</AccordionTrigger>
              <AccordionContent>
                <p>{translate(details.additional_info || "No additional information available.")}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={() => setIsSwahili(!isSwahili)}
          >
            {isSwahili ? "View in English" : "Tazama kwa Kiswahili"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}



// import React, { useState } from 'react';
// import Link from 'next/link';
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// // Mock function for translation (replace with actual implementation)
// const translateToSwahili = (text) => {
//   // This is a placeholder. In a real application, you'd call an API or use a translation library.
//   return `Swahili: ${text}`;
// }

// function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-green-500 text-white shadow-md z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Branding */}
//         <div className="text-xl font-bold">
//           <Link href="/" className="text-white hover:text-gray-200">
//             ShambaFusion
//           </Link>
//         </div>
        
//         {/* Navigation Links */}
//         <nav className="space-x-6">
//           <Link href="/" className="hover:text-gray-300">Home</Link>
//           <Link href="/market" className="hover:text-gray-300">Market</Link>
//           <Link href="/about" className="hover:text-gray-300">About</Link>
//           <Link href="/contact" className="hover:text-gray-300">Contact</Link>
//           <Link href="/admin-panel" className="hover:text-gray-300">Account</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// function DiseaseDetailsDisplay({ details }) {
//   const [isSwahili, setIsSwahili] = useState(false);

//   const translate = (text) => {
//     return isSwahili ? translateToSwahili(text) : text;
//   }

//   return (
//     <Card className="w-full max-w-3xl mx-auto mt-20">
//       <CardHeader>
//         <CardTitle>{translate(details.disease_name)}</CardTitle>
//         <CardDescription>{translate(`Crop Type: ${details.crop_type}`)}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <Accordion type="single" collapsible className="w-full">
//           <AccordionItem value="symptoms">
//             <AccordionTrigger>{translate("Symptoms")}</AccordionTrigger>
//             <AccordionContent>
//               <ul className="list-disc pl-5">
//                 {details.symptoms.length > 0 ? (
//                   details.symptoms.map((symptom, index) => (
//                     <li key={index}>{translate(symptom)}</li>
//                   ))
//                 ) : (
//                   <li>{translate("No symptoms available")}</li>
//                 )}
//               </ul>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="treatment">
//             <AccordionTrigger>{translate("Treatment")}</AccordionTrigger>
//             <AccordionContent>
//               <p>{translate(details.treatment || "No treatment information available.")}</p>
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="additional-info">
//             <AccordionTrigger>{translate("Additional Information")}</AccordionTrigger>
//             <AccordionContent>
//               <p>{translate(details.additional_info || "No additional information available.")}</p>
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button 
//           variant="outline" 
//           onClick={() => setIsSwahili(!isSwahili)}
//         >
//           {isSwahili ? "View in English" : "Tazama kwa Kiswahili"}
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default function DiseaseDetailsPage({ details }) {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Header />
//       <main className="container mx-auto px-4 py-8">
//         <DiseaseDetailsDisplay details={details} />
//       </main>
//     </div>
//   );
// }
