"use client"

import { RevealOnScroll, SectionHeading, StatCard, QuoteBlock, PageHero } from "@/components/ui"
import { useLanguage } from "@/lib/language"

export default function ChhindwaraPage() {
    const { t } = useLanguage()

    return (
        <>
            <PageHero
                title={t("A Model Constituency", "एक आदर्श निर्वाचन क्षेत्र")}
                subtitle={t("Chhindwara", "छिंदवाड़ा")}
                description={t("How four decades of dedicated leadership transformed a remote district into a beacon of development.", "कैसे चार दशकों के समर्पित नेतृत्व ने एक दूरदराज के जिले को विकास के प्रतीक में बदल दिया।")}
                backgroundImage="/images/chhindwara-landscape.jpg"
            />

            {/* Key Statistics */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Transformation", "परिवर्तन")} title={t("Chhindwara by the Numbers", "आंकड़ों में छिंदवाड़ा")} subtitle={t("A snapshot of the development revolution", "विकास क्रांति का एक चित्र")} />
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <StatCard value="6,000+" label={t("KM Rural Roads", "किमी ग्रामीण सड़कें")} description={t("Built and upgraded", "निर्मित और उन्नत")} />
                            <StatCard value="5" label={t("Model Railway Stations", "मॉडल रेलवे स्टेशन")} description={t("World-class facilities", "विश्वस्तरीय सुविधाएं")} />
                            <StatCard value="₹2,000" label={t("Crore Investment", "करोड़ निवेश")} description={t("In development projects", "विकास परियोजनाओं में")} />
                            <StatCard value="100+" label={t("Schools Modernized", "स्कूल आधुनिकीकृत")} description={t("Quality education", "गुणवत्तापूर्ण शिक्षा")} />
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            {/* Infrastructure Development */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("Infrastructure", "बुनियादी ढांचा")} title={t("Building the Backbone of Progress", "प्रगति की रीढ़ का निर्माण")} subtitle={t("Roads, railways, and connectivity that changed the face of the district", "सड़कें, रेलवे और कनेक्टिविटी जिसने जिले का चेहरा बदल दिया")} />
                    </RevealOnScroll>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-8 hover-card">
                                <span className="text-3xl mb-4 block">🛣️</span>
                                <h3 className="font-display text-xl text-text mb-4">{t("Road Network Revolution", "सड़क नेटवर्क क्रांति")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-4">
                                    {t("Over 6,000 kilometers of rural roads were constructed and upgraded under Kamal Nath's initiative, connecting remote villages to towns and cities. This massive road-building program transformed the economic potential of the entire region.", "कमल नाथ की पहल पर 6,000 किलोमीटर से अधिक ग्रामीण सड़कें बनाई और उन्नत की गईं, जिससे दूरदराज के गांवों को कस्बों और शहरों से जोड़ा गया। इस विशाल सड़क निर्माण कार्यक्रम ने पूरे क्षेत्र की आर्थिक क्षमता को बदल दिया।")}
                                </p>
                                <ul className="space-y-2 text-text-muted text-sm">
                                    <li className="flex items-start gap-2"><span className="text-accent">•</span> {t("National Highway connectivity to major corridors", "प्रमुख गलियारों से राष्ट्रीय राजमार्ग कनेक्टिविटी")}</li>
                                    <li className="flex items-start gap-2"><span className="text-accent">•</span> {t("All-weather roads to every block headquarters", "हर ब्लॉक मुख्यालय तक सर्वमौसमी सड़कें")}</li>
                                    <li className="flex items-start gap-2"><span className="text-accent">•</span> {t("Bridge construction spanning rivers and valleys", "नदियों और घाटियों पर पुल निर्माण")}</li>
                                </ul>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll delay={150}>
                            <div className="glass rounded-xl p-8 hover-card">
                                <span className="text-3xl mb-4 block">🚂</span>
                                <h3 className="font-display text-xl text-text mb-4">{t("Railway Modernization", "रेलवे आधुनिकीकरण")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed mb-4">
                                    {t("Five model railway stations were developed in the constituency, each equipped with modern amenities and designed to global standards. These stations serve as gateways connecting Chhindwara to the rest of India.", "निर्वाचन क्षेत्र में पांच मॉडल रेलवे स्टेशन विकसित किए गए, प्रत्येक आधुनिक सुविधाओं से सुसज्जित और वैश्विक मानकों के अनुसार डिज़ाइन किए गए। ये स्टेशन छिंदवाड़ा को शेष भारत से जोड़ने वाले प्रवेश द्वार के रूप में कार्य करते हैं।")}
                                </p>
                                <ul className="space-y-2 text-text-muted text-sm">
                                    <li className="flex items-start gap-2"><span className="text-accent">•</span> {t("Modern platforms and passenger facilities", "आधुनिक प्लेटफॉर्म और यात्री सुविधाएं")}</li>
                                    <li className="flex items-start gap-2"><span className="text-accent">•</span> {t("Digital ticketing and information systems", "डिजिटल टिकटिंग और सूचना प्रणाली")}</li>
                                    <li className="flex items-start gap-2"><span className="text-accent">•</span> {t("Expanded rail line connectivity", "विस्तारित रेल लाइन कनेक्टिविटी")}</li>
                                </ul>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Education & Skill Development */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Education", "शिक्षा")} title={t("Empowering Youth Through Knowledge", "ज्ञान के माध्यम से युवाओं को सशक्त बनाना")} subtitle={t("World-class educational institutions in a once-remote district", "एक कभी दूरदराज रहे जिले में विश्वस्तरीय शैक्षणिक संस्थान")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: "👟", title: "FDDI", desc: t("Footwear Design and Development Institute — a national institute of excellence, providing specialized training in footwear design, technology, and management.", "फुटवियर डिज़ाइन एंड डेवलपमेंट इंस्टीट्यूट — उत्कृष्टता का एक राष्ट्रीय संस्थान, जो फुटवियर डिज़ाइन, प्रौद्योगिकी और प्रबंधन में विशेष प्रशिक्षण प्रदान करता है।") },
                            { icon: "💻", title: "NIIT", desc: t("The first NIIT center in Madhya Pradesh was established in Chhindwara, providing world-class IT education and creating a pipeline of tech talent for the state.", "मध्य प्रदेश में पहला NIIT केंद्र छिंदवाड़ा में स्थापित किया गया, जो विश्वस्तरीय IT शिक्षा प्रदान करता है और राज्य के लिए तकनीकी प्रतिभा की एक पाइपलाइन बनाता है।") },
                            { icon: "🔧", title: t("Skill Centers", "कौशल केंद्र"), desc: t("Multiple skill development centers equipped with modern workshops, training labs, and industry partnerships, empowering youth with employable skills.", "आधुनिक कार्यशालाओं, प्रशिक्षण प्रयोगशालाओं और उद्योग साझेदारियों से सुसज्जित कई कौशल विकास केंद्र, युवाओं को रोजगार योग्य कौशल से सशक्त बनाते हैं।") },
                        ].map((item, i) => (
                            <RevealOnScroll key={i} delay={i * 100}>
                                <div className="glass rounded-xl p-8 text-center hover-card h-full">
                                    <span className="text-4xl mb-4 block">{item.icon}</span>
                                    <h3 className="font-display text-lg text-text mb-3">{item.title}</h3>
                                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Healthcare */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10">
                    <RevealOnScroll>
                        <SectionHeading label={t("Healthcare", "स्वास्थ्य सेवा")} title={t("Health for All", "सबके लिए स्वास्थ्य")} subtitle={t("Modern healthcare reaching every corner of the constituency", "आधुनिक स्वास्थ्य सेवा निर्वाचन क्षेत्र के हर कोने तक पहुँचती है")} />
                    </RevealOnScroll>

                    <div className="max-w-3xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-8 mb-8">
                                <h3 className="font-display text-xl text-text mb-4">{t("Medical College & Hospital", "मेडिकल कॉलेज और अस्पताल")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {t("Kamal Nath championed the establishment of a modern medical college and hospital in Chhindwara, eliminating the need for residents to travel hundreds of kilometers for advanced medical care. The institution serves as a training ground for future doctors while providing quality healthcare to the region.", "कमल नाथ ने छिंदवाड़ा में एक आधुनिक मेडिकल कॉलेज और अस्पताल की स्थापना की पहल की, जिससे निवासियों को उन्नत चिकित्सा देखभाल के लिए सैकड़ों किलोमीटर की यात्रा करने की आवश्यकता समाप्त हो गई। यह संस्थान भावी डॉक्टरों के लिए प्रशिक्षण स्थल के रूप में कार्य करते हुए क्षेत्र को गुणवत्तापूर्ण स्वास्थ्य सेवा प्रदान करता है।")}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Agriculture & Economy */}
            <section className="py-24">
                <div className="container-wide">
                    <RevealOnScroll>
                        <SectionHeading label={t("Agriculture", "कृषि")} title={t("Modernizing the Agrarian Economy", "कृषि अर्थव्यवस्था का आधुनिकीकरण")} />
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <RevealOnScroll>
                            <div className="glass rounded-xl p-8 hover-card">
                                <h3 className="font-display text-xl text-text mb-4">{t("Orange Economy", "संतरा अर्थव्यवस्था")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {t("Chhindwara is renowned for its orange production. Kamal Nath supported the development of cold storage facilities, processing units, and market linkages to ensure farmers receive fair prices for their produce.", "छिंदवाड़ा अपने संतरा उत्पादन के लिए प्रसिद्ध है। कमल नाथ ने शीत भंडारण सुविधाओं, प्रसंस्करण इकाइयों और बाजार संपर्कों के विकास का समर्थन किया ताकि किसानों को उनकी उपज का उचित मूल्य मिल सके।")}
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll delay={150}>
                            <div className="glass rounded-xl p-8 hover-card">
                                <h3 className="font-display text-xl text-text mb-4">{t("Irrigation & Water", "सिंचाई और जल")}</h3>
                                <p className="text-text-muted text-sm leading-relaxed">
                                    {t("Major irrigation projects were implemented to provide water security for farming communities, including canal networks, check dams, and micro-irrigation systems to maximize water efficiency.", "सिंचाई की प्रमुख परियोजनाओं को कृषक समुदायों को जल सुरक्षा प्रदान करने के लिए लागू किया गया, जिसमें नहर नेटवर्क, चेक डैम और जल दक्षता को अधिकतम करने के लिए सूक्ष्म सिंचाई प्रणालियां शामिल हैं।")}
                                </p>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className="py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
                <div className="container-wide relative z-10 max-w-4xl mx-auto">
                    <RevealOnScroll>
                        <QuoteBlock
                            quote={t("Chhindwara is not just a constituency — it is a model for what dedicated representation can achieve for even the most remote corners of India.", "छिंदवाड़ा केवल एक निर्वाचन क्षेत्र नहीं है — यह एक प्रतिमान है कि समर्पित प्रतिनिधित्व भारत के सबसे दूरदराज कोनों के लिए भी क्या हासिल कर सकता है।")}
                            attribution={t("Kamal Nath", "कमल नाथ")}
                            context={t("On his vision for Chhindwara", "छिंदवाड़ा के लिए अपनी दृष्टि पर")}
                        />
                    </RevealOnScroll>
                </div>
            </section>
        </>
    )
}
