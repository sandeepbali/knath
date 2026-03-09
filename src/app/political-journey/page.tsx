"use client"

import { RevealOnScroll, SectionHeading, StatCard, QuoteBlock, PageHero, TimelineItem } from "@/components/ui"
import { useLanguage } from "@/lib/language"

export default function PoliticalJourneyPage() {
    const { t } = useLanguage()

    return (
        <>
            <PageHero
                title={t("A Parliamentary Legend", "एक संसदीय दिग्गज")}
                subtitle={t("Political Journey", "राजनीतिक सफ़र")}
                description={t("Nine terms in Parliament, five ministerial portfolios, Chief Minister — a career that has shaped modern India.", "संसद में नौ कार्यकाल, पाँच मंत्री पद, मुख्यमंत्री — एक ऐसा करियर जिसने आधुनिक भारत को आकार दिया है।")}
                backgroundImage="/images/parliament-hero.jpg"
            />

            {/* Parliament Record */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Parliamentary Record", "संसदीय रिकॉर्ड")} title={t("Nine Times Elected — A Historic Achievement", "नौ बार निर्वाचित — एक ऐतिहासिक उपलब्धि")} subtitle={t("Representing Chhindwara in the Lok Sabha since 1980", "1980 से लोकसभा में छिंदवाड़ा का प्रतिनिधित्व")} />
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            <StatCard value="9" label={t("Lok Sabha Terms", "लोकसभा कार्यकाल")} description={t("Consecutive wins", "लगातार जीत")} />
                            <StatCard value="1980" label={t("First Election", "पहला चुनाव")} description={t("Chhindwara constituency", "छिंदवाड़ा निर्वाचन क्षेत्र")} />
                            <StatCard value="40+" label={t("Years as MP", "वर्ष सांसद के रूप में")} description={t("Unbroken service", "अखंड सेवा")} />
                            <StatCard value={t("Senior-most", "वरिष्ठतम")} label={t("Parliamentarian", "सांसद")} description={t("In Indian history", "भारतीय इतिहास में")} />
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="max-w-3xl mx-auto mb-8">
                            <h3 className="font-display text-2xl text-text mb-6 text-center">{t("Lok Sabha Terms", "लोकसभा कार्यकाल")}</h3>
                            {[
                                { year: "1980", term: t("7th Lok Sabha", "7वीं लोकसभा") },
                                { year: "1984", term: t("8th Lok Sabha", "8वीं लोकसभा") },
                                { year: "1989", term: t("9th Lok Sabha", "9वीं लोकसभा") },
                                { year: "1991", term: t("10th Lok Sabha", "10वीं लोकसभा") },
                                { year: "1996", term: t("11th Lok Sabha", "11वीं लोकसभा") },
                                { year: "1998", term: t("12th Lok Sabha", "12वीं लोकसभा") },
                                { year: "1999", term: t("13th Lok Sabha", "13वीं लोकसभा") },
                                { year: "2004", term: t("14th Lok Sabha", "14वीं लोकसभा") },
                                { year: "2009", term: t("15th Lok Sabha", "15वीं लोकसभा") },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 py-3 border-b border-border last:border-0">
                                    <span className="font-display text-accent text-lg w-16">{item.year}</span>
                                    <div className="w-2 h-2 rounded-full bg-accent/60" />
                                    <span className="text-text-muted text-sm">{item.term}</span>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Ministerial Roles */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("Union Cabinet", "केंद्रीय मंत्रिमंडल")} title={t("Five Ministerial Portfolios", "पाँच मंत्री पद")} subtitle={t("Serving India across environment, textiles, commerce, transport, and urban development", "पर्यावरण, वस्त्र, वाणिज्य, परिवहन और शहरी विकास में भारत की सेवा")} />
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {[
                            {
                                period: "1991–1995",
                                title: t("Minister of Environment & Forests", "पर्यावरण एवं वन मंत्री"),
                                desc: t("Led India's delegation at the 1992 Earth Summit in Rio de Janeiro. Shaped India's environmental policy framework. Championed the cause of developing nations in global environmental discourse.", "1992 में रियो डी जनेरियो में पृथ्वी सम्मेलन में भारत के प्रतिनिधिमंडल का नेतृत्व किया। भारत की पर्यावरण नीति ढांचे को आकार दिया। वैश्विक पर्यावरण चर्चा में विकासशील देशों के हित की वकालत की।"),
                                highlight: true,
                            },
                            {
                                period: "1995–1996",
                                title: t("Minister of Textiles", "वस्त्र मंत्री"),
                                desc: t("Modernized India's textile sector, one of the country's largest employers, through policy reforms and technology upgradation.", "नीतिगत सुधारों और तकनीकी उन्नयन के माध्यम से भारत के कपड़ा क्षेत्र — देश के सबसे बड़े नियोक्ताओं में से एक — का आधुनिकीकरण किया।"),
                                highlight: false,
                            },
                            {
                                period: "2004–2009",
                                title: t("Minister of Commerce & Industry", "वाणिज्य एवं उद्योग मंत्री"),
                                desc: t("Led India's WTO negotiations, protecting farmers and developing nations. Introduced SEZs, reformed Foreign Trade Policy (2004-09), and promoted FDI. Awarded FDI Personality of the Year by Financial Times.", "WTO वार्ता में भारत का नेतृत्व किया, किसानों और विकासशील देशों की रक्षा की। SEZ शुरू किए, विदेश व्यापार नीति (2004-09) में सुधार किया, और FDI को बढ़ावा दिया। फाइनेंशियल टाइम्स द्वारा FDI पर्सनैलिटी ऑफ द ईयर से सम्मानित।"),
                                highlight: true,
                            },
                            {
                                period: "2009–2011",
                                title: t("Minister of Road Transport & Highways", "सड़क परिवहन एवं राजमार्ग मंत्री"),
                                desc: t("Oversaw massive expansion of India's national highway network, including the ambitious NHAI projects to connect India's economic corridors.", "भारत के राष्ट्रीय राजमार्ग नेटवर्क के व्यापक विस्तार की देखरेख की, जिसमें भारत के आर्थिक गलियारों को जोड़ने के लिए महत्वाकांक्षी NHAI परियोजनाएं शामिल थीं।"),
                                highlight: false,
                            },
                            {
                                period: "2011–2014",
                                title: t("Minister of Urban Development & Parliamentary Affairs", "शहरी विकास एवं संसदीय कार्य मंत्री"),
                                desc: t("Led transformative urban infrastructure development. Managed parliamentary affairs during a critical period, coordinating legislative business across both houses of Parliament.", "परिवर्तनकारी शहरी बुनियादी ढांचा विकास का नेतृत्व किया। एक महत्वपूर्ण अवधि के दौरान संसदीय कार्यों का प्रबंधन किया, संसद के दोनों सदनों में विधायी कार्यों का समन्वय किया।"),
                                highlight: false,
                            },
                        ].map((role, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className={`glass rounded-xl p-8 ${role.highlight ? "border-l-4 border-accent" : ""}`}>
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="text-accent font-display text-sm">{role.period}</span>
                                    </div>
                                    <h3 className="font-display text-xl text-text mb-3">{role.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{role.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Party Leadership */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Party Leadership", "पार्टी नेतृत्व")} title={t("Architect of Congress Organization", "कांग्रेस संगठन के वास्तुकार")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-8 hover-card">
                                <h3 className="font-display text-xl text-text mb-4">{t("General Secretary, INC", "महासचिव, INC")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {t("Served as General Secretary of the Indian National Congress, playing a crucial role in party strategy, candidate selection, and electoral management at the national level.", "भारतीय राष्ट्रीय कांग्रेस के महासचिव के रूप में सेवा की, राष्ट्रीय स्तर पर पार्टी रणनीति, उम्मीदवार चयन और चुनाव प्रबंधन में महत्वपूर्ण भूमिका निभाई।")}
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={150}>
                            <div className="glass rounded-xl p-8 hover-card">
                                <h3 className="font-display text-xl text-text mb-4">{t("President, MP Congress Committee", "अध्यक्ष, एमपी कांग्रेस कमेटी")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {t("Led the Madhya Pradesh Congress Committee as President, revitalizing the party organization and leading the party to victory in the 2018 state elections.", "मध्य प्रदेश कांग्रेस कमेटी के अध्यक्ष के रूप में नेतृत्व किया, पार्टी संगठन को पुनर्जीवित किया और 2018 के विधानसभा चुनावों में पार्टी को जीत दिलाई।")}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Chief Minister */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("State Leadership", "राज्य नेतृत्व")} title={t("18th Chief Minister of Madhya Pradesh", "मध्य प्रदेश के 18वें मुख्यमंत्री")} subtitle={t("Leading Madhya Pradesh with a vision for inclusive growth and development", "समावेशी विकास की दृष्टि से मध्य प्रदेश का नेतृत्व")} />
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-10 border-l-4 border-accent mb-8">
                                <p className="text-text-muted leading-relaxed mb-6">
                                    {t("In December 2018, Kamal Nath led the Indian National Congress to a decisive victory in the Madhya Pradesh Assembly elections, ending 15 years of BJP rule. He was sworn in as the 18th Chief Minister of Madhya Pradesh on December 17, 2018.", "दिसंबर 2018 में, कमल नाथ ने मध्य प्रदेश विधानसभा चुनावों में भारतीय राष्ट्रीय कांग्रेस को निर्णायक जीत दिलाई, 15 वर्षों के BJP शासन को समाप्त किया। उन्होंने 17 दिसंबर, 2018 को मध्य प्रदेश के 18वें मुख्यमंत्री के रूप में शपथ ली।")}
                                </p>
                                <p className="text-text-muted leading-relaxed">
                                    {t("During his tenure, he focused on farm loan waivers for distressed farmers, boosting economic growth and employment generation, strengthening healthcare and educational systems, and improving rural connectivity with urban infrastructure development.", "अपने कार्यकाल के दौरान, उन्होंने संकटग्रस्त किसानों के लिए कृषि ऋण माफी, आर्थिक विकास और रोजगार सृजन को बढ़ावा, स्वास्थ्य सेवा और शैक्षिक प्रणालियों को मजबूत करने, और शहरी बुनियादी ढांचा विकास के साथ ग्रामीण कनेक्टिविटी में सुधार पर ध्यान केंद्रित किया।")}
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <QuoteBlock quote={t("Madhya Pradesh's development is not just about infrastructure — it is about empowering every citizen, every farmer, every child with the tools to build a better future.", "मध्य प्रदेश का विकास केवल बुनियादी ढांचे के बारे में नहीं है — यह हर नागरिक, हर किसान, हर बच्चे को बेहतर भविष्य बनाने के साधनों से सशक्त बनाने के बारे में है।")} attribution={t("Kamal Nath", "कमल नाथ")} context={t("As Chief Minister of Madhya Pradesh", "मध्य प्रदेश के मुख्यमंत्री के रूप में")} />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
        </>
    )
}
