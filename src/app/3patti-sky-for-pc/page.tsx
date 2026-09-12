import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3Patti Sky on PC — Play With BlueStacks/LDPlayer (2026 Guide)',
  description: "Run 3Patti Sky on a Windows PC through an Android emulator: which emulator to pick, minimum specs, and the exact install steps for Teen Patti, Rummy, and Dragon vs Tiger on a bigger screen.",
  keywords: [
    '3Patti Sky for PC',
    '3Patti Sky PC download',
    '3Patti Sky Windows',
    'Teen Patti PC',
    'Card games for PC',
    'BlueStacks 3Patti Sky',
    'Android Emulator card games'
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
    canonical: "https://3pattiskygame.com.pk/3patti-sky-for-pc",
  },
  openGraph: {
    title: '3Patti Sky on PC — Play With BlueStacks/LDPlayer (2026 Guide)',
    description: "Emulator setup, specs, and install steps for playing 3Patti Sky on a Windows PC.",
    url: "https://3pattiskygame.com.pk/3patti-sky-for-pc",
    siteName: "3Patti Sky",
    locale: "en_US",
    type: "website",
  },
};

export default function ThreePattiSkyForPCPage() {
  // Schema.org structured data for PC version page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "3Patti Sky on PC — Play With BlueStacks/LDPlayer (2026 Guide)",
    "description": "An emulator setup guide for running 3Patti Sky on Windows: picking an emulator, meeting the spec requirements, and installing the APK.",
    "image": "https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp",
    "author": {
      "@type": "Organization",
      "name": "3Patti Sky",
      "url": "https://3pattiskygame.com.pk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "3Patti Sky",
      "logo": {
        "@type": "ImageObject",
        "url": "https://3pattiskygame.com.pk/3-Patti-Sky-logo.webp"
      }
    },
    "datePublished": "2026-01-04",
    "dateModified": "2026-01-04",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://3pattiskygame.com.pk/3patti-sky-for-pc"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "3Patti Sky",
      "operatingSystem": "Windows 7 or higher",
      "applicationCategory": "GameApplication"
    },
    "articleSection": "Gaming",
    "keywords": "3Patti Sky for PC, 3Patti Sky PC download, BlueStacks, Android Emulator, Teen Patti PC",
    "inLanguage": "en-US"
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
            "name": "Setting Up 3Patti Sky on a Windows PC",
            "description": "Emulator install, setup, and 3Patti Sky APK installation steps for Windows.",
            "totalTime": "PT15M",
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Pick and install an emulator",
                "text": "Download BlueStacks or LDPlayer from the emulator's own official site — not a third-party mirror — and run its Windows installer."
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Finish first-run setup",
                "text": "Launch the emulator, work through its onboarding screens, and sign in with a Google account when prompted."
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Grab the 3Patti Sky APK",
                "text": "Open 3pattiskygame.com.pk inside the emulator's built-in browser (or download on your PC and drag the file in) to get the APK."
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Install inside the emulator",
                "text": "Drop the APK onto the emulator window, or use its APK-install button — installation runs automatically from there."
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Sign in and play",
                "text": "Launch 3Patti Sky from the emulator's app drawer, log in or continue as guest, and you're at a table."
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Is it safe to run 3Patti Sky through an emulator?", "acceptedAnswer": { "@type": "Answer", "text": "It's as safe as the emulator you choose to trust — download BlueStacks or LDPlayer directly from their own sites, not a bundled installer from an unrelated download portal, and there's no added risk beyond running any Android app." } },
              { "@type": "Question", "name": "The APK installed but won't open — what's wrong?", "acceptedAnswer": { "@type": "Answer", "text": "Usually either the emulator's virtualization settings aren't enabled in BIOS, or storage inside the emulator's virtual device ran out. Re-check both before reinstalling." } },
              { "@type": "Question", "name": "BlueStacks or LDPlayer — which one for 3Patti Sky?", "acceptedAnswer": { "@type": "Answer", "text": "BlueStacks handles card-game UIs more smoothly on mid-range PCs; LDPlayer uses less RAM if your machine is older or already running other software." } }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#FFA500]">3Patti Sky for PC</span>
            <br />
            <span className="text-white">Play on a Bigger Screen</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Windows Setup Guide, 2026
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">3Patti Sky</Link> only ships as an Android APK, so there's no separate Windows build — you're running the exact same app through an Android emulator instead. Once it's set up, the table layout, card animations, and everything else scale to your monitor without any change in gameplay.
          </p>
        </div>

        {/* Logo Display */}
        <div className="flex justify-center mb-12">
          <div className="relative" style={{ width: '280px', height: '280px', maxWidth: '100%' }}>
            <Image
              src="/3-Patti-Sky.webp"
              alt="3Patti Sky for PC"
              width={280}
              height={280}
              className="object-contain drop-shadow-2xl"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">App Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">3Patti Sky</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Game</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">49MB</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Latest Version</td>
                  <td className="py-4 px-6 text-left text-white">V1.199(1)</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">Today</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">600k+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">English, Urdu</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What is 3Patti Sky on PC Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why Run 3Patti Sky on a PC at All?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              There's no official desktop client — 3Patti Sky was built for Android, full stop. What an emulator gets you isn't a different app, it's the same APK rendered on a monitor: bigger card art, a mouse pointer instead of a thumb, and no phone battery to watch while you play a long session.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What Actually Changes on PC</h2>
          <p className="text-gray-300 mb-8">The gameplay is identical to mobile — what improves is everything around it:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">🖥️ Reading the Table Faster</h3>
              <p className="text-gray-300">Card values and bet amounts that are small on a phone screen are easy to scan at a glance on a monitor.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">⚡ Fewer Mid-Game Hiccups</h3>
              <p className="text-gray-300">A desktop CPU rarely struggles with what's a lightweight mobile app to begin with, so animations stay consistent.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">🎮 Mouse and Keyboard Input</h3>
              <p className="text-gray-300">Clicking a card or a bet amount is often quicker and more precise than tapping a small touchscreen target.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">🔄 Keep Other Windows Open</h3>
              <p className="text-gray-300">The emulator runs in its own window, so a table stays open in the background while you do anything else on the same screen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Setting It Up, Step by Step</h2>
          <p className="text-gray-300 mb-6">Fifteen minutes, start to first hand:</p>

          <div className="space-y-4">
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-lg font-bold text-white mb-2">Step 1:</h3>
              <p className="text-gray-300">Pick an emulator — BlueStacks or LDPlayer — and download its installer from the emulator's own official site.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-lg font-bold text-white mb-2">Step 2:</h3>
              <p className="text-gray-300">Run the installer and complete the emulator's first-launch setup.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-lg font-bold text-white mb-2">Step 3:</h3>
              <p className="text-gray-300">Go to <Link href="/" className="text-[0ea5e9] hover:underline">3pattiskygame.com.pk</Link> and grab the current 3Patti Sky APK.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#a855f7]">
              <h3 className="text-lg font-bold text-white mb-2">Step 4:</h3>
              <p className="text-gray-300">Drag the APK file into the emulator window (or use its "Install APK" option) and wait for it to finish.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-lg font-bold text-white mb-2">Step 5:</h3>
              <p className="text-gray-300">Open the app from the emulator's home screen, sign in, and you're ready to play.</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-10">
            <a
              href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold py-4 px-12 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
            >
              <span className="text-lg">DOWNLOAD NOW</span>
              <div className="ml-3 bg-[#f97316] rounded-full p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Top Emulators Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Choosing an Emulator</h2>
          <p className="text-gray-300 mb-8">Any of these three will run 3Patti Sky without issue — the difference is mainly how much of your PC's resources they need:</p>

          <div className="space-y-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">💎 BlueStacks</h3>
              <p className="text-gray-300">The most widely used option — heavier on RAM, but its default settings need almost no tweaking to run a card game smoothly.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">⚡ LDPlayer</h3>
              <p className="text-gray-300">A lighter footprint, which makes it the better pick on a PC that's a few years old or already busy with other software.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">🎯 NoxPlayer</h3>
              <p className="text-gray-300">A reasonable middle ground between the two above, with a straightforward install process for anyone new to emulators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What Your PC Needs</h2>
          <p className="text-gray-300 mb-8">A card game is light by emulator standards, but virtualization needs to be enabled either way:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Minimum Requirements */}
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FFA500] mb-4">Bare Minimum:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>OS:</strong> Windows 7 or newer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>CPU:</strong> Any dual-core Intel/AMD with virtualization support enabled</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>RAM:</strong> 4 GB, with a few hundred MB free for the emulator itself</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>Storage:</strong> ~5 GB free for the emulator and app data</span>
                </li>
              </ul>
            </div>

            {/* Recommended Requirements */}
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4ade80] mb-4">For a Smoother Ride:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>OS:</strong> Windows 10 or 11</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>CPU:</strong> Core i5-class or better</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>RAM:</strong> 8 GB, so the emulator isn't competing with your browser tabs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>Storage:</strong> An SSD, mainly for faster emulator boot time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Worth Weighing Before You Set It Up</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#4ade80]">In favor of PC play:</h3>
              <div className="bg-[#0A1029] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>Easier to read table state at a glance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>No phone battery to manage during long sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>Runs alongside whatever else you're doing on the desktop</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>More comfortable for a session that runs an hour or more</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f87171]">Against it:</h3>
              <div className="bg-[#0A1029] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#f87171] mr-2">✗</span>
                    <span>One extra piece of software (the emulator) to install and keep updated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f87171] mr-2">✗</span>
                    <span>Only as trustworthy as wherever you got the emulator installer from</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Is It Worth the Extra Step?</h2>
          <p className="text-gray-300 leading-relaxed">
            If you already play on mobile and just want a bigger view for longer sessions, yes — the emulator setup takes about fifteen minutes and you never have to repeat it. If you're only playing occasionally, the phone app alone is simpler and there's no real downside to sticking with it.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Is it safe to run 3Patti Sky through an emulator?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                It's as safe as the emulator you choose — get BlueStacks or LDPlayer directly from their own official sites rather than a bundled installer from an unrelated download portal, and there's no meaningful added risk over running any Android app.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                The APK installed but the app won't open — what's wrong?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Two usual causes: virtualization isn't switched on in your PC's BIOS/UEFI settings, or the emulator's virtual storage is full. Check both, then reinstall the APK.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl border border-gray-700">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                BlueStacks or LDPlayer — which one for 3Patti Sky?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                BlueStacks tends to render card-table UIs a touch more smoothly on mid-range PCs; LDPlayer uses noticeably less RAM, which matters more on an older machine.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Set It Up in the Next 15 Minutes
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Grab an emulator, then the APK — you'll be at a table before you know it.
          </p>
          <a
            href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0ea5e9] hover:bg-gray-100 font-bold py-4 px-12 rounded-full inline-flex items-center transition-all shadow-lg hover:shadow-xl"
          >
            <span className="text-lg">DOWNLOAD FOR PC</span>
            <div className="ml-3 bg-[#f97316] rounded-full p-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </div>
          </a>
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
