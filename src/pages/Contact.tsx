import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to answer your questions and help you get started on your AI journey. Reach out to us today."
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
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input placeholder="Your Name" />
                      <Input type="email" placeholder="Your Email" />
                    </div>
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Your Message" rows={6} />
                    <Button size="lg" className="w-full">Submit Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                <p className="text-muted-foreground">
                    Our team is available to assist you. Please feel free to contact us through any of the following channels.
                </p>
                <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-primary" />
                        <a href="mailto:contact@haix.ai" className="text-muted-foreground hover:text-primary">contact@haix.ai</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-primary" />
                        <span className="text-muted-foreground">(555) 123-4567</span>
                    </div>
                    <div className="flex items-start space-x-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <span className="text-muted-foreground">123 AI Avenue, Tech City, 90210, USA</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;