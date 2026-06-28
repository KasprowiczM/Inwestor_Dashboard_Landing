Primary call-to-action; use for the main action in any view. Primary = cold ice CTA (NADIR's signature), gold = premium/asset moments only, secondary/ghost for lower emphasis.

```jsx
<Button variant="primary" size="lg" iconRight={<Arrow />}>Request invite</Button>
<Button variant="gold">Upgrade to FULL</Button>
<Button variant="secondary">See methodology</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (ice), `gold`, `secondary`, `ghost`. Sizes: `sm | md | lg`. Supports `iconLeft`/`iconRight`, `fullWidth`, `disabled`, and `href` (renders an `<a>`).
