import { Bell, Search, User } from 'lucide-react';

const Header = () => {
    return (
        <header className="h-16 bg-f1-card/50 backdrop-blur-sm border-b border-white/5 flex items-center justify-between px-8 sticky top-0 z-10 ml-64">
            <div className="flex items-center gap-4 w-96">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search drivers, teams, races..."
                        className="w-full bg-f1-dark border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-f1-red transition-colors"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative text-gray-400 hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-f1-red rounded-full"></span>
                </button>
                <div className="flex items-center gap-3 pl-6 border-l border-white/10">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-bold text-white">Arturo P.</p>
                        <p className="text-xs text-gray-500">Pro Member</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-f1-carbon border border-white/10 flex items-center justify-center text-f1-red">
                        <User className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
