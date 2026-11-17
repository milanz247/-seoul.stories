import type { Genre } from "@/src/data/dramas";

export function GenreIllustration({ genre }: { genre: Genre }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg viewBox="0 0 120 100" aria-hidden="true" className="genre-art">
    <circle cx="85" cy="30" r="20" fill="currentColor" opacity=".08" />
    {genre === "Romance" && <g {...common}><path d="M58 75C40 62 25 50 25 37a16 16 0 0 1 31-5 16 16 0 0 1 31 5C87 50 73 62 58 75Z" /><path d="M18 29l3-7 3 7 7 3-7 3-3 7-3-7-7-3z" /></g>}
    {genre === "Thriller" && <g {...common}><path d="M24 71c9-23 24-36 36-36s27 13 36 36c-15 11-57 11-72 0Z" /><circle cx="49" cy="61" r="3" fill="currentColor"/><circle cx="71" cy="61" r="3" fill="currentColor"/><path d="M60 35V20m-12 3 12-9 12 9" /></g>}
    {genre === "Historical" && <g {...common}><path d="M14 53q22-1 46-27 24 26 46 27l-8 8H22zM27 60v23h66V60M45 82V66h30v16M18 52l-5 10h94l-5-10"/><path d="M54 27v-9h12v9"/></g>}
    {genre === "Fantasy" && <g {...common}><path d="M70 17a29 29 0 1 0 20 50A30 30 0 1 1 70 17Z"/><path d="M28 20l2 6 6 2-6 2-2 6-2-6-6-2 6-2zm62 20 2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/></g>}
    {genre === "Comedy" && <g {...common}><path d="M21 45q39-37 78 0l-8 33H29z"/><path d="M36 47q24 16 48 0M43 64q17 15 34 0M21 45l-7-7M99 45l7-7"/></g>}
    {genre === "Medical" && <g {...common}><path d="M44 23h32v17h17v32H76v17H44V72H27V40h17z"/><path d="M49 55h22M60 44v22"/></g>}
    {genre === "School" && <g {...common}><path d="M20 27q20-10 40 3 20-13 40-3v50q-20-10-40 3-20-13-40-3zM60 30v50M28 38q12-4 24 2m16 0q12-6 24-2M28 50q12-4 24 2m16 0q12-6 24-2"/></g>}
    {genre === "Crime" && <g {...common}><circle cx="58" cy="48" r="25"/><path d="m77 68 21 19M58 35v15l10 7M42 28l-7-8M75 27l7-7"/></g>}
  </svg>;
}

export function BlossomBranch({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 280 180" fill="none" aria-hidden="true"><path d="M282 155C197 140 160 84 75 52M180 113c-8-30-3-50 14-76M129 80C117 91 88 98 57 94" stroke="#C9A24B" strokeWidth="2"/><g fill="#F4D6D9" stroke="#B3243B" strokeWidth="1.4"><path d="M69 47c-8-15-21-9-17 2-12-5-17 9-7 15-4 11 9 17 16 8 11 7 19-5 11-14 9-8 2-18-3-11Z"/><path d="M194 34c-9-13-20-5-16 3-11-3-15 10-6 15-2 10 10 14 15 5 10 4 16-8 7-14 6-8 0-17-6-9Z"/><path d="M55 88c-9-12-18-5-15 4-10-2-14 10-5 15-2 9 9 14 15 5 9 4 15-7 7-14 6-8 0-16-6-10Z"/></g><g fill="#C9A24B"><circle cx="59" cy="60" r="3"/><circle cx="185" cy="46" r="3"/><circle cx="47" cy="100" r="3"/></g></svg>;
}

export function EmptyIllustration() {
  return <svg viewBox="0 0 240 170" className="empty-art" aria-hidden="true"><circle cx="120" cy="83" r="62" fill="#F4D6D9" opacity=".5"/><path d="M39 111q81-83 162 0l-12 11H51z" fill="#2B2D6E" opacity=".9"/><path d="M72 121v25h96v-25M108 145v-22h24v22" fill="none" stroke="#C9A24B" strokeWidth="3"/><circle cx="170" cy="45" r="17" fill="#C9A24B" opacity=".75"/><path d="M38 121h164" stroke="#B3243B" strokeWidth="2"/></svg>;
}
