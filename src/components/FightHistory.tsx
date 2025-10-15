'use client';

import { useState } from 'react';
import { FightRecord } from '@/types';

interface FightHistoryProps {
  fightHistory: FightRecord[];
}

export default function FightHistory({ fightHistory }: FightHistoryProps) {
  const [visibleCount, setVisibleCount] = useState(3);

  const loadMoreFights = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  const fightsToDisplay = fightHistory.slice(0, visibleCount);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-ufc text-4xl font-bold text-black mb-12 tracking-tight">
          FIGHT HISTORY
        </h2>
        <div className="overflow-x-auto rounded-2xl shadow-ufc">
          <table className="record-table w-full text-left">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-gray-600 font-semibold text-sm">OPPONENT</th>
                <th className="px-6 py-4 text-gray-600 font-semibold text-sm">RESULT</th>
                <th className="px-6 py-4 text-gray-600 font-semibold text-sm">METHOD</th>
                <th className="px-6 py-4 text-gray-600 font-semibold text-sm">ROUND</th>
                <th className="px-6 py-4 text-gray-600 font-semibold text-sm">EVENT</th>
                <th className="px-6 py-4 text-gray-600 font-semibold text-sm">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {fightsToDisplay.map((fight) => (
                <tr key={fight.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">{fight.opponent}</div>
                    <div className="text-gray-500 text-sm">{fight.opponentRank}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                      fight.result === 'WIN' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {fight.result}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 font-medium">{fight.method}</div>
                    <div className="text-gray-500 text-sm">{fight.methodDetails}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">{fight.round}</td>
                  <td className="px-6 py-4">
                    <div className="text-gray-900 font-medium">{fight.event}</div>
                    <div className="text-gray-500 text-sm">{fight.date}</div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-600 hover:text-red-800 font-semibold text-sm transition-colors">
                      {fight.action} &gt;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {visibleCount < fightHistory.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMoreFights}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full hover:bg-gray-50 transition-all duration-300 font-semibold text-lg"
            >
              LOAD MORE FIGHTS
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
