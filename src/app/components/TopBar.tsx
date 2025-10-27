"use client";
import React, { useState } from "react";
import Link from "next/link";
import topbarLinks from "../../lib/topbarLinks";
import SocialLinks from "./SocialLinks";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

type LinkItem = {
    label: string;
    href: string;
    target?: string;
    hoverText?: string;
    showOnDesktop?: boolean;
    showOnMobile?: boolean;
    isAlert?: boolean;
    class?: string;
    order?: number;
    ariaLabel?: string;
    isVisible?: boolean; // Add isVisible field
};

export default function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    // sort links by order ascending
    const links: LinkItem[] = [...topbarLinks].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

    const desktop = links.filter((l) => l.showOnDesktop !== false);
    const mobile = links.filter((l) => l.showOnMobile !== false);

    // Alert buttons: shared base classes; only allow bg- and text- utility classes from CMS
    const baseAlertClass = 'animate-pulse shadow-sm my-1 px-2 py-1 rounded font-bold bg-orange-300 text-white';
    function getAlertClass(raw?: string) {
        if (!raw) return baseAlertClass;
        const matches = raw.match(/\b(?:bg|text)-[^\s]+\b/g);
        const colorClasses = matches ? matches.join(' ') : '';
        return `${baseAlertClass} ${colorClasses}`.trim();
    }

    return (
        <div className="bg-theme-orange text-white text-xs shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex items-center space-x-3">
                    <SocialLinks />
                </div>

                <div className="hidden md:flex items-center text-nowrap">
                    {(() => {
                        const nodes: React.ReactNode[] = [];
                        for (let i = 0; i < desktop.length; i++) {
                            const l = desktop[i];

                            if (!l.isVisible) continue; // Skip links that are not visible

                            if (l.isAlert) {
                                // Render alert buttons with gap-2
                                nodes.push(
                                    <Link
                                        key={`alert-${i}-${l.label}`}
                                        href={l.href}
                                        target={l.target}
                                        className={`${getAlertClass(l.class)} mr-2`}
                                    >
                                        {l.label}
                                    </Link>
                                );
                                continue;
                            }

                            // Collect contiguous non-alert links
                            const seq: LinkItem[] = [];
                            let j = i;
                            while (j < desktop.length && !desktop[j].isAlert && desktop[j].isVisible) {
                                seq.push(desktop[j]);
                                j++;
                            }

                            // Render non-alert links with gap-4 and separators at the start of each link
                            nodes.push(
                                <div key={`group-${i}`} className="flex items-center space-x-4">
                                    {seq.map((s, idx) => (
                                        <React.Fragment key={`${s.label}-${idx}`}>
                                            <span className="text-orange-200">|</span>
                                            <Link href={s.href} target={s.target} className={s.class || 'group font-bold'}>
                                                <div className="link-wrapper">
                                                    {s.ariaLabel === 'Search' ? (
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                                                            <path d="M505 442.7L405.3 343c28.5-35.5 45.7-80.8 45.7-129.3C451 96.5 354.5 0 236 0S21 96.5 21 213.7 117.5 427.4 236 427.4c48.5 0 93.8-17.2 129.3-45.7l99.7 99.7c6.2 6.2 16.4 6.2 22.6 0l17.4-17.4c6.2-6.2 6.2-16.4 0-22.6zM236 362.4c-81.5 0-147.4-66-147.4-147.4S154.5 67.6 236 67.6 383.4 133.6 383.4 215 317.5 362.4 236 362.4z" />
                                                        </svg>
                                                    ) : (
                                                        <>
                                                            <span className="link-text">{s.label}</span>
                                                            <span className="link-text-hover">{s.hoverText || s.label}</span>
                                                        </>
                                                    )}
                                                </div>
                                            </Link>
                                        </React.Fragment>
                                    ))}
                                </div>
                            );

                            // Advance index to skip processed links
                            i = j - 1;
                        }
                        return nodes;
                    })()}
                </div>

                <div className="md:hidden flex items-center gap-2">
                    {mobile[0] ? (
                        <Link href={mobile[0].href} className={mobile[0].class || 'bg-orange-300 text-white px-2 py-1 rounded font-bold'}>
                            {mobile[0].label}
                        </Link>
                    ) : null}

                    <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-white rounded-md hover:bg-orange-400 transition">
                        {menuOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-gray-500 px-1 py-2 animate-slide-down">
                    {mobile.map((l, i) => (
                        <Link key={`${l.label}-m-${i}`} href={l.href} target={l.target} className={`block font-bold text-white p-2 italic tracking-widest ${l.class || ''} group hover:bg-orange-400/20 transition-all duration-300`}>
                            <div className="link-wrapper">
                                <span className="link-text">{l.label}</span>
                                <span className="mobile-link-text-hover">{l.hoverText || l.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
