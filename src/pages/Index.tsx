
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Book, GraduationCap, FileText, BarChart, MessageSquare, LayoutGrid } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// Feature component
const Feature = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      className="p-6 border rounded-lg bg-white/50 backdrop-blur-sm shadow-subtle hover:shadow-card transition-all duration-300"
    >
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

// Sample courses data
const courses = [
  {
    id: 1,
    title: "Introduction à l'Analyse de Données",
    description: "Apprenez les fondamentaux de l'analyse de données et les techniques statistiques essentielles.",
    instructor: "Dr. Sophie Martin",
    date: "Déc 2023",
    duration: "8 semaines",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Littérature Française du 19ème siècle",
    description: "Explorez les grands auteurs et mouvements littéraires qui ont marqué la France du 19ème siècle.",
    instructor: "Prof. Jean Dubois",
    date: "Jan 2024",
    duration: "12 semaines",
    category: "Littérature",
    image: "https://images.unsplash.com/photo-1455885661740-29cbf08a42fa?q=80&w=1600&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Physique Quantique Avancée",
    description: "Une introduction aux concepts fondamentaux de la mécanique quantique et ses applications.",
    instructor: "Dr. Pierre Lambert",
    date: "Fév 2024",
    duration: "10 semaines",
    category: "Physique",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop"
  },
];

const Index = () => {
  const featuresRef = useRef(null);
  const isInView = useInView(featuresRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
        <div 
          className="absolute inset-0 -z-10 opacity-50" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(74, 122, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(74, 122, 255, 0.1) 0%, transparent 50%)`
          }}
        />
        
        <motion.div 
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Plateforme E-Learning Universitaire
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Votre parcours académique <span className="text-primary">simplifié</span> et <span className="text-primary">connecté</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Une plateforme moderne pour faciliter l'accès aux cours, examens et informations essentielles pour tous les membres de la communauté universitaire.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button asChild size="lg" className="min-w-[180px]">
              <Link to="/login">Commencer maintenant</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[180px]">
              <Link to="/about">En savoir plus</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tout ce dont vous avez besoin, en un seul endroit
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Notre plateforme offre tous les outils nécessaires pour une expérience d'apprentissage optimale.
            </motion.p>
          </div>
          
          <motion.div 
            ref={featuresRef}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <Feature 
              icon={Book}
              title="Accès aux Cours"
              description="Consultez vos supports de cours, documents complémentaires et ressources pédagogiques à tout moment."
            />
            <Feature 
              icon={FileText}
              title="Examens en Ligne"
              description="Passez vos examens en ligne et consultez vos résultats dès leur publication par vos professeurs."
            />
            <Feature 
              icon={BarChart}
              title="Suivi des Notes"
              description="Visualisez l'ensemble de vos notes et votre progression académique en temps réel."
            />
            <Feature 
              icon={MessageSquare}
              title="Communication Directe"
              description="Échangez facilement avec vos professeurs et l'administration via notre système de messagerie intégré."
            />
            <Feature 
              icon={GraduationCap}
              title="Espace Étudiant"
              description="Accédez à un espace personnalisé regroupant toutes les informations relatives à votre parcours."
            />
            <Feature 
              icon={LayoutGrid}
              title="Tableau de Bord"
              description="Visualisez toutes vos informations importantes en un coup d'œil sur votre tableau de bord personnalisé."
            />
          </motion.div>
        </div>
      </section>
      
      {/* Courses Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Découvrez nos cours
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Une sélection variée de cours dispensés par nos meilleurs professeurs.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button asChild size="lg">
              <Link to="/login">Voir tous les cours</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 relative overflow-hidden">
        <div 
          className="absolute inset-0 -z-10 opacity-30" 
          style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, rgba(74, 122, 255, 0.15) 0%, transparent 50%)`
          }}
        />
        
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à rejoindre notre communauté?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Inscrivez-vous dès maintenant et accédez à l'ensemble des ressources pédagogiques de l'université.
            </p>
            <Button asChild size="lg" className="min-w-[220px]">
              <Link to="/login">Créer un compte</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Université Connect</h3>
              <p className="text-muted-foreground">
                La plateforme e-learning qui connecte étudiants, professeurs et administration.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Accueil</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">À propos</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Connexion</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Ressources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Aide</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guide d'utilisation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Avenue de l'Université</li>
                <li>75000 Paris, France</li>
                <li>contact@universite-connect.fr</li>
                <li>+33 1 23 45 67 89</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Université Connect. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
