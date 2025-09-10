import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building, Target, Users, Handshake } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const teamMembers = [
  {
    name: "Mithun G",
    title: "Chief AI Architect & Visionary",
    avatar: "https://i.pravatar.cc/150?img=4",
    bio: "The visionary force behind Haix AI, Mithun guides our technological strategy, ensuring we remain at the forefront of AI innovation.",
  },
  {
    name: "Dr. Evelyn Reed",
    title: "CEO & Co-Founder",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "With a Ph.D. in Machine Learning and 15 years of industry experience, Evelyn leads Haix AI with a passion for solving complex problems.",
  },
  {
    name: "David Chen",
    title: "Chief Technology Officer",
    avatar: "https://i.pravatar.cc/150?img=6",
    bio: "David is the architect of our robust and scalable AI platform. He leads our engineering team to build world-class solutions.",
  },
  {
    name: "Maria Garcia",
    title: "Head of Product",
    avatar: "https://i.pravatar.cc/150?img=7",
    bio: "Maria ensures our products not only meet but exceed customer expectations, translating user needs into powerful AI features.",
  },
];

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        title="About Haix AI"
        subtitle="We are a team of innovators, researchers, and engineers dedicated to pushing the boundaries of artificial intelligence to create a better future."
        breadcrumb={
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To democratize artificial intelligence, making powerful, ethical, and transformative AI solutions accessible to businesses of all sizes. We believe in harnessing the power of AI to drive progress, efficiency, and innovation across every industry.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                    <p className="mt-1 text-muted-foreground">To be the world's most trusted and innovative AI partner, empowering organizations to achieve their full potential.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Handshake className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Our Values</h3>
                    <p className="mt-1 text-muted-foreground">Innovation, Integrity, Collaboration, and Customer-Centricity are the pillars of our company culture.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="https://picsum.photos/seed/about/800/600" alt="Haix AI Team" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Meet the Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The brilliant minds leading Haix AI towards a future powered by intelligent technology.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;