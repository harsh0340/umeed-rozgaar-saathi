import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const jobCategories = [
  "Driver",
  "Helper",
  "Cook",
  "Security Guard",
  "Shop Helper",
  "Accountant",
  "Computer Operator",
  "Salesman",
];

const PostJob = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    salary: "",
    hours: "",
    category: "",
    city: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.salary || !formData.category || !formData.city) {
      toast({
        title: "कृपया सभी आवश्यक फ़ील्ड भरें | Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "✅ नौकरी सफलतापूर्वक पोस्ट हो गई | Job Posted Successfully",
    });
    navigate("/success");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-4"
        >
          ← होम पर जाएं | Go to Home
        </Button>

        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">
              <span className="text-primary">नौकरी पोस्ट करें</span>
            </CardTitle>
            <p className="text-muted-foreground mt-2">Post a Job</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base">
                  <span className="font-semibold">नौकरी का शीर्षक</span> | Job Title <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="जैसे: दुकान सहायक | e.g., Shop Helper"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="text-base py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-base">
                  <span className="font-semibold">नौकरी की श्रेणी</span> | Job Category <span className="text-destructive">*</span>
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger className="text-base py-6">
                    <SelectValue placeholder="श्रेणी चुनें | Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="salary" className="text-base">
                  <span className="font-semibold">वेतन</span> | Salary <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="salary"
                  placeholder="जैसे: ₹15,000 - ₹20,000 | e.g., ₹15,000 - ₹20,000"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  required
                  className="text-base py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="hours" className="text-base">
                  <span className="font-semibold">काम के घंटे</span> | Working Hours
                </Label>
                <Input
                  id="hours"
                  placeholder="जैसे: 8 घंटे | e.g., 8 hours"
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="text-base py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city" className="text-base">
                  <span className="font-semibold">शहर/स्थान</span> | City/Location <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="city"
                  placeholder="शहर का नाम | City name"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                  className="text-base py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-base">
                  <span className="font-semibold">विवरण</span> | Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="नौकरी के बारे में विस्तार से बताएं | Describe the job in detail"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="text-base min-h-32"
                />
              </div>

              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="block font-medium">📍 दुकान का स्थान Google Maps पर दिखाया जाएगा</span>
                  <span className="block text-xs">Shop location will be shown on Google Maps</span>
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <span className="font-semibold">नौकरी पोस्ट करें</span>
                <span className="mx-2">|</span>
                <span>Post Job</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;
