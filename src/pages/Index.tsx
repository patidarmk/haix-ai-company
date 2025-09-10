import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Zap, BrainCircuit, LineChart, ShieldCheck, ArrowRight, Star } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Hyper-Speed Processing",
    description: "Our AI models process vast amounts of data in milliseconds, giving you real-time insights and a competitive edge.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Advanced Neural Networks",
    description: "Leverage state-of-the-art deep learning architectures for unparalleled accuracy in prediction and analysis.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Predictive Analytics",
    description: "Anticipate market trends and customer behavior with our powerful predictive models, turning data into foresight.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Your data's security is our top priority. We employ robust encryption and security protocols to protect your assets.",
  },
];

const testimonials = [
    {
        name: "Sarah Johnson",
        title: "CTO, Innovate Corp",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "Haix AI has completely transformed our data processing pipeline. The speed and accuracy are unlike anything we've seen before. It's an essential tool for our business.",
    },
    {
        name: "Michael Chen",
        title: "Head of Analytics, DataDriven Inc.",
        avatar: "https://i.pravatar.cc/150?img=2",
        text: "The predictive analytics feature is a game-changer. We've been able to forecast demand with over 95% accuracy, directly impacting our bottom line positively.",
    },
    {
        name: "Emily Rodriguez",
        title: "Founder, QuantumLeap Startups",
        avatar: "https://i.pravatar.cc/150?img=3",
        text: "As a startup, we need powerful tools that are easy to integrate. Haix AI delivered on all fronts. The support from their team has been exceptional.",
    }
]

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Unlock the Future with <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Haix AI</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
            Harness the power of next-generation artificial intelligence to automate processes, gain critical insights, and drive unprecedented growth for your business.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg">
              Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Copowered by Section */}
      <section id="copowered" className="py-16 bg-background">
        <div className="container mx-auto text-center px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-8 rounded-2xl border border-border/50 shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">A Visionary Partnership</p>
                <h2 className="mt-4 text-3xl font-bold text-foreground">
                    Copowered by Mithun G
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                    Haix AI is proud to be technologically and strategically guided by the vision of Mithun G, a pioneer in applied artificial intelligence and machine learning architecture.
                </p>
                <div className="mt-6 flex items-center justify-center space-x-3">
                    <Avatar>
                        <AvatarImage src="https://i.pravatar.cc/150?img=4" alt="Mithun G" />
                        <AvatarFallback>MG</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">Mithun G</p>
                        <p className="text-sm text-muted-foreground">Chief AI Architect</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              An AI Platform Built for Performance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover the core features that make Haix AI the most powerful and intuitive artificial intelligence solution on the market.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Trusted by Industry Leaders
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Don't just take our word for it. Here's what our clients have to say about the impact of Haix AI on their business.
                </p>
            </div>
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.name} className="flex flex-col justify-between">
                        <CardContent className="pt-6">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                            </div>
                            <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                        </CardContent>
                        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-b-lg">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Ready to Revolutionize Your Business?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
                    Join the growing list of companies leveraging Haix AI to build a smarter, more efficient future. Get in touch with our experts today.
                </p>
                <div className="mt-8">
                    <Button size="lg" variant="secondary" className="text-primary hover:bg-slate-200">
                        Schedule Your Free Consultation
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Index;