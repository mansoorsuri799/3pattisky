import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3Patti Sky Deposit Guide — Add Funds via JazzCash & EasyPaisa',
  description: 'Step-by-step walkthrough for topping up your 3Patti Sky wallet through JazzCash or EasyPaisa, plus a few things to check before you send your first deposit.',
  keywords: '3patti sky deposit, add money 3patti sky, 3patti sky jazzcash, 3patti sky easypaisa, 3patti sky recharge, top up 3patti sky wallet',
  openGraph: {
    title: '3Patti Sky Deposit Guide — Add Funds via JazzCash & EasyPaisa',
    description: 'How to top up your 3Patti Sky wallet through JazzCash or EasyPaisa, step by step.',
    url: 'https://3pattiskygame.com.pk/deposit-money-in-3patti-sky',
    siteName: '3Patti Sky',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3Patti Sky Deposit Guide',
    description: 'How to top up your 3Patti Sky wallet through JazzCash or EasyPaisa, step by step.',
  },
  alternates: {
    canonical: 'https://3pattiskygame.com.pk/deposit-money-in-3patti-sky',
  },
};

export default function DepositMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Adding Funds to Your 3Patti Sky Wallet
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              A short walkthrough covering JazzCash and EasyPaisa top-ups
            </p>
            <Link
              href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Get the App & Top Up
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Before you can sit down at a table on <Link href="/" className="text-accent hover:underline font-semibold">3Patti Sky</Link>, your wallet needs a balance. The app supports two local payment rails — JazzCash and EasyPaisa — and the whole top-up takes a couple of minutes from start to finish.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                None of the steps below require anything unusual: your own mobile wallet, a stable connection, and a few taps. Once you've built up a balance and want to cash out, the process for that is covered separately on the <Link href="/withdraw-money-from-3patti-sky" className="text-accent hover:underline font-semibold">withdrawal page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Deposit Money */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Topping Up, Step by Step
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
                <h3 className="text-xl font-bold text-[#FFA500] mb-3">1. Sign In</h3>
                <p className="text-gray-300 leading-relaxed">
                  Launch the app on a stable connection and log in with your registered mobile number and password.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
                <h3 className="text-xl font-bold text-[#4ade80] mb-3">2. Open the Shop</h3>
                <p className="text-gray-300 leading-relaxed">
                  From your dashboard, tap the shop icon — this is where every deposit begins.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
                <h3 className="text-xl font-bold text-[#60a5fa] mb-3">3. Pick a Wallet</h3>
                <p className="text-gray-300 leading-relaxed">
                  The deposit screen lists JazzCash and EasyPaisa as options — choose whichever wallet you already use.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
                <h3 className="text-xl font-bold text-[#f97316] mb-3">4. Set the Amount</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pick from the preset amounts — commonly Rs 200, Rs 500, Rs 1000, or Rs 2000 — based on what you're comfortable putting in.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
                <h3 className="text-xl font-bold text-[#FFA500] mb-3">5. Confirm the Chips Request</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tap Add Chips, then enter the wallet account number you'll be paying from, and submit.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
                <h3 className="text-xl font-bold text-[#4ade80] mb-3">6. Approve on Your Wallet App</h3>
                <p className="text-gray-300 leading-relaxed">
                  A payment request lands on your JazzCash or EasyPaisa account — open it and approve to release the funds.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
                <h3 className="text-xl font-bold text-[#60a5fa] mb-3">7. Balance Updates</h3>
                <p className="text-gray-300 leading-relaxed">
                  Most deposits land instantly; occasionally network delays push it back a few minutes. Once it clears, you're set to play.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Secure Deposits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Before You Send Anything
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Pay only from a wallet that's registered in your own name.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">A weak connection mid-transaction is the most common cause of a stuck deposit — check your signal first.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Your wallet PIN and app password are yours alone — no legitimate support agent will ever ask for them.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">First time depositing? Start with a small amount until you've seen the full cycle work end to end.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Set yourself a budget for the session and stick to it, regardless of how the games go.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Wrapping Up</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Funding your account comes down to four things: open the shop, pick a wallet, confirm the amount, and approve the request on your phone. There's nothing hidden or complicated about it.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Stick to the official app, use your own payment details, and the whole thing clears in minutes rather than hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  What's the fastest way to add money to 3Patti Sky?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Open the shop tab, choose JazzCash or EasyPaisa, pick an amount, and approve the request from your wallet app — most balances update within seconds.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Is it safe to link my wallet to the app?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Yes — deposits run through encrypted payment channels, and you're only ever approving a request from your own wallet, never handing over credentials.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  Which wallets can I deposit with?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  JazzCash and EasyPaisa are both supported directly in the app's shop section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Fund Your Account?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Grab the app and make your first deposit in under five minutes.
            </p>
            <Link
              href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Download 3Patti Sky Now
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What's the fastest way to add money to 3Patti Sky?", "acceptedAnswer": { "@type": "Answer", "text": "Open the shop tab, choose JazzCash or EasyPaisa, pick an amount, and approve the request from your wallet app — most balances update within seconds." } },
              { "@type": "Question", "name": "Is it safe to link my wallet to the app?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — deposits run through encrypted payment channels, and you're only ever approving a request from your own wallet, never handing over credentials." } },
              { "@type": "Question", "name": "Which wallets can I deposit with?", "acceptedAnswer": { "@type": "Answer", "text": "JazzCash and EasyPaisa are both supported directly in the app's shop section." } }
            ]
          })
        }}
      />
      {/* HowTo Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Add Funds to a 3Patti Sky Account",
            "description": "A short guide for topping up a 3Patti Sky wallet using JazzCash or EasyPaisa.",
            "step": [
              { "@type": "HowToStep", "name": "Sign In", "text": "Log in to the app with your registered mobile number and password." },
              { "@type": "HowToStep", "name": "Open the Shop", "text": "Tap the shop icon from your dashboard to begin a deposit." },
              { "@type": "HowToStep", "name": "Pick a Wallet", "text": "Choose JazzCash or EasyPaisa as your payment method." },
              { "@type": "HowToStep", "name": "Set the Amount", "text": "Select a deposit amount such as Rs 200, Rs 500, Rs 1000, or Rs 2000." },
              { "@type": "HowToStep", "name": "Confirm the Chips Request", "text": "Tap Add Chips and enter your wallet account number." },
              { "@type": "HowToStep", "name": "Approve on Your Wallet App", "text": "Approve the incoming payment request on JazzCash or EasyPaisa." },
              { "@type": "HowToStep", "name": "Balance Updates", "text": "Your 3Patti Sky balance updates, usually instantly." }
            ]
          })
        }}
      />
    </div>
  );
}
