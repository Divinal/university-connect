import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Bell, UserCog, Plus, Search, Check, X as XIcon, GraduationCap, BookText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

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

const pendingCourses = [
  { id: 1, title: "Introduction à l'Algèbre Linéaire", professor: "Dr. Martin Dubois", date: "12/10/2023" },
  { id: 2, title: "Programmation Orientée Objet en Java", professor: "Pr. Sophie Laurent", date: "15/10/2023" },
  { id: 3, title: "Analyse de Données avec Python", professor: "Dr. Thomas Richard", date: "18/10/2023" },
];

const recentUsers = [
  { id: 1, name: "Marie Dupont", type: "Étudiant", date: "05/10/2023", authCode: "4582" },
  { id: 2, name: "Jean Lefebvre", type: "Professeur", date: "07/10/2023", authCode: "7819" },
  { id: 3, name: "Camille Martin", type: "Étudiant", date: "10/10/2023", authCode: "3264" },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [newUserType, setNewUserType] = useState<'student' | 'teacher' | null>(null);
  const [newUserFullName, setNewUserFullName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const { toast } = useToast();

  const generateAuthCode = () => {
    const min = 1000;
    const max = 9999;
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
  };

  const handleAddUser = () => {
    if (!newUserType || !newUserFullName || !newUserEmail) {
      toast({
        title: "Champs incomplets",
        description: "Veuillez remplir tous les champs requis",
        variant: "destructive"
      });
      return;
    }

    const authCode = generateAuthCode();
    
    toast({
      title: "Utilisateur ajouté avec succès",
      description: `Un code d'authentification ${authCode} a été généré pour ${newUserFullName}`,
    });

    setNewUserFullName('');
    setNewUserEmail('');
  };

  const handleApproveCourse = (courseId: number) => {
    toast({
      title: "Cours approuvé",
      description: "Le cours a été publié aux étudiants",
    });
  };
  
  return (
    <div className="min-h-screen bg-muted/30 flex">
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
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <Users className="mr-2 h-5 w-5" />
            Gestion des Utilisateurs
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Gestion des Cours
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <FileText className="mr-2 h-5 w-5" />
            Annonces
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <Shield className="mr-2 h-5 w-5" />
            Autorisations
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
      
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="w-full bg-white border-b p-4 sticky top-0 z-10">
          <div className="container mx-auto flex items-center justify-between">
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Shield className="h-5 w-5" />
              </Button>
            </div>
            
            <h1 className="text-lg font-semibold md:text-xl hidden md:block">Administration</h1>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative text-muted-foreground">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">5</Badge>
              </Button>
              
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=250&h=250&fit=crop&crop=faces&q=80" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Admin Système</p>
                  <p className="text-xs text-muted-foreground">Administrateur</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 p-4 md:p-8">
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-2">
                Tableau de bord Administrateur 🔐
              </motion.h2>
              <motion.p variants={itemVariants} className="text-muted-foreground">
                Gérez les utilisateurs, les cours et les informations de l'université.
              </motion.p>
            </motion.div>
            
            <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-8">
                <TabsTrigger value="dashboard">Vue d'ensemble</TabsTrigger>
                <TabsTrigger value="users">Gestion des utilisateurs</TabsTrigger>
                <TabsTrigger value="courses">Approbation des cours</TabsTrigger>
                <TabsTrigger value="announcements">Annonces</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <motion.div variants={itemVariants}>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-muted-foreground">
                            Étudiants Actifs
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">248</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-muted-foreground">
                            Professeurs
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">32</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-muted-foreground">
                            Cours Actifs
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">45</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-muted-foreground">
                            Cours en Attente
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{pendingCourses.length}</div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle>Nouveaux Utilisateurs</CardTitle>
                          <CardDescription>Utilisateurs récemment ajoutés</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {recentUsers.map((user) => (
                            <div key={user.id} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium">{user.name}</p>
                                  <Badge variant="outline">{user.type}</Badge>
                                </div>
                                <p className="text-xs text-muted-foreground">Ajouté le {user.date}</p>
                                <p className="text-xs font-medium mt-1">Code: {user.authCode}</p>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="w-full">Voir tous les utilisateurs</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle>Cours en Attente d'Approbation</CardTitle>
                          <CardDescription>Cours soumis par les professeurs</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {pendingCourses.map((course) => (
                            <div key={course.id} className="pb-4 border-b last:border-0 last:pb-0">
                              <div className="flex justify-between items-start">
                                <div>
                                  <p className="text-sm font-medium">{course.title}</p>
                                  <p className="text-xs text-muted-foreground">Par {course.professor}</p>
                                  <p className="text-xs text-muted-foreground">Soumis le {course.date}</p>
                                </div>
                                <Button 
                                  size="sm" 
                                  variant="outline"
                                  onClick={() => handleApproveCourse(course.id)}
                                >
                                  Approuver
                                </Button>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="w-full">Voir tous les cours en attente</Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>Ajouter un Nouvel Utilisateur</CardTitle>
                    <CardDescription>Créez un compte pour un étudiant ou un professeur</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div 
                          className={`cursor-pointer border rounded-lg p-4 flex-1 ${newUserType === 'student' ? 'border-primary bg-primary/5' : ''}`}
                          onClick={() => setNewUserType('student')}
                        >
                          <div className="flex items-center">
                            <div className="bg-muted h-8 w-8 rounded-full flex items-center justify-center mr-3">
                              <GraduationCap className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium">Étudiant</p>
                              <p className="text-xs text-muted-foreground">Accès aux cours et examens</p>
                            </div>
                          </div>
                        </div>
                        
                        <div 
                          className={`cursor-pointer border rounded-lg p-4 flex-1 ${newUserType === 'teacher' ? 'border-primary bg-primary/5' : ''}`}
                          onClick={() => setNewUserType('teacher')}
                        >
                          <div className="flex items-center">
                            <div className="bg-muted h-8 w-8 rounded-full flex items-center justify-center mr-3">
                              <BookOpen className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="font-medium">Professeur</p>
                              <p className="text-xs text-muted-foreground">Créer des cours et des examens</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="full-name">Nom complet</Label>
                          <Input 
                            id="full-name" 
                            placeholder="Prénom Nom" 
                            value={newUserFullName}
                            onChange={(e) => setNewUserFullName(e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="nom@exemple.com" 
                            value={newUserEmail}
                            onChange={(e) => setNewUserEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleAddUser} className="w-full">
                      <UserPlus className="mr-2 h-4 w-4" />
                      Créer l'utilisateur
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Utilisateurs Récents</CardTitle>
                    <CardDescription>Liste des utilisateurs récemment ajoutés</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-muted-foreground">{user.type}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">Code: {user.authCode}</Badge>
                            <Button variant="ghost" size="icon">
                              <PlusCircle className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="courses">
                <Card>
                  <CardHeader>
                    <CardTitle>Cours en Attente d'Approbation</CardTitle>
                    <CardDescription>Examinez et publiez les cours soumis par les professeurs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {pendingCourses.map((course) => (
                        <div key={course.id} className="border rounded-lg p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <p className="font-medium text-lg">{course.title}</p>
                              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                                <p className="text-sm text-muted-foreground">Par {course.professor}</p>
                                <p className="text-sm text-muted-foreground">Soumis le {course.date}</p>
                              </div>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" onClick={() => handleApproveCourse(course.id)}>
                                Approuver
                              </Button>
                              <Button variant="outline">
                                Voir le contenu
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="announcements">
                <Card>
                  <CardHeader>
                    <CardTitle>Créer une Annonce</CardTitle>
                    <CardDescription>Publiez des informations importantes pour les étudiants et professeurs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="announcement-title">Titre de l'annonce</Label>
                        <Input id="announcement-title" placeholder="Titre de votre annonce" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="announcement-content">Contenu de l'annonce</Label>
                        <textarea 
                          id="announcement-content" 
                          placeholder="Écrivez le contenu de votre annonce ici..."
                          className="w-full min-h-[150px] p-2 border rounded-md"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Destinataires</Label>
                        <div className="flex gap-2">
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="students" className="rounded" />
                            <Label htmlFor="students">Étudiants</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="teachers" className="rounded" />
                            <Label htmlFor="teachers">Professeurs</Label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Publier l'annonce
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
