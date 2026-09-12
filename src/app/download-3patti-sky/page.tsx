import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3Patti Sky APK Download 2026 — Free, Fast & Latest Version',
  description: 'Grab the 3Patti Sky APK straight from the source — no Play Store detour needed. Teen Patti, Rummy, Dragon Tiger and more, with JazzCash/EasyPaisa cash-outs. V1.199(1), just 49MB.',
  keywords: [
    '3Patti Sky APK download',
    'download 3Patti Sky',
    '3Patti Sky Android download',
    'Teen Patti APK',
    '3Patti Sky free download',
    '3Patti Sky V1.199',
    '3 Patti Sky install guide'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://3pattiskygame.com.pk/download-3patti-sky",
  },
  openGraph: {
    title: '3Patti Sky APK Download 2026 — Free, Fast & Latest Version',
    description: 'Direct APK download for 3Patti Sky. Teen Patti, Rummy, Dragon Tiger and more, with secure JazzCash/EasyPaisa payouts. 600K+ installs and counting.',
    url: "https://3pattiskygame.com.pk/download-3patti-sky",
    siteName: "3Patti Sky",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp",
        width: 1200,
        height: 630,
        alt: "Download 3Patti Sky APK",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: '3Patti Sky APK Download 2026 — Free, Fast & Latest Version',
    description: 'Direct APK download for 3Patti Sky. Teen Patti, Rummy, Dragon Tiger and more, with secure JazzCash/EasyPaisa payouts. 600K+ installs and counting.',
    images: ["https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp"],
  },
};

export default function DownloadPage() {
  // Schema.org structured data for download page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "3Patti Sky",
    "operatingSystem": "Android 5.0+",
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "PKR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "ratingCount": "600000",
      "bestRating": "5"
    },
    "downloadUrl": "https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000",
    "softwareVersion": "V1.199(1)",
    "fileSize": "49MB",
    "datePublished": "2025-11-01",
    "description": "Direct APK download for 3Patti Sky on Android. Teen Patti, Rummy, Dragon Tiger and more, with JazzCash/EasyPaisa withdrawals.",
    "screenshot": [
      "https://3pattiskygame.com.pk/3-Patti-Sky-Game.webp",
      "https://3pattiskygame.com.pk/3-Patti-Sky-Games.webp",
      "https://3pattiskygame.com.pk/3-Patti-Sky.webp"
    ],
    "image": "https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp",
    "author": {
      "@type": "Organization",
      "name": "3Patti Sky",
      "url": "https://3pattiskygame.com.pk"
    },
    "inLanguage": ["en", "ur"],
    "countriesSupported": "PK"
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Install the 3Patti Sky APK on Android",
            "description": "A quick walkthrough for grabbing the 3Patti Sky APK and getting it running on an Android phone.",
            "totalTime": "PT5M",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Grab the File",
                "text": "Tap the download button below on this page — the APK saves straight to your phone's download folder."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Unlock Unknown Sources",
                "text": "Android blocks installs from outside the Play Store by default. Head to Settings > Security (or Apps) and toggle on 'Install unknown apps' for your browser."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Run the Installer",
                "text": "Open the downloaded file from your notifications shade or file manager and tap through the install prompt."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Launch the App",
                "text": "Once installed, find the 3Patti Sky icon on your home screen and open it."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Register and Play",
                "text": "Sign up with your mobile number, confirm the OTP, and you're ready to start playing."
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">3Patti Sky APK </span>
            <span className="text-[#FFA500]">Download</span>
            <span className="text-white"> — 2026 Edition</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Direct Install for Android
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">3Patti Sky</Link> bundles Teen Patti, Rummy, Dragon Tiger, poker variants and a handful of arcade-style games into one app. The APK below is the same build the app runs on — no third-party mirror, no re-packaging.
          </p>
        </div>

        {/* Download Button - Prominent */}
        <div className="flex justify-center my-12">
          <a
            href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center px-12 py-6 text-white font-bold text-xl rounded-full border-2 border-[#0ea5e9] hover:bg-[#0ea5e9]/10 transition-all group shadow-2xl"
          >
            <span className="mr-4">GET THE APK</span>
            <div className="bg-[#f97316] rounded-full p-3 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
        </div>

        <div className="flex justify-center mb-8">
          <span className="bg-[#0A1029] text-[#4ade80] px-6 py-2 rounded-full text-sm font-semibold">
            ⚡ Under 50MB — installs in minutes
          </span>
        </div>

        {/* Logo/Image Section */}
        <div className="flex justify-center mb-12">
          <div className="relative" style={{ width: '320px', height: '320px', maxWidth: '100%' }}>
            <Image
              src="/3-Patti-Sky.webp"
              alt="3Patti Sky Logo"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl"
              priority={true}
              fetchPriority="high"
              quality={75}
            />
          </div>
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-info">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">File Details at a Glance</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">3Patti Sky</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-left text-white">V1.199(1)</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">49MB</td>
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
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Download Button After Table */}
        <div className="flex justify-center mt-8">
          <a
            href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
            target="_blank"
            rel="noopener noreferrer"
            className="download-btn bg-transparent hover:bg-[#0ea5e9]/10 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl border-2 border-[#0ea5e9]"
          >
            <span className="text-lg">GET THE APK</span>
            <div className="download-icon ml-2 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* Download & Install Process */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download-steps">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
            Four Steps From Download to Login
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {/* Step 01 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">1. Save the APK</h3>
              <p className="text-gray-300 leading-relaxed">
                Hit either download button on this page. The file is small enough that it finishes on most mobile data connections in under a minute.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">2. Permit the Install</h3>
              <p className="text-gray-300 leading-relaxed">
                Your phone will flag it as coming from outside the Play Store — that's expected. Go into Settings and switch on "install unknown apps" for the browser you used.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">3. Tap Through Setup</h3>
              <p className="text-gray-300 leading-relaxed">
                Open the file from your notifications or Downloads folder, confirm the install prompt, and wait a few seconds for it to finish.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">4. Register and Deposit</h3>
              <p className="text-gray-300 leading-relaxed">
                Launch the app, create an account with your mobile number, verify the OTP, and make your first deposit whenever you're ready to play for real stakes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          What You're Downloading
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎴</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">A Full Table Lineup</h3>
            <p className="text-gray-300">Teen Patti, Rummy, Dragon Tiger, poker tables and slot-style rounds in one install</p>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Real-Cash Play</h3>
            <p className="text-gray-300">Deposit and cash out through the same local wallets you already use</p>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">⏱️</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Quick Payouts</h3>
            <p className="text-gray-300">JazzCash and EasyPaisa withdrawals typically clear the same day</p>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Login Rewards</h3>
            <p className="text-gray-300">Bonuses stack up simply for signing in and staying active</p>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Encrypted Transactions</h3>
            <p className="text-gray-300">Deposits and withdrawals run over encrypted payment channels</p>
          </div>

          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📲</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Lightweight App</h3>
            <p className="text-gray-300">A 49MB footprint that runs smoothly even on older, low-storage phones</p>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}
