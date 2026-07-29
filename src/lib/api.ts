export interface PublicSnapshotData {
  bottomScore: number;
  verdict: 'too_early' | 'observe' | 'accumulation_zone' | 'aggressive_bottom';
  verdictLabel: string;
  currentPrice: number | null;
  drawdownPct: number | null;
  daysSinceAth: number | null;
  confidence: number;
  readingsCount?: number;
  updatedAt?: string;
  isLive: boolean;
}

// Strona lądowania używa wyłącznie historycznych odczytów kalibracyjnych.
// Odczyty na żywo dostępne są wyłącznie wewnątrz zautoryzowanego terminala.
export function getHistoricalDemoSnapshot(): PublicSnapshotData {
  return {
    bottomScore: 86,
    verdict: 'aggressive_bottom',
    verdictLabel: 'Agresywna Akumulacja (Dno 2022)',
    currentPrice: 15760,
    drawdownPct: -77,
    daysSinceAth: 375,
    confidence: 92,
    readingsCount: 28,
    updatedAt: '2022-11-21T00:00:00.000Z',
    isLive: false,
  };
}
