// Types for Fighter Profile App

export interface Fighter {
  id: number;
  name: string;
  nickname: string;
  division: string;
  rank: string;
  status: string;
  titleHolder: boolean;
  record: string;
  age: number;
  height: string;
  weight: string;
  reach: string;
  legReach: string;
  fightingStyle: string;
  placeOfBirth: string;
  trainsAt: string;
  octagonDebut: string;
  videoSrc: string;
  tags: string[];
}

export interface SpotlightItem {
  id: number;
  type: 'news' | 'video';
  title: string;
  description: string;
  image: string;
  actionText: string;
  actionIcon: string;
}

export interface StrikingAccuracy {
  landed: number;
  attempted: number;
  accuracy: number;
}

export interface TakedownAccuracy {
  landed: number;
  attempted: number;
  accuracy: number;
}

export interface KeyStats {
  knockoutWins: number;
  firstRoundFinishes: number;
}

export interface PerMinuteStats {
  sigStrikesLanded: number;
  sigStrikesAbsorbed: number;
  sigStrikesDefense: number;
  takedownDefense: number;
}

export interface StrikeDistribution {
  standing: {
    count: number;
    percentage: number;
  };
  clinch: {
    count: number;
    percentage: number;
  };
  ground: {
    count: number;
    percentage: number;
  };
}

export interface StrikeTargets {
  head: number;
  body: number;
  legs: number;
}

export interface WinMethods {
  koTko: number;
  decision: number;
  submission: number;
}

export interface Stats {
  keyStats: KeyStats;
  strikingAccuracy: StrikingAccuracy;
  takedownAccuracy: TakedownAccuracy;
  perMinuteStats: PerMinuteStats;
  strikeDistribution: StrikeDistribution;
  strikeTargets: StrikeTargets;
  winMethods: WinMethods;
}

export interface FightRecord {
  id: number;
  opponent: string;
  opponentRank: string;
  result: string;
  method: string;
  methodDetails: string;
  round: number;
  event: string;
  date: string;
  action: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
}

export interface QnAItem {
  question: string;
  answer: string;
}

export interface TabContent {
  bio: {
    title: string;
    content: {
      status: string;
      placeOfBirth: string;
      trainsAt: string;
      fightingStyle: string;
      age: number;
      height: string;
      weight: string;
      octagonDebut: string;
      reach: string;
      legReach: string;
    };
  };
  facts: {
    title: string;
    content: {
      achievements: string[];
      background: string;
    };
  };
  history: {
    title: string;
    content: {
      timeline: TimelineEvent[];
    };
  };
  qa: {
    title: string;
    content: {
      questions: QnAItem[];
    };
  };
}

export interface Icons {
  mute: string;
  unmute: string;
  arrowLeft: string;
  arrowRight: string;
  play: string;
}
