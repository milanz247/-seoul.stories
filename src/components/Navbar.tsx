"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { SearchBar } from "./SearchBar";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => { const isDark = localStorage.getItem("seoul-stories-theme") === "dark"; setDark(isDark); document.documentElement.classList.toggle("dark", isDark); }, []);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next); localStorage.setItem("seoul-stories-theme", next ? "dark" : "light"); };
  const links = [{ href: "/", text: "Home" }, { href: "/dramas", text: "Explore dramas" }, { href: "/genres/romance", text: "Genres" }];
  return <header className="navbar"><div className="container nav-inner"><Link href="/" className="brand" onClick={() => setMenuOpen(false)}><span className="brand-mark">花</span><span>seoul<span className="brand-dot">.</span>stories</span></Link><nav className="nav-links" aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href} className={pathname === link.href ? "active" : ""}>{link.text}</Link>)}</nav><div className="nav-search"><SearchBar/></div><button className="theme-button" onClick={toggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button></div>{menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.text}</Link>)}<Link href="/search" onClick={() => setMenuOpen(false)}>Search</Link></nav>}</header>;
}
