import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3Patti Sky Disclaimer | Legal Notice',
  description: 'Important legal notice covering how 3pattiskygame.com.pk is meant to be used, and the limits of our responsibility for third-party platforms mentioned here.',
  keywords: ['3Patti Sky legal notice', 'disclaimer', 'terms', 'conditions', 'gambling disclaimer'],
  openGraph: {
    title: '3Patti Sky Disclaimer',
    description: 'Legal notice and usage terms for 3pattiskygame.com.pk.',
    url: 'https://3pattiskygame.com.pk/disclaimer',
    siteName: '3Patti Sky',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '3Patti Sky Disclaimer',
    description: 'Legal notice and usage terms for 3pattiskygame.com.pk.',
  },
  alternates: {
    canonical: 'https://3pattiskygame.com.pk/disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Legal Notice</h1>
            <p className="text-lg text-gray-400">A few things worth reading before you use this site</p>
          </div>

          {/* Main Content */}
          <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Warning Banner */}
              <div className="bg-[#0A1029] border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-accent mb-2">Read This First</h3>
                    <p className="text-accent mb-0">
                      Continuing to use this site means you accept the terms laid out below.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Disclaimer Content */}
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Everything published on <a href="https://www.3pattiskygame.com.pk" className="text-accent hover:text-accent font-semibold" target="_blank" rel="noopener noreferrer">www.3pattiskygame.com.pk</a> about <Link href="/" className="text-accent hover:underline font-semibold">3Patti Sky</Link> exists purely for <strong>informational and entertainment purposes</strong>. This site itself does not host, run, or operate any gambling service.
                </p>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-accent">
                  <h2 className="text-2xl font-bold mb-4 text-white">⚠️ Things to Keep in Mind</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>Platforms discussed here may involve <strong>real-money</strong> gameplay.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2 font-bold">•</span>
                      <span>It's on you to check the <strong>gaming and gambling regulations</strong> in your own region before using any app we write about.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-red-200">
                  <h2 className="text-2xl font-bold mb-4 text-red-400">🚫 Limits of Our Responsibility</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    We carry <strong>no liability</strong> for losses, disputes, or legal trouble arising from your use of any third-party app or platform mentioned here. Every app name, logo, and trademark referenced belongs to its respective owner — nothing here implies partnership or endorsement.
                  </p>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-blue-200">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">📋 What We Ask of You</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    Anything you do based on what's written here is done <strong>at your own risk</strong>. Specifically, we'd encourage you to:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Confirm the legal status of real-money gaming where you live</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Set a budget and stay within it</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Understand that any real-money game carries genuine financial risk</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span>Reach out for professional support if gambling starts to feel like a problem</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0A1029] rounded-xl p-6 border border-accent">
                  <h2 className="text-2xl font-bold mb-4 text-white">™️ Ownership of Names & Marks</h2>
                  <p className="text-gray-300 leading-relaxed mb-0">
                    Every app name, logo, and trademark that appears on this site remains the property of its actual owner. We are not affiliated with, endorsed by, or partnered with any of the platforms we cover.
                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 bg-secondary rounded-xl border-2 border-accent">
                <h2 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h2>
                <p className="text-gray-300 mb-4">
                  Reach out and we'll clarify anything in this notice that's unclear.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "3Patti Sky Disclaimer",
            "description": "Legal notice and usage terms for 3pattiskygame.com.pk.",
            "url": "https://3pattiskygame.com.pk/disclaimer"
          })
        }}
      />
    </div>
  );
}
