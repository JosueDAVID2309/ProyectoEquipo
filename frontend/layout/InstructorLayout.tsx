import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, UserCircle } from 'lucide-react'; // Iconos pro

const InstructorLayout = () => {
  const location = useLocation();

  // Función para saber si un link está activo y cambiarle el color
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white font-sans">
      
      {/* SIDEBAR - Panel Izquierdo */}
      <aside className="w-64 bg-[#111111] border-r border-gray-800 fixed h-full flex flex-col">
        {/* Logo estilo SENATI */}
        <div className="p-6 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">S</div>
            <h1 className="text-xl font-bold tracking-tight text-white">SENATI</h1>
          </div>
        </div>

        {/* Navegación */}
        <nav className="flex-1 px-4 space-y-2">
          <MenuLink 
            to="/instructor/dashboard" 
            icon={<LayoutDashboard size={20} />} 
            label="Dashboard" 
            active={isActive('/instructor/dashboard')} 
          />
          <MenuLink 
            to="/instructor/alumnos" 
            icon={<Users size={20} />} 
            label="Alumnos" 
            active={isActive('/instructor/alumnos')} 
          />
          <MenuLink 
            to="/instructor/tareas" 
            icon={<BookOpen size={20} />} 
            label="Tareas para Seminario" 
            active={isActive('/instructor/tareas')} 
          />
          <MenuLink 
            to="/instructor/perfil" 
            icon={<UserCircle size={20} />} 
            label="Perfil" 
            active={isActive('/instructor/perfil')} 
          />
        </nav>

        {/* Footer del Sidebar (Usuario) */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 px-2">
            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
            <div className="text-xs">
              <p className="font-medium">Instructor Leo</p>
              <p className="text-gray-500 italic text-[10px]">En línea</p>
            </div>
          </div>
        </div>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 ml-64 min-h-screen">
        {/* Header superior sutil */}
        <header className="h-14 border-b border-gray-800 flex items-center px-8 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-10">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Sistema de Gestión Académica
          </span>
        </header>

        {/* Contenedor de las vistas */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

// Componente auxiliar para los links del menú
const MenuLink = ({ to, icon, label, active }: { to: string, icon: any, label: string, active: boolean }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active 
        ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
    }`}
  >
    <span className={`${active ? 'text-blue-400' : 'text-gray-500 group-hover:text-gray-300'}`}>
      {icon}
    </span>
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default InstructorLayout;