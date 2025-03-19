
import { Book, FileText, BarChart, Info, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const dashboardModules = [
  { id: 'courses', label: 'Cours', icon: Book },
  { id: 'exams', label: 'Examens', icon: FileText },
  { id: 'grades', label: 'Notes', icon: BarChart },
  { id: 'info', label: 'Informations', icon: Info },
];

const DashboardSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 p-4 bg-white border-r h-screen sticky top-0">
      <div className="flex items-center gap-2 py-4 px-2 mb-6">
        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
          UC
        </div>
        <span className="font-bold text-lg">Université Connect</span>
      </div>
      
      <nav className="flex-1 space-y-1">
        {dashboardModules.map((module) => (
          <Button
            key={module.id}
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <module.icon className="mr-2 h-5 w-5" />
            {module.label}
          </Button>
        ))}
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
  );
};

// Export the Book icon for mobile usage
DashboardSidebar.Icon = Book;

export default DashboardSidebar;
