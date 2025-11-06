import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - Pure Glint Clean",
  description: "Terms of Service for Pure Glint Clean residential cleaning services in North Fort Worth Area.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-40 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Terms of Service
            </h1>
          </div>

          <div className="prose prose-lg max-w-none prose-gray text-gray-900 [&>*]:text-gray-900 [&_p]:text-gray-900 [&_li]:text-gray-900">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">TERMS AND CONDITIONS</h2>
              <p className="text-gray-900">
                These terms and conditions (the &quot;Terms and Conditions&quot;) govern the use of{" "}
                <a href="https://www.pureglintclean.com" className="text-blue-600 hover:text-blue-800">
                  www.pureglintclean.com
                </a>{" "}
                (the &quot;Site&quot;). This Site is owned and operated by Pure Glint Clean, LLC. This Site is an online
                booking platform for cleaning services.
              </p>
              <p className="mt-4 text-gray-900">
                By using this Site, you indicate that you have read and understand these Terms
                and Conditions and agree to abide by them at all times.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
            <p>
              All content published and made available on our Site is the property of Pure
              Glint Clean, LLC and the Site&apos;s creators. This includes, but is not limited to:
              images, text, logos, documents, downloadable files, and anything that contributes
              to the composition of our Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Contributions</h2>
            <p>Users may post the following information on our Site:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Photos</li>
              <li>Videos</li>
              <li>Public comments</li>
            </ul>
            <p className="mt-4">
              By posting publicly on our Site, you agree not to act illegally or violate these
              Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Accounts</h2>
            <p>When you create an account on our Site, you agree to the following:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                You are solely responsible for your account and the security and privacy of your
                account, including passwords or sensitive information attached to that account; and
              </li>
              <li>
                All personal information you provide to us through your account is up to date,
                accurate, and truthful and that you will update your personal information if it
                changes.
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate your account if you are using our
              Site illegally or if you violate these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sale of Services</h2>
            <p>These Terms and Conditions govern the sale of services available on our Site.</p>
            
            <p className="mt-4">The following services are available on our Site:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>One-Time Home Cleaning Services</li>
              <li>Recurring Home Cleaning Services</li>
            </ul>

            <p className="mt-4">The services will be paid for in full upon the completion of the service.</p>
            
            <p className="mt-4">
              These Terms and Conditions apply to all the services that are displayed on our
              Site at the time you access it. All information, descriptions, or images that we
              provide about our services are as accurate as possible. However, we are not
              legally bound by such descriptions, and we cannot guarantee the accuracy of all
              services we provide. You agree to purchase services from our Site at your own risk.
            </p>

            <p className="mt-4">
              We reserve the right to modify, reject, or cancel your order whenever necessary.
              If we cancel your order and have already processed your payment, we will give
              you a refund equal to the amount you paid. You agree that it is your
              responsibility to monitor your payment method to verify receipt of any refund.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">User Goods and Services</h2>
            <p>
              Our Site allows users to sell goods and services. We do not assume any
              responsibility for the goods and services users sell on our Site. We cannot guarantee the
              quality or accuracy of any goods and services sold by users. However, if we are
              made aware that a user is violating these Terms and Conditions, we reserve the
              right to suspend or prohibit that user from selling goods and services on our
              Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Subscriptions</h2>
            <p>
              Your subscription automatically renews and you will be automatically billed
              until we receive notification that you want to cancel the subscription.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cancellation Policy</h3>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p>
                We do not charge any cancellation or rescheduling fees as long as we receive at
                least 24 business hours&apos; notice (Monday – Friday, 7:00 AM – 11:00 PM EST).
              </p>
              <p className="mt-2">
                Call <a href="tel:8174057858" className="text-blue-600 hover:text-blue-800">(817) 405-7858</a> to cancel your services if needed.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payments</h2>
            <p>We accept the following payment methods on our Site:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Credit Card</li>
              <li>Debit</li>
              <li>Direct Debit</li>
            </ul>
            
            <p className="mt-4">
              When you provide us with your payment information, you authorize our use of and
              access to that payment instrument. By providing your payment information, you
              authorize us to charge the amount due. If we believe your payment violates any law
              or these Terms and Conditions, we reserve the right to cancel or reverse your
              transaction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refunds</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Refunds for Services</h3>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold">We offer NO REFUNDS once the service is completed.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Consumer Protection Law</h2>
            <p>
              Where any consumer protection legislation in your jurisdiction applies and
              cannot be excluded, these Terms and Conditions will not limit your legal rights and
              remedies under that legislation. These Terms and Conditions will be read subject
              to the mandatory provisions of that legislation. If there is a conflict between
              these Terms and Conditions and such legislation, the mandatory provisions will
              apply.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p>
              Pure Glint Clean, LLC and our directors, officers, agents, employees,
              subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages,
              liabilities, or expenses—including legal fees—arising from your use of the Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Indemnity</h2>
            <p>
              Except where prohibited by law, by using this Site you indemnify and hold
              harmless Pure Glint Clean, LLC and our directors, officers, agents, employees,
              subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities,
              and expenses—including legal fees—arising out of your use of our Site or your
              violation of these Terms and Conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Applicable Law</h2>
            <p>These Terms and Conditions are governed by the laws of the State of Texas.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Severability</h2>
            <p>
              If at any time any of the provisions in these Terms and Conditions are found to
              be inconsistent or invalid under applicable law, those provisions will be deemed
              void and removed from these Terms. All other provisions will remain valid and
              enforceable.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes</h2>
            <p>
              These Terms and Conditions may be amended from time to time in order to comply
              with the law and to reflect changes to how we operate our Site. We will notify
              users by email of changes to these Terms and Conditions or post a prominent notice
              on our Site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Details</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>Please contact us if you have any questions or concerns. Our contact details are as follows:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Phone:</strong> <a href="tel:8174057858" className="text-blue-600 hover:text-blue-800">(817) 405-7858</a></p>
                <p><strong>Address:</strong> 4364 Western Center Blvd PMB 2006, Fort Worth, TX 76137</p>
                <p><strong>Email:</strong> <a href="mailto:contact@pureglintclean.com" className="text-blue-600 hover:text-blue-800">contact@pureglintclean.com</a></p>
              </div>
              <p className="mt-4">You can also reach out through the feedback form available on our Site.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}