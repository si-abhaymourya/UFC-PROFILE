'use client';

import { Stats } from '@/types';
import UnifiedChart from './charts/UnifiedChart';

interface StatsSectionProps {
  stats: Stats;
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="gradient-dark py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="font-ufc text-4xl font-bold mb-12 text-white tracking-tight">FIGHT STATISTICS</h2>
        
        {/* Key Stats Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="gradient-card p-8 rounded-2xl text-center hover-lift shadow-ufc border border-gray-700">
            <div className="text-5xl font-bold text-white mb-4 font-ufc">{stats.keyStats.knockoutWins}</div>
            <div className="text-gray-300 text-lg font-semibold">WINS BY KNOCKOUT</div>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="gradient-card p-8 rounded-2xl text-center hover-lift shadow-ufc border border-gray-700">
            <div className="text-5xl font-bold text-white mb-4 font-ufc">{stats.keyStats.firstRoundFinishes}</div>
            <div className="text-gray-300 text-lg font-semibold">FIRST ROUND FINISHES</div>
            <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <UnifiedChart
            type="doughnut"
            title="STRIKING ACCURACY"
            data={{
              labels: ['Landed', 'Missed'],
              datasets: [{
                data: [stats.strikingAccuracy.accuracy, 100 - stats.strikingAccuracy.accuracy],
                backgroundColor: ['#dc2626', '#374151'],
                borderWidth: 0,
                borderColor: '#0f0f0f',
              }]
            }}
            stats={{
              landed: stats.strikingAccuracy.landed,
              attempted: stats.strikingAccuracy.attempted,
              accuracy: stats.strikingAccuracy.accuracy
            }}
            statsLabels={{
              landed: 'Sig. Strikes Landed',
              attempted: 'Sig. Strikes Attempted',
              accuracy: 'Accuracy'
            }}
          />
          <UnifiedChart
            type="doughnut"
            title="TAKEDOWN ACCURACY"
            data={{
              labels: ['Landed', 'Missed'],
              datasets: [{
                data: [stats.takedownAccuracy.accuracy, 100 - stats.takedownAccuracy.accuracy],
                backgroundColor: ['#dc2626', '#374151'],
                borderWidth: 0,
                borderColor: '#0f0f0f',
              }]
            }}
            stats={{
              landed: stats.takedownAccuracy.landed,
              attempted: stats.takedownAccuracy.attempted,
              accuracy: stats.takedownAccuracy.accuracy
            }}
            statsLabels={{
              landed: 'Takedowns Landed',
              attempted: 'Takedowns Attempted',
              accuracy: 'Accuracy'
            }}
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          <div className="gradient-card p-5 rounded-xl text-center hover-lift border border-gray-700">
            <div className="text-2xl font-bold text-white mb-2 font-ufc">{stats.perMinuteStats.sigStrikesLanded}</div>
            <div className="text-sm text-gray-300 font-medium">SIG. STR. LANDED PER MIN</div>
          </div>
          <div className="gradient-card p-5 rounded-xl text-center hover-lift border border-gray-700">
            <div className="text-2xl font-bold text-white mb-2 font-ufc">{stats.perMinuteStats.sigStrikesAbsorbed}</div>
            <div className="text-sm text-gray-300 font-medium">SIG. STR. ABSORBED PER MIN</div>
          </div>
          <div className="gradient-card p-5 rounded-xl text-center hover-lift border border-gray-700">
            <div className="text-2xl font-bold text-white mb-2 font-ufc">{stats.perMinuteStats.sigStrikesDefense}%</div>
            <div className="text-sm text-gray-300 font-medium">SIG. STR. DEFENSE</div>
          </div>
          <div className="gradient-card p-5 rounded-xl text-center hover-lift border border-gray-700">
            <div className="text-2xl font-bold text-white mb-2 font-ufc">{stats.perMinuteStats.takedownDefense}%</div>
            <div className="text-sm text-gray-300 font-medium">TAKEDOWN DEFENSE</div>
          </div>
        </div>

        {/* Charts Row 2 - Improved Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Strike Distribution */}
          <div className="gradient-card p-6 rounded-2xl hover-lift shadow-ufc border border-gray-700 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 text-white">
              <div className="w-2 h-6 bg-red-600 rounded-full"></div>
              STRIKE DISTRIBUTION
            </h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm font-medium">STANDING</span>
                  <span className="text-white font-bold">
                    {stats.strikeDistribution.standing.count} 
                    <span className="text-gray-400 text-sm">({stats.strikeDistribution.standing.percentage}%)</span>
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-red-600 h-2.5 rounded-full" 
                    style={{ width: `${stats.strikeDistribution.standing.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm font-medium">CLINCH</span>
                  <span className="text-white font-bold">
                    {stats.strikeDistribution.clinch.count} 
                    <span className="text-gray-400 text-sm">({stats.strikeDistribution.clinch.percentage}%)</span>
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-red-600 h-2.5 rounded-full" 
                    style={{ width: `${stats.strikeDistribution.clinch.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm font-medium">GROUND</span>
                  <span className="text-white font-bold">
                    {stats.strikeDistribution.ground.count} 
                    <span className="text-gray-400 text-sm">({stats.strikeDistribution.ground.percentage}%)</span>
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-red-600 h-2.5 rounded-full" 
                    style={{ width: `${stats.strikeDistribution.ground.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <UnifiedChart
            type="bar"
            title="STRIKE TARGETS"
            data={{
              labels: ['HEAD', 'BODY', 'LEGS'],
              datasets: [{
                data: [stats.strikeTargets.head, stats.strikeTargets.body, stats.strikeTargets.legs],
                backgroundColor: ['#dc2626', '#dc2626', '#dc2626'],
                borderRadius: 6,
                borderSkipped: false,
              }]
            }}
            className="lg:col-span-1"
          />

          <UnifiedChart
            type="pie"
            title="WIN METHODS"
            data={{
              labels: ['KO/TKO', 'Decision', 'Submission'],
              datasets: [{
                data: [stats.winMethods.koTko, stats.winMethods.decision, stats.winMethods.submission],
                backgroundColor: ['#dc2626', '#374151', '#6b7280'],
                borderWidth: 2,
                borderColor: '#0f0f0f',
              }]
            }}
            showLegend={true}
            className="lg:col-span-1"
          />
        </div>
      </div>
    </section>
  );
}
