'use client';

import { useState } from 'react';
import { TabContent } from '@/types';

interface InfoTabsProps {
  tabs: TabContent;
}

export default function InfoTabs({ tabs }: InfoTabsProps) {
  const [activeTab, setActiveTab] = useState<keyof TabContent>('bio');

  const tabButtons = [
    { key: 'bio' as keyof TabContent, label: 'BIO' },
    { key: 'facts' as keyof TabContent, label: 'FIGHTER FACTS' },
    { key: 'history' as keyof TabContent, label: 'UFC HISTORY' },
    { key: 'qa' as keyof TabContent, label: 'Q&A' },
  ];

  const renderBioContent = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <div className="text-sm text-gray-400 uppercase">STATUS</div>
            <div className="text-lg font-semibold text-white">{tabs.bio.content.status}</div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="text-sm text-gray-400 uppercase">PLACE OF BIRTH</div>
            <div className="text-lg font-semibold text-white">{tabs.bio.content.placeOfBirth}</div>
          </div>
          <div className="border-b border-gray-700 pb-4">
            <div className="text-sm text-gray-400 uppercase">TRAINS AT</div>
            <div className="text-lg font-semibold text-white">{tabs.bio.content.trainsAt}</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="border-b border-gray-700 pb-4">
            <div className="text-sm text-gray-400 uppercase">FIGHTING STYLE</div>
            <div className="text-lg font-semibold text-white">{tabs.bio.content.fightingStyle}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-b border-gray-700 pb-4">
              <div className="text-sm text-gray-400 uppercase">AGE</div>
              <div className="text-lg font-semibold text-white">{tabs.bio.content.age}</div>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <div className="text-sm text-gray-400 uppercase">HEIGHT</div>
              <div className="text-lg font-semibold text-white">{tabs.bio.content.height}</div>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <div className="text-sm text-gray-400 uppercase">WEIGHT</div>
              <div className="text-lg font-semibold text-white">{tabs.bio.content.weight}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="border-b border-gray-700 pb-4">
              <div className="text-sm text-gray-400 uppercase">OCTAGON DEBUT</div>
              <div className="text-lg font-semibold text-white">{tabs.bio.content.octagonDebut}</div>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <div className="text-sm text-gray-400 uppercase">REACH</div>
              <div className="text-lg font-semibold text-white">{tabs.bio.content.reach}</div>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <div className="text-sm text-gray-400 uppercase">LEG REACH</div>
              <div className="text-lg font-semibold text-white">{tabs.bio.content.legReach}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFactsContent = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Notable Achievements</h3>
        <ul className="space-y-3 text-gray-300">
          {tabs.facts.content.achievements.map((achievement, index) => (
            <li key={index}>• {achievement}</li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Fighting Background</h3>
        <p className="text-gray-300">{tabs.facts.content.background}</p>
      </div>
    </div>
  );

  const renderHistoryContent = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">UFC Career Timeline</h3>
        <div className="space-y-4">
          {tabs.history.content.timeline.map((event, index) => (
            <div key={index} className="border-l-4 border-red-600 pl-4">
              <div className="font-semibold text-white">{event.date}</div>
              <div className="text-gray-300">{event.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQAContent = () => (
    <div className="space-y-6">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {tabs.qa.content.questions.map((item, index) => (
            <div key={index}>
              <div className="font-semibold text-white mb-2">{item.question}</div>
              <div className="text-gray-300">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'bio':
        return renderBioContent();
      case 'facts':
        return renderFactsContent();
      case 'history':
        return renderHistoryContent();
      case 'qa':
        return renderQAContent();
      default:
        return renderBioContent();
    }
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-red-600 mb-2">INFO</h2>
          <p className="text-gray-300">Learn more about Alex Pereira&apos;s UFC history, fighter facts, and Q&A below.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-700">
          {tabButtons.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 transition ${
                activeTab === key
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}
