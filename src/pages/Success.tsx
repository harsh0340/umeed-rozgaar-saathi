import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center py-8 px-4">
      <Card className="max-w-2xl w-full border-2">
        <CardContent className="pt-12 pb-8 text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle2 className="w-16 h-16 text-primary" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            सफलतापूर्वक सबमिट हो गया!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Successfully Submitted!
          </p>
          
          <div className="bg-primary/5 rounded-lg p-6 mb-8">
            <p className="text-lg text-foreground mb-2">
              <span className="block font-semibold">✅ आपकी जानकारी सफलतापूर्वक सबमिट हो गई है।</span>
            </p>
            <p className="text-base text-muted-foreground">
              <span className="block">✅ Your information has been successfully submitted.</span>
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              onClick={() => navigate("/jobs")}
              className="w-full md:w-auto px-8"
            >
              <span className="font-semibold">नौकरी देखें</span>
              <span className="mx-2">|</span>
              <span>View Jobs</span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/")}
              className="w-full md:w-auto px-8 border-2"
            >
              <span className="font-semibold">होम पर जाएं</span>
              <span className="mx-2">|</span>
              <span>Go to Home</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;
