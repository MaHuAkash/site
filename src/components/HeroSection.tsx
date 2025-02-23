'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { WavyBackground } from "./acernityui/wavy-background";
export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (

    
    <section className="min-h-screen relative overflow-hidden">
     <WavyBackground className="max-w-4xl mx-auto pb-40">
      
    </WavyBackground>
    </section>
  );
}
