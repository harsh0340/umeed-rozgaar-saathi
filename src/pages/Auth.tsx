import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { toast } from "@/hooks/use-toast";
import { Phone, User, MapPin, Mail } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<'phone' | 'otp' | 'details'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'job_seeker' | 'employer'>('job_seeker');

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // For development, we'll use email/password instead of phone OTP
      // In production, you would enable Supabase phone auth
      toast({
        title: "Development Mode",
        description: "Using email authentication for development. Enter details to continue.",
      });
      setStep('details');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create user with email/password (development mode)
      const tempEmail = `${phone}@umeed.temp`;
      const tempPassword = phone + "123456";

      const { data, error } = await supabase.auth.signUp({
        email: tempEmail,
        password: tempPassword,
        phone: phone,
        options: {
          data: {
            full_name: fullName,
            city: city,
            role: role,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "स्वागत है! | Welcome!",
        description: "आपका खाता बन गया है | Your account has been created",
      });

      // Navigate based on role
      if (role === 'employer') {
        navigate('/employer-dashboard');
      } else {
        navigate('/seeker-dashboard');
      }
    } catch (error: any) {
      toast({
        title: "त्रुटि | Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background flex items-center justify-center py-8 px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">
            {step === 'phone' && "लॉगिन / रजिस्टर | Login / Register"}
            {step === 'details' && "विवरण भरें | Fill Details"}
          </CardTitle>
          <CardDescription>
            {step === 'phone' && "अपना मोबाइल नंबर डालें | Enter your mobile number"}
            {step === 'details' && "अपनी जानकारी दें | Provide your information"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 'phone' && (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">
                  मोबाइल नंबर | Mobile Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                    required
                    maxLength={10}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "भेजा जा रहा है... | Sending..." : "OTP भेजें | Send OTP"}
              </Button>
            </form>
          )}

          {step === 'details' && (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="role">
                  आप क्या हैं? | You are?
                </Label>
                <Select value={role} onValueChange={(value: 'job_seeker' | 'employer') => setRole(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="job_seeker">नौकरी खोजने वाला | Job Seeker</SelectItem>
                    <SelectItem value="employer">नौकरी देने वाला | Employer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">
                  पूरा नाम | Full Name *
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="अपना नाम | Your Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">
                  शहर | City *
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="city"
                    type="text"
                    placeholder="आपका शहर | Your City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  ईमेल | Email (Optional)
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "बनाया जा रहा है... | Creating..." : "खाता बनाएं | Create Account"}
              </Button>
            </form>
          )}

          <Button
            variant="ghost"
            className="w-full mt-4"
            onClick={() => navigate('/')}
          >
            ← होम पर वापस जाएं | Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
