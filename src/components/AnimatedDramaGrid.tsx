"use client";

import { motion, MotionConfig } from "framer-motion";
import type { Drama } from "@/src/data/dramas";
import { DramaCard } from "./DramaCard";
import { Reveal } from "./Reveal";

/** Stable initial markup; new cards reveal and retained cards move when sorted. */
export function AnimatedDramaGrid({ dramas }: { dramas: Drama[] }) {
  return <MotionConfig reducedMotion="user"><div className="drama-grid">
    {dramas.map((drama, index) => <motion.div key={drama.slug} layout="position" initial={false} transition={{ layout: { duration: .35, ease: [.2, .75, .25, 1] } }}>
      <Reveal delay={(index % 4) * .045}><DramaCard drama={drama}/></Reveal>
    </motion.div>)}
  </div></MotionConfig>;
}
