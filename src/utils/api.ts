// API utility functions
import { Fighter, SpotlightItem, Stats, FightRecord, TabContent, Icons } from '@/types';
import { fetchAllDataStatic } from './staticData';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Consolidated API response type
export interface ApiResponse {
  fighter: Fighter;
  spotlight: SpotlightItem[];
  stats: Stats;
  fightHistory: FightRecord[];
  tabs: TabContent;
  icons: Icons;
}

// Single API call to fetch all data
export const fetchAllData = async (): Promise<ApiResponse> => {
  // Use static data in production, API in development
  if (process.env.NODE_ENV === 'production') {
    return fetchAllDataStatic();
  }
  
  const response = await fetch(`${API_BASE_URL}/api`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

// Individual data getters for backward compatibility (optional)
export const fetchFighter = async (): Promise<Fighter> => {
  const data = await fetchAllData();
  return data.fighter;
};

export const fetchSpotlight = async (): Promise<SpotlightItem[]> => {
  const data = await fetchAllData();
  return data.spotlight;
};

export const fetchStats = async (): Promise<Stats> => {
  const data = await fetchAllData();
  return data.stats;
};

export const fetchFightHistory = async (): Promise<FightRecord[]> => {
  const data = await fetchAllData();
  return data.fightHistory;
};

export const fetchTabs = async (): Promise<TabContent> => {
  const data = await fetchAllData();
  return data.tabs;
};

export const fetchIcons = async (): Promise<Icons> => {
  const data = await fetchAllData();
  return data.icons;
};
