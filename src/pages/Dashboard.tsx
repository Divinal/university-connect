
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import StatsCards from '@/components/dashboard/StatsCards';
import ActivityFeed from '@/components/dashboard/ActivityFeed';
import UpcomingEvents from '@/components/dashboard/UpcomingEvents';
import TabContent from '@/components/dashboard/TabContent';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const isStudent = true; // Simuler un rôle étudiant
  const userName = "Étienne Savard";
  
  return (
    <DashboardLayout 
      userName={userName}
      userRole={isStudent ? 'Étudiant' : 'Professeur'}
    >
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
          <TabsTrigger value="courses">Mes cours</TabsTrigger>
          <TabsTrigger value="exams">Examens</TabsTrigger>
          <TabsTrigger value="grades">Notes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Stats Cards */}
            <StatsCards />
            
            {/* Recent Activity and Upcoming Events */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ActivityFeed />
              <UpcomingEvents />
            </div>
          </motion.div>
        </TabsContent>
        
        <TabsContent value="courses">
          <TabContent 
            title="Mes cours" 
            description="Liste de tous vos cours pour ce semestre" 
          />
        </TabsContent>
        
        <TabsContent value="exams">
          <TabContent 
            title="Mes examens" 
            description="Calendrier des examens et évaluations" 
          />
        </TabsContent>
        
        <TabsContent value="grades">
          <TabContent 
            title="Mes notes" 
            description="Relevé de notes et progression académique" 
          />
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default Dashboard;
