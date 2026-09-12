import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
  title: '3Patti Sky — Who We Are',
  description: 'A quick introduction to 3Patti Sky: what the platform is, why it was built, and how to reach us with questions.',
  keywords: ['3Patti Sky about', 'about us', 'gaming platform Pakistan', '3Patti Sky team', 'card gaming Pakistan', 'Teen Patti', '3 Patti'],
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
    canonical: "https://3pattiskygame.com.pk/about-us",
  },
  openGraph: {
    title: '3Patti Sky — Who We Are',
    description: 'A quick introduction to the 3Patti Sky platform, what it offers, and how to reach the team.',
    url: "https://3pattiskygame.com.pk/about-us",
    siteName: "3Patti Sky",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://3pattiskygame.com.pk/3-Patti-Sky.webp",
        width: 1200,
        height: 630,
        alt: "About 3Patti Sky",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: '3Patti Sky — Who We Are',
    description: 'A quick introduction to the 3Patti Sky platform, what it offers, and how to reach the team.',
    images: ["https://3pattiskygame.com.pk/3-Patti-Sky.webp"],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Who We Are</h1>
          </div>

          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-full md:w-1/3">
                <Link href="/" className="block rounded-lg overflow-hidden bg-[#0A1029]">
                  <Image
                    src="/3-Patti-Sky.webp"
                    alt="3Patti Sky Logo"
                    width={320}
                    height={320}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 320px"
                    className="object-contain p-4 w-full h-auto"
                    priority
                  />
                </Link>
              </div>
              <div className="md:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    This site (<a href="https://3pattiskygame.com.pk/" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">3pattiskygame.com.pk</a>) covers everything related to <Link href="/" className="text-accent hover:underline font-semibold">3Patti Sky</Link>, a real-money card gaming app that's built up a base of over <span className="font-bold text-accent">500K users</span> across Pakistan.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Players come here for straightforward guidance — how deposits and withdrawals work, which games are on offer, and what to watch out for — rather than marketing copy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Aim Section */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">What We're Trying to Do</h2>
            <p className="text-lg md:text-xl text-white leading-relaxed text-center">
              Keep this page current, keep the guides accurate, and answer real questions from real players. If something here doesn't add up or you've hit an issue, our <Link href="/contact-us" className="underline hover:text-orange-100 font-semibold">contact page</Link> reaches us directly.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Something Unclear?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Send us a message and we'll get back to you about anything on this site or the app itself.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Script
        id="about-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "3Patti Sky",
              "alternateName": "3 Patti Sky",
              "url": "https://3pattiskygame.com.pk",
              "logo": "https://3pattiskygame.com.pk/3-Patti-Sky.webp",
              "description": "3Patti Sky is a real-money card gaming platform for Pakistani players, covering Teen Patti, Rummy, Dragon vs Tiger and more.",
              "foundingDate": "2024",
              "foundingLocation": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "sameAs": [
                "https://www.facebook.com/people/3-Patti-Sky/61561881890600/",
                "https://x.com/Teenpattisky"
              ],
              "founder": {
                "@type": "Person",
                "name": "Erio 3Patti Sky Dev"
              }
            },
            "about": {
              "@type": "Thing",
              "name": "Card Gaming Platform",
              "description": "Real-money card gaming platform serving Pakistani players"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://3pattiskygame.com.pk/about-us"
            }
          })
        }}
      />
    </div>
  );
}
