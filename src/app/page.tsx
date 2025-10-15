'use client';

import { useState, useEffect } from 'react';
import { Fighter, SpotlightItem, Stats, FightRecord, TabContent, Icons } from '@/types';
import { fetchAllData } from '@/utils/api';
import Hero from '@/components/Hero';
import Spotlight from '@/components/Spotlight';
import StatsSection from '@/components/StatsSection';
import FightHistory from '@/components/FightHistory';
import InfoTabs from '@/components/InfoTabs';

export default function Home() {
  const [fighter, setFighter] = useState<Fighter | null>(null);
  const [spotlightItems, setSpotlightItems] = useState<SpotlightItem[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [fightHistory, setFightHistory] = useState<FightRecord[]>([]);
  const [tabs, setTabs] = useState<TabContent | null>(null);
  const [icons, setIcons] = useState<Icons | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllData();

        setFighter(data.fighter);
        setSpotlightItems(data.spotlight);
        setStats(data.stats);
        setFightHistory(data.fightHistory);
        setTabs(data.tabs);
        setIcons(data.icons);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading UFC Fighter Profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  if (!fighter || !stats || !tabs || !icons) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Failed to load fighter data</div>
      </div>
    );
  }

  return (
    <main className="bg-gray-900 text-white overflow-x-hidden">
      <Hero fighter={fighter} icons={icons} />
      <Spotlight spotlightItems={spotlightItems} icons={icons} />
      <StatsSection stats={stats} />
      <FightHistory fightHistory={fightHistory} />
      <InfoTabs tabs={tabs} />
    </main>
  );
}