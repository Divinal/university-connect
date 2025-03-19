
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, UserPlus, LogIn } from 'lucide-react';
import UserTypeSelection from './UserTypeSelection';
import { motion, AnimatePresence } from 'framer-motion';

type UserType = 'student' | 'teacher' | 'admin' | null;

const LoginForm = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [authCode, setAuthCode] = useState('');
  const [isUserTypeSelected, setIsUserTypeSelected] = useState(false);

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setTimeout(() => setIsUserTypeSelected(true), 300);
  };

  const handleBackToUserType = () => {
    setIsUserTypeSelected(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  return (
    <Card className="w-full max-w-md shadow-card overflow-hidden">
      <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login" className="rounded-none">Connexion</TabsTrigger>
          <TabsTrigger value="signup" className="rounded-none">Inscription</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login" className="p-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Connexion</CardTitle>
            <CardDescription className="text-center">
              Entrez vos identifiants pour accéder à votre compte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nom@exemple.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Mot de passe</Label>
                <a 
                  href="#" 
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Mot de passe oublié?
                </a>
              </div>
              <div className="relative">
                <Input 
                  id="password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <LogIn className="mr-2 h-4 w-4" /> Connexion
            </Button>
          </CardFooter>
        </TabsContent>
        
        <TabsContent value="signup" className="p-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Inscription</CardTitle>
            <CardDescription className="text-center">
              Créez votre compte avec votre code d'authentification
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <AnimatePresence mode="wait">
              {!isUserTypeSelected ? (
                <motion.div
                  key="user-type-selection"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <UserTypeSelection onSelect={handleUserTypeSelect} selectedType={userType} />
                </motion.div>
              ) : (
                <motion.div
                  key="auth-form"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-4"
                >
                  <motion.button
                    variants={itemVariants}
                    onClick={handleBackToUserType}
                    className="text-sm font-medium text-primary hover:underline flex items-center"
                  >
                    ← Retour à la sélection
                  </motion.button>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="auth-code">Code d'authentification</Label>
                    <Input 
                      id="auth-code" 
                      value={authCode}
                      onChange={(e) => setAuthCode(e.target.value)}
                      placeholder="Entrez le code à 4 chiffres"
                      maxLength={4}
                    />
                    <p className="text-xs text-muted-foreground">
                      Le code d'authentification vous a été fourni par l'administrateur.
                    </p>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="fullname">Nom complet</Label>
                    <Input id="fullname" type="text" placeholder="Prénom Nom" />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="nom@exemple.com" />
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="new-password">Nouveau mot de passe</Label>
                    <div className="relative">
                      <Input 
                        id="new-password" 
                        type={showPassword ? "text" : "password"} 
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
          
          {isUserTypeSelected && (
            <CardFooter>
              <Button className="w-full">
                <UserPlus className="mr-2 h-4 w-4" /> Créer mon compte
              </Button>
            </CardFooter>
          )}
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default LoginForm;
