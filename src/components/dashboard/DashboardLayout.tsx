
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Bell, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import DashboardSidebar from './DashboardSidebar';

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4 }
  }
};

interface DashboardLayoutProps {
  children: ReactNode;
  userName: string;
  userRole: string;
}

const DashboardLayout = ({ children, userName, userRole }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full bg-white border-b p-4 sticky top-0 z-10">
          <div className="container mx-auto flex items-center justify-between">
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <DashboardSidebar.Icon />
              </Button>
            </div>
            
            <h1 className="text-lg font-semibold md:text-xl hidden md:block">Tableau de bord</h1>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
              </Button>
              
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop&crop=faces&q=80" />
                  <AvatarFallback>ES</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-muted-foreground">{userRole}</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-2">
                Bonjour, {userName.split(' ')[0]} 👋
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground">
                Bienvenue sur votre tableau de bord. Voici un résumé de votre activité récente.
              </motion.p>
            </motion.div>
            
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
