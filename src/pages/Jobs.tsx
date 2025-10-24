import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, IndianRupee, Clock, Search } from "lucide-react";

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: "ड्राइवर | Driver",
    company: "राज ट्रांसपोर्ट | Raj Transport",
    location: "दिल्ली | Delhi",
    salary: "₹15,000 - ₹20,000",
    hours: "8 घंटे | 8 hours",
    category: "Driver",
  },
  {
    id: 2,
    title: "दुकान सहायक | Shop Helper",
    company: "शर्मा जनरल स्टोर | Sharma General Store",
    location: "मुंबई | Mumbai",
    salary: "₹12,000 - ₹15,000",
    hours: "10 घंटे | 10 hours",
    category: "Shop Helper",
  },
  {
    id: 3,
    title: "रसोइया | Cook",
    company: "होटल ग्रीन पार्क | Hotel Green Park",
    location: "बैंगलोर | Bangalore",
    salary: "₹18,000 - ₹25,000",
    hours: "9 घंटे | 9 hours",
    category: "Cook",
  },
  {
    id: 4,
    title: "सुरक्षा गार्ड | Security Guard",
    company: "सिक्योर सर्विसेज | Secure Services",
    location: "दिल्ली | Delhi",
    salary: "₹14,000 - ₹18,000",
    hours: "12 घंटे | 12 hours",
    category: "Security Guard",
  },
];

const Jobs = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = mockJobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/")}
            >
              ← होम | Home
            </Button>
            <Button onClick={() => navigate("/post-job")}>
              <span className="font-semibold">नौकरी पोस्ट करें</span>
              <span className="mx-1 text-xs">Post Job</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            सभी नौकरियां
          </h1>
          <p className="text-xl text-muted-foreground">All Jobs</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="नौकरी या शहर खोजें | Search job or city"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 text-base"
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 border-2">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {job.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {job.company}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-sm">
                      {job.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{job.hours}</span>
                    </div>
                  </div>
                  <Button className="w-full md:w-auto">
                    <span className="font-semibold">अप्लाई करें</span>
                    <span className="mx-2">|</span>
                    <span>Apply Now</span>
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground">
                  <span className="block font-medium">कोई नौकरी नहीं मिली</span>
                  <span className="block text-sm">No jobs found</span>
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
