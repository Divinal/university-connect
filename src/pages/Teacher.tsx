
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookText, MessageSquare, Bell, LogOut, Settings, User, Upload, Plus, Search, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

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

const Teacher = () => {
  const [activeTab, setActiveTab] = useState('courses');
  
  return (
    <div className="min-h-screen bg-muted/30 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 p-4 bg-white border-r h-screen sticky top-0">
        <div className="flex items-center gap-2 py-4 px-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
            UC
          </div>
          <span className="font-bold text-lg">Université Connect</span>
        </div>
        
        <nav className="flex-1 space-y-1">
          <Button
            variant="ghost"
            className={`w-full justify-start ${activeTab === 'courses' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
            onClick={() => setActiveTab('courses')}
          >
            <BookText className="mr-2 h-5 w-5" />
            Mes Cours
          </Button>
          <Button
            variant="ghost"
            className={`w-full justify-start ${activeTab === 'messages' ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
            onClick={() => setActiveTab('messages')}
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Messages
          </Button>
        </nav>
        
        <div className="pt-4 mt-4 border-t space-y-1">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted">
            <Settings className="mr-2 h-5 w-5" />
            Paramètres
          </Button>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted">
            <LogOut className="mr-2 h-5 w-5" />
            Déconnexion
          </Button>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="w-full bg-white border-b p-4 sticky top-0 z-10">
          <div className="container mx-auto flex items-center justify-between">
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <BookText className="h-5 w-5" />
              </Button>
            </div>
            
            <h1 className="text-lg font-semibold md:text-xl hidden md:block">Espace Professeur</h1>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">2</Badge>
              </Button>
              
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=250&h=250&fit=crop&crop=faces&q=80" />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Marc Bernard</p>
                  <p className="text-xs text-muted-foreground">Professeur</p>
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
                Bonjour, Marc 👋
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground">
                Bienvenue sur votre tableau de bord professeur. Gérez vos cours et communiquez avec vos étudiants.
              </motion.p>
            </motion.div>
            
            <Tabs defaultValue="courses" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="courses">Mes cours</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="courses">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Mes cours</h3>
                    <div className="flex gap-3">
                      <div className="relative w-64">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Rechercher un cours..." className="pl-8" />
                      </div>
                      <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Nouveau cours
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div key={i} variants={itemVariants}>
                        <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                              <CardTitle className="text-lg">
                                {i % 2 === 0 ? "Introduction à l'Algèbre" : "Physique Quantique"}
                              </CardTitle>
                              <Badge variant={i % 3 === 0 ? "default" : "secondary"}>
                                {i % 3 === 0 ? "Publié" : "Brouillon"}
                              </Badge>
                            </div>
                            <CardDescription>
                              {i % 2 === 0 ? "Semestre 1" : "Semestre 2"} • {i % 2 === 0 ? "L1" : "M1"}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground">
                              {i % 2 === 0 
                                ? "Introduction aux concepts fondamentaux de l'algèbre linéaire." 
                                : "Étude des principes de la mécanique quantique et de ses applications."}
                            </p>
                            <div className="mt-4 flex justify-between text-sm">
                              <span className="text-muted-foreground">Étudiants: {25 + i * 3}</span>
                              <span className="text-muted-foreground">Chapitre: {i + 1}/10</span>
                            </div>
                          </CardContent>
                          <CardFooter className="pt-0">
                            <Button variant="outline" className="w-full">
                              <FileText className="mr-2 h-4 w-4" />
                              Modifier
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Ajouter un nouveau cours</CardTitle>
                        <CardDescription>Créez un nouveau cours à partager avec vos étudiants</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center bg-muted/50">
                          <Upload className="h-10 w-10 text-muted-foreground mb-3" />
                          <p className="text-muted-foreground text-center mb-2">Glissez-déposez les fichiers de cours ici</p>
                          <p className="text-xs text-muted-foreground text-center mb-4">Formats acceptés: PDF, DOCX, PPTX (max 50MB)</p>
                          <Button>Parcourir les fichiers</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="messages">
                <Card>
                  <CardHeader>
                    <CardTitle>Messages</CardTitle>
                    <CardDescription>Vos conversations avec les administrateurs et autres professeurs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Contenu à implémenter</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Teacher;
