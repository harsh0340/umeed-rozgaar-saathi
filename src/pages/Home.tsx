import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Car,
  Users,
  ChefHat,
  Shield,
  ShoppingBag,
  Calculator,
  Monitor,
  TrendingUp,
} from "lucide-react";

const jobCategories = [
  { icon: Car, hindi: "ड्राइवर", english: "Driver" },
  { icon: Users, hindi: "सहायक", english: "Helper" },
  { icon: ChefHat, hindi: "रसोइया", english: "Cook" },
  { icon: Shield, hindi: "सुरक्षा गार्ड", english: "Security Guard" },
  { icon: ShoppingBag, hindi: "दुकान सहायक", english: "Shop Helper" },
  { icon: Calculator, hindi: "अकाउंटेंट", english: "Accountant" },
  { icon: Monitor, hindi: "कंप्यूटर ऑपरेटर", english: "Computer Operator" },
  { icon: TrendingUp, hindi: "सेल्समैन", english: "Salesman" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">उ</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Umeed
                </h1>
                <p className="text-xs text-muted-foreground">रोज़गार सबके लिए</p>
              </div>
            </div>
            <Button onClick={() => navigate("/register")} size="lg">
              <span className="font-semibold">लॉगिन / रजिस्टर</span>
              <span className="ml-1 text-xs">Login / Register</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">सभी के लिए रोज़गार</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Jobs for Everyone
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <span className="block font-medium">नौकरी खोजें या कर्मचारी हायर करें - आसान, तेज़, और मुफ़्त</span>
            <span className="block text-sm mt-1">Find jobs or hire staff - Easy, Fast, and Free</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/jobs")}
              className="text-lg px-8 py-6"
            >
              <span className="font-semibold">नौकरी खोजें</span>
              <span className="mx-2">|</span>
              <span>Find Jobs</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/post-job")}
              className="text-lg px-8 py-6 border-2"
            >
              <span className="font-semibold">कर्मचारी चाहिए</span>
              <span className="mx-2">|</span>
              <span>Need Staff</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
            <span className="text-primary">नौकरी की श्रेणियां</span>
          </h3>
          <p className="text-center text-muted-foreground mb-10">Job Categories</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {jobCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border-2"
                  onClick={() => navigate("/jobs")}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 text-base">
                      {category.hindi}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {category.english}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            <span className="text-primary">आज ही शुरू करें</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-2">Start Today</p>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            <span className="block font-medium">मुफ़्त में रजिस्टर करें और अपने सपनों की नौकरी पाएं</span>
            <span className="block text-sm">Register for free and find your dream job</span>
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/register")}
            className="text-lg px-10 py-6"
          >
            <span className="font-semibold">अभी रजिस्टर करें</span>
            <span className="mx-2">|</span>
            <span>Register Now</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            <span className="font-medium">© 2025 Umeed - रोज़गार सबके लिए</span>
            <span className="block text-sm mt-1">Jobs for Everyone</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
