'use client';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface AnimatedSectionProps {
    id?: string;
    children: React.ReactNode;
    className?: string;
    delay?: number;
}


export default function AnimatedSection({
    id,
    children,
    className = '',
    delay = 0.1,
}: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-100px' });

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className={`scroll-mt-24 ${className}`}
        >
            {children}
        </motion.section>
    );
}

