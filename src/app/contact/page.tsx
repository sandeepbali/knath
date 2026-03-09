"use client"

import { PageHero, RevealOnScroll, SectionHeading } from "@/components/ui"
import { useLanguage } from "@/lib/language"

const contactInfo = {
    offices: [
        {
            en: { title: "MPCC Office, Bhopal", address: "Indira Bhawan A, Link Road No.1,\nShivaji Nagar, Bhopal - 462003\nMadhya Pradesh, India" },
            hi: { title: "एमपीसीसी कार्यालय, भोपाल", address: "इंदिरा भवन ए, लिंक रोड नंबर 1,\nशिवाजी नगर, भोपाल - 462003\nमध्य प्रदेश, भारत" },
            phones: ["+91-0755-2555452", "+91-0755-2420055", "+91-0755-4221762", "+91-0755-4221763"],
            emails: ["itcell.mpcc@gmail.com"],
        },
        {
            en: { title: "Constituency Office, Chhindwara", address: "Chhindwara,\nMadhya Pradesh, India" },
            hi: { title: "निर्वाचन क्षेत्र कार्यालय, छिंदवाड़ा", address: "छिंदवाड़ा,\nमध्य प्रदेश, भारत" },
            phones: ["+91-0755-2551512"],
            emails: ["orgmpcc1@gmail.com"],
        },
    ],
}

export default function ContactPage() {
    const { t } = useLanguage()

    return (
        <>
            <PageHero
                title={t("Get in Touch", "संपर्क करें")}
                subtitle={t("Contact", "संपर्क")}
                description={t(
                    "Reach out for inquiries, constituency matters, media requests, or to connect with Kamal Nath's offices.",
                    "पूछताछ, निर्वाचन क्षेत्र के मामलों, मीडिया अनुरोधों, या कमल नाथ के कार्यालयों से जुड़ने के लिए संपर्क करें।"
                )}
            />

            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading
                            label={t("Official Offices", "आधिकारिक कार्यालय")}
                            title={t("Kamal Nath's Offices", "कमल नाथ के कार्यालय")}
                            subtitle={t(
                                "Contact the offices of the President, Madhya Pradesh Congress Committee",
                                "मध्य प्रदेश कांग्रेस कमेटी के अध्यक्ष के कार्यालयों से संपर्क करें"
                            )}
                        />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {contactInfo.offices.map((office, i) => (
                            <RevealOnScroll key={i} delay={i * 150}>
                                <div className="glass rounded-xl p-8 hover-card h-full">
                                    <h3 className="font-display text-xl text-text mb-6">
                                        {t(office.en.title, office.hi.title)}
                                    </h3>

                                    {/* Address */}
                                    <div className="flex items-start gap-3 mb-5">
                                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
                                            {t(office.en.address, office.hi.address)}
                                        </p>
                                    </div>

                                    {/* Phone Numbers */}
                                    <div className="space-y-2 mb-5">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span className="text-accent text-xs uppercase tracking-wider font-medium">
                                                {t("Phone", "फ़ोन")}
                                            </span>
                                        </div>
                                        {office.phones.map((phone, j) => (
                                            <a
                                                key={j}
                                                href={`tel:${phone.replace(/[- ]/g, "")}`}
                                                className="block text-text-muted text-sm hover:text-accent transition-colors pl-6"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-accent text-xs uppercase tracking-wider font-medium">
                                                {t("Email", "ईमेल")}
                                            </span>
                                        </div>
                                        {office.emails.map((email, j) => (
                                            <a
                                                key={j}
                                                href={`mailto:${email}`}
                                                className="block text-text-muted text-sm hover:text-accent transition-colors pl-6"
                                            >
                                                {email}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10 max-w-3xl mx-auto">
                    <RevealOnScroll>
                        <div className="glass rounded-xl p-8 md:p-10 text-center">
                            <h3 className="font-display text-2xl text-text mb-4">
                                {t("Madhya Pradesh Congress Committee", "मध्य प्रदेश कांग्रेस कमेटी")}
                            </h3>
                            <p className="text-text-muted leading-relaxed mb-6">
                                {t(
                                    "Kamal Nath serves as the President of the Madhya Pradesh Congress Committee. For party-related inquiries, policy discussions, or to engage with the Congress organization in Madhya Pradesh, please reach out through the official channels above.",
                                    "कमल नाथ मध्य प्रदेश कांग्रेस कमेटी के अध्यक्ष हैं। पार्टी से संबंधित पूछताछ, नीति चर्चा, या मध्य प्रदेश में कांग्रेस संगठन से जुड़ने के लिए, कृपया ऊपर दिए गए आधिकारिक चैनलों के माध्यम से संपर्क करें।"
                                )}
                            </p>
                            <a
                                href="https://mpcongress.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm uppercase tracking-wider font-medium group"
                            >
                                {t("Visit MP Congress Website", "एमपी कांग्रेस वेबसाइट पर जाएं")}
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    )
}
