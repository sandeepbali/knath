"use client"

import { RevealOnScroll, SectionHeading, StatCard, QuoteBlock, PageHero } from "@/components/ui"
import { useLanguage } from "@/lib/language"

export default function AchievementsPage() {
    const { t } = useLanguage()

    return (
        <>
            <PageHero
                title={t("A Record of Excellence", "उत्कृष्टता का रिकॉर्ड")}
                subtitle={t("Achievements", "उपलब्धियाँ")}
                description={t("Awards, milestones, and accolades that mark four decades of distinguished public service.", "पुरस्कार, मील के पत्थर और सम्मान जो चार दशकों की विशिष्ट जनसेवा को चिह्नित करते हैं।")}
                backgroundImage="/images/achievements-hero.jpg"
            />

            {/* Awards & Honors */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Recognition", "सम्मान")} title={t("Awards & Honors", "पुरस्कार एवं सम्मान")} subtitle={t("International and national recognitions for exemplary leadership", "अनुकरणीय नेतृत्व के लिए अंतर्राष्ट्रीय और राष्ट्रीय मान्यताएं")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: "🏆", title: t("FDI Personality of the Year", "FDI पर्सनैलिटी ऑफ द ईयर"), desc: t("Awarded by the Financial Times for his outstanding contribution to attracting foreign direct investment to India.", "भारत में विदेशी प्रत्यक्ष निवेश आकर्षित करने में उत्कृष्ट योगदान के लिए फाइनेंशियल टाइम्स द्वारा सम्मानित।"), highlight: true },
                            { icon: "🎓", title: t("Honorary Doctorate", "मानद डॉक्टरेट"), desc: t("Conferred by Rani Durgavati University, Jabalpur (2006), in recognition of his contributions to education and public life.", "शिक्षा और सार्वजनिक जीवन में उनके योगदान की मान्यता में रानी दुर्गावती विश्वविद्यालय, जबलपुर (2006) द्वारा प्रदान किया गया।"), highlight: false },
                            { icon: "🌍", title: t("Earth Summit Leadership", "पृथ्वी सम्मेलन नेतृत्व"), desc: t("Recognized for his pivotal leadership at the 1992 Rio Earth Summit, representing developing nations' environmental interests.", "1992 के रियो पृथ्वी सम्मेलन में महत्वपूर्ण नेतृत्व के लिए मान्यता प्राप्त, विकासशील देशों के पर्यावरणीय हितों का प्रतिनिधित्व।"), highlight: false },
                            { icon: "📈", title: t("Trade Policy Architect", "व्यापार नीति वास्तुकार"), desc: t("Internationally recognized for shaping India's trade policy, SEZ framework, and WTO strategy that transformed India's export landscape.", "भारत की व्यापार नीति, SEZ ढांचे और WTO रणनीति को आकार देने के लिए अंतर्राष्ट्रीय स्तर पर मान्यता प्राप्त जिसने भारत के निर्यात परिदृश्य को बदल दिया।"), highlight: true },
                            { icon: "🏛️", title: t("Senior-most Parliamentarian", "वरिष्ठतम सांसद"), desc: t("One of the longest-serving Members of Parliament in Indian history with nine consecutive terms from Chhindwara.", "छिंदवाड़ा से नौ लगातार कार्यकाल के साथ भारतीय इतिहास में सबसे लंबे समय तक सेवा करने वाले सांसदों में से एक।"), highlight: false },
                            { icon: "⚖️", title: t("WTO Negotiations Leader", "WTO वार्ता नेता"), desc: t("Regarded as one of the most effective trade negotiators in the developing world, credited with protecting farmers' interests.", "विकासशील दुनिया के सबसे प्रभावी व्यापार वार्ताकारों में से एक माने जाते हैं, किसानों के हितों की रक्षा का श्रेय जाता है।"), highlight: false },
                        ].map((item, i) => (
                            <RevealOnScroll key={i} delay={i * 80}>
                                <div className={`glass rounded-xl p-8 hover-card h-full ${item.highlight ? "border border-accent/30" : ""}`}>
                                    <span className="text-4xl mb-4 block">{item.icon}</span>
                                    <h3 className="font-display text-lg text-text mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Parliamentary Milestones */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("Parliamentary Record", "संसदीय रिकॉर्ड")} title={t("Milestones in Parliament", "संसद में मील के पत्थर")} />
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            <StatCard value="9" label={t("Lok Sabha Terms", "लोकसभा कार्यकाल")} description={t("All from Chhindwara", "सभी छिंदवाड़ा से")} />
                            <StatCard value="5" label={t("Cabinet Ministries", "कैबिनेट मंत्रालय")} description={t("Union Government", "केंद्र सरकार")} />
                            <StatCard value="1" label={t("Chief Ministership", "मुख्यमंत्री पद")} description={t("Madhya Pradesh", "मध्य प्रदेश")} />
                            <StatCard value="40+" label={t("Years of Service", "सेवा के वर्ष")} description={t("Public life", "सार्वजनिक जीवन")} />
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Diplomatic Footprint */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Global Impact", "वैश्विक प्रभाव")} title={t("Diplomatic Footprint", "कूटनीतिक पदचिह्न")} subtitle={t("India's voice on the world stage", "विश्व मंच पर भारत की आवाज़")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: t("Earth Summit, Rio 1992", "पृथ्वी सम्मेलन, रियो 1992"), desc: t("Led India's environmental delegation, articulating the rights of developing nations to balanced ecological policies that don't compromise economic growth.", "भारत के पर्यावरण प्रतिनिधिमंडल का नेतृत्व किया, विकासशील देशों के संतुलित पारिस्थितिक नीतियों के अधिकारों को व्यक्त किया जो आर्थिक विकास से समझौता न करें।") },
                            { title: t("WTO Ministerial Conferences", "WTO मंत्रिस्तरीय सम्मेलन"), desc: t("Participated in and shaped Doha, Cancún, and Hong Kong Ministerial Conferences, forming coalitions of developing nations to protect agricultural interests.", "दोहा, कैनकन और हांगकांग मंत्रिस्तरीय सम्मेलनों में भाग लिया और उन्हें आकार दिया, कृषि हितों की रक्षा के लिए विकासशील देशों के गठबंधन बनाए।") },
                            { title: t("World Economic Forum", "विश्व आर्थिक मंच"), desc: t("Regular participant at Davos, representing India's economic vision and engaging with global business and political leaders.", "डावोस में नियमित प्रतिभागी, भारत की आर्थिक दृष्टि का प्रतिनिधित्व और वैश्विक व्यापार एवं राजनीतिक नेताओं के साथ संवाद।") },
                            { title: t("Bilateral Engagements", "द्विपक्षीय संवाद"), desc: t("Led key bilateral trade and diplomatic missions across Europe, Asia, and the Americas, strengthening India's trade relationships worldwide.", "यूरोप, एशिया और अमेरिका में प्रमुख द्विपक्षीय व्यापार और कूटनीतिक मिशनों का नेतृत्व किया, दुनिया भर में भारत के व्यापार संबंधों को मजबूत किया।") },
                        ].map((item, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="glass rounded-xl p-8 hover-card h-full">
                                    <h3 className="font-display text-xl text-text mb-3">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10 max-w-4xl mx-auto">
                    <RevealOnScroll>
                        <QuoteBlock
                            quote={t("Leadership is not about holding power — it is about using it to uplift the lives of those who need it most.", "नेतृत्व सत्ता धारण करने के बारे में नहीं है — यह उन लोगों के जीवन को ऊपर उठाने के लिए इसका उपयोग करने के बारे में है जिन्हें इसकी सबसे अधिक आवश्यकता है।")}
                            attribution={t("Kamal Nath", "कमल नाथ")}
                        />
                    </RevealOnScroll>
                </div>
            </section>

            {/* Institutional Leadership */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Institutional Leadership", "संस्थागत नेतृत्व")} title={t("Beyond Politik — Academic & Social Impact", "राजनीति से परे — शैक्षणिक एवं सामाजिक प्रभाव")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-8 hover-card">
                                <h3 className="font-display text-xl text-text mb-3">{t("IMT Ghaziabad", "IMT गाजियाबाद")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {t("President of the Governing Board of IMT Ghaziabad, one of India's premier management institutions. His leadership has guided the institute's strategic direction and ensured world-class standards.", "IMT गाजियाबाद, भारत के प्रमुख प्रबंधन संस्थानों में से एक, के शासी बोर्ड के अध्यक्ष। उनके नेतृत्व ने संस्थान की रणनीतिक दिशा का मार्गदर्शन किया है और विश्वस्तरीय मानकों को सुनिश्चित किया है।")}
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={150}>
                            <div className="glass rounded-xl p-8 hover-card">
                                <h3 className="font-display text-xl text-text mb-3">{t("Centre for Advanced Education", "उन्नत शिक्षा केंद्र")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {t("Chairman of the Centre for Advanced Education, Nagpur, fostering excellence in academic research and professional education.", "उन्नत शिक्षा केंद्र, नागपुर के अध्यक्ष, शैक्षणिक अनुसंधान और व्यावसायिक शिक्षा में उत्कृष्टता को बढ़ावा देना।")}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>
        </>
    )
}
