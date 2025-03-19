
import { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface TabContentProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const TabContent = ({ title, description, children }: TabContentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children || <p>Contenu à implémenter</p>}
      </CardContent>
    </Card>
  );
};

export default TabContent;
