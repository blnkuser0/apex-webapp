"use client";

import { useState } from "react";

const possibleQuestions = [
  "How does the product subscription or licensing work?",
  "How does the POC for these specific solutions work?",
  "How many existing clients using this solutions?",
  "What is your edge to your competitors?",
  "Do government agencies use this product?",
  "Do you provide training to clients?",
  "Do you provide 24/7 support?",
  "Can we integrate this specific product to our existing solution that we're using?",
  "What is your SLA in case of support?",
  "How can your solutions help our company?",
];

const phRegions = [
  "NCR – National Capital Region",
  "Region I – Ilocos Region",
  "Region II – Cagayan Valley",
  "Region III – Central Luzon",
  "Region IV-A – CALABARZON",
  "Region IV-B – MIMAROPA",
  "Region V – Bicol Region",
  "Region VI – Western Visayas",
  "Region VII – Central Visayas",
  "Region VIII – Eastern Visayas",
  "Region IX – Zamboanga Peninsula",
  "Region X – Northern Mindanao",
  "Region XI – Davao Region",
  "Region XII – SOCCSKSARGEN",
  "Region XIII – Caraga",
  "BARMM",
  "CAR – Cordillera Administrative Region",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobFunction: "",
    jobLevel: "",
    contact: "",
    email: "",
    company: "",
    country: "Philippines",
    region: "",
    province: "",
    municipality: "",
    barangay: "",
    address: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded border border-gray-200 bg-white/90 px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#c01130] focus:ring-1 focus:ring-[#c01130] transition-colors";
  const labelClass = "block text-xs font-semibold text-gray-700 mb-1";

  return (
    <section id="contact" className="relative py-16 lg:py-20 bg-[#c01130] overflow-hidden">
      {/* Circuit board background */}
      <img
        src="/circuit-bg.svg"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-40 pointer-events-none select-none"
      />
      {/* Background decorative shape */}
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at center, white 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — form */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Connect with our expert.
            </h2>
            <p className="text-white/80 text-sm mb-8">
              Fill out the form to share your feedback or request about our
              solutions.
            </p>

            {submitted ? (
              <div className="bg-white/10 border border-white/30 rounded p-8 text-center">
                <p className="text-white font-bold text-lg mb-2">
                  Thank you for reaching out!
                </p>
                <p className="text-white/80 text-sm">
                  Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 sm:p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className={labelClass}>
                      First Name <span className="text-[#c01130]">*</span>
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="eg. Will"
                      value={form.firstName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Last Name <span className="text-[#c01130]">*</span>
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="eg. De Leon"
                      value={form.lastName}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Job Function</label>
                    <input
                      name="jobFunction"
                      type="text"
                      placeholder="eg. CISO"
                      value={form.jobFunction}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Job Level</label>
                    <input
                      name="jobLevel"
                      type="text"
                      placeholder="eg. Grade 8"
                      value={form.jobLevel}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Contact <span className="text-[#c01130]">*</span>
                    </label>
                    <input
                      name="contact"
                      type="tel"
                      required
                      placeholder="eg. 09xx 1xx 23xx"
                      value={form.contact}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Email <span className="text-[#c01130]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="eg. address@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className={labelClass}>
                      Company <span className="text-[#c01130]">*</span>
                    </label>
                    <input
                      name="company"
                      type="text"
                      required
                      placeholder="eg. Silver ABC"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Country</label>
                    <input
                      name="country"
                      type="text"
                      value={form.country}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Region</label>
                    <select
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select...</option>
                      {phRegions.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Province</label>
                    <input
                      name="province"
                      type="text"
                      placeholder="Select..."
                      value={form.province}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Municipality</label>
                    <input
                      name="municipality"
                      type="text"
                      placeholder="Select..."
                      value={form.municipality}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Barangay</label>
                    <input
                      name="barangay"
                      type="text"
                      placeholder="Select..."
                      value={form.barangay}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Address</label>
                    <input
                      name="address"
                      type="text"
                      placeholder="eg. 7F xxx building bldg#c"
                      value={form.address}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#c01130] text-white text-sm font-bold tracking-wide rounded hover:bg-[#8c1b2f] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right — possible questions */}
          <div className="text-white">
            <h3 className="text-lg font-bold mb-6">
              Possible questions discussed You can expect:
            </h3>
            <ul className="flex flex-col gap-3">
              {possibleQuestions.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-white mt-1.5 shrink-0" />
                  <span className="text-sm text-white/90 leading-relaxed">{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
