from pathlib import Path
from html import escape

items = [
 ('queen-of-tears','#3d3148','#b4707d','#e5bf99','moon'),
 ('crash-landing-on-you','#233b53','#8b7589','#e8bd94','mountains'),
 ('goblin','#242b43','#747386','#d8a779','moon'),
 ('twenty-five-twenty-one','#48758a','#d4a18c','#f5d1a0','sun'),
 ('extraordinary-attorney-woo','#284c63','#8fb6b6','#e8d7b6','waves'),
 ('the-glory','#212a39','#6a455a','#c69885','rain'),
 ('moving','#1e334d','#6778a0','#e3ac87','stars'),
 ('hospital-playlist','#34565b','#9c9a82','#e7c298','windows'),
 ('mr-sunshine','#343c43','#907a6d','#e5bd8f','mountains'),
 ('when-life-gives-you-tangerines','#526d69','#dbab7e','#f1d1a3','sun'),
 ('lovely-runner','#35457c','#a387b8','#f0bdab','stars'),
 ('the-trauma-code','#263c4c','#788b98','#dab79a','windows'),
]

def motif(kind,w,h):
 cx=w*.69; cy=h*.29; r=min(w,h)*.17
 if kind=='moon': return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#fff4d8" opacity=".88"/><circle cx="{cx+r*.22}" cy="{cy-r*.22}" r="{r*.9}" fill="url(#sky)"/>'
 if kind=='sun': return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#ffe6b6" opacity=".8"/><circle cx="{cx}" cy="{cy}" r="{r*1.28}" fill="none" stroke="#ffe6b6" opacity=".3" stroke-width="2"/>'
 if kind=='stars': return ''.join(f'<path d="M {x} {y-8} L {x+2} {y-2} L {x+8} {y} L {x+2} {y+2} L {x} {y+8} L {x-2} {y+2} L {x-8} {y} L {x-2} {y-2} Z" fill="#ffe6c7" opacity=".8"/>' for x,y in [(cx,cy),(cx*.68,cy*.57),(cx*1.3,cy*1.5)])
 if kind=='rain': return ''.join(f'<path d="M {x} {y} l -10 32" stroke="#f4dfce" stroke-width="1" opacity=".32"/>' for x in range(20,w,32) for y in range(30,h,84))
 if kind=='windows': return f'<rect x="{w*.55}" y="{h*.17}" width="{w*.31}" height="{h*.44}" rx="4" fill="#fff5dc" opacity=".16"/><path d="M {w*.705} {h*.17} V {h*.61} M {w*.55} {h*.39} H {w*.86}" stroke="#f8e3c1" opacity=".42" stroke-width="3"/>'
 if kind=='waves': return ''.join(f'<path d="M 0 {h*.38+i*30} Q {w*.2} {h*.3+i*30} {w*.45} {h*.38+i*30} T {w} {h*.38+i*30}" fill="none" stroke="#d3eeeb" opacity=".23" stroke-width="3"/>' for i in range(4))
 return f'<path d="M 0 {h*.52} Q {w*.2} {h*.18} {w*.43} {h*.48} Q {w*.7} {h*.08} {w} {h*.45} V {h} H 0Z" fill="#f2d6ba" opacity=".25"/>'

def svg(w,h,c1,c2,c3,kind):
 return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" role="img"><defs><linearGradient id="sky" x2=".8" y2="1"><stop stop-color="{c1}"/><stop offset=".58" stop-color="{c2}"/><stop offset="1" stop-color="{c3}"/></linearGradient><linearGradient id="fade" x2="0" y2="1"><stop stop-color="#14121a" stop-opacity="0"/><stop offset="1" stop-color="#14121a" stop-opacity=".57"/></linearGradient></defs><rect width="{w}" height="{h}" fill="url(#sky)"/>{motif(kind,w,h)}<path d="M0 {h*.69} Q {w*.18} {h*.57} {w*.36} {h*.7} Q {w*.58} {h*.46} {w*.75} {h*.68} Q {w*.89} {h*.6} {w} {h*.68} V {h} H0Z" fill="{c1}" opacity=".46"/><path d="M0 {h*.79} Q {w*.23} {h*.62} {w*.47} {h*.79} Q {w*.76} {h*.64} {w} {h*.76} V {h} H0Z" fill="{c1}" opacity=".7"/><path d="M0 {h*.86} Q {w*.25} {h*.78} {w*.5} {h*.87} T {w} {h*.84} V {h} H0Z" fill="#151b29" opacity=".65"/><rect width="{w}" height="{h}" fill="url(#fade)"/><path d="M {w*.055} {h*.07} H {w*.945} M {w*.055} {h*.93} H {w*.945}" stroke="#e7c787" opacity=".55" stroke-width="1"/></svg>'''

out=Path('public/art')
for slug,c1,c2,c3,kind in items:
 (out/f'{slug}-poster.svg').write_text(svg(480,680,c1,c2,c3,kind))
 (out/f'{slug}-backdrop.svg').write_text(svg(1600,850,c1,c2,c3,kind))
