
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LoginForm from '@/components/LoginForm';
import Navbar from '@/components/Navbar';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 -z-10" />
        <div 
          className="absolute inset-0 -z-10 opacity-50" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(74, 122, 255, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(74, 122, 255, 0.1) 0%, transparent 50%)`
          }}
        />
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="max-w-md mx-auto md:mx-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Bienvenue sur la plateforme
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Connectez-vous pour accéder à votre espace personnel ou créez un compte avec votre code d'authentification.
                </p>
                <div className="hidden md:block">
                  <p className="text-sm text-muted-foreground">
                    Vous n'avez pas de compte? Contactez l'administration pour obtenir votre code d'authentification.
                  </p>
                  <Link to="/" className="text-sm text-primary hover:underline mt-2 inline-block">
                    Retour à l'accueil
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex-1 w-full md:w-auto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LoginForm />
              <div className="mt-6 text-center md:hidden">
                <p className="text-sm text-muted-foreground">
                  Vous n'avez pas de compte? Contactez l'administration pour obtenir votre code d'authentification.
                </p>
                <Link to="/" className="text-sm text-primary hover:underline mt-2 inline-block">
                  Retour à l'accueil
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <footer className="py-6 bg-muted/30 border-t">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Université Connect. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Login;
