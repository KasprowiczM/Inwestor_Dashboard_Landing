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
  error?: string;
}

const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL ?? 'https://btc-dash.64bit.site';

export async function fetchPublicSnapshot(): Promise<PublicSnapshotData> {
  try {
    const response = await fetch(`${DASHBOARD_URL}/api/snapshot`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return {
      bottomScore: typeof data.bottomScore === 'number' ? data.bottomScore : (data.bottom_score ?? 43),
      verdict: data.verdict ?? 'observe',
      verdictLabel: data.verdictLabel ?? data.verdict_label ?? 'Strefa Akumulacji',
      currentPrice: data.currentPrice ?? data.current_price ?? null,
      drawdownPct: data.drawdownPct ?? data.drawdown_pct ?? null,
      daysSinceAth: data.daysSinceAth ?? data.days_since_ath ?? null,
      confidence: typeof data.confidence === 'number' ? data.confidence : 55,
      readingsCount: data.readingsCount ?? data.readings_count ?? 24,
      updatedAt: data.updatedAt ?? data.created_at ?? new Date().toISOString(),
      isLive: true,
    };
  } catch (err) {
    console.warn('Nie udało się pobrać aktualnego snapshotu z API, używam bezpiecznego stanu domyślnego:', err);
    return {
      bottomScore: 43,
      verdict: 'observe',
      verdictLabel: 'Strefa Obserwacji / Akumulacji',
      currentPrice: 87450,
      drawdownPct: -48.8,
      daysSinceAth: 295,
      confidence: 55,
      readingsCount: 24,
      updatedAt: new Date().toISOString(),
      isLive: false,
      error: err instanceof Error ? err.message : 'Network error',
    };
  }
}
