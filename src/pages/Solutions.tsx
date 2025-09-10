import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Bot, DatabaseZap, ScanText, Eye } from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const solutions = [
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "AI Automation",
    description: "Streamline your business processes with intelligent automation. Our AI models can handle repetitive tasks, optimize workflows, and increase operational efficiency, freeing up your team to focus on strategic initiatives.",
    details: ["Robotic Process Automation (RPA)", "Intelligent Document Processing", "Automated Customer Support", "Supply Chain Optimization"]
  },
  {
    icon: <DatabaseZap className="h-10 w-10 text-primary" />,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights. We leverage advanced machine learning to uncover hidden patterns, predict future trends, and provide you with a comprehensive understanding of your business landscape.",
    details: ["Predictive Modeling", "Customer Segmentation", "Market Basket Analysis", "Real-time Dashboards"]
  },
  {
    icon: <ScanText className="h-10 w-10 text-primary" />,
    title: "NLP Services",
    description: "Unlock the value within your unstructured text data. Our Natural Language Processing services can analyze customer feedback, automate content creation, and provide powerful sentiment analysis.",
    details: ["Sentiment Analysis", "Text Summarization", "Named Entity Recognition", "Language Translation"]
  },
  {
    icon: <Eye className="h-10 w-10 text-primary" />,
    title: "Computer Vision",
    description: "Enable your systems to see and understand the world. Our computer vision solutions are tailored for applications ranging from quality control in manufacturing to medical image analysis and retail analytics.",
    details: ["Object Detection & Tracking", "Image Classification", "Facial Recognition", "Optical Character Recognition (OCR)"]
  },
];

const SolutionsPage = () => {
  return (
    <div>
      <PageHeader
        title="Our AI Solutions"
        subtitle="Tailored, cutting-edge AI services designed to solve your most complex challenges and drive business growth."
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
                <BreadcrumbPage>Solutions</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.title} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="w-20 h-20 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{solution.title}</h3>
                    <p className="mt-2 text-muted-foreground">{solution.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                    <h4 className="font-semibold text-foreground mb-2">Key Applications:</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        {solution.details.map(detail => <li key={detail} className="flex items-center"><span className="text-primary mr-2">✓</span>{detail}</li>)}
                    </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;