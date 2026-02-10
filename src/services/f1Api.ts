import axios from 'axios';
import type { Race, Standing, ConstructorStanding } from '../types/f1';

const API_BASE_URL = 'http://api.jolpi.ca/ergast/f1'; // Using Jolpi mirror for better reliability/CORS than original ergast

export const F1Service = {
    getNextRace: async (): Promise<Race | null> => {
        try {
            const response = await axios.get(`${API_BASE_URL}/current/next.json`);
            return response.data.MRData.RaceTable.Races[0];
        } catch (error) {
            console.error('Error fetching next race:', error);
            return null;
        }
    },

    getDriverStandings: async (): Promise<Standing[]> => {
        try {
            const response = await axios.get(`${API_BASE_URL}/current/driverStandings.json`);
            return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        } catch (error) {
            console.error('Error fetching driver standings:', error);
            return [];
        }
    },

    getConstructorStandings: async (): Promise<ConstructorStanding[]> => {
        try {
            const response = await axios.get(`${API_BASE_URL}/current/constructorStandings.json`);
            return response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        } catch (error) {
            console.error('Error fetching constructor standings:', error);
            return [];
        }
    },

    getSeasonSchedule: async (): Promise<Race[]> => {
        try {
            const response = await axios.get(`${API_BASE_URL}/current.json`);
            return response.data.MRData.RaceTable.Races;
        } catch (error) {
            console.error('Error fetching season schedule:', error);
            return [];
        }
    },

    getLastRaceResults: async (): Promise<any> => {
        try {
            const response = await axios.get(`${API_BASE_URL}/current/last/results.json`);
            return response.data.MRData.RaceTable.Races[0];
        } catch (error) {
            console.error("Error fetching last race results", error);
            return null;
        }
    }
};
