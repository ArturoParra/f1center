import { useEffect, useState } from 'react';
import { F1Service } from '../services/f1Api';
import type { ConstructorStanding } from '../types/f1';

const Constructors = () => {
    const [standings, setStandings] = useState<ConstructorStanding[]>([]);

    useEffect(() => {
        F1Service.getConstructorStandings().then(setStandings);
    }, []);

    return (
        <div>
            <h2 className="text-3xl font-bold uppercase italic tracking-wider mb-8">Constructor Standings</h2>
            <div className="bg-f1-card rounded-xl border border-white/5 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-xs uppercase text-gray-400">
                        <tr>
                            <th className="p-4">Pos</th>
                            <th className="p-4">Team</th>
                            <th className="p-4">Nationality</th>
                            <th className="p-4">Wins</th>
                            <th className="p-4">Points</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {standings.map((standing) => (
                            <tr key={standing.position} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-bold text-f1-red">{standing.position}</td>
                                <td className="p-4 font-medium">{standing.Constructor.name}</td>
                                <td className="p-4 text-gray-400">{standing.Constructor.nationality}</td>
                                <td className="p-4">{standing.wins}</td>
                                <td className="p-4 font-bold">{standing.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Constructors;
