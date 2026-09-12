import Image from "next/image";
import Link from 'next/link';
import { Metadata } from 'next';

// This additional metadata enhances the page-specific SEO
export const metadata: Metadata = {
  title: {
    default: "3 Patti Sky Pakistan v1.199 Free Download Official APK",
    template: "%s | 3 Patti Sky"
  },
  description: "Download 3Patti Sky APK, Pakistan's premier card game platform. Play Teen Patti, Rummy, Dragon vs Tiger & more. Win real cash with JazzCash & EasyPaisa. Join 600K+ players!",
  keywords: [
    "3Patti Sky",
    "3 Patti Sky",
    "Pakistan card games",
    "Teen Patti game",
    "online rummy game",
    "earn money playing cards",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile card games",
    "real money games Pakistan",
    "card game earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan"
  ],
  openGraph: {
    title: '3 Patti Sky Pakistan v1.199 Free Download Official APK',
    description: 'Join 600K+ players on Pakistan\'s premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    images: [
      {
        url: 'https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp',
        width: 1200,
        height: 630,
        alt: '3Patti Sky APK Download'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Patti Sky Pakistan v1.199 Free Download Official APK',
    description: 'Join 600K+ players on Pakistan\'s premier card game platform. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    images: ['https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp']
  }
};

export default function Home() {
  // Schema.org structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://3pattiskygame.com.pk/#website",
        "url": "https://3pattiskygame.com.pk/",
        "name": "3Patti Sky",
        "description": "3Patti Sky is a Pakistan-focused Android card gaming app covering Teen Patti, Rummy, Dragon vs Tiger and slot titles, with JazzCash and EasyPaisa cash-out.",
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://3pattiskygame.com.pk/#organization",
        "name": "3Patti Sky",
        "url": "https://3pattiskygame.com.pk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.facebook.com/people/3-Patti-Sky/61561881890600/",
          "https://x.com/Teenpattisky"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@3pattiskygame.com.pk",
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "3Patti Sky",
        "operatingSystem": "Android 5.0+",
        "applicationCategory": "GameApplication",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "ratingCount": "600000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "downloadUrl": "https://3pattiskygame.com.pk/download-3patti-sky",
        "softwareVersion": "V1.199(1)",
        "fileSize": "49MB",
        "description": "Play Teen Patti, Rummy, Dragon Tiger and other card games. Earn real money with JazzCash & EasyPaisa withdrawals.",
        "screenshot": [
          "https://3pattiskygame.com.pk/3-Patti-Sky-Game.webp",
          "https://3pattiskygame.com.pk/3-Patti-Sky-Games.webp",
          "https://3pattiskygame.com.pk/3-Patti-Sky.webp"
        ],
        "author": {
          "@type": "Organization",
          "name": "3Patti Sky"
        }
      }
    ]
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is 3 Patti Sky?", "acceptedAnswer": { "@type": "Answer", "text": "3 Patti Sky is a free online card game app for Android, widely popular in Pakistan. Based on the classic Teen Patti card game, it lets players win real money through JazzCash and EasyPaisa. It offers games like Teen Patti, Rummy, Dragon vs Tiger, and Slots, with 600K+ downloads." } },
              { "@type": "Question", "name": "Is 3 Patti Sky real or fake?", "acceptedAnswer": { "@type": "Answer", "text": "3 Patti Sky is a real and legitimate card gaming app. It pays out real money to players through JazzCash and EasyPaisa, and has over 600,000 verified downloads and positive user reviews from Pakistan." } },
              { "@type": "Question", "name": "How to download 3 Patti Sky?", "acceptedAnswer": { "@type": "Answer", "text": "Visit 3pattiskygame.com.pk, click the Download Now button to get the APK file, enable Install from Unknown Sources in your Android settings, then install and open the app." } },
              { "@type": "Question", "name": "Can users play 3 Patti Sky without depositing money?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can play games in 3 Patti Sky by using the free bonuses like the Welcome Bonus and Referral Commission." } },
              { "@type": "Question", "name": "How do users contact customer support?", "acceptedAnswer": { "@type": "Answer", "text": "You can contact the 3 Patti Sky support team through live chat, WhatsApp, or other social media platforms." } },
              { "@type": "Question", "name": "What makes 3 Patti Sky different from other card games?", "acceptedAnswer": { "@type": "Answer", "text": "Its simple design, fast transactions, and exciting games make this platform more enjoyable than other apps." } },
              { "@type": "Question", "name": "Is 3 Patti Sky safe and legal to use?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is safe to use because this makes sure that your data privacy stays secure. However, the legality depends on your local laws, so always check your region's rules." } },
              { "@type": "Question", "name": "Can users lose money while playing?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this app is involved with real money, so you might lose some amount if you do not play the games carefully. So, always play wisely and set a limit while playing." } },
              { "@type": "Question", "name": "Is it possible to change the language of 3 Patti Sky?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is possible because this app supports multiple languages, so you can change the language from the settings menu easily." } },
              { "@type": "Question", "name": "How do referral rewards work?", "acceptedAnswer": { "@type": "Answer", "text": "When you share your referral link with others, or when someone joins this app through your link, you can receive a commission." } },
              { "@type": "Question", "name": "Is 3 Patti Sky available on iPhone (iOS)?", "acceptedAnswer": { "@type": "Answer", "text": "This app is mainly available for Android devices, but you can also check the official website or store for updates about iOS availability." } }
            ]
          })
        }}
      />

      {/* DefinedTerm schema - helps AI understand exactly what 3 Patti Sky is */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "name": "3 Patti Sky",
            "alternateName": ["3Patti Sky", "Teen Patti Sky"],
            "description": "3 Patti Sky is a free online card game app for Android, widely popular in Pakistan. Based on the classic Teen Patti card game, it lets players win real money through JazzCash and EasyPaisa. It offers games like Teen Patti, Rummy, Dragon vs Tiger, and Slots.",
            "url": "https://3pattiskygame.com.pk/#what-is-3patti-sky",
            "inDefinedTermSet": {
              "@type": "DefinedTermSet",
              "name": "Card Gaming Apps Pakistan",
              "url": "https://3pattiskygame.com.pk"
            }
          })
        }}
      />

      {/* Speakable schema - marks definition content for AI assistants & AI Overview */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "3 Patti Sky – Pakistan's Most Trusted Card Gaming Platform",
            "url": "https://3pattiskygame.com.pk",
            "speakable": {
              "@type": "SpeakableSpecification",
              "cssSelector": ["#3patti-sky-definition", "#what-is-3patti-sky h2"]
            }
          })
        }}
      />
      
      {/* Hero Section with improved spacing */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <Link href="/" className="hover:text-[#FFA500] transition-colors">
                  <span className="text-white">3 Patti Sky</span>
                </Link>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">Pakistan&apos;s Most Trusted</span>{' '}
                <span className="text-white">3 Patti Gaming Platform 2026</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline font-semibold">3Patti Sky</Link> is an exciting online card game where you can enjoy a wide collection of casino games with its attractive design, fun background music, and engaging look. Click on following download button to get this wonderful app.
            </p>

            {/* Download Button */}
            <div className="flex justify-center my-8">
              <a 
                href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center px-8 py-4 text-white font-semibold text-lg rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group"
              >
                <span>DOWNLOAD NOW</span>
                <div className="ml-3 bg-[#f97316] rounded-full p-2 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                </div>
              </a>
            </div>

            {/* Stats Grid with improved spacing - CLS optimized */}
            <div className="flex flex-row gap-4 justify-center mt-8 mb-4 min-h-[120px]">
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px] min-h-[120px] flex flex-col justify-center">
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1 leading-tight">600K+</div>
                <div className="text-gray-400 text-sm leading-tight">Downloads</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px] min-h-[120px] flex flex-col justify-center">
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1 leading-tight">300K+</div>
                <div className="text-gray-400 text-sm leading-tight">Ratings</div>
              </div>
              
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px] min-h-[120px] flex flex-col justify-center">
                <svg className="w-6 h-6 mb-3 text-[#FFA500] mx-auto flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <div className="text-white text-2xl font-bold mb-1 leading-tight">49MB</div>
                <div className="text-gray-400 text-sm leading-tight">App Size</div>
              </div>
            </div>

            {/* Android only notice */}
            <p className="text-gray-400 text-sm text-center italic">*Available for Android devices only</p>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block md:w-1/2 md:mt-8">
            <div className="relative ml-auto w-[320px] h-[320px] max-w-full">
              <Image
                src="/3-Patti-Sky.webp"
                alt="3Patti Sky Logo"
                width={320}
                height={320}
                className="object-contain drop-shadow-2xl w-full h-full"
                priority={true}
                fetchPriority="high"
                quality={75}
                sizes="320px"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="mt-8 md:hidden">
            <div className="relative mx-auto w-[280px] h-[280px] max-w-full">
              <Image
                src="/3-Patti-Sky.webp"
                alt="3Patti Sky Logo"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl w-full h-full"
                priority={true}
                fetchPriority="high"
                quality={75}
                sizes="280px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Specifications Table with improved spacing */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">Download Info Table</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">3Patti Sky</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Developer</td>
                  <td className="py-4 px-6 text-left text-white">3patti Sky dev</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Game</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">49MB</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Latest Version</td>
                  <td className="py-4 px-6 text-left text-white">V1.199(1)</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">Android 5.0+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">5th January 2026</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">600k+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Rating Count</td>
                  <td className="py-4 px-6 text-left text-white">300000+</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">English, Urdu</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Overview</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              3Patti Sky brings card tables, slot reels, and poker rooms together inside one lightweight Android app, so switching between game types never means switching apps. Every screen — menus, animations, loading transitions — is built around a single goal: get a new player from install to first hand in under a minute. Small deposits go a long way here, too; the platform is tuned so modest stakes can still turn into meaningful winnings over time, and there's a free-play route through daily bonuses for anyone who wants to test things out before risking their own money.
            </p>
          </div>
        </div>
      </section>

      {/* What is 3Patti Sky Section - optimized for featured snippet & AI Overview */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="what-is-3patti-sky">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">What is 3 Patti Sky?</h2>
          {/* Direct definition paragraph - optimized for featured snippet (40-60 words) */}
          <p className="text-white text-lg font-medium leading-relaxed mb-6" id="3patti-sky-definition">
            3 Patti Sky is a free online card game app for Android, widely popular in Pakistan. Based on the classic Teen Patti card game, it lets players win real money through JazzCash and EasyPaisa. It offers games like Teen Patti, Rummy, Dragon vs Tiger, and Slots, with 600K+ downloads.
          </p>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              What set 3Patti Sky apart when it launched wasn't a new card game — Teen Patti and Rummy have been played in Pakistan for generations — it was putting the whole experience on a phone with a clean, uncluttered layout instead of the cluttered menus common in older card apps. New players tend to stick around because the first session doesn't require reading a manual: pick a table, follow the on-screen prompts, and the classic rules already known from family card games carry over directly.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Deposits and withdrawals run through JazzCash and EasyPaisa, so money movement doesn't depend on a bank account or a card — just a mobile wallet most Pakistani users already have set up. First deposits unlock a matching bonus, and from there the app's day-to-day draw is the mix of near-instant cash-outs and a rotating slate of card, slot, and dice-style games under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Why 3Patti Sky Popular Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why 3Patti Sky Game so Popular?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Three things tend to come up whenever players explain why they keep coming back to 3Patti Sky: the rules are the same Teen Patti and Rummy they already know, the app runs fine even on budget phones with limited storage, and JazzCash/EasyPaisa withdrawals actually land in minutes rather than days. None of that requires learning anything new — it just removes the usual friction of mobile card gaming.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Variety keeps sessions from getting stale: Teen Patti and Rummy sit alongside Dragon vs Tiger, a rotating poker table, and a slots section, so there's always a different game a few taps away. Daily login rewards and streak bonuses top up your balance even on days you're not depositing, and account security — encrypted transactions, no storing of card numbers on-device — is treated as a baseline requirement rather than a selling point.
            </p>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How Can We Start with 3Patti Sky?</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">To start the 3 Patti Sky game, follow the given steps:</p>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Firstly, open the official website of 3 Patti Sky and download the APK file to your device.</li>
              <li>Once downloaded then click on the downloaded APK file to start the installation by allowing the Unknown Sources.</li>
              <li>Once installation is complete, click on it to open the 3 Patti Sky app.</li>
              <li>When the app opens then log in with your mobile number or just play as a guest.</li>
              <li>When you log in, you will get free chips or welcome bonuses to start playing the game.</li>
              <li>Choose a table or game that you want to play, and start enjoying the game.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Game Screenshots Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-[#06091F] rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">3Patti Sky App Screenshots</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { src: '/3-Patti-Sky-Game.webp', alt: '3Patti Sky Game Interface', label: 'Game Interface' },
              { src: '/3-Patti-Sky-Dragon-Tiger.webp', alt: '3Patti Sky Games Collection', label: 'Dragon Tiger Game' },
              { src: '/3-Patti-Sky-Free-Bonus.webp', alt: '3Patti Sky Bonuses & Rewards', label: 'Free Bonuses & Rewards' },
              { src: '/3-Patti-Sky-Deposit.webp', alt: '3Patti Sky Deposit Money', label: 'Deposit Money' },
              { src: '/3-Patti-Sky-Games.webp', alt: '3Patti Sky App Overview', label: 'App Overview' },
              { src: '/3-Patti-Sky-Referral-Bonus.webp', alt: '3Patti Sky Referral Bonus', label: 'Referral & Win Bonus' },
            ].map((shot) => (
              <figure key={shot.src} className="w-full">
                <div className="rounded-lg overflow-hidden shadow-2xl image-container-smooth" style={{ aspectRatio: '16 / 9' }}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-contain"
                    style={{ width: '100%', height: 'auto' }}
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="text-center text-gray-300 mt-3 text-sm font-medium">{shot.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Top Features of 3Patti Sky</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">1: Play for Real Cash</h3>
            <p className="text-gray-300">Every table in 3Patti Sky — Teen Patti, Rummy, Poker — pays out in real money, not points or an in-app-only currency. Win a hand and the amount lands in your in-app wallet immediately, ready to either keep playing with or send straight to your JazzCash/EasyPaisa account. There's no separate "convert to cash" step or minimum play-through hidden in the fine print for your own winnings.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">2: JazzCash & EasyPaisa Built In</h3>
            <p className="text-gray-300">Both wallets are wired directly into the app's Deposit and Withdraw screens, so there's no third-party payment gateway to trust with your details. Add funds, play, cash out — each step is two or three taps, and neither wallet requires you to enter full bank card information anywhere in the app.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">3: Built for One-Handed Play</h3>
            <p className="text-gray-300">The whole layout assumes you're holding a phone, not sitting at a desk: large tap targets, a bottom-anchored action bar, and animations that are quick rather than showy so they don't get in the way of the next hand. It still looks like a proper casino table — felt-green backgrounds, card-flip animation, dealer chips — just scaled for a 6-inch screen.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">4: One App, Several Game Types</h3>
            <p className="text-gray-300">Teen Patti and Rummy are the anchor games, but Dragon vs Tiger, a poker room, and a slots section are all one tab-switch away — no separate downloads. Rules stay simple across the board, so a player who's mastered one table can pick up another in a couple of rounds rather than starting from scratch.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">5: Login Streaks Pay Off</h3>
            <p className="text-gray-300">Opening the app daily builds a login streak that unlocks small chip bonuses on its own, on top of occasional festival-timed promotions. It's a way to keep a balance topped up between deposits, and it rewards players who check in regularly more than players who deposit once and disappear.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">6: Refer a Friend, Earn a Cut</h3>
            <p className="text-gray-300">Your referral link is generated automatically once you sign up. Anyone who installs through it and starts playing puts a commission into your account — no cap mentioned on how many people you can refer, so it scales with how widely you share it. It's the one feature in the app that pays out without you needing to play a single hand yourself.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">7: Runs Fine on Older Phones</h3>
            <p className="text-gray-300">The app was kept deliberately light — under 50MB — specifically so it doesn't stutter on budget Android hardware or eat through limited storage. Table transitions and card animations are tuned to stay smooth even on a 2GB-RAM device, which matters more in this market than having the flashiest possible graphics.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">8: Data Stays Encrypted</h3>
            <p className="text-gray-300">Account and transaction data is encrypted both in transit and at rest, and the app never asks for or stores your full card number — only what JazzCash/EasyPaisa need to process a transfer. That narrows what could ever be exposed if a device were lost or compromised.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">9: No Cost to Start</h3>
            <p className="text-gray-300">Downloading and creating an account costs nothing, and a small starter chip balance is handed out on signup so you can try a few hands before deciding whether to deposit at all. It's meant as a genuine trial period, not just a teaser screen before a paywall.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
            <h3 className="text-xl font-semibold mb-3 text-accent">10: Support That Actually Responds</h3>
            <p className="text-gray-300">In-app live chat and a WhatsApp line are both staffed around the clock, which matters most exactly when it's needed — mid-withdrawal, when something looks off. Most tickets we've seen referenced get a first reply within minutes rather than the next business day.</p>
          </div>
          </div>
        </div>
      </section>

      {/* Available Games Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Best Games to Play on 3Patti Sky</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">1: Card Room Classics</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Teen Patti <span className="text-[#f97316]">(Hot)</span></p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Rummy <span className="text-[#f97316]">(Hot)</span></p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Teenpatti 20-20</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Best of Five</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">10 Cards</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Poker</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Black Jack</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Domino</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">2: Live-Odds Tables</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Dragon vs Tiger <span className="text-[#f97316]">(Hot)</span></p>
          </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Andar Bahar <span className="text-[#f97316]">(Hot)</span></p>
          </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">7 Up Down</p>
          </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Zoo Roulette</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Car Roulette</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Crash</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Ludo</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Fishing Rush</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">3: Slots & Instant-Win</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Mines <span className="text-[#f97316]">(Hot)</span></p>
            </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">777 Bingo</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Fruit Line</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Rattling GEMS</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Wild Energy</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">Video Poker 1, 2</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">WoW Slot</p>
              </div>
              <div className="bg-[#0A1029] p-4 rounded-lg">
                <p className="text-white font-medium">God of Fortune</p>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Benefits for New Players by Joining 3Patti Sky</h2>
        
        {/* New Player Welcome Bonus */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">1: First-Deposit Match, Scaled by Amount</h3>
          <p className="text-gray-300 mb-4">Rather than one flat match rate, 3Patti Sky's first-deposit bonus scales up the more you put in on that first transaction:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">First Deposit (PKR)</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Match Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">100 – 999</td><td className="py-3 px-6 text-gray-300">100%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">1,000 – 4,999</td><td className="py-3 px-6 text-gray-300">110%</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">5,000 – 9,999</td><td className="py-3 px-6 text-gray-300">120%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">10,000 – 19,999</td><td className="py-3 px-6 text-gray-300">130%</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">20,000 – 49,999</td><td className="py-3 px-6 text-gray-300">140%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">50,000+</td><td className="py-3 px-6 text-gray-300">150%</td></tr>
              </tbody>
            </table>
          </div>
          </div>

        {/* Recharge Rebate */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">2: Ongoing Recharge Rebate</h3>
          <p className="text-gray-300 mb-4">Every top-up after the first also earns a cash-back rebate, with the rate climbing alongside how much you recharge:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Minimum Recharge (PKR)</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Rebate</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Wagering Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">2,500</td><td className="py-3 px-6 text-gray-300">4%</td><td className="py-3 px-6 text-gray-300">2x</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">6,000</td><td className="py-3 px-6 text-gray-300">8%</td><td className="py-3 px-6 text-gray-300">3x</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">9,000</td><td className="py-3 px-6 text-gray-300">12%</td><td className="py-3 px-6 text-gray-300">4x</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">15,000</td><td className="py-3 px-6 text-gray-300">18%</td><td className="py-3 px-6 text-gray-300">5x</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">25,000</td><td className="py-3 px-6 text-gray-300">22%</td><td className="py-3 px-6 text-gray-300">6x</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">60,000</td><td className="py-3 px-6 text-gray-300">28%</td><td className="py-3 px-6 text-gray-300">7x</td></tr>
              </tbody>
            </table>
          </div>
          </div>

        {/* Loyalty Tier Rebate */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">3: Loyalty Tier Rebate</h3>
          <p className="text-gray-300 mb-4">Beyond the standard recharge rebate, your account's Loyalty Tier — which rises with total play over time — adds a further daily rebate on top:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-[#0a1029]">
                <tr>
                  <th className="py-3 px-6 text-left text-white font-semibold">Loyalty Tier</th>
                  <th className="py-3 px-6 text-left text-white font-semibold">Daily Rebate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Tier 1</td><td className="py-3 px-6 text-gray-300">1.5%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Tier 2</td><td className="py-3 px-6 text-gray-300">3.0%</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Tier 3</td><td className="py-3 px-6 text-gray-300">4.5%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Tier 4</td><td className="py-3 px-6 text-gray-300">6.0%</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Tier 5</td><td className="py-3 px-6 text-gray-300">7.5%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Tier 6</td><td className="py-3 px-6 text-gray-300">9.0%</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Tier 7</td><td className="py-3 px-6 text-gray-300">10.5%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Tier 8</td><td className="py-3 px-6 text-gray-300">12.0%</td></tr>
                <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Tier 9</td><td className="py-3 px-6 text-gray-300">13.5%</td></tr>
                <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Tier 10</td><td className="py-3 px-6 text-gray-300">15.0%</td></tr>
              </tbody>
            </table>
          </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Download 3Patti Sky APK Latest Version For Android</h2>
          <p className="text-gray-300 mb-4">To download the latest version of 3 Patti Sky APK for Android devices, follow the given steps:</p>
          <div className="mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>First, you open the browser on your Android device and click on the search bar.</li>
            <li>In the search bar, type the latest version of 3 Patti Sky and visit the trusted website.</li>
            <li>On the trusted website, click on the Download button to start downloading.</li>
            <li>Now wait a few seconds to complete the downloading process.</li>
            <li>Once complete, that file will be saved in the Download Folder of the device.</li>
          </ol>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Installation Guide for 3Patti Sky APK</h2>
        <p className="text-gray-300 mb-4">After downloading to installing the 3 Patti Sky APK, follow the given steps:</p>
        <div className="mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>To start installation, your device grants permission to install unknown sources.</li>
            <li>Open the Settings &lt; Security and enable the Install Unknown Apps.</li>
            <li>After this, open the File Manager and go to the Download Folder.</li>
            <li>Click on the download APK file, and the installation process will start.</li>
            <li>Wait until the installation completes successfully on your device.</li>
            <li>Once complete then the app icon will show on your device.</li>
            <li>Click on it to launch the app and start playing the games that you want.</li>
          </ol>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">System Requirement to Download & install 3Patti Sky App</h2>
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-[#0a1029]">
              <tr>
                <th className="py-3 px-6 text-left text-white font-semibold">System</th>
                <th className="py-3 px-6 text-left text-white font-semibold">Minimum</th>
                <th className="py-3 px-6 text-left text-white font-semibold">Recommended</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Operating System</td><td className="py-3 px-6 text-gray-300">Android 4.1</td><td className="py-3 px-6 text-gray-300">Android 8.0 or above</td></tr>
              <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">RAM</td><td className="py-3 px-6 text-gray-300">2GB or more</td><td className="py-3 px-6 text-gray-300">4GB or more</td></tr>
              <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Storage Space</td><td className="py-3 px-6 text-gray-300">At least 500 MB free</td><td className="py-3 px-6 text-gray-300">1GB free space</td></tr>
              <tr className="bg-[#0a1029]/50"><td className="py-3 px-6 text-gray-300">Processor</td><td className="py-3 px-6 text-gray-300">Quad-core 1.5 GHz</td><td className="py-3 px-6 text-gray-300">Octa-core 2.0 GHz</td></tr>
              <tr className="bg-[#06091F]/50"><td className="py-3 px-6 text-gray-300">Internet</td><td className="py-3 px-6 text-gray-300">Stable 3G or WiFi</td><td className="py-3 px-6 text-gray-300">Fast & stable 4G or WiFi</td></tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
          >
            <span className="text-lg">DOWNLOAD NOW</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What's New in the Latest Version of the 3Patti Sky?</h2>
          <div className="space-y-4">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Redrawn card animations and table transitions for a smoother frame rate on mid-range phones.</li>
              <li>Faster cold-start time — the app reaches the lobby screen quicker after launch.</li>
              <li>Dragon vs Tiger and Andar Bahar tables added alongside the existing Teen Patti and Rummy rooms.</li>
              <li>JazzCash/EasyPaisa transfers reworked to reduce the average confirmation wait.</li>
              <li>Session security hardening around login and withdrawal confirmation steps.</li>
              <li>The referral program now shows real-time commission tracking instead of a delayed summary.</li>
              <li>A batch of reported crash and freeze issues from the previous build fixed.</li>
              <li>Table sound effects rebalanced so background music doesn't drown out action cues.</li>
              <li>Loyalty Tier progress is now visible directly on the wallet screen.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Account Creation */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Register & Login on 3Patti Sky?</h2>
          
          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">1: Creating an Account</h3>
          <p className="text-gray-300 mb-4">Signing up takes under a minute — here's the full flow:</p>
          <div className="mb-8">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Firstly, open the 3 Patti Sky app on your device.</li>
            <li>On the homescreen, click on the Register or Sign Up option.</li>
            <li>Now, enter your valid mobile number or email address.</li>
            <li>Set a strong password that can never be accessed easily.</li>
            <li>Enter the OTP that you can receive through phone or email for verification.</li>
            <li>Once verification is complete then your account will be created successfully.</li>
          </ol>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">2: Signing Back In</h3>
          <p className="text-gray-300 mb-4">Once your account exists, getting back into the app is quicker still:</p>
          <div className="space-y-4">
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the 3 Patti Sky app on your device.</li>
            <li>Click on the Login button on the homescreen.</li>
            <li>Enter your registered mobile number, email, or password.</li>
            <li>Make sure that your entered details are correct.</li>
            <li>Once confirmed, tap on the Sign in or Login option.</li>
            <li>If you forget your password, then use Forgot Password to reset it.</li>
            <li>Once logging is complete then you can start playing games.</li>
          </ol>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Getting Money In and Out of 3Patti Sky</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">JazzCash</h3>
              <p className="text-gray-300">Link your JazzCash mobile wallet once, and every deposit or withdrawal after that is a balance transfer rather than a card transaction — no OTP-heavy checkout flow, no third-party payment page. Most players see funds move within the same minute on both ends, which is why it's the more commonly used of the two options in the app.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">EasyPaisa</h3>
              <p className="text-gray-300">EasyPaisa works as the direct alternative for players who don't carry a JazzCash account — same in-app flow, same near-instant transfer speed. Whichever wallet you already use day to day is the one worth linking; there's no advantage to running both unless you specifically want a backup option.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Deposit Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Deposit Money in the 3Patti Sky App?</h2>
            <p className="text-gray-300 mb-4">To deposit money in 3 Patti Sky, follow the given steps:</p>
                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>First, open the 3 Patti Sky app on your device and log in.</li>
              <li>Now, click on the Wallet option that is available on the homescreen.</li>
              <li>In this wallet section, click on the Deposit option.</li>
              <li>Choose a payment method that you want to use.</li>
              <li>Enter the amount that you want to deposit.</li>
              <li>Click on the confirm option and wait to complete it.</li>
              <li>Once complete, the balance will show in your game wallet.</li>
                </ol>
              </div>
          <div className="bg-secondary rounded-xl p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Withdraw Money in 3Patti Sky?</h2>
            <p className="text-gray-300 mb-4">To withdraw money in 3 Patti Sky, follow the given steps:</p>
                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the 3 Patti Sky app and log in to your account.</li>
              <li>Click on the Wallet option that is available on the main screen.</li>
              <li>In the wallet section, click on the Withdrawal option.</li>
              <li>Choose your payment method, like JazzCash or EasyPaisa.</li>
              <li>Now enter the amount that you want to withdraw.</li>
              <li>Enter some required details, like the account number.</li>
              <li>Double-check all entered details and click on Confirm.</li>
              <li>Wait a few seconds to complete the withdrawal process.</li>
              <li>Once complete, that money will be shown in your selected payment method.</li>
                </ol>
          </div>
        </div>
      </section>

      {/* About Safety Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">About the Safety & Security of the 3Patti Sky</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Because 3Patti Sky is distributed as a direct APK rather than through the Play Store, the security burden shifts partly onto where you get the file from. The app itself runs over encrypted (SSL) connections and never asks for full banking-card details — only what JazzCash/EasyPaisa need — but an APK downloaded from a random forum or resend link isn't the same file as one from the official site. Stick to the official download button on this page, keep your login details off shared devices, and treat any message asking for your password or OTP outside the app itself as a scam attempt.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Guides & Blog - Internal Linking */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Latest Guides &amp; Blog</h2>
          <p className="text-gray-300 mb-6">Explore our comprehensive guides to learn everything about 3Patti Sky:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/is-3patti-sky-real-or-fake" className="bg-[#0A1029] p-4 rounded-lg hover:bg-[#0A1029]/80 transition-colors block">
              <h3 className="text-white font-semibold mb-2">Is 3Patti Sky Real or Fake?</h3>
              <p className="text-gray-400 text-sm">Discover the truth about legitimacy and payment methods</p>
            </Link>
            <Link href="/blog/how-to-play-3patti-sky" className="bg-[#0A1029] p-4 rounded-lg hover:bg-[#0A1029]/80 transition-colors block">
              <h3 className="text-white font-semibold mb-2">How to Play 3Patti Sky</h3>
              <p className="text-gray-400 text-sm">Complete beginner guide with rules and tips</p>
            </Link>
            <Link href="/blog/how-to-earn-money-3patti-sky" className="bg-[#0A1029] p-4 rounded-lg hover:bg-[#0A1029]/80 transition-colors block">
              <h3 className="text-white font-semibold mb-2">How to Earn Money in 3Patti Sky</h3>
              <p className="text-gray-400 text-sm">Earning methods, bonuses, and withdrawal guide</p>
            </Link>
            <Link href="/blog/how-to-create-account-login" className="bg-[#0A1029] p-4 rounded-lg hover:bg-[#0A1029]/80 transition-colors block">
              <h3 className="text-white font-semibold mb-2">How to Create Account and Login</h3>
              <p className="text-gray-400 text-sm">Step-by-step registration and login guide</p>
            </Link>
            <Link href="/blog/payment-methods-jazzcash-easypaisa" className="bg-[#0A1029] p-4 rounded-lg hover:bg-[#0A1029]/80 transition-colors block">
              <h3 className="text-white font-semibold mb-2">Payment Methods - JazzCash &amp; EasyPaisa</h3>
              <p className="text-gray-400 text-sm">Complete guide on deposits and withdrawals</p>
            </Link>
            <Link href="/blog/tips-to-win-3patti-sky" className="bg-[#0A1029] p-4 rounded-lg hover:bg-[#0A1029]/80 transition-colors block">
              <h3 className="text-white font-semibold mb-2">Tips to Win in 3Patti Sky</h3>
              <p className="text-gray-400 text-sm">Expert strategies and winning techniques</p>
            </Link>
          </div>
          <Link href="/blog" className="inline-block mt-6 text-accent hover:underline font-semibold">
            View All Blog Posts →
          </Link>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How Can We Contact the 3Patti Sky?</h2>
          <p className="text-gray-300 mb-6">To contact the customer support team of 3 Patti Sky, you can use the given methods:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">In-App Live Chat</h3>
              <p className="text-gray-300">The fastest route for anything time-sensitive — a stuck withdrawal, a login problem — is the live chat button inside the app itself. It's staffed continuously rather than during fixed hours, so you're not stuck waiting overnight for a reply mid-transaction.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">WhatsApp</h3>
              <p className="text-gray-300">For anything you'd rather handle outside the app — a screenshot of an error, a longer explanation — the WhatsApp number listed in the app's Support tab reaches the same support team. Useful if you've been logged out and can't get to in-app chat.</p>
            </div>
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Check the FAQ First</h3>
              <p className="text-gray-300">Common questions about registration, deposits, withdrawals, and bonus terms are answered on this page and in the app's Help section — worth a quick scan before opening a ticket, since most first-time questions are already covered there.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips and Tricks */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Tips & Tricks to Earn Maximum on 3Patti Sky Game</h2>
          <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-3 text-gray-300">
            <li><strong>Size your first bets small:</strong> treat your first few sessions as a way to learn table pacing and betting patterns, not to chase a big win — raise your stakes only once you're reading the game comfortably.</li>
            <li><strong>Let bonuses cover your risk:</strong> login streaks, referral commissions, and the first-deposit match all add balance you didn't pay for directly — spend that before you dip further into your own deposit.</li>
            <li><strong>Lean into the games you're actually good at:</strong> Dragon vs Tiger rewards fast reads on odds, while Teen Patti and Rummy reward pattern memory — play to whichever style suits you rather than switching tables constantly.</li>
            <li><strong>Share your referral link early:</strong> commissions from people you refer compound the longer they keep playing, so it's worth sending the link out before you need the extra balance, not after.</li>
            <li><strong>Log in even on days you don't deposit:</strong> streak-based rewards reset if you skip a day, and they're free balance you'd otherwise leave unclaimed.</li>
            <li><strong>Cash out as you go:</strong> letting winnings sit in-app is tempting if you're on a streak, but moving a portion to your JazzCash/EasyPaisa wallet regularly means a bad session afterward can't erase a good one.</li>
            <li><strong>Use free chips to test a table first:</strong> welcome-bonus balance is a low-risk way to see how a new game plays before committing real deposit money to it.</li>
            <li><strong>Set a stopping point before you start:</strong> decide your loss limit and win target before the session, not mid-game — that one habit prevents most of the "just one more hand" losses.</li>
            <li><strong>Watch a table before joining:</strong> most games let you observe a round in progress; a minute of watching often reveals betting patterns worth noting before you put money in.</li>
            <li><strong>Only download from the official link:</strong> this page's download button is the one to trust — copies mirrored on unrelated sites are the main way accounts get compromised in this niche.</li>
          </ul>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Pros & Cons of using 3Patti Sky</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Pros</h3>
            <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>Rules that Teen Patti/Rummy players already know</li>
                <li>Real cash payouts, not in-app-only points</li>
                <li>JazzCash and EasyPaisa built directly into the app</li>
                <li>Several game types under one install</li>
                <li>Withdrawals typically clear within minutes</li>
                <li>Runs smoothly on low-end Android hardware</li>
                <li>Login streaks and referral commissions add free balance</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Cons</h3>
            <div className="bg-[#0A1029] px-8 py-8 rounded-lg">
              <ul className="list-disc pl-5 space-y-3 text-gray-300">
                <li>Real money is at risk on every hand</li>
                <li>Distributed as an APK, not via the Play Store</li>
                <li>Can become habit-forming if you don't set limits</li>
                <li>Legal status depends on your local regulations</li>
                <li>Occasional payment-network delays outside the app's control</li>
                <li>Referral/rebate structures take a session or two to fully understand</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Can users play 3 Patti Sky without depositing money?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Yes, you can play games in 3 Patti Sky by using the free bonuses like the Welcome Bonus and Referral Commission.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              How do users contact customer support?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
               You can contact the 3 Patti Sky support team through live chat, WhatsApp, or other social media platforms.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              What makes 3 Patti Sky different from other card games?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Its simple design, fast transactions, and exciting games make this platform more enjoyable than other apps.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Is 3 Patti Sky safe and legal to use?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Yes, it is safe to use because this makes sure that your data privacy stays secure. However, the legality depends on your local laws, so always check your region's rules.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Can users lose money while playing?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Yes, this app is involved with real money, so you might lose some amount if you do not play the games carefully. So, always play wisely and set a limit while playing.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Is it possible to change the language of 3 Patti Sky?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              Yes, it is possible because this app supports multiple languages, so you can change the language from the settings menu easily.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              How do referral rewards work?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              When you share your referral link with others, or when someone joins this app through your link, you can receive a commission.
            </div>
          </details>

          <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
              Is 3 Patti Sky available on iPhone (iOS)?
              <span className="transition group-open:rotate-180">
                <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-4 pt-0 text-gray-300">
              This app is mainly available for Android devices, but you can also check the official website or store for updates about iOS availability.
            </div>
          </details>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Final Thoughts</h2>
          <div className="space-y-4">
          <p className="text-gray-300">
            3Patti Sky's pitch is a narrow one, and it's kept it: familiar card games, a JazzCash/EasyPaisa cash-out that actually works quickly, and an interface that doesn't get in the way of either. It won't suit everyone — real-money gaming carries real risk, and it's worth reading the Disclaimer and Responsible Gaming notes before you deposit anything. But for players who already know Teen Patti and Rummy and want a mobile-first way to play them for stakes that matter, this is built specifically for that use case rather than trying to be a general-purpose casino app.
          </p>
          </div>
        </div>
      </section>
    </>
  );
}
