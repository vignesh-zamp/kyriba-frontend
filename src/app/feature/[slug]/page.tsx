import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";
import Link from "next/link";

type FeaturePageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: FeaturePageProps) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  return {
    title: `${title} | Kyriba Replica`,
  };
}

export default function FeaturePage({ params }: FeaturePageProps) {
  const title = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold font-headline text-primary">{title}</CardTitle>
          <CardDescription>This is a placeholder page for the {title} feature.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            In a real application, this page would contain the user interface and functionality for managing {title.toLowerCase()}.
          </p>
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
