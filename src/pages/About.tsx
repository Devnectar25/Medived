import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Leaf, Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About MediVeda</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in natural wellness and Ayurvedic healthcare
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Founded with a passion for holistic wellness, MediVeda brings together the ancient wisdom of Ayurveda 
                with modern quality standards. We believe that nature holds the key to optimal health and well-being.
              </p>
              <p>
                Our journey began with a simple mission: to make authentic Ayurvedic products accessible to everyone 
                seeking natural alternatives for their health needs. Today, we serve thousands of customers who trust 
                us for genuine, high-quality herbal remedies and wellness products.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">100% Natural</h3>
              <p className="text-muted-foreground">
                Only pure, natural ingredients sourced from trusted suppliers
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Assured</h3>
              <p className="text-muted-foreground">
                Rigorous testing and quality control for every product
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Care</h3>
              <p className="text-muted-foreground">
                Dedicated support to help you on your wellness journey
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Community</h3>
              <p className="text-muted-foreground">
                Building a community of wellness enthusiasts
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-muted/50 rounded-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              To empower individuals to take charge of their health through authentic Ayurvedic products, 
              expert guidance, and a commitment to natural wellness.
            </p>
            <p className="text-lg text-muted-foreground">
              We strive to be more than just a store – we're your partner in achieving holistic health 
              and discovering the transformative power of nature's remedies.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
