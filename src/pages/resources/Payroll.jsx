import {
  Users,
  Receipt,
  Landmark,
  Calculator,
  FileText,
  ExternalLink,
} from "lucide-react";

import PageHero from "../../components/common/PageHero";

const payrollTopics = [
  {
    icon: Users,
    title: "Payroll Deductions",
    description:
      "Understand CPP, EI, and income tax deductions that employers must withhold from employee wages.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/calculating-deductions.html",
  },

  {
    icon: Calculator,
    title: "Payroll Calculations",
    description:
      "Learn how employee pay, deductions, and employer contributions are calculated.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/payroll-deductions-online-calculator.html",
  },

  {
    icon: Receipt,
    title: "Payroll Remittances",
    description:
      "Information about remitting payroll deductions to the Canada Revenue Agency on time.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/remitting-payroll-deductions.html",
  },

  {
    icon: FileText,
    title: "T4 Slips & Information Returns",
    description:
      "Learn about preparing T4 slips, T4 summaries, and annual payroll reporting requirements.",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/t4-t5-other-information-returns.html",
  },
];

const governmentResources = [
  {
    title: "CRA Payroll",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll.html",
  },

  {
    title: "Payroll Deductions Online Calculator",
    link:
      "https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-businesses/payroll-deductions-online-calculator.html",
  },

  {
    title: "Payroll Remittances",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/remitting-payroll-deductions.html",
  },

  {
    title: "T4 Information Returns",
    link:
      "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/t4-t5-other-information-returns.html",
  },

  {
    title: "Payroll Forms & Publications",
    link:
      "https://www.canada.ca/en/revenue-agency/services/forms-publications.html",
  },
];

export default function Payroll() {

  return (

    <>
      <PageHero
        image="/images/resources-hero.jpg"
        eyebrow="Payroll Resources"
        title="Payroll Resource Centre"
        description="Simple payroll guidance for Canadian employers to help manage employee payments, payroll deductions, and CRA reporting requirements."
      />

      {/* Introduction */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            What is Payroll?
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Payroll is the process of paying employees while calculating
            and withholding the required deductions such as Canada Pension
            Plan (CPP), Employment Insurance (EI), and income tax. Employers
            are responsible for remitting these deductions to the Canada
            Revenue Agency (CRA).
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Maintaining an accurate payroll system helps businesses comply
            with tax legislation, pay employees correctly, and avoid
            penalties resulting from late or incorrect filings.
          </p>

        </div>

      </section>
            {/* Common Payroll Topics */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
            Common Payroll Topics
          </h2>

          <p className="mt-5 text-center text-gray-600 max-w-3xl mx-auto">
            Payroll involves more than simply paying employees. Understanding
            the key payroll responsibilities helps businesses remain compliant
            and avoid costly penalties.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {payrollTopics.map((topic, index) => {

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


      {/* Things Every Employer Should Know */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0B2D4D]">
            Things Every Employer Should Know
          </h2>

          <div className="mt-10 space-y-8">

            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Register a Payroll Account
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Before paying employees, employers generally need to open a
                CRA payroll program account to report payroll deductions and
                remittances.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Deduct CPP, EI and Income Tax
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Employers are responsible for calculating and withholding the
                correct Canada Pension Plan (CPP), Employment Insurance (EI),
                and income tax from employee earnings.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Remit Payroll Deductions on Time
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                Payroll deductions must be remitted to the CRA according to
                your assigned remittance schedule. Late payments may result
                in penalties and interest.
              </p>

            </div>


            <div>

              <h3 className="text-xl font-semibold text-[#0B2D4D]">
                Prepare T4 Slips Each Year
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                At the end of each calendar year, employers prepare T4 slips
                and file the related information return with the CRA while
                providing employees with their copies.
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
            The Canada Revenue Agency (CRA) provides official payroll
            information, online calculators, employer guides, forms, and
            reporting requirements. The resources below will take you directly
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
            Need Help Managing Payroll?
          </h2>

          <p className="mt-8 text-lg text-blue-100 leading-8 max-w-3xl mx-auto">
            Payroll requires accuracy, timely remittances, and compliance with
            CRA regulations. Whether you need payroll setup, regular payroll
            processing, T4 preparation, ROEs, or payroll advice, Sky High
            Financial Management can help keep your business compliant and your
            employees paid correctly.
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