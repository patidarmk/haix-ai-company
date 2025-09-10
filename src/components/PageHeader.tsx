import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  breadcrumb: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900 border-b">
      <div className="container mx-auto px-4">
        {breadcrumb}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mt-4">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground">
          {subtitle}
        </p>
      </div>
    </section>
  );
};