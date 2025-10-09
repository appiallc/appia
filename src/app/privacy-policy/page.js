"use client";

import Header from "../component/header";
import Footer from "../component/footer";

export default function PrivacyPolicy() {
  return (
    <div className="font-inter min-h-screen overflow-x-hidden flex flex-col bg-white text-gray-800">
      <Header />
      <main className="flex-grow mb-8 px-4 sm:px-8 md:px-16 lg:px-32 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-red-500">
            🛡️ Privacy Policy
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
                At Appia Consultancy Services LLP, we value your privacy and are
                committed to being transparent about how we handle your
                information. This Privacy Policy explains how we manage data
                when you visit our website — and since we do not collect any
                personal information, you can browse with confidence.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                2. Information We Do Not Collect
              </h2>
              <p>
                We do not collect, store, or process any personally identifiable
                information (PII) such as:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name, email address, phone number, or postal address</li>
                <li>Payment or financial details</li>
                <li>Cookies or tracking data</li>
                <li>IP addresses or browser fingerprints</li>
              </ul>
              <p className="mt-2">
                Our website is strictly informational and designed only to
                provide details about our company, services, and contact
                methods.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                3. Use of Cookies
              </h2>
              <p>
                Our website does not use cookies or any similar tracking
                technologies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                4. Third-Party Services
              </h2>
              <p>
                We do not use third-party analytics, advertising networks, or
                embedded tools that collect user information.
              </p>
              <p className="mt-2">
                If we link to third-party websites (e.g., LinkedIn, GitHub,
                Instagram), please note that we are not responsible for their
                content or privacy practices. We encourage you to review their
                respective privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                5. Data Security
              </h2>
              <p>
                Since no personal data is collected or stored by us, there is no
                risk of unauthorized access, alteration, or misuse of personal
                data on our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                6. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any updates
                will be posted on this page with the revised “Effective Date.”
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-red-500 mb-2">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our
                practices, you can contact us at:
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
