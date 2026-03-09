"use client"

import Link from "next/link"
import { RevealOnScroll, SectionHeading, StatCard, QuoteBlock, TimelineItem } from "@/components/ui"
import { useLanguage } from "@/lib/language"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url(/images/hero-portrait.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/50" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="container-wide relative z-10 py-32">
          <div className="max-w-4xl">
            <div className="animate-fade-in">
              <span className="inline-block text-accent text-xs uppercase tracking-[0.4em] font-medium mb-6 border border-accent/30 px-4 py-1.5 rounded-full">
                {t("Statesman • Visionary • Leader", "राजनेता • दूरदर्शी • नेता")}
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-text leading-[0.9] mb-8 animate-slide-up">
              {t("Kamal", "कमल")}
              <br />
              <span className="gradient-text">{t("Nath", "नाथ")}</span>
            </h1>

            <p className="text-text-muted text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {t(
                "Nine-time Member of Parliament, Former Chief Minister of Madhya Pradesh, and one of India's most influential voices on the global stage for over four decades.",
                "नौ बार के सांसद, मध्य प्रदेश के पूर्व मुख्यमंत्री, और चार दशकों से अधिक समय से वैश्विक मंच पर भारत की सबसे प्रभावशाली आवाज़ों में से एक।"
              )}
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <Link
                href="/political-journey"
                className="group inline-flex items-center gap-2 bg-accent text-primary px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-accent-light transition-colors"
              >
                {t("Explore His Journey", "उनकी यात्रा देखें")}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/biography"
                className="inline-flex items-center gap-2 border border-accent/40 text-accent px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-accent/10 transition-colors"
              >
                {t("Read Biography", "जीवनी पढ़ें")}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
          <span className="text-text-dim text-xs uppercase tracking-widest">{t("Scroll", "स्क्रॉल करें")}</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent" />
        </div>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="py-24 relative">
        <div className="container-wide">
          <RevealOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard value="9×" label={t("Member of Parliament", "सांसद")} description={t("Elected from Chhindwara", "छिंदवाड़ा से निर्वाचित")} />
              <StatCard value="40+" label={t("Years in Politics", "वर्ष राजनीति में")} description={t("Serving since 1980", "1980 से सेवारत")} />
              <StatCard value="5" label={t("Ministerial Portfolios", "मंत्री पद")} description={t("In Union Cabinet", "केंद्रीय मंत्रिमंडल में")} />
              <StatCard value={t("18th", "18वें")} label={t("Chief Minister", "मुख्यमंत्री")} description={t("Of Madhya Pradesh", "मध्य प्रदेश के")} />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/30 to-primary" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <SectionHeading
                  label={t("The Leader", "नेता")}
                  title={t("A Legacy of Service & Statesmanship", "सेवा और राजनीतिज्ञता की विरासत")}
                  align="left"
                />
                <p className="text-text-muted leading-relaxed mb-6">
                  {t(
                    "From the corridors of The Doon School to the chambers of Parliament, Kamal Nath's journey is one of unwavering dedication to public service. Mentored by Indira Gandhi — who affectionately called him her \"third son\" — he rose to become one of India's most seasoned parliamentarians.",
                    "दून स्कूल के गलियारों से लेकर संसद के कक्षों तक, कमल नाथ की यात्रा जनसेवा के प्रति अटूट समर्पण की कहानी है। इंदिरा गांधी द्वारा प्रेरित — जो उन्हें स्नेहपूर्वक अपना \"तीसरा बेटा\" कहती थीं — वे भारत के सबसे अनुभवी सांसदों में से एक बने।"
                  )}
                </p>
                <p className="text-text-muted leading-relaxed mb-8">
                  {t(
                    "His commanding presence at the World Trade Organization, his transformative vision for Chhindwara, and his steadfast commitment to India's farmers and the developing world have cemented his legacy as a statesman of rare depth and conviction.",
                    "विश्व व्यापार संगठन में उनकी प्रभावशाली उपस्थिति, छिंदवाड़ा के लिए उनकी परिवर्तनकारी दृष्टि, और भारत के किसानों एवं विकासशील देशों के प्रति उनकी अडिग प्रतिबद्धता ने उन्हें एक विलक्षण राजनेता के रूप में स्थापित किया है।"
                  )}
                </p>
                <Link
                  href="/biography"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm uppercase tracking-wider font-medium group"
                >
                  {t("Read Full Biography", "पूरी जीवनी पढ़ें")}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden img-overlay">
                  <img src="/images/kamal-nath-portrait.jpg" alt="Kamal Nath" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full border border-accent/20 rounded-xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-xl -z-10" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ===== CAREER HIGHLIGHTS ===== */}
      <section className="py-24">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              label={t("Career Highlights", "करियर की झलकियाँ")}
              title={t("Milestones of a Remarkable Journey", "एक उल्लेखनीय यात्रा के मील के पत्थर")}
              subtitle={t("Four decades of leadership across Parliament, Union Cabinet, and State Governance", "संसद, केंद्रीय मंत्रिमंडल और राज्य शासन में चार दशकों का नेतृत्व")}
            />
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="max-w-3xl mx-auto">
              <TimelineItem
                year="1980"
                title={t("First Elected to Parliament", "पहली बार संसद के लिए निर्वाचित")}
                description={t("Won the Chhindwara Lok Sabha constituency for the first time, beginning a historic association with the seat.", "पहली बार छिंदवाड़ा लोकसभा क्षेत्र से जीत हासिल की, इस सीट के साथ एक ऐतिहासिक जुड़ाव की शुरुआत।")}
              />
              <TimelineItem
                year="1991–1996"
                title={t("Minister of Environment & Forests", "पर्यावरण एवं वन मंत्री")}
                description={t("Led India's environmental agenda at the historic Earth Summit in Rio de Janeiro (1992). Became the voice of developing nations on ecological conservation.", "रियो डी जनेरियो (1992) में ऐतिहासिक पृथ्वी सम्मेलन में भारत के पर्यावरण एजेंडा का नेतृत्व किया। विकासशील देशों की पर्यावरण संरक्षण की आवाज़ बने।")}
                highlight
              />
              <TimelineItem
                year="2004–2009"
                title={t("Union Minister of Commerce & Industry", "केंद्रीय वाणिज्य एवं उद्योग मंत्री")}
                description={t("Champion of India's trade interests at the WTO. Introduced Special Economic Zones and the Foreign Trade Policy reforms, earning the FDI Personality of the Year Award.", "WTO में भारत के व्यापार हितों के चैंपियन। विशेष आर्थिक क्षेत्र और विदेश व्यापार नीति सुधार लागू किए, FDI पर्सनैलिटी ऑफ द ईयर पुरस्कार प्राप्त किया।")}
                highlight
              />
              <TimelineItem
                year="2009–2014"
                title={t("Road Transport, Highways & Urban Development", "सड़क परिवहन, राजमार्ग एवं शहरी विकास")}
                description={t("Oversaw massive expansion of India's national highway network and led urban infrastructure reform.", "भारत के राष्ट्रीय राजमार्ग नेटवर्क के व्यापक विस्तार की देखरेख की और शहरी बुनियादी ढांचे के सुधार का नेतृत्व किया।")}
              />
              <TimelineItem
                year="2018"
                title={t("Chief Minister of Madhya Pradesh", "मध्य प्रदेश के मुख्यमंत्री")}
                description={t("Led Congress to a decisive victory and became the 18th Chief Minister, focusing on economic growth, employment, and rural connectivity.", "कांग्रेस को निर्णायक जीत दिलाई और 18वें मुख्यमंत्री बने, आर्थिक विकास, रोजगार और ग्रामीण कनेक्टिविटी पर ध्यान केंद्रित किया।")}
                highlight
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="text-center mt-12">
              <Link href="/political-journey" className="inline-flex items-center gap-2 border border-accent/40 text-accent px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-accent/10 transition-colors">
                {t("View Complete Timeline", "पूरी समयरेखा देखें")}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />
        <div className="container-wide relative z-10 max-w-4xl mx-auto">
          <RevealOnScroll>
            <QuoteBlock
              quote={t(
                "I will not compromise the livelihood of Indian farmers in any trade agreement. India's food security is non-negotiable.",
                "मैं किसी भी व्यापार समझौते में भारतीय किसानों की आजीविका से समझौता नहीं करूँगा। भारत की खाद्य सुरक्षा पर कोई समझौता नहीं हो सकता।"
              )}
              attribution={t("Kamal Nath", "कमल नाथ")}
              context={t("On WTO negotiations, defending the interests of developing nations", "WTO वार्ता पर, विकासशील देशों के हितों की रक्षा करते हुए")}
            />
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== KEY AREAS ===== */}
      <section className="py-24">
        <div className="container-wide">
          <RevealOnScroll>
            <SectionHeading
              label={t("Areas of Impact", "प्रभाव के क्षेत्र")}
              title={t("Shaping India's Destiny", "भारत की नियति को आकार देना")}
              subtitle={t("From global trade negotiations to grassroots development, a multifaceted legacy", "वैश्विक व्यापार वार्ता से लेकर जमीनी स्तर के विकास तक, एक बहुआयामी विरासत")}
            />
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🌍", title: t("Global Trade & WTO", "वैश्विक व्यापार एवं WTO"), description: t("Led India's negotiations at the World Trade Organization, championing the cause of developing nations and protecting farmers' livelihoods.", "विश्व व्यापार संगठन में भारत की वार्ता का नेतृत्व किया, विकासशील देशों के हितों की रक्षा और किसानों की आजीविका की सुरक्षा की।"), href: "/vision" },
              { icon: "🏗️", title: t("Infrastructure & Development", "बुनियादी ढांचा एवं विकास"), description: t("Transformed Chhindwara with 6,000 km of rural roads, model railway stations, educational institutions, and modern healthcare.", "6,000 किमी ग्रामीण सड़कों, मॉडल रेलवे स्टेशनों, शैक्षणिक संस्थानों और आधुनिक स्वास्थ्य सुविधाओं से छिंदवाड़ा का कायाकल्प किया।"), href: "/chhindwara" },
              { icon: "🌿", title: t("Environment & Conservation", "पर्यावरण एवं संरक्षण"), description: t("Shaped India's environmental policies as Minister of Environment & Forests. Represented developing countries at the 1992 Earth Summit in Rio.", "पर्यावरण एवं वन मंत्री के रूप में भारत की पर्यावरण नीतियों को आकार दिया। 1992 में रियो में पृथ्वी सम्मेलन में विकासशील देशों का प्रतिनिधित्व किया।"), href: "/vision" },
              { icon: "🏛️", title: t("Parliamentary Leadership", "संसदीय नेतृत्व"), description: t("One of the longest-serving MPs in Indian history, with nine consecutive terms from Chhindwara spanning over four decades.", "भारतीय इतिहास में सबसे लंबे समय तक सेवा करने वाले सांसदों में से एक, छिंदवाड़ा से चार दशकों में नौ लगातार कार्यकाल।"), href: "/political-journey" },
              { icon: "📈", title: t("Economic Vision", "आर्थिक दृष्टि"), description: t("Introduced Special Economic Zones, promoted FDI, and shaped India's Foreign Trade Policy to boost exports and investment.", "विशेष आर्थिक क्षेत्रों की शुरुआत, FDI को बढ़ावा, और निर्यात एवं निवेश बढ़ाने के लिए भारत की विदेश व्यापार नीति को आकार दिया।"), href: "/vision" },
              { icon: "🎓", title: t("Education & Skill Building", "शिक्षा एवं कौशल विकास"), description: t("Established FDDI, NIIT, and multiple skill development centers in Chhindwara, empowering youth with employable skills.", "छिंदवाड़ा में FDDI, NIIT और कई कौशल विकास केंद्रों की स्थापना कर युवाओं को रोजगार योग्य कौशल से सशक्त बनाया।"), href: "/chhindwara" },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <Link href={item.href} className="block glass rounded-xl p-8 hover-card group h-full">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-display text-xl text-text mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-xs uppercase tracking-wider mt-4 group-hover:gap-2 transition-all">
                    {t("Learn more", "और जानें")}
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHHINDWARA CTA ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url(/images/chhindwara-landscape.jpg)" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        <div className="container-wide relative z-10">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-accent text-xs uppercase tracking-[0.3em] font-medium mb-4">{t("The Constituency", "निर्वाचन क्षेत्र")}</span>
                <h2 className="font-display text-3xl md:text-5xl text-text leading-tight mb-6">
                  {t("Chhindwara —", "छिंदवाड़ा —")} <br />
                  <span className="gradient-text">{t("A Model of Transformation", "परिवर्तन का प्रतीक")}</span>
                </h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  {t(
                    "Under Kamal Nath's stewardship, Chhindwara has transformed from a remote district into a model constituency — boasting world-class infrastructure, educational institutions, and a thriving economy.",
                    "कमल नाथ के नेतृत्व में, छिंदवाड़ा एक दूरदराज के जिले से एक आदर्श निर्वाचन क्षेत्र में बदल गया है — विश्वस्तरीय बुनियादी ढांचा, शैक्षणिक संस्थान और एक समृद्ध अर्थव्यवस्था के साथ।"
                  )}
                </p>
                <Link href="/chhindwara" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-accent-light transition-colors">
                  {t("Explore Chhindwara", "छिंदवाड़ा देखें")}
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <StatCard value="6,000" label={t("KM Rural Roads", "किमी ग्रामीण सड़कें")} />
                <StatCard value="5" label={t("Model Railway Stations", "मॉडल रेलवे स्टेशन")} />
                <StatCard value="₹2,000" label={t("Crore Projects", "करोड़ की परियोजनाएं")} />
                <StatCard value={t("1st", "प्रथम")} label={t("NIIT in Madhya Pradesh", "NIIT मध्य प्रदेश में")} />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-24">
        <div className="container-wide text-center">
          <RevealOnScroll>
            <span className="inline-block text-accent text-xs uppercase tracking-[0.3em] font-medium mb-4">{t("Discover More", "और जानें")}</span>
            <h2 className="font-display text-3xl md:text-5xl text-text mb-6">{t("The Complete Story Awaits", "पूरी कहानी आपका इंतजार कर रही है")}</h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              {t("Dive deeper into four decades of leadership, vision, and unwavering commitment to India's progress.", "चार दशकों के नेतृत्व, दृष्टि और भारत की प्रगति के प्रति अटूट प्रतिबद्धता में गहराई से उतरें।")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/legacy" className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-accent-light transition-colors">
                {t("Explore His Legacy", "उनकी विरासत देखें")}
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-accent/40 text-accent px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-accent/10 transition-colors">
                {t("Get In Touch", "संपर्क करें")}
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
