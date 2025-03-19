
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, GraduationCap, UserCog } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type UserType = 'student' | 'teacher' | 'admin' | null;

interface UserTypeSelectionProps {
  onSelect: (type: UserType) => void;
  selectedType: UserType;
}

const UserTypeSelection = ({ onSelect, selectedType }: UserTypeSelectionProps) => {
  const userTypes = [
    {
      id: 'student',
      title: 'Étudiant',
      description: 'Accédez à vos cours, examens et notes',
      icon: GraduationCap,
    },
    {
      id: 'teacher',
      title: 'Professeur',
      description: 'Gérez vos cours et communiquez avec vos étudiants',
      icon: Book,
    },
    {
      id: 'admin',
      title: 'Administrateur',
      description: 'Gérez les utilisateurs et le contenu du site',
      icon: UserCog,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-medium text-center">Je suis...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {userTypes.map((type) => {
          const isSelected = selectedType === type.id;
          
          return (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className={cn(
                  "relative p-6 h-full cursor-pointer transition-all duration-300 overflow-hidden",
                  isSelected 
                    ? "border-primary/50 bg-primary/5 shadow-md ring-1 ring-primary/20" 
                    : "hover:border-primary/20 hover:bg-primary/[0.02] hover:shadow-subtle"
                )}
                onClick={() => onSelect(type.id as UserType)}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={cn(
                    "p-3 rounded-full",
                    isSelected ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  )}>
                    <type.icon size={28} />
                  </div>
                  <h3 className="font-medium text-lg">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
                
                {isSelected && (
                  <motion.div 
                    className="absolute inset-0 border-2 border-primary rounded-lg pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layoutId="outline"
                  />
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTypeSelection;
