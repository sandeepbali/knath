"use client"

import { RevealOnScroll, SectionHeading, QuoteBlock, PageHero } from "@/components/ui"
import { useLanguage } from "@/lib/language"

export default function BiographyPage() {
    const { t } = useLanguage()

    return (
        <>
            <PageHero
                title={t("The Life of a Statesman", "एक राजनेता का जीवन")}
                subtitle={t("Biography", "जीवनी")}
                description={t("From Kanpur to the corridors of power — the making of one of India's most enduring political leaders.", "कानपुर से सत्ता के गलियारों तक — भारत के सबसे स्थायी राजनीतिक नेताओं में से एक का निर्माण।")}
                backgroundImage="/images/biography-hero.jpg"
            />

            {/* Early Life */}
            <section className="py-24">
                <div className="container-wide">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <RevealOnScroll>
                            <div>
                                <SectionHeading label={t("The Beginning", "शुरुआत")} title={t("Early Life & Education", "प्रारंभिक जीवन एवं शिक्षा")} align="left" />
                                <div className="space-y-6 text-text-muted leading-relaxed">
                                    <p>
                                        {t(
                                            <>
                                                <strong className="text-text">Kamal Nath</strong> was born on <strong className="text-text">November 18, 1946</strong>, in <strong className="text-text">Kanpur, Uttar Pradesh</strong>, into a family that valued education and public engagement. Even from a young age, Nath displayed a keen interest in current affairs and the workings of the nation.
                                            </>,
                                            <>
                                                <strong className="text-text">कमल नाथ</strong> का जन्म <strong className="text-text">18 नवंबर, 1946</strong> को <strong className="text-text">कानपुर, उत्तर प्रदेश</strong> में एक ऐसे परिवार में हुआ जो शिक्षा और सार्वजनिक जीवन को महत्व देता था। बचपन से ही नाथ ने सामयिक मामलों और राष्ट्र की कार्यप्रणाली में गहरी रुचि दिखाई।
                                            </>
                                        )}
                                    </p>
                                    <p>
                                        {t(
                                            "His academic journey began at The Doon School in Dehradun — one of India's most prestigious boarding schools. It was here, amid the foothills of the Himalayas, that young Kamal Nath forged friendships that would shape the course of his life. Most notably, he became a schoolmate of Sanjay Gandhi, forming a bond with the Nehru-Gandhi family that would profoundly influence his political trajectory.",
                                            "उनकी शैक्षणिक यात्रा देहरादून के दून स्कूल से शुरू हुई — जो भारत के सबसे प्रतिष्ठित बोर्डिंग स्कूलों में से एक है। यहीं, हिमालय की तलहटी में, युवा कमल नाथ ने ऐसी मित्रताएं बनाईं जो उनके जीवन की दिशा तय करेंगी। विशेष रूप से, वे संजय गांधी के सहपाठी बने, जिससे नेहरू-गांधी परिवार के साथ एक बंधन बना जो उनके राजनीतिक जीवन को गहराई से प्रभावित करेगा।"
                                        )}
                                    </p>
                                    <p>
                                        {t(
                                            "After Doon, Nath went on to pursue a Bachelor of Commerce degree from the renowned St. Xavier's College, Calcutta (now Kolkata), where he honed his understanding of economics and business — skills that would later prove invaluable in his roles as Commerce Minister and economic policymaker.",
                                            "दून के बाद, नाथ ने प्रसिद्ध सेंट जेवियर्स कॉलेज, कलकत्ता (अब कोलकाता) से वाणिज्य स्नातक की डिग्री प्राप्त की, जहाँ उन्होंने अर्थशास्त्र और व्यापार की अपनी समझ को निखारा — ये कौशल बाद में वाणिज्य मंत्री और आर्थिक नीति निर्माता के रूप में अमूल्य साबित हुए।"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={200}>
                            <div className="relative">
                                <div className="aspect-[3/4] rounded-xl overflow-hidden img-overlay">
                                    <img src="/images/young-kamal-nath.jpg" alt="Young Kamal Nath" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute -bottom-6 -left-6 glass rounded-xl p-5">
                                    <p className="text-accent text-sm font-display italic">{t('"Education is the foundation of leadership"', '"शिक्षा नेतृत्व की नींव है"')}</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Nehru-Gandhi Connection */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("The Mentorship", "मार्गदर्शन")} title={t("The Nehru-Gandhi Connection", "नेहरू-गांधी परिवार से जुड़ाव")} subtitle={t("A relationship forged in trust, shaped by history", "विश्वास में गढ़ा गया, इतिहास द्वारा आकार दिया गया संबंध")} />
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="glass rounded-xl p-8">
                                    <h3 className="font-display text-xl text-text mb-4">{t("Schoolmate of Sanjay Gandhi", "संजय गांधी के सहपाठी")}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {t(
                                            "The Doon School brought together two young men who would leave an indelible mark on Indian politics. Kamal Nath's friendship with Sanjay Gandhi opened the doors to the inner circle of the Congress party and the Nehru-Gandhi dynasty.",
                                            "दून स्कूल ने दो युवकों को एक साथ लाया जो भारतीय राजनीति पर अमिट छाप छोड़ेंगे। संजय गांधी के साथ कमल नाथ की मित्रता ने कांग्रेस पार्टी और नेहरू-गांधी वंश के आंतरिक दायरे के दरवाजे खोल दिए।"
                                        )}
                                    </p>
                                </div>
                                <div className="glass rounded-xl p-8">
                                    <h3 className="font-display text-xl text-text mb-4">{t('Indira\'s "Third Son"', 'इंदिरा का "तीसरा बेटा"')}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {t(
                                            'Prime Minister Indira Gandhi developed such deep trust and affection for Kamal Nath that she famously referred to him as her "third son." This extraordinary bond spoke to his loyalty, political acumen, and the faith the Gandhi family placed in his abilities.',
                                            'प्रधानमंत्री इंदिरा गांधी ने कमल नाथ पर इतना गहरा विश्वास और स्नेह विकसित किया कि उन्होंने उन्हें अपना "तीसरा बेटा" कहा। इस असाधारण बंधन ने उनकी निष्ठा, राजनीतिक कुशलता और गांधी परिवार द्वारा उनकी क्षमताओं में रखे विश्वास को दर्शाया।'
                                        )}
                                    </p>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <QuoteBlock quote={t("Kamal Nath is like my third son.", "कमल नाथ मेरे तीसरे बेटे की तरह हैं।")} attribution={t("Indira Gandhi", "इंदिरा गांधी")} context={t("Former Prime Minister of India", "भारत की पूर्व प्रधानमंत्री")} />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Congress Entry */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Political Awakening", "राजनीतिक जागरण")} title={t("Entry into Public Life", "सार्वजनिक जीवन में प्रवेश")} subtitle={t("Joining the Indian National Congress and the call to serve", "भारतीय राष्ट्रीय कांग्रेस में शामिल होना और सेवा का आह्वान")} />
                    </RevealOnScroll>

                    <div className="max-w-3xl mx-auto">
                        <RevealOnScroll>
                            <div className="space-y-6 text-text-muted leading-relaxed">
                                <p>
                                    {t(
                                        "Kamal Nath formally joined the Indian National Congress in 1968, at a time when the nation was navigating the complexities of post-independence development. His entry into politics was not driven by ambition alone, but by a genuine desire to contribute to nation-building.",
                                        "कमल नाथ ने 1968 में औपचारिक रूप से भारतीय राष्ट्रीय कांग्रेस में शामिल हुए, ऐसे समय में जब राष्ट्र स्वतंत्रता के बाद के विकास की जटिलताओं से गुजर रहा था। उनका राजनीति में प्रवेश केवल महत्वाकांक्षा से प्रेरित नहीं था, बल्कि राष्ट्र निर्माण में योगदान देने की सच्ची इच्छा से था।"
                                    )}
                                </p>
                                <p>
                                    {t(
                                        "The close association with the Nehru-Gandhi family provided him with a unique vantage point to understand the intricacies of Indian governance. Under the mentorship of Indira Gandhi, Nath learned the art of political strategy, grassroots mobilization, and the delicate balance of democratic leadership.",
                                        "नेहरू-गांधी परिवार के साथ निकट संबंध ने उन्हें भारतीय शासन की जटिलताओं को समझने का एक अनूठा दृष्टिकोण प्रदान किया। इंदिरा गांधी के मार्गदर्शन में, नाथ ने राजनीतिक रणनीति, जमीनी स्तर पर संगठन और लोकतांत्रिक नेतृत्व के नाजुक संतुलन की कला सीखी।"
                                    )}
                                </p>
                                <p>
                                    {t(
                                        "His early years in the party were marked by organizational work, grassroots campaigning, and a growing reputation as a dependable and sharp political operator. The stage was being set for what would become one of the most remarkable parliamentary careers in Indian history.",
                                        "पार्टी में उनके शुरुआती वर्ष संगठनात्मक कार्य, जमीनी स्तर पर प्रचार और एक भरोसेमंद एवं कुशल राजनीतिक संचालक के रूप में बढ़ती प्रतिष्ठा से चिह्नित थे। भारतीय इतिहास के सबसे उल्लेखनीय संसदीय करियर में से एक का मंच तैयार हो रहा था।"
                                    )}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Family */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <RevealOnScroll delay={200}>
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-xl overflow-hidden img-overlay">
                                    <img src="/images/kamal-nath-family.jpg" alt={t("Kamal Nath with family", "कमल नाथ परिवार के साथ")} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div>
                                <SectionHeading label={t("Family", "परिवार")} title={t("Roots & Next Generation", "जड़ें और अगली पीढ़ी")} align="left" />
                                <div className="space-y-6 text-text-muted leading-relaxed">
                                    <p>
                                        {t(
                                            "Behind the public figure stands a family that has been a pillar of support throughout his decades-long career. Kamal Nath's personal life, though kept relatively private, reflects the same values of commitment and service that define his public persona.",
                                            "सार्वजनिक व्यक्तित्व के पीछे एक परिवार खड़ा है जो उनके दशकों लंबे करियर में सहारे का स्तंभ रहा है। कमल नाथ का व्यक्तिगत जीवन, हालांकि अपेक्षाकृत निजी रखा गया है, प्रतिबद्धता और सेवा के उन्हीं मूल्यों को दर्शाता है जो उनके सार्वजनिक व्यक्तित्व को परिभाषित करते हैं।"
                                        )}
                                    </p>
                                    <p>
                                        {t(
                                            "His son, Nakul Nath, has carried forward the family's legacy of public service. In 2019, Nakul won the Chhindwara Lok Sabha seat, continuing the family's deep connection with the people of Chhindwara.",
                                            "उनके बेटे, नकुल नाथ ने परिवार की जनसेवा की विरासत को आगे बढ़ाया है। 2019 में, नकुल ने छिंदवाड़ा लोकसभा सीट जीती, छिंदवाड़ा के लोगों के साथ परिवार के गहरे जुड़ाव को जारी रखा।"
                                        )}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="glass rounded-xl p-5 text-center">
                                        <div className="font-display text-2xl gradient-text mb-1">{t("Nakul Nath", "नकुल नाथ")}</div>
                                        <div className="text-text-muted text-xs uppercase tracking-wider">{t("Son, MP from Chhindwara", "पुत्र, छिंदवाड़ा से सांसद")}</div>
                                    </div>
                                    <div className="glass rounded-xl p-5 text-center">
                                        <div className="font-display text-2xl gradient-text mb-1">2019</div>
                                        <div className="text-text-muted text-xs uppercase tracking-wider">{t("Legacy Continues", "विरासत जारी")}</div>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Education & Institutions */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Academic Contributions", "शैक्षणिक योगदान")} title={t("Champion of Education", "शिक्षा के चैंपियन")} subtitle={t("Serving beyond politics through educational leadership", "शैक्षणिक नेतृत्व के माध्यम से राजनीति से परे सेवा")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: "🎓", title: t("IMT Ghaziabad", "IMT गाजियाबाद"), desc: t("President of the Governing Board of the Institute of Management Technology", "इंस्टीट्यूट ऑफ मैनेजमेंट टेक्नोलॉजी के शासी बोर्ड के अध्यक्ष") },
                            { icon: "📚", title: t("Centre for Advanced Education", "उन्नत शिक्षा केंद्र"), desc: t("Chairman of the Centre for Advanced Education, Nagpur", "उन्नत शिक्षा केंद्र, नागपुर के अध्यक्ष") },
                            { icon: "🏫", title: t("Honorary Doctorate", "मानद डॉक्टरेट"), desc: t("Awarded by Rani Durgavati University, Jabalpur in 2006", "रानी दुर्गावती विश्वविद्यालय, जबलपुर द्वारा 2006 में प्रदान किया गया") },
                        ].map((item, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="glass rounded-xl p-8 text-center hover-card">
                                    <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center"><span className="text-3xl">{item.icon}</span></div>
                                    <h3 className="font-display text-lg text-text mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm">{item.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
