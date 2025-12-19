"use client";
import React, { useEffect, useRef, useState } from "react";
import { statIcons, statColors } from "./QuickStatsIcons";
import { useInView } from "./useInView";

interface Stat {
    label: string;
    value: number;
}

const stats: Stat[] = [
    { label: "Students", value: 4500 },
    { label: "Alumni", value: 14500 },
    { label: "Faculty", value: 190 },
    { label: "Departments", value: 18 },
    { label: "Programs", value: 60 },
];

function useCountUp(target: number, duration: number) {
    const [count, setCount] = useState(0);
    const frame = useRef<number | null>(null);

    useEffect(() => {
        let start = 0;
        const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                frame.current = window.requestAnimationFrame(step);
            } else {
                setCount(target);
            }
        };
        frame.current = window.requestAnimationFrame(step);
        return () => {
            if (frame.current !== null) {
                window.cancelAnimationFrame(frame.current);
                frame.current = null;
            }
        };
    }, [target, duration]);

    return count;
}

// Separate component for each stat to avoid React Hook issues
interface StatItemProps {
    stat: Stat;
    index: number;
    inView: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ stat, index, inView }) => {
    const count = useCountUp(inView ? stat.value : 0, 1200 + index * 200);
    const Icon = statIcons[stat.label as keyof typeof statIcons];
    const color = statColors[index % statColors.length];
    
    return (
        <div
            className={`rounded-xl shadow-lg p-4 sm:p-6 bg-gradient-to-br ${color} transition-transform duration-700 hover:scale-105 flex flex-col items-center justify-center min-h-[120px] sm:min-h-[150px]`}
        >
            <div className="mb-2 animate-fade-in">
                <Icon className="text-2xl sm:text-3xl md:text-4xl mb-1 drop-shadow-lg" />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 animate-fade-in">
                {count.toLocaleString()}
            </div>
            <div className="text-xs sm:text-sm font-medium uppercase tracking-wide animate-fade-in">
                {stat.label}
            </div>
        </div>
    );
};

const QuickStats: React.FC = () => {
    const [inView, ref] = useInView({ threshold: 0.3 });
    return (
    <section ref={ref as React.RefObject<HTMLDivElement>} className="w-full py-10 sm:py-14 md:py-16 bg-gradient-to-r from-blue-300 via-orange-200 to-red-400">

            <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 px-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-theme-blue drop-shadow-lg">
                    Quick <span className="text-red-500">Stats</span>
                </h2>
            </div>
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 text-center justify-center px-2 md:px-2">
                {stats.map((stat, i) => (
                    <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
                ))}
            </div>
        </section>
    );
};

export default QuickStats;
