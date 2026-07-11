import {
  Receipt,
  Landmark,
  Calculator,
  BadgeDollarSign,
  FileText,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";

const gstTopics = [
  {
    icon: Receipt,
    title: "GST/HST Registration",
    description:
      "Learn when your business must register for GST/HST and how the registration process works.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-accounts.html",
  },

  {
    icon: BadgeDollarSign,
    title: "Charging GST/HST",
    description:
      "Understand when GST/HST must be charged on taxable goods and services.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html",
  },

  {
    icon: Calculator,
    title: "Input Tax Credits (ITCs)",
    description:
      "Recover the GST/HST paid on eligible business purchases and operating expenses.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/input-tax-credits.html",
  },

  {
    icon: FileText,
    title: "GST/HST Returns",
    description:
      "Learn how and when to file GST/HST returns and report net tax owing.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-returns.html",
  },
];

const governmentResources = [
  {
    title: "CRA GST/HST for Businesses",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses.html",
  },

  {
    title: "GST/HST Registration",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-accounts.html",
  },

  {
    title: "Input Tax Credits",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/input-tax-credits.html",
  },

  {
    title: "GST/HST Returns",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-returns.html",
  },

  {
    title: "GST/HST Forms & Publications",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications.html",
  },
];

export default function GSTHST() {

  return (

    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="GST / HST Resources"
        title="GST / HST Resource Centre"
        description="Simple guidance to help Canadian businesses understand GST/HST registration, collection, filing, and Input Tax Credits."
      />

      {/* Introduction */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            What is GST / HST?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            The Goods and Services Tax (GST) and Harmonized Sales Tax (HST)
            are consumption taxes that many Canadian businesses are required
            to collect on taxable sales. Registered businesses collect the
            tax from customers and remit it to the Canada Revenue Agency.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Businesses may also recover the GST/HST paid on eligible business
            expenses by claiming Input Tax Credits (ITCs), reducing the amount
            of tax that must be remitted.
          </p>

        </div>

      </section>
            {/* Common GST/HST Topics */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common GST / HST Topics
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Understanding your GST/HST responsibilities helps your business
            remain compliant while avoiding unnecessary penalties and interest.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {gstTopics.map((topic, index) => {

              const Icon = topic.icon;

              return (

                <a
                  key={index}
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition duration-300 group"
                >

                  <div className="flex items-start gap-5">

                    <div className="bg-[#0B2D4D] p-4 rounded-2xl">

                      <Icon
                        className="text-[#C8A24A]"
                        size={26}
                      />

                    </div>

                    <div className="flex-1">

                      <h3 className="text-2xl font-bold text-[#0B2D4D] group-hover:text-[#C8A24A] transition">

                        {topic.title}

                      </h3>

                      <p className="mt-4 text-gray-600 leading-7">

                        {topic.description}

                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 text-[#C8A24A] font-semibold">

                        Learn More from CRA

                        <ExternalLink size={18} />

                      </div>

                    </div>

                  </div>

                </a>

              );

            })}

          </div>

        </div>

      </section>


      {/* Things Every Business Should Know */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Things Every Business Should Know
          </h2>

          <div className="mt-10 space-y-8">

            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Know When Registration Is Required
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Most businesses must register for GST/HST once they exceed the
                small supplier threshold. Voluntary registration may also be
                beneficial for some businesses.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Keep Accurate Sales Records
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Maintain complete records of taxable sales, GST/HST collected,
                customer invoices, and supporting documents throughout the year.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Track Your Input Tax Credits
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Businesses may recover GST/HST paid on eligible business
                purchases by claiming Input Tax Credits (ITCs). Proper
                documentation is essential.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                File Returns On Time
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                GST/HST returns must be filed according to your assigned filing
                frequency. Filing and paying on time helps avoid penalties and
                interest charges.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* Official Government Resources */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Official Government Resources
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            The Canada Revenue Agency (CRA) provides official guidance on
            GST/HST registration, filing returns, Input Tax Credits, and
            compliance requirements. The resources below will take you directly
            to the relevant CRA pages.
          </p>

          <div className="mt-12 space-y-4">

            {governmentResources.map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-6 py-5 hover:border-[#C8A24A] hover:bg-white transition"
              >

                <span className="font-semibold text-[#0B2D4D]">
                  {item.title}
                </span>

                <ExternalLink className="text-[#C8A24A]" />

              </a>

            ))}

          </div>

        </div>

      </section>


      {/* Call To Action */}

      <section className="py-20 bg-[#0B2D4D]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Need Help With GST / HST?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Whether you need help registering for GST/HST, preparing returns,
            claiming Input Tax Credits, or understanding your filing
            obligations, Sky High Financial Management can help your business
            stay compliant and reduce costly filing mistakes.
          </p>

          <a
            href="/contact"
            className="inline-flex mt-10 bg-[#C8A24A] hover:bg-[#d6b15b] text-[#071F35] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            Book a Consultation
          </a>

        </div>

      </section>

    </>
  );
}