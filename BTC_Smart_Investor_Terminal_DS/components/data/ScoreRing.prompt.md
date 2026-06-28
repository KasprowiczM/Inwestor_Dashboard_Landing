The signature gauge: Bottom Score 0–100 with the stroke colored by contrarian verdict band (gray→amber→green→ice).

```jsx
<ScoreRing score={72} label="Bottom Score" caption="Strefa akumulacji" />
<ScoreRing score={84} size={120} />   // auto → aggressive (ice)
```

Bands: <30 too_early · 30–54 observe · 55–77 accumulate · ≥78 aggressive. Pass `verdict` to override.
