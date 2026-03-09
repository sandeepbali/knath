"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
    lang: Language
    setLang: (lang: Language) => void
    t: (en: string, hi: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => { },
    t: (en) => en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("en")

    useEffect(() => {
        const saved = localStorage.getItem("knath-lang") as Language | null
        if (saved === "en" || saved === "hi") setLang(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem("knath-lang", lang)
        document.documentElement.lang = lang
    }, [lang])

    const t = (en: string, hi: string) => (lang === "hi" ? hi : en)

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    return useContext(LanguageContext)
}

export function LanguageToggle() {
    const { lang, setLang } = useLanguage()

    return (
        <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border hover:border-accent/50 text-text-muted hover:text-accent transition-all text-xs font-medium tracking-wide"
            aria-label="Toggle language"
        >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            {lang === "en" ? "हिंदी" : "ENG"}
        </button>
    )
}
