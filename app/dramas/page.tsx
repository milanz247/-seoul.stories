import { Reveal } from "@/src/components/Reveal";
import type { Metadata } from "next";
import { DramaExplorer } from "@/src/components/DramaExplorer";
export const metadata: Metadata = { title: "Explore dramas" };
export default function DramasPage() { return <div className="page-body"><div className="container listing-page"><Reveal><div className="page-heading"><p className="eyebrow">THE COMPLETE COLLECTION</p><h1>Find a story to stay with you.</h1><p>Explore every moment, every mood, and every world in our curated Korean drama collection.</p></div></Reveal><DramaExplorer/></div></div>; }
