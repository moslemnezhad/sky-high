export default function TaxDeadlines() {
  const deadlines = [
    {
      deadline: "April 30",
      description:
        "Personal income tax filing and payment deadline (most individuals)",
    },
    {
      deadline: "June 15",
      description:
        "Self-employed personal tax filing deadline (any balance owing is generally due April 30)",
    },
    {
      deadline: "2–3 months after year-end",
      description:
        "Corporate income tax balance due (depending on CRA eligibility rules)",
    },
    {
      deadline: "6 months after year-end",
      description:
        "T2 Corporation Income Tax Return filing deadline",
    },
    {
      deadline: "1 month after reporting period",
      description:
        "GST/HST return and payment (depends on your filing frequency)",
    },
    {
      deadline: "Varies",
      description:
        "Payroll remittances (depends on your CRA remitter type and frequency)",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-[#0B2D4D]">
          CRA Tax Deadlines
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12 max-w-3xl mx-auto">
          Below are some of the most common Canadian tax filing and payment
          deadlines for individuals and businesses. Your specific deadlines
          may vary depending on your filing status and reporting requirements.
        </p>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-200">

          <table className="w-full">

            <thead className="bg-[#0B2D4D] text-white">

              <tr>

                <th className="text-left px-6 py-5 font-semibold w-1/3">
                  Deadline
                </th>

                <th className="text-left px-6 py-5 font-semibold">
                  Description
                </th>

              </tr>

            </thead>

            <tbody>

              {deadlines.map((item, index) => (

                <tr
                  key={index}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >

                  <td className="px-6 py-5 font-semibold text-[#0B2D4D]">
                    {item.deadline}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {item.description}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-100 p-6">

          <h3 className="text-lg font-semibold text-[#0B2D4D] mb-3">
            Important Note
          </h3>

          <p className="text-gray-600 leading-7">
            Filing and payment deadlines may vary depending on your business
            structure, fiscal year-end, reporting frequency, and eligibility
            under CRA rules. For example, some Canadian-controlled private
            corporations (CCPCs) qualify for a three-month corporate tax
            payment deadline, while others must pay within two months.
            Always refer to the Canada Revenue Agency (CRA) for the most
            current requirements.
          </p>

        </div>

      </div>

    </section>
  );
}