import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeader({ eyebrow, title, href, linkText = "Explore all" }: { eyebrow: string; title: string; href?: string; linkText?: string }) {
  return <div className="section-header"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{href && <Link href={href} className="text-link">{linkText}<ArrowUpRight size={16}/></Link>}</div>;
}
