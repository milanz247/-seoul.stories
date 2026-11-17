/** Original illustrations inspired by hanok rooflines and geometric window lattice. */
export function LatticeBorder({ className = "" }: { className?: string }) {
  return <svg className={`lattice-border ${className}`} viewBox="0 0 1200 32" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice"><path d="M0 3h1200M0 29h1200" stroke="currentColor" opacity=".4"/>{Array.from({ length: 40 }, (_, i) => <g key={i} transform={`translate(${i * 32} 0)`} stroke="currentColor"><path d="m0 16 16-12 16 12-16 12ZM8 16h16M16 9v14" strokeWidth=".8"/></g>)}</svg>;
}

export function HanokLandscape({ className = "" }: { className?: string }) {
  return <svg className={`hanok-landscape ${className}`} viewBox="0 0 900 230" fill="none" aria-hidden="true">
    <circle className="landscape-sun" cx="695" cy="63" r="35" fill="#C9A24B" opacity=".18"/>
    <path d="M0 186Q85 70 194 173Q294 57 405 174Q528 60 634 173Q760 60 900 187V230H0Z" fill="#B6C8BC" opacity=".23"/>
    <path d="M0 206Q100 140 215 191Q360 124 497 195Q701 118 900 203V230H0Z" fill="#879B91" opacity=".17"/>
    <g stroke="#2B2D6E" strokeWidth="1.7" strokeLinejoin="round">
      <path d="M327 143Q391 134 450 84Q509 134 573 143l-17 13H344Z" fill="#2B2D6E" fillOpacity=".13"/>
      <path d="M317 143q77-7 133-59 56 52 133 59M337 153h226M352 156v61h196v-61"/>
      <path d="M373 216v-49h48v49m58 0v-49h48v49M437 216v-50h27v50" stroke="#B3243B"/>
      <path d="M385 168v47m12-47v47m12-47v47m-35-32h46m-46 15h46m72-30v47m12-47v47m12-47v47m-35-32h46m-46 15h46" stroke="#C9A24B" strokeWidth="1"/>
      <path d="M333 218h234M325 224h250" stroke="#C9A24B"/>
      <path d="M179 175q41-4 74-34 33 30 74 34l-10 9H190ZM201 185v33h104v-33" fill="#2B2D6E" fillOpacity=".08"/>
      <path d="M215 218v-25h25v25m15 0v-25h35v25" stroke="#C9A24B"/>
    </g>
    <g className="landscape-tree"><path d="M733 218q-20-70 3-119m-9 57 39-31m-35 51-31-24" stroke="#8D7561" strokeWidth="2"/>
    <g fill="#F4D6D9" stroke="#B3243B" strokeWidth=".6"><circle cx="736" cy="99" r="15"/><circle cx="717" cy="114" r="17"/><circle cx="754" cy="116" r="18"/><circle cx="774" cy="127" r="13"/><circle cx="706" cy="143" r="14"/><circle cx="739" cy="135" r="17"/></g>
    </g><path d="M88 217q9-25 19-2m-8 2q-2-34 12-30m506 30q8-25 19-2m-8 2q-2-34 12-30M37 225h826" stroke="#879B91" strokeWidth="1.5"/>
    <path className="landscape-birds" d="M109 73q12-10 24 0 12-10 24 0m405-33q10-8 20 0 10-8 20 0" stroke="#C9A24B" strokeWidth="1.5"/>
  </svg>;
}
