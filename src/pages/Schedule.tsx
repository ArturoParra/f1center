import { useEffect, useState } from 'react';
import { F1Service } from '../services/f1Api';
import type { Race } from '../types/f1';
import { MapPin, Calendar } from 'lucide-react';

const Schedule = () => {
    const [races, setRaces] = useState<Race[]>([]);

    useEffect(() => {
        F1Service.getSeasonSchedule().then(setRaces);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold uppercase italic tracking-wider mb-8">Race Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {races.map((race) => (
                    <div key={race.round} className="bg-f1-card p-6 rounded-xl border border-white/5 hover:border-f1-red/50 transition-colors group">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold text-f1-red uppercase tracking-widest">Round {race.round}</span>
                            <span className="text-xs text-gray-500">{race.season}</span>
                        </div>

                        <h3 className="text-xl font-bold mb-1 truncate">{race.raceName}</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                            <MapPin className="w-4 h-4" />
                            <span className="truncate">{race.Circuit.circuitName}, {race.Circuit.Location.country}</span>
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-f1-red" />
                            <div>
                                <p className="text-sm font-bold text-white">{new Date(race.date).toLocaleDateString([], { month: 'long', day: 'numeric' })}</p>
                                <p className="text-xs text-gray-500">{race.time ? new Date(`${race.date}T${race.time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'TBA'}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;
