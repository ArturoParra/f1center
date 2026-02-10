import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Trophy, Calendar, Zap, Flag } from 'lucide-react';
import clsx from 'clsx';

const Sidebar = () => {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'Schedule', icon: Calendar, path: '/schedule' },
        { name: 'Drivers', icon: Users, path: '/drivers' },
        { name: 'Constructors', icon: Trophy, path: '/constructors' },
        { name: 'Results', icon: Flag, path: '/results' },
    ];

    return (
        <aside className="w-64 h-screen bg-f1-card border-r border-white/5 flex flex-col fixed left-0 top-0">
            <div className="p-6 border-b border-white/5 flex items-center gap-3">
                <Zap className="text-f1-red w-8 h-8" />
                <h1 className="text-2xl font-bold italic tracking-tighter">
                    F1<span className="text-f1-red">CENTER</span>
                </h1>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            clsx(
                                'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group',
                                isActive
                                    ? 'bg-f1-red text-white shadow-lg shadow-f1-red/20'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                            )
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium tracking-wide">{item.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-6 border-t border-white/5">
                <div className="bg-gradient-to-br from-f1-carbon to-black rounded-lg p-4 border border-white/5">
                    <p className="text-xs text-gray-500 mb-2">Next Race</p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm font-bold text-white">Live Updates</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
