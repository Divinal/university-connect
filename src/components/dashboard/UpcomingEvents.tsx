
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Animation variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

interface EventItem {
  id: number;
  title: string;
  date: number;
  month: string;
  location: string;
}

const UpcomingEvents = () => {
  const events: EventItem[] = [
    { 
      id: 1, 
      title: "Examen Physique Quantique", 
      date: 11, 
      month: "Nov", 
      location: "14:00 - 16:00, Salle A104" 
    },
    { 
      id: 2, 
      title: "Remise Projet Data Science", 
      date: 12, 
      month: "Nov", 
      location: "Deadline 23:59" 
    },
    { 
      id: 3, 
      title: "Conférence IA et Éthique", 
      date: 13, 
      month: "Nov", 
      location: "10:00 - 12:00, Amphithéâtre B" 
    },
  ];

  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Prochains événements</CardTitle>
          <CardDescription>Vos examens et dates importantes à venir</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
              <div className="h-12 w-12 rounded bg-primary/10 text-primary flex flex-col items-center justify-center">
                <span className="text-sm font-bold">{event.date}</span>
                <span className="text-xs">{event.month}</span>
              </div>
              <div>
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.location}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full">Voir tous les événements</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default UpcomingEvents;
