"use client";

import Header from "../component/header";
import Footer from "../component/footer";

export default function TermsAndConditions() {
  return (
    <div className="font-inter min-h-screen overflow-x-hidden flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow mb-8 px-4 sm:px-8 md:px-16 lg:px-32 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-red-500">
            ⚖️ Terms and Conditions
          </h1>
          <p className="text-center text-sm text-gray-500 mb-10">
            <strong>Effective Date:</strong> 10-10-2025 <br />
            <strong>Company Name:</strong> Appia Consultancy Services LLP <br />
            <strong>Website:</strong>{" "}
            <a
              href="https://www.appia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline cursor-pointer"
            >
              www.appia.in
            </a>
          </p>

          <section className="space-y-8 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                1. Introduction
              </h2>
              <p>
                Welcome to Appia Consultancy Services LLP! By accessing or using
                our website, you agree to comply with these Terms and
                Conditions. If you do not agree, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                2. Use of the Website
              </h2>
              <p>
                The content on this website is for general informational
                purposes only.
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                  You agree not to misuse the website, attempt to hack, or
                  disrupt its normal functioning.
                </li>
                <li>
                  You must not copy, reproduce, or distribute any content
                  without prior written permission.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                and images — is the property of Appia Consultancy Services LLP
                and is protected by applicable copyright and intellectual
                property laws.
              </p>
              <p className="mt-2">
                You may view and download materials for personal or
                informational use only. Any commercial use or modification
                without written consent is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                4. No Warranties
              </h2>
              <p>
                While we strive to keep the website accurate and up to date, we
                make no warranties about:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>The completeness or reliability of any content</li>
                <li>The website being error-free or continuously available</li>
              </ul>
              <p className="mt-2">
                All information is provided on an “as is” basis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                5. Limitation of Liability
              </h2>
              <p>
                Appia Consultancy Services LLP shall not be held liable for any
                damages, losses, or issues arising from:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your use or inability to use the website</li>
                <li>Reliance on information provided herein</li>
                <li>Any technical or performance issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                6. Links to Other Websites
              </h2>
              <p>
                Our website may include links to external websites for your
                convenience. We do not endorse or assume responsibility for the
                content or privacy practices of any third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                7. Modifications to Terms
              </h2>
              <p>
                We reserve the right to update or modify these Terms and
                Conditions at any time without prior notice. Any changes will be
                posted on this page with the updated effective date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                8. Governing Law
              </h2>
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of India. Any disputes shall be subject
                to the exclusive jurisdiction of the courts located in Gujarat.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                9. Contact Us
              </h2>
              <p>
                For questions or concerns regarding these Terms and Conditions,
                please contact us at:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-center gap-2">
                  📧 <span className="font-semibold">Email:</span>
                  <a
                    href="mailto:info@appia.in"
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    info@appia.in
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  🌐 <span className="font-semibold">Website:</span>
                  <a
                    href="https://www.appia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    www.appia.in
                  </a>
                </li>
                <li>
                  🏢 <strong>Address:</strong> Ahmedabad, India
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
