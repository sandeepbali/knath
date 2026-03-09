"use client"

import { RevealOnScroll, SectionHeading, QuoteBlock, PageHero } from "@/components/ui"
import Link from "next/link"
import { useLanguage } from "@/lib/language"

export default function LegacyPage() {
    const { t } = useLanguage()

    return (
        <>
            <PageHero
                title={t("An Enduring Impact", "एक स्थायी प्रभाव")}
                subtitle={t("Legacy", "विरासत")}
                description={t("How one man's vision, tenacity, and four decades of service have left an indelible mark on India's political landscape.", "कैसे एक व्यक्ति की दृष्टि, दृढ़ता और चार दशकों की सेवा ने भारत के राजनीतिक परिदृश्य पर अमिट छाप छोड़ी है।")}
                backgroundImage="/images/legacy-hero.jpg"
            />

            {/* Trade Policy Legacy */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Economic Architect", "आर्थिक वास्तुकार")} title={t("Reshaping India's Trade Destiny", "भारत की व्यापार नियति को नया रूप देना")} />
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="space-y-6 text-text-muted leading-relaxed">
                                <p>
                                    {t(
                                        "Few Indian leaders have left as profound a mark on the nation's trade and economic policy as Kamal Nath. As Commerce & Industry Minister, he didn't just manage India's trade portfolio — he reimagined it.",
                                        "कुछ ही भारतीय नेताओं ने राष्ट्र की व्यापार और आर्थिक नीति पर कमल नाथ जितनी गहरी छाप छोड़ी है। वाणिज्य एवं उद्योग मंत्री के रूप में, उन्होंने न केवल भारत के व्यापार विभाग का प्रबंधन किया — उन्होंने इसे नए सिरे से गढ़ा।"
                                    )}
                                </p>
                                <p>
                                    {t(
                                        "The Foreign Trade Policy he crafted set India on an export growth trajectory that continued long after his tenure. The Special Economic Zones he championed became engines of industrial growth, investment, and employment. His insistence on protecting domestic agriculture while expanding India's global trade footprint struck a balance that remains relevant to India's trade policy today.",
                                        "उन्होंने जो विदेश व्यापार नीति तैयार की, उसने भारत को निर्यात वृद्धि के पथ पर स्थापित किया जो उनके कार्यकाल के बाद भी जारी रहा। जिन विशेष आर्थिक क्षेत्रों की उन्होंने पहल की, वे औद्योगिक विकास, निवेश और रोजगार के इंजन बन गए। भारत के वैश्विक व्यापार पदचिह्न का विस्तार करते हुए घरेलू कृषि की रक्षा करने पर उनका जोर एक ऐसा संतुलन कायम करता है जो आज भी भारत की व्यापार नीति के लिए प्रासंगिक है।"
                                    )}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Voice of Developing Nations */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("Global Advocate", "वैश्विक पैरोकार")} title={t("The Voice of the Developing World", "विकासशील विश्व की आवाज़")} subtitle={t("A legacy that transcends national borders", "एक ऐसी विरासत जो राष्ट्रीय सीमाओं से परे है")} />
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-10 border-l-4 border-accent mb-12">
                                <p className="text-text-muted leading-relaxed text-lg">
                                    {t(
                                        "Kamal Nath's impact extends far beyond India's borders. At the WTO, at the Earth Summit, at the World Economic Forum, and in countless bilateral engagements, he consistently championed the cause of developing nations — insisting that the rules of the global economic order must be fair, equitable, and sensitive to the needs of the billions who are still striving for a better life.",
                                        "कमल नाथ का प्रभाव भारत की सीमाओं से कहीं आगे तक फैला है। WTO में, पृथ्वी सम्मेलन में, विश्व आर्थिक मंच पर, और अनगिनत द्विपक्षीय वार्ताओं में, उन्होंने लगातार विकासशील देशों के हित की वकालत की — इस बात पर जोर देते हुए कि वैश्विक आर्थिक व्यवस्था के नियम निष्पक्ष, समान और उन अरबों लोगों की जरूरतों के प्रति संवेदनशील होने चाहिए जो अभी भी बेहतर जीवन के लिए प्रयासरत हैं।"
                                    )}
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <QuoteBlock
                                quote={t("Development cannot be a privilege of the few. Trade rules must work for the farmer in the field, not just the boardroom.", "विकास कुछ लोगों का विशेषाधिकार नहीं हो सकता। व्यापार नियमों को खेत में काम करने वाले किसान के लिए काम करना चाहिए, न कि केवल बोर्डरूम के लिए।")}
                                attribution={t("Kamal Nath", "कमल नाथ")}
                                context={t("On equitable global trade", "समान वैश्विक व्यापार पर")}
                            />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Chhindwara Transformation */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Constituency Legacy", "निर्वाचन क्षेत्र की विरासत")} title={t("Chhindwara — A Living Testament", "छिंदवाड़ा — एक जीवंत प्रमाण")} subtitle={t("The story of how dedicated representation transforms a community", "कैसे समर्पित प्रतिनिधित्व एक समुदाय को बदल देता है, इसकी कहानी")} />
                    </RevealOnScroll>

                    <div className="max-w-3xl mx-auto">
                        <RevealOnScroll>
                            <div className="space-y-6 text-text-muted leading-relaxed">
                                <p>
                                    {t(
                                        "Perhaps the most tangible and enduring aspect of Kamal Nath's legacy is the transformation of Chhindwara. What was once a remote, underdeveloped district in central India has, over four decades, been turned into a model constituency that is studied as a case of exemplary representation.",
                                        "कमल नाथ की विरासत का शायद सबसे ठोस और स्थायी पहलू छिंदवाड़ा का कायाकल्प है। जो कभी मध्य भारत का एक दूरदराज, अविकसित जिला था, उसे चार दशकों में एक आदर्श निर्वाचन क्षेत्र में बदल दिया गया है जिसे अनुकरणीय प्रतिनिधित्व के मामले के रूप में अध्ययन किया जाता है।"
                                    )}
                                </p>
                                <p>
                                    {t(
                                        "The roads, the railway stations, the educational institutions, the healthcare facilities, the agricultural modernization — each element of Chhindwara's development bears the stamp of Kamal Nath's personal attention and political investment. This is continuity of vision over four decades — a rare and precious thing in democratic politics.",
                                        "सड़कें, रेलवे स्टेशन, शैक्षणिक संस्थान, स्वास्थ्य सुविधाएं, कृषि आधुनिकीकरण — छिंदवाड़ा के विकास का प्रत्येक तत्व कमल नाथ के व्यक्तिगत ध्यान और राजनीतिक निवेश की छाप वहन करता है। यह चार दशकों में दृष्टि की निरंतरता है — लोकतांत्रिक राजनीति में एक दुर्लभ और मूल्यवान चीज़।"
                                    )}
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={100}>
                            <div className="mt-8 text-center">
                                <Link href="/chhindwara" className="inline-flex items-center gap-2 border border-accent/40 text-accent px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-accent/10 transition-colors">
                                    {t("Explore Chhindwara's Development", "छिंदवाड़ा का विकास देखें")}
                                </Link>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Next Generation */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("The Continuation", "निरंतरता")} title={t("Passing the Torch", "मशाल आगे बढ़ाना")} subtitle={t("A legacy carried forward by the next generation", "अगली पीढ़ी द्वारा आगे बढ़ाई गई विरासत")} />
                    </RevealOnScroll>

                    <div className="max-w-3xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-10 mb-8">
                                <div className="grid md:grid-cols-3 gap-8 items-center">
                                    <div className="aspect-square rounded-xl overflow-hidden img-overlay">
                                        <img src="/images/nakul-nath.jpg" alt={t("Nakul Nath", "नकुल नाथ")} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <h3 className="font-display text-2xl text-text mb-4">{t("Nakul Nath", "नकुल नाथ")}</h3>
                                        <p className="text-text-muted leading-relaxed mb-4">
                                            {t(
                                                "In 2019, Nakul Nath won the Chhindwara Lok Sabha seat, carrying forward his father's legacy of service to the constituency. His election represents not just a political succession, but the continuation of a development vision that has transformed the region.",
                                                "2019 में, नकुल नाथ ने छिंदवाड़ा लोकसभा सीट जीती, निर्वाचन क्षेत्र की सेवा में अपने पिता की विरासत को आगे बढ़ाया। उनका चुनाव न केवल एक राजनीतिक उत्तराधिकार है, बल्कि एक विकास दृष्टि की निरंतरता है जिसने इस क्षेत्र को बदल दिया है।"
                                            )}
                                        </p>
                                        <p className="text-text-muted leading-relaxed">
                                            {t(
                                                "The younger Nath brings a modern perspective while honoring the foundational values of grassroots connection, infrastructure development, and farmer welfare that his father established.",
                                                "युवा नाथ जमीनी स्तर के जुड़ाव, बुनियादी ढांचा विकास और किसान कल्याण के उन मूलभूत मूल्यों का सम्मान करते हुए एक आधुनिक दृष्टिकोण लाते हैं जो उनके पिता ने स्थापित किए।"
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Overall Impact */}
            <section className="py-24">
                <div className="container-wide max-w-4xl mx-auto">
                    <RevealOnScroll>
                        <SectionHeading label={t("The Full Picture", "पूरा चित्र")} title={t("A Legacy Measured in Lives Changed", "बदले हुए जीवनों में मापी गई विरासत")} />
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="space-y-6 text-text-muted leading-relaxed mb-12">
                            <p>
                                {t(
                                    "Kamal Nath's legacy cannot be captured in a single headline or a single achievement. It is the sum of a thousand acts of leadership over forty-plus years — the road built to connect a remote village, the student who found opportunity at the new institute, the farmer whose livelihood was protected by a trade negotiation in Geneva, the city that got a new highway, the medical college that brought healthcare to a district that had none.",
                                    "कमल नाथ की विरासत को किसी एक शीर्षक या एक उपलब्धि में समेटा नहीं जा सकता। यह चालीस से अधिक वर्षों में एक हजार नेतृत्व कार्यों का योग है — एक दूरदराज गांव को जोड़ने के लिए बनाई गई सड़क, वह छात्र जिसने नए संस्थान में अवसर पाया, वह किसान जिसकी आजीविका जिनेवा में एक व्यापार वार्ता द्वारा सुरक्षित की गई, वह शहर जिसे एक नया राजमार्ग मिला, वह मेडिकल कॉलेज जिसने एक ऐसे जिले में स्वास्थ्य सेवा पहुंचाई जहां कोई नहीं थी।"
                                )}
                            </p>
                            <p>
                                {t(
                                    "This is the legacy of a leader who understood that true statesmanship is not measured in speeches but in outcomes — not in promises but in the bridges built, the institutions founded, and the lives uplifted.",
                                    "यह एक ऐसे नेता की विरासत है जो समझते थे कि सच्ची राजनीतिज्ञता भाषणों में नहीं बल्कि परिणामों में मापी जाती है — वादों में नहीं बल्कि बनाए गए पुलों, स्थापित संस्थानों और ऊपर उठाए गए जीवनों में।"
                                )}
                            </p>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <QuoteBlock
                            quote={t("Politics is not about power. It is about purpose — the purpose of building a nation where every citizen can dream, and every dream has a chance to come true.", "राजनीति सत्ता के बारे में नहीं है। यह उद्देश्य के बारे में है — एक ऐसे राष्ट्र के निर्माण का उद्देश्य जहां हर नागरिक सपने देख सके, और हर सपने को सच होने का मौका मिले।")}
                            attribution={t("Kamal Nath", "कमल नाथ")}
                        />
                    </RevealOnScroll>
                </div>
            </section>
        </>
    )
}
