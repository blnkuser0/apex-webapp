"use client";

import Image from "next/image";
import { useState } from "react";

const phRegions = [
  "NCR - National Capital Region",
  "Region I - Ilocos Region",
  "Region II - Cagayan Valley",
  "Region III - Central Luzon",
  "Region IV-A - CALABARZON",
  "Region IV-B - MIMAROPA",
  "Region V - Bicol Region",
  "Region VI - Western Visayas",
  "Region VII - Central Visayas",
  "Region VIII - Eastern Visayas",
  "Region IX - Zamboanga Peninsula",
  "Region X - Northern Mindanao",
  "Region XI - Davao Region",
  "Region XII - SOCCSKSARGEN",
  "Region XIII - Caraga",
  "BARMM",
  "CAR - Cordillera Administrative Region",
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded border border-gray-200 bg-white/90 px-3 py-1.5 text-xs text-gray-800 placeholder:text-gray-400 transition-colors focus:border-[#c01130] focus:outline-none focus:ring-1 focus:ring-[#c01130] sm:py-2 sm:text-sm";
  const labelClass = "mb-1 block text-[11px] font-semibold text-gray-700";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#c01130] bg-cover bg-center bg-no-repeat py-8 sm:py-10 lg:py-12"
      style={{ backgroundImage: "url('/img/contact-section.png')" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto mb-6 max-w-5xl text-center lg:mb-8">
          <h2 className="mb-2 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-[34px]">
            Let's Build the Right Solution for You
          </h2>
          <p className="text-sm font-light leading-relaxed text-white/95 sm:text-base">
            Share a few details and our specialists will get in touch to
            understand your needs and recommend exceptional solutions.
          </p>
        </div>

        <div className="mx-auto grid max-w-[980px] grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto w-full max-w-[460px]">
            <Image
              src="/img/contact-group.png"
              alt="What you will get"
              width={460}
              height={472}
              className="h-auto w-full rounded-lg"
              sizes="(max-width: 1024px) 100vw, 30vw"
            />
          </div>

          <div className="mx-auto w-full max-w-[460px]">
            {submitted ? (
              <div className="rounded border border-white/30 bg-white/10 p-8 text-center">
                <p className="mb-2 text-lg font-bold text-white">
                  Thank you for reaching out!
                </p>
                <p className="text-sm text-white/80">
                  Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-lg bg-white p-4 shadow-xl"
              >
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
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
                  <div className="sm:col-span-2">
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
                      {phRegions.map((region) => (
                        <option key={region} value={region}>
                          {region}
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

                {error && (
                  <p className="mt-3 text-sm font-medium text-red-600">
                    {error}
                  </p>
                )}

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded bg-[#c01130] py-2.5 text-sm font-bold tracking-wide text-white transition-colors hover:bg-[#8c1b2f] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
