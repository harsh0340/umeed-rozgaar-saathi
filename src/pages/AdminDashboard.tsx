import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Briefcase, LogOut } from "lucide-react";

// Mock data
const mockJobSeekers = [
  { id: 1, name: "राजेश कुमार", mobile: "9876543210", city: "दिल्ली | Delhi", email: "rajesh@example.com" },
  { id: 2, name: "प्रिया शर्मा", mobile: "9876543211", city: "मुंबई | Mumbai", email: "" },
  { id: 3, name: "अमित वर्मा", mobile: "9876543212", city: "बैंगलोर | Bangalore", email: "amit@example.com" },
];

const mockJobPosters = [
  { id: 1, shopName: "राज ट्रांसपोर्ट", owner: "राज कुमार", mobile: "9876543213", city: "दिल्ली | Delhi" },
  { id: 2, shopName: "शर्मा जनरल स्टोर", owner: "विकास शर्मा", mobile: "9876543214", city: "मुंबई | Mumbai" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-xs text-muted-foreground">Manage all users and jobs</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Total Job Seekers</CardTitle>
              <Users className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{mockJobSeekers.length}</div>
              <p className="text-sm text-muted-foreground mt-1">Registered users looking for jobs</p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Total Job Posters</CardTitle>
              <Briefcase className="w-5 h-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{mockJobPosters.length}</div>
              <p className="text-sm text-muted-foreground mt-1">Employers who posted jobs</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by name or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="job-seekers" className="space-y-4">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="job-seekers">Job Seekers</TabsTrigger>
            <TabsTrigger value="job-posters">Job Posters</TabsTrigger>
          </TabsList>

          <TabsContent value="job-seekers" className="space-y-4">
            {mockJobSeekers.map((seeker) => (
              <Card key={seeker.id} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{seeker.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        📱 {seeker.mobile}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        📍 {seeker.city}
                      </p>
                      {seeker.email && (
                        <p className="text-sm text-muted-foreground">
                          ✉️ {seeker.email}
                        </p>
                      )}
                    </div>
                    <Badge variant="secondary">Job Seeker</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="job-posters" className="space-y-4">
            {mockJobPosters.map((poster) => (
              <Card key={poster.id} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{poster.shopName}</h3>
                      <p className="text-sm text-muted-foreground">
                        👤 Owner: {poster.owner}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        📱 {poster.mobile}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        📍 {poster.city}
                      </p>
                    </div>
                    <Badge variant="secondary">Employer</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
