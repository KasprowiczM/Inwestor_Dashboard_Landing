/* NADIR — minimal line icons (Lucide-style, 1.6 stroke). Exposed on window.NADIR_ICONS. */
(function () {
  const React = window.React;
  const s = (paths, props = {}) => (
    React.createElement('svg', {
      width: props.size || 18, height: props.size || 18, viewBox: '0 0 24 24',
      fill: 'none', stroke: 'currentColor', strokeWidth: props.sw || 1.7,
      strokeLinecap: 'round', strokeLinejoin: 'round', ...props,
    }, paths.map((d, i) => React.createElement('path', { key: i, d })))
  );
  window.NADIR_ICONS = {
    arrow: (p) => s(['M5 12h14', 'M13 6l6 6-6 6'], p),
    lock: (p) => React.createElement('svg', { width: p?.size||18, height: p?.size||18, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:p?.sw||1.7, strokeLinecap:'round', strokeLinejoin:'round', ...p },
      React.createElement('rect',{key:'r',x:4,y:11,width:16,height:9,rx:2}),
      React.createElement('path',{key:'p',d:'M8 11V7a4 4 0 0 1 8 0v4'})),
    check: (p) => s(['M5 13l4 4L19 7'], p),
    x: (p) => s(['M6 6l12 12', 'M18 6L6 18'], p),
    bolt: (p) => s(['M13 2L4 14h7l-1 8 9-12h-7l1-8z'], p),
    shield: (p) => s(['M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z'], p),
    layers: (p) => s(['M12 3l9 5-9 5-9-5 9-5z', 'M3 13l9 5 9-5'], p),
    activity: (p) => s(['M3 12h4l3 8 4-16 3 8h4'], p),
    mail: (p) => React.createElement('svg', { width: p?.size||18, height: p?.size||18, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:p?.sw||1.7, strokeLinecap:'round', strokeLinejoin:'round', ...p },
      React.createElement('rect',{key:'r',x:3,y:5,width:18,height:14,rx:2}),
      React.createElement('path',{key:'p',d:'M3 7l9 6 9-6'})),
    chevron: (p) => s(['M6 9l6 6 6-6'], p),
    target: (p) => React.createElement('svg', { width: p?.size||18, height: p?.size||18, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:p?.sw||1.7, ...p },
      React.createElement('circle',{key:'a',cx:12,cy:12,r:9}),
      React.createElement('circle',{key:'b',cx:12,cy:12,r:5}),
      React.createElement('circle',{key:'c',cx:12,cy:12,r:1.4,fill:'currentColor'})),
    waves: (p) => s(['M2 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2', 'M2 13c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2', 'M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2'], p),
  };
})();
