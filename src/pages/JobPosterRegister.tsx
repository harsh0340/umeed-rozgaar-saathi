import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const JobPosterRegister = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [formData, setFormData] = useState({
    shopName: "",
    ownerName: "",
    mobile: "",
    city: "",
    address: "",
    email: "",
  });

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.shopName || !formData.ownerName || !formData.mobile || !formData.city || !formData.address) {
      toast({
        title: "कृपया सभी आवश्यक फ़ील्ड भरें | Please fill all required fields",
        variant: "destructive",
      });
      return;
    }
    
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    console.log("Generated OTP:", newOtp);
    
    toast({
      title: "OTP भेजा गया | OTP Sent",
      description: `OTP: ${newOtp} (देखें console | Check console)`,
    });
    
    setStep(2);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === generatedOtp) {
      toast({
        title: "✅ सफलतापूर्वक रजिस्टर हो गए | Successfully Registered",
      });
      navigate("/success");
    } else {
      toast({
        title: "गलत OTP | Invalid OTP",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/register")}
          className="mb-4"
        >
          ← वापस जाएं | Go Back
        </Button>

        <Card className="border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl md:text-3xl">
              <span className="text-primary">व्यापारी का रजिस्ट्रेशन</span>
            </CardTitle>
            <p className="text-muted-foreground mt-2">Employer Registration</p>
          </CardHeader>
          <CardContent>
            {step === 1 ? (
              <form onSubmit={handleSendOtp} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="shopName" className="text-base">
                    <span className="font-semibold">दुकान/व्यापार का नाम</span> | Shop/Business Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="shopName"
                    placeholder="दुकान का नाम | Shop name"
                    value={formData.shopName}
                    onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                    required
                    className="text-base py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ownerName" className="text-base">
                    <span className="font-semibold">मालिक का नाम</span> | Owner Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="ownerName"
                    placeholder="आपका नाम | Your name"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    required
                    className="text-base py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-base">
                    <span className="font-semibold">मोबाइल नंबर</span> | Mobile Number <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="10 अंकों का नंबर | 10 digit number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    maxLength={10}
                    className="text-base py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-base">
                    <span className="font-semibold">शहर</span> | City <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="city"
                    placeholder="आपका शहर | Your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                    className="text-base py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-base">
                    <span className="font-semibold">दुकान का पता</span> | Shop Address <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="address"
                    placeholder="पूरा पता | Complete address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    className="text-base min-h-24"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    <span className="font-semibold">ईमेल</span> | Email <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="आपका ईमेल | Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-base py-6"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <span className="font-semibold">OTP भेजें</span>
                  <span className="mx-2">|</span>
                  <span>Send OTP</span>
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-6">
                <div className="text-center mb-6">
                  <p className="text-muted-foreground">
                    <span className="block font-medium">OTP भेजा गया</span>
                    <span className="block text-sm">{formData.mobile}</span>
                    <span className="block text-sm mt-1">OTP sent to your mobile</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-base">
                    <span className="font-semibold">OTP दर्ज करें</span> | Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="6 अंकों का OTP | 6 digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxLength={6}
                    className="text-center text-2xl tracking-widest py-6"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <span className="font-semibold">वेरिफाई करें</span>
                  <span className="mx-2">|</span>
                  <span>Verify</span>
                </Button>

                <Button 
                  type="button" 
                  variant="ghost" 
                  onClick={handleSendOtp}
                  className="w-full"
                >
                  <span className="text-sm">OTP फिर से भेजें | Resend OTP</span>
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobPosterRegister;
