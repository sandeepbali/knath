"use client"

import { RevealOnScroll, SectionHeading, QuoteBlock, PageHero } from "@/components/ui"
import { useLanguage } from "@/lib/language"

export default function VisionPage() {
    const { t } = useLanguage()

    return (
        <>
            <PageHero
                title={t("Policy & Principles", "नीति एवं सिद्धांत")}
                subtitle={t("Vision & Policy", "दृष्टि एवं नीति")}
                description={t("From defending farmers at the WTO to shaping India's trade and environmental policies — a policy vision rooted in equity and national interest.", "WTO में किसानों की रक्षा से लेकर भारत की व्यापार और पर्यावरण नीतियों को आकार देने तक — समानता और राष्ट्रीय हित में निहित एक नीतिगत दृष्टि।")}
                backgroundImage="/images/vision-hero.jpg"
            />

            {/* Core Philosophy */}
            <section className="py-24">
                <div className="container-wide max-w-4xl mx-auto">
                    <RevealOnScroll>
                        <SectionHeading label={t("Core Philosophy", "मूल दर्शन")} title={t("India First — Farmers Always", "भारत पहले — किसान हमेशा")} />
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="glass rounded-xl p-10 border-l-4 border-accent mb-12">
                            <p className="text-text-muted leading-relaxed text-lg">
                                {t(
                                    "At the heart of Kamal Nath's policy vision lies an unwavering belief: India's economic progress must never come at the cost of its farmers' livelihoods. Whether negotiating at the WTO or crafting trade policy, this principle has been his guiding star.",
                                    "कमल नाथ की नीतिगत दृष्टि के मूल में एक अटल विश्वास है: भारत की आर्थिक प्रगति कभी भी किसानों की आजीविका की कीमत पर नहीं आनी चाहिए। चाहे WTO में बातचीत हो या व्यापार नीति तैयार करना, यह सिद्धांत उनका मार्गदर्शक सितारा रहा है।"
                                )}
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* WTO */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("Global Stage", "वैश्विक मंच")} title={t("Champion at the WTO", "WTO में चैंपियन")} subtitle={t("Defending developing nations on the world's biggest trade platform", "विश्व के सबसे बड़े व्यापार मंच पर विकासशील देशों की रक्षा")} />
                    </RevealOnScroll>

                    <div className="max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="space-y-6 text-text-muted leading-relaxed mb-8">
                                <p>
                                    {t(
                                        "As Minister of Commerce & Industry (2004–2009), Kamal Nath became one of the most powerful voices at the World Trade Organization. At a time when developed nations were pressing for agricultural liberalization that could devastate the livelihoods of millions of small farmers in the developing world, Nath stood firm.",
                                        "वाणिज्य एवं उद्योग मंत्री (2004-2009) के रूप में, कमल नाथ विश्व व्यापार संगठन में सबसे शक्तिशाली आवाज़ों में से एक बने। ऐसे समय में जब विकसित देश कृषि उदारीकरण पर दबाव डाल रहे थे जो विकासशील दुनिया के लाखों छोटे किसानों की आजीविका को तबाह कर सकता था, नाथ अडिग रहे।"
                                    )}
                                </p>
                                <p>
                                    {t(
                                        "He led coalitions of developing nations, insisting that any trade agreement must include safeguards for food security and agricultural livelihoods. His intervention was instrumental in ensuring that Special Safeguard Mechanisms were included in discussions to protect farmers from import surges.",
                                        "उन्होंने विकासशील देशों के गठबंधन का नेतृत्व किया, इस बात पर जोर देते हुए कि किसी भी व्यापार समझौते में खाद्य सुरक्षा और कृषि आजीविका के लिए सुरक्षा उपाय शामिल होने चाहिए। उनका हस्तक्षेप किसानों को आयात वृद्धि से बचाने के लिए विशेष सुरक्षा तंत्र को चर्चा में शामिल कराने में सहायक रहा।"
                                    )}
                                </p>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <QuoteBlock quote={t("I will not compromise the livelihood of Indian farmers in any trade agreement. India's food security is non-negotiable.", "मैं किसी भी व्यापार समझौते में भारतीय किसानों की आजीविका से समझौता नहीं करूँगा। भारत की खाद्य सुरक्षा पर कोई समझौता नहीं हो सकता।")} attribution={t("Kamal Nath", "कमल नाथ")} context={t("At WTO Ministerial Conference", "WTO मंत्रिस्तरीय सम्मेलन में")} />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Trade Policy */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Trade & Commerce", "व्यापार एवं वाणिज्य")} title={t("Shaping India's Trade Architecture", "भारत के व्यापार ढांचे को आकार देना")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: t("Foreign Trade Policy (2004-09)", "विदेश व्यापार नीति (2004-09)"), desc: t("Crafted a comprehensive FTP that set India's exports on a growth trajectory, simplifying procedures and introducing incentives for manufacturers and exporters.", "एक व्यापक FTP तैयार की जिसने भारत के निर्यात को विकास पथ पर स्थापित किया, प्रक्रियाओं को सरल बनाया और निर्माताओं एवं निर्यातकों के लिए प्रोत्साहन प्रस्तुत किए।") },
                            { title: t("Special Economic Zones", "विशेष आर्थिक क्षेत्र"), desc: t("Championed the SEZ Act, creating investment hubs across India that attracted billions in FDI and generated employment in manufacturing, IT, and services.", "SEZ अधिनियम की पहल की, भारत भर में निवेश केंद्र बनाए जिन्होंने अरबों FDI आकर्षित किया और विनिर्माण, IT और सेवाओं में रोजगार सृजित किया।") },
                            { title: t("FDI Promotion", "FDI संवर्धन"), desc: t("Streamlined FDI policies, making India one of the most attractive destinations for foreign investment. His efforts earned him the FDI Personality of the Year Award from the Financial Times.", "FDI नीतियों को सुव्यवस्थित किया, भारत को विदेशी निवेश के लिए सबसे आकर्षक गंतव्यों में से एक बनाया। उनके प्रयासों ने उन्हें फाइनेंशियल टाइम्स से FDI पर्सनैलिटी ऑफ द ईयर पुरस्कार दिलाया।") },
                            { title: t("Export Infrastructure", "निर्यात अवसंरचना"), desc: t("Invested in port modernization, inland container depots, and trade facilitation infrastructure to reduce logistics costs and improve India's export competitiveness.", "बंदरगाह आधुनिकीकरण, अंतर्देशीय कंटेनर डिपो और व्यापार सुविधा अवसंरचना में निवेश किया ताकि रसद लागत कम हो और भारत की निर्यात प्रतिस्पर्धात्मकता बढ़े।") },
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

            {/* Environment */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("Environment", "पर्यावरण")} title={t("Guardian of the Earth", "पृथ्वी के संरक्षक")} subtitle={t("Leading India's environmental agenda on the global stage", "वैश्विक मंच पर भारत के पर्यावरण एजेंडा का नेतृत्व")} />
                    </RevealOnScroll>

                    <div className="max-w-3xl mx-auto">
                        <RevealOnScroll>
                            <div className="space-y-6 text-text-muted leading-relaxed">
                                <p>
                                    {t(
                                        "As Minister of Environment & Forests (1991–95), Kamal Nath played a pivotal role in shaping India's environmental policy. His crowning achievement in this domain was leading India's delegation at the Earth Summit in Rio de Janeiro in 1992.",
                                        "पर्यावरण एवं वन मंत्री (1991-95) के रूप में, कमल नाथ ने भारत की पर्यावरण नीति को आकार देने में महत्वपूर्ण भूमिका निभाई। इस क्षेत्र में उनकी सबसे बड़ी उपलब्धि 1992 में रियो डी जनेरियो में पृथ्वी सम्मेलन में भारत के प्रतिनिधिमंडल का नेतृत्व करना था।"
                                    )}
                                </p>
                                <p>
                                    {t(
                                        "At Rio, Nath articulated a position that balanced ecological conservation with the development rights of the Global South. He argued forcefully that developed nations — historically the biggest polluters — had a moral responsibility to lead in emission reductions, while developing nations needed policy space to grow their economies and lift millions out of poverty.",
                                        "रियो में, नाथ ने एक ऐसी स्थिति व्यक्त की जो पारिस्थितिक संरक्षण को ग्लोबल साउथ के विकास अधिकारों के साथ संतुलित करती थी। उन्होंने जोरदार तर्क दिया कि विकसित देशों — ऐतिहासिक रूप से सबसे बड़े प्रदूषक — की उत्सर्जन में कमी में नेतृत्व करने की नैतिक जिम्मेदारी है, जबकि विकासशील देशों को अपनी अर्थव्यवस्थाओं को विकसित करने और लाखों लोगों को गरीबी से बाहर निकालने के लिए नीतिगत स्थान की आवश्यकता है।"
                                    )}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Infrastructure Vision */}
            <section className="py-24">
                <div className="container-wide max-w-4xl mx-auto">
                    <RevealOnScroll>
                        <SectionHeading label={t("Infrastructure", "अवसंरचना")} title={t("Connecting India, Empowering Growth", "भारत को जोड़ना, विकास को सशक्त बनाना")} />
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="space-y-6 text-text-muted leading-relaxed">
                            <p>
                                {t(
                                    "As Minister of Road Transport & Highways and later Urban Development, Kamal Nath oversaw a massive expansion of India's national highway network and urban infrastructure. His vision was of an India where physical connectivity drives economic opportunity — where every village has access to markets, every city has modern amenities, and the nation's logistics infrastructure matches its economic ambitions.",
                                    "सड़क परिवहन एवं राजमार्ग और बाद में शहरी विकास मंत्री के रूप में, कमल नाथ ने भारत के राष्ट्रीय राजमार्ग नेटवर्क और शहरी बुनियादी ढांचे के विशाल विस्तार की देखरेख की। उनकी दृष्टि एक ऐसे भारत की थी जहां भौतिक कनेक्टिविटी आर्थिक अवसर को चलाती है — जहां हर गांव की बाजारों तक पहुंच है, हर शहर में आधुनिक सुविधाएं हैं, और राष्ट्र का रसद ढांचा उसकी आर्थिक महत्वाकांक्षाओं से मेल खाता है।"
                                )}
                            </p>
                            <p>
                                {t(
                                    "Under his leadership, highway construction rates accelerated dramatically, with National Highways Authority of India (NHAI) projects seeing unprecedented progress. His emphasis on public-private partnerships in infrastructure development brought in private investment and technical expertise.",
                                    "उनके नेतृत्व में, राजमार्ग निर्माण दरों में नाटकीय रूप से तेजी आई, भारतीय राष्ट्रीय राजमार्ग प्राधिकरण (NHAI) की परियोजनाओं में अभूतपूर्व प्रगति हुई। बुनियादी ढांचा विकास में सार्वजनिक-निजी भागीदारी पर उनके जोर ने निजी निवेश और तकनीकी विशेषज्ञता लाई।"
                                )}
                            </p>
                        </div>
                    </RevealOnScroll>
                </div>
            </section>
        </>
    )
}
