"use client"

import { useEffect, useRef, ReactNode } from "react"

interface RevealOnScrollProps {
    children: ReactNode
    className?: string
    delay?: number
}

export function RevealOnScroll({ children, className = "", delay = 0 }: RevealOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => el.classList.add("visible"), delay)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.15 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [delay])

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    )
}

interface SectionHeadingProps {
    label?: string
    title: string
    subtitle?: string
    align?: "left" | "center"
}

export function SectionHeading({ label, title, subtitle, align = "center" }: SectionHeadingProps) {
    return (
        <div className={`mb-16 ${align === "center" ? "text-center" : ""}`}>
            {label && (
                <span className="inline-block text-accent text-xs uppercase tracking-[0.3em] font-medium mb-3">
                    {label}
                </span>
            )}
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text leading-tight mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className={`text-text-muted text-lg max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""}`}>
                    {subtitle}
                </p>
            )}
            <div className={`accent-line mt-6 ${align === "center" ? "mx-auto" : ""}`} />
        </div>
    )
}

interface StatCardProps {
    value: string
    label: string
    description?: string
}

export function StatCard({ value, label, description }: StatCardProps) {
    return (
        <div className="glass rounded-xl p-6 hover-card text-center">
            <div className="font-display text-4xl md:text-5xl gradient-text font-bold mb-2">
                {value}
            </div>
            <div className="text-accent text-sm uppercase tracking-widest font-medium mb-2">
                {label}
            </div>
            {description && (
                <p className="text-text-muted text-sm">{description}</p>
            )}
        </div>
    )
}

interface QuoteBlockProps {
    quote: string
    attribution?: string
    context?: string
}

export function QuoteBlock({ quote, attribution, context }: QuoteBlockProps) {
    return (
        <blockquote className="relative glass rounded-xl p-8 md:p-10">
            <svg className="absolute top-4 left-4 w-8 h-8 text-accent/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>
            <p className="font-display text-xl md:text-2xl text-text leading-relaxed italic mb-4 pl-6">
                &ldquo;{quote}&rdquo;
            </p>
            {attribution && (
                <footer className="pl-6">
                    <cite className="not-italic text-accent font-medium text-sm">— {attribution}</cite>
                    {context && <span className="text-text-dim text-xs block mt-1">{context}</span>}
                </footer>
            )}
        </blockquote>
    )
}

interface TimelineItemProps {
    year: string
    title: string
    description: string
    highlight?: boolean
}

export function TimelineItem({ year, title, description, highlight = false }: TimelineItemProps) {
    return (
        <div className="relative pl-8 md:pl-12 pb-10 last:pb-0 group">
            {/* Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-last:bg-transparent" />
            {/* Dot */}
            <div
                className={`absolute left-0 top-1 w-3 h-3 rounded-full -translate-x-[5px] border-2 transition-colors ${highlight
                        ? "bg-accent border-accent shadow-lg shadow-accent/30"
                        : "bg-surface border-accent/50 group-hover:bg-accent group-hover:border-accent"
                    }`}
            />
            <span className="text-accent text-xs uppercase tracking-widest font-medium">{year}</span>
            <h3 className="font-display text-xl text-text mt-1 mb-2">{title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{description}</p>
        </div>
    )
}

interface PageHeroProps {
    title: string
    subtitle?: string
    description?: string
    backgroundImage?: string
}

export function PageHero({ title, subtitle, description, backgroundImage }: PageHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-end pb-16 pt-32 overflow-hidden">
            {/* Background */}
            {backgroundImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
                </div>
            )}
            {!backgroundImage && (
                <div className="absolute inset-0 bg-gradient-to-b from-surface via-primary to-primary" />
            )}

            <div className="container-wide relative z-10">
                {subtitle && (
                    <span className="inline-block text-accent text-xs uppercase tracking-[0.3em] font-medium mb-4">
                        {subtitle}
                    </span>
                )}
                <h1 className="font-display text-4xl md:text-5xl lg:text-7xl text-text leading-tight mb-4">
                    {title}
                </h1>
                {description && (
                    <p className="text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
                        {description}
                    </p>
                )}
                <div className="accent-line mt-8" />
            </div>
        </section>
    )
}
