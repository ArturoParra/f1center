import { useEffect, useState } from 'react';
import { F1Service } from '../services/f1Api';
import type { Race, Standing } from '../types/f1';
import { Trophy, Timer, Flag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [nextRace, setNextRace] = useState<Race | null>(null);
    const [driverStandings, setDriverStandings] = useState<Standing[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const race = await F1Service.getNextRace();
            const standings = await F1Service.getDriverStandings();
            setNextRace(race);
            setDriverStandings(standings.slice(0, 5));
        };
        fetchData();
    }, []);

    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Next Race Card */}
                <div className="lg:col-span-2 relative h-80 rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-f1-red to-f1-dark/90 z-0"></div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                    <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Timer className="w-5 h-5 text-white animate-pulse" />
                                <span className="text-sm font-bold tracking-wider uppercase">Next Grand Prix</span>
                            </div>
                            <h2 className="text-4xl font-extrabold italic uppercase">{nextRace?.raceName || 'Loading...'}</h2>
                            <p className="text-xl text-white/80 mt-1">{nextRace?.Circuit.circuitName}</p>
                        </div>

                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-sm uppercase tracking-widest text-white/60 mb-1">Date</p>
                                <p className="text-2xl font-bold">{nextRace?.date}</p>
                                <p className="text-lg text-white/80">{nextRace?.time ? new Date(`${nextRace.date}T${nextRace.time}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}</p>
                            </div>

                            <Link to="/schedule" className="bg-white text-f1-red px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors flex items-center gap-2">
                                Full Schedule <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Top Driver Card */}
                <div className="bg-f1-card rounded-2xl p-6 border border-white/5 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Trophy className="w-32 h-32 text-f1-red" />
                    </div>

                    <div className="relative z-10">
                        <div className="w-24 h-24 rounded-full bg-f1-dark border-2 border-f1-red flex items-center justify-center mb-4 mx-auto">
                            <span className="text-2xl font-bold">#1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{driverStandings[0]?.Driver.givenName} {driverStandings[0]?.Driver.familyName}</h3>
                        <p className="text-f1-gray mb-4">{driverStandings[0]?.Constructors[0].name}</p>
                        <div className="text-4xl font-black text-f1-red italic">{driverStandings[0]?.points} <span className="text-sm text-gray-400 not-italic font-normal">PTS</span></div>
                    </div>
                </div>
            </div>

            {/* Standings Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-f1-card rounded-xl border border-white/5 p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold uppercase tracking-wider flex items-center gap-2">
                            <Flag className="w-5 h-5 text-f1-red" /> Driver Standings
                        </h3>
                        <Link to="/drivers" className="text-sm text-f1-red hover:text-white transition-colors">View All</Link>
                    </div>

                    <div className="space-y-4">
                        {driverStandings.slice(0, 5).map((standing) => (
                            <div key={standing.position} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-4">
                                    <span className="w-6 font-bold text-gray-500">{standing.position}</span>
                                    <div>
                                        <p className="font-bold">{standing.Driver.givenName} {standing.Driver.familyName}</p>
                                        <p className="text-xs text-gray-400">{standing.Constructors[0].name}</p>
                                    </div>
                                </div>
                                <span className="font-bold">{standing.points} PTS</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Placeholder for Constructor Standings or Recent Results */}
                <div className="bg-f1-card rounded-xl border border-white/5 p-6 flex items-center justify-center min-h-[300px]">
                    <p className="text-gray-500">More widgets coming soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
