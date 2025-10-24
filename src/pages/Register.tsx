import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Store } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            ← वापस जाएं | Go Back
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            रजिस्टर करें
          </h1>
          <p className="text-xl text-muted-foreground">Register</p>
          <p className="text-muted-foreground mt-4">
            <span className="block font-medium">आप किस तरह का यूज़र हैं?</span>
            <span className="block text-sm">What type of user are you?</span>
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Job Seeker Card */}
          <Card 
            className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-primary"
            onClick={() => navigate("/register/job-seeker")}
          >
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                <span className="text-primary">नौकरी ढूंढ रहे हैं</span>
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Job Seeker
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                <span className="block font-medium">अगर आप नौकरी ढूंढ रहे हैं</span>
                <span className="block text-sm">If you are looking for a job</span>
              </p>
              <Button className="w-full" size="lg">
                <span className="font-semibold">आगे बढ़ें</span>
                <span className="mx-2">|</span>
                <span>Continue</span>
              </Button>
            </CardContent>
          </Card>

          {/* Job Poster Card */}
          <Card 
            className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 border-2 hover:border-primary"
            onClick={() => navigate("/register/job-poster")}
          >
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Store className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                <span className="text-primary">कर्मचारी चाहिए</span>
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Employer / Job Poster
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                <span className="block font-medium">अगर आपको कर्मचारी चाहिए</span>
                <span className="block text-sm">If you need to hire staff</span>
              </p>
              <Button className="w-full" size="lg">
                <span className="font-semibold">आगे बढ़ें</span>
                <span className="mx-2">|</span>
                <span>Continue</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
