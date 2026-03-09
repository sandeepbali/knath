"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language"

const quickLinks = [
    { href: "/biography", en: "Biography", hi: "जीवनी" },
    { href: "/political-journey", en: "Political Journey", hi: "राजनीतिक सफ़र" },
    { href: "/chhindwara", en: "Chhindwara", hi: "छिंदवाड़ा" },
    { href: "/vision", en: "Vision & Policy", hi: "नीति एवं दृष्टि" },
    { href: "/achievements", en: "Achievements", hi: "उपलब्धियाँ" },
    { href: "/legacy", en: "Legacy", hi: "विरासत" },
    { href: "/contact", en: "Contact", hi: "संपर्क" },
]

export function Footer() {
    const { t } = useLanguage()

    return (
        <footer className="relative mt-auto overflow-hidden">
            {/* Decorative top edge — subtle gradient fade */}
            <div
                className="h-px w-full"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, var(--color-accent) 30%, var(--color-accent) 70%, transparent 100%)",
                    opacity: 0.25,
                }}
            />

            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(var(--accent-rgb, 183,142,78), 0.06) 0%, transparent 70%)" }} />

            <div className="relative bg-[var(--color-primary)]" style={{ paddingTop: "4rem", paddingBottom: "3.5rem" }}>
                <div className="container-wide">

                    {/* Main grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">

                        {/* Branding — wider column */}
                        <div className="md:col-span-4 lg:col-span-4">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-11 h-11 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                                    <span className="font-display text-accent font-bold text-lg">K</span>
                                </div>
                                <span className="font-display text-xl text-text tracking-wide">
                                    {t("Kamal Nath", "कमल नाथ")}
                                </span>
                            </div>
                            <p className="text-text-muted text-sm leading-relaxed max-w-xs" style={{ opacity: 0.7 }}>
                                {t(
                                    "Nine-time Member of Parliament, Former Chief Minister of Madhya Pradesh, and one of India's most influential political leaders.",
                                    "नौ बार सांसद, मध्य प्रदेश के पूर्व मुख्यमंत्री, और भारत के सबसे प्रभावशाली राजनीतिक नेताओं में से एक।"
                                )}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="md:col-span-3 lg:col-span-2 lg:col-start-6">
                            <h4 className="font-display text-[11px] text-accent uppercase tracking-[0.2em] mb-5">
                                {t("Navigate", "नेविगेट")}
                            </h4>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-text-muted text-[13px] hover:text-accent transition-colors duration-300"
                                            style={{ opacity: 0.7 }}
                                        >
                                            {t(link.en, link.hi)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact — Digant Sharma */}
                        <div className="md:col-span-3 lg:col-span-3">
                            <h4 className="font-display text-[11px] text-accent uppercase tracking-[0.2em] mb-5">
                                {t("Contact", "संपर्क")}
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2.5">
                                    <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span className="text-text text-sm font-medium">Digant Sharma</span>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                    <a href="tel:+919920808363" className="text-text-muted text-sm hover:text-accent transition-colors duration-300" style={{ opacity: 0.7 }}>
                                        +91-9920808363
                                    </a>
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <a href="mailto:im@digantsharma.com" className="text-text-muted text-sm hover:text-accent transition-colors duration-300" style={{ opacity: 0.7 }}>
                                        im@digantsharma.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Design Credit */}
                        <div className="md:col-span-2 lg:col-span-2">
                            <h4 className="font-display text-[11px] text-accent uppercase tracking-[0.2em] mb-5">
                                {t("Design", "डिज़ाइन")}
                            </h4>
                            <p className="text-text-muted text-xs mb-2" style={{ opacity: 0.5 }}>
                                {t("Designed & managed by", "डिज़ाइन व प्रबंधन")}
                            </p>
                            <a
                                href="https://www.creaadesigns.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block font-display text-base text-accent hover:text-accent-light transition-colors duration-300"
                            >
                                Creea Designs
                            </a>
                            <div className="mt-2">
                                <a
                                    href="https://www.creaadesigns.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-text-dim text-xs hover:text-accent transition-colors duration-300"
                                    style={{ opacity: 0.4 }}
                                >
                                    creaadesigns.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-16">
                        <div
                            className="h-px w-full mb-6"
                            style={{
                                background: "linear-gradient(90deg, transparent 0%, var(--color-border) 20%, var(--color-border) 80%, transparent 100%)",
                            }}
                        />
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                            <p className="text-text-dim text-[11px] tracking-wider" style={{ opacity: 0.4 }}>
                                © {new Date().getFullYear()} {t("Kamal Nath. All rights reserved.", "कमल नाथ। सर्वाधिकार सुरक्षित।")}
                            </p>
                            <a
                                href="https://www.creaadesigns.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-dim text-[11px] tracking-wider hover:text-accent transition-colors duration-300"
                                style={{ opacity: 0.4 }}
                            >
                                {t("A Creea Designs project", "एक क्रीआ डिज़ाइन्स प्रोजेक्ट")}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
