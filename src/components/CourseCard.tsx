
import { motion } from 'framer-motion';
import { Clock, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  date: string;
  duration: string;
  category: string;
  image: string;
}

const CourseCard = ({
  title,
  description,
  instructor,
  date,
  duration,
  category,
  image
}: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-card hover:-translate-y-1 group">
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-3 left-3 z-20">{category}</Badge>
        </div>
        
        <CardContent className="flex-grow pt-5">
          <h3 className="font-semibold text-xl line-clamp-2 mb-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm mb-3">{description}</p>
          
          <p className="text-sm font-medium text-primary mb-4">Par {instructor}</p>
          
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <Calendar className="mr-1.5 h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1.5 h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-0 pb-5">
          <Button className="w-full" variant="outline">
            <FileText className="mr-2 h-4 w-4" />
            Accéder au cours
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
