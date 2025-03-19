
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Animation variants
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

interface ActivityItem {
  id: number;
  title: string;
  time: string;
  icon: string;
}

const ActivityFeed = () => {
  const activities: ActivityItem[] = [
    { id: 1, title: "Cours d'Algèbre complété", time: "Il y a 2 heures", icon: "CM" },
    { id: 2, title: "Nouveau document ajouté : Introduction Python", time: "Il y a 4 heures", icon: "UC" },
    { id: 3, title: "Cours d'Algèbre complété", time: "Il y a 6 heures", icon: "CM" },
    { id: 4, title: "Nouveau document ajouté : Introduction Python", time: "Il y a 8 heures", icon: "UC" },
  ];

  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Activité récente</CardTitle>
          <CardDescription>Vos dernières activités sur la plateforme</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {activity.icon}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full">Voir toutes les activités</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ActivityFeed;
