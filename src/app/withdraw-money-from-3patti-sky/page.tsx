import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3Patti Sky Withdrawal Guide — Cashing Out to JazzCash & EasyPaisa',
  description: 'How to pull your winnings out of 3Patti Sky through JazzCash, EasyPaisa, or a bank transfer — the full process, timing, and what to do if a payout stalls.',
  keywords: '3patti sky withdrawal, cash out 3patti sky, 3patti sky payout, jazzcash withdrawal, easypaisa withdrawal, 3patti sky wallet cash out',
  openGraph: {
    title: '3Patti Sky Withdrawal Guide — Cashing Out to JazzCash & EasyPaisa',
    description: 'The full withdrawal process for 3Patti Sky: JazzCash, EasyPaisa, and bank transfer options explained.',
    url: 'https://3pattiskygame.com.pk/withdraw-money-from-3patti-sky',
    siteName: '3Patti Sky',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3Patti Sky Withdrawal Guide',
    description: 'The full withdrawal process for 3Patti Sky, explained step by step.',
  },
  alternates: {
    canonical: 'https://3pattiskygame.com.pk/withdraw-money-from-3patti-sky',
  },
};

export default function WithdrawMoneyPage() {
  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-secondary border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Cashing Out Your 3Patti Sky Winnings
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              JazzCash, EasyPaisa, or a direct bank transfer — pick what suits you
            </p>
            <Link
              href="https://3pattiskypk1.com?from_gameid=5286189&channelCode=100000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              Get Started
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
                <Link href="/" className="text-accent hover:underline font-semibold">3Patti Sky</Link> hosts several Teen Patti variants alongside a handful of other table games, and once a session goes your way, moving that balance out is the next step.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The cash-out flow isn't complicated, but it does need accurate details on your end — a mismatched account number or name is the single most common reason a payout gets held up. Make sure you've already <Link href="/deposit-money-in-3patti-sky" className="text-accent hover:underline font-semibold">funded your account</Link> and played a bit before you try withdrawing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-By-Step Guide */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              The Withdrawal Flow, Start to Finish
            </h2>

            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
                <h3 className="text-xl font-bold text-[#FFA500] mb-3">1. Log Into Your Account</h3>
                <p className="text-gray-300 leading-relaxed">
                  Open the app on a stable connection and sign in with your registered number and password.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
                <h3 className="text-xl font-bold text-[#4ade80] mb-3">2. Head to Your Wallet</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your current balance sits here, alongside the deposit and withdraw buttons.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
                <h3 className="text-xl font-bold text-[#60a5fa] mb-3">3. Tap Withdraw</h3>
                <p className="text-gray-300 leading-relaxed">
                  This opens the cash-out screen with your available payment methods and amount fields.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
                <h3 className="text-xl font-bold text-[#f97316] mb-3">4. Enter the Amount</h3>
                <p className="text-gray-300 leading-relaxed">
                  Type in how much you'd like to cash out, staying within your account's current withdrawal limits.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
                <h3 className="text-xl font-bold text-[#FFA500] mb-3">5. Choose How to Receive It</h3>
                <p className="text-gray-300 leading-relaxed">
                  EasyPaisa, JazzCash, or bank transfer — whichever is easiest for you to check.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
                <h3 className="text-xl font-bold text-[#4ade80] mb-3">6. Double-Check Your Details</h3>
                <p className="text-gray-300 leading-relaxed">
                  Account number and name need to match exactly — this is where most delays come from, so review before submitting.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
                <h3 className="text-xl font-bold text-[#60a5fa] mb-3">7. Submit the Request</h3>
                <p className="text-gray-300 leading-relaxed">
                  Once everything checks out, confirm and send the withdrawal request.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
                <h3 className="text-xl font-bold text-[#f97316] mb-3">8. Let It Process</h3>
                <p className="text-gray-300 leading-relaxed">
                  Most requests clear within a day; occasional delays happen during high-volume periods or network issues.
                </p>
              </div>

              <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
                <h3 className="text-xl font-bold text-[#FFA500] mb-3">9. Confirm Receipt</h3>
                <p className="text-gray-300 leading-relaxed">
                  Check your wallet or bank account for the incoming payment — once it lands, it's yours to use freely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips for Efficient Payout */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Getting Paid Without Delays
            </h2>
            <div className="bg-secondary rounded-2xl shadow-xl p-8 md:p-12">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Cash out to the same account details you registered with — mismatches are the #1 delay cause.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Batching a few small wins into one larger withdrawal is quicker than cashing out every round.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">Keep the app updated — payout screens occasionally change with new releases.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">An unverified account is the second most common reason a request stalls — verify early.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-gray-300">If a payout hasn't shown up after the expected window, reach out to support rather than resubmitting.</span>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">In Short</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Withdrawing from 3Patti Sky is straightforward as long as your account details are accurate: open the wallet, pick a payout method, enter the right information, and confirm.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Stay within the posted limits, keep your details current, and payouts should reach you without any drama.
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
                  What's the smallest amount I can withdraw?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Rs 100 is the minimum cash-out amount on 3Patti Sky.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  How long until a withdrawal actually arrives?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Typically somewhere between 3 and 24 hours, though busy periods or network hiccups can push it further out.
                </p>
              </div>

              <div className="bg-secondary rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-accent mb-3">
                  My payout didn't go through — what now?
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Reach out to 3Patti Sky's customer support with your request details so they can look into and approve it.
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
              Got Winnings Waiting?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get the app and cash out securely whenever you're ready.
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
              { "@type": "Question", "name": "What's the smallest amount I can withdraw?", "acceptedAnswer": { "@type": "Answer", "text": "Rs 100 is the minimum cash-out amount on 3Patti Sky." } },
              { "@type": "Question", "name": "How long until a withdrawal actually arrives?", "acceptedAnswer": { "@type": "Answer", "text": "Typically somewhere between 3 and 24 hours, though busy periods or network hiccups can push it further out." } },
              { "@type": "Question", "name": "My payout didn't go through — what now?", "acceptedAnswer": { "@type": "Answer", "text": "Reach out to 3Patti Sky's customer support with your request details so they can look into and approve it." } }
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
            "name": "How to Withdraw Money from 3Patti Sky",
            "description": "The full cash-out process for 3Patti Sky using JazzCash, EasyPaisa, or bank transfer.",
            "step": [
              { "@type": "HowToStep", "name": "Log Into Your Account", "text": "Sign in with your registered mobile number and password." },
              { "@type": "HowToStep", "name": "Head to Your Wallet", "text": "Open the wallet section to view your balance and payout options." },
              { "@type": "HowToStep", "name": "Tap Withdraw", "text": "Open the cash-out screen with available payment methods." },
              { "@type": "HowToStep", "name": "Enter the Amount", "text": "Type the amount you want to withdraw, within your account limits." },
              { "@type": "HowToStep", "name": "Choose How to Receive It", "text": "Pick EasyPaisa, JazzCash, or bank transfer." },
              { "@type": "HowToStep", "name": "Double-Check Your Details", "text": "Confirm your account number and name are entered correctly." },
              { "@type": "HowToStep", "name": "Submit the Request", "text": "Send the withdrawal request for processing." },
              { "@type": "HowToStep", "name": "Let It Process", "text": "Wait for the request to clear, usually within 24 hours." },
              { "@type": "HowToStep", "name": "Confirm Receipt", "text": "Check your wallet or bank account for the incoming payment." }
            ]
          })
        }}
      />
    </div>
  );
}
