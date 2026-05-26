"use client";
import React, { useState } from "react";
import { contactFormSectionBackground } from "@/lib/contact-backdrop";

const countryCodes = [
  "+91",
  "+1" 
 
];

const services = [ 
  "SEO",
  "Local SEO",
  "Social Media Marketing",  
  "Email Marketing",    
  "Saas Based Application",
  "E-commerce",
  "Web Design",
  "UI/UX Design",
  "Service Design",
  "Brand Design",
  "IOS App Development",
  "Android App Development",
  "React Native App Development",
  "Ionic App Development",
  "Xamarin App Development",
  "Flutter App Development",
];

const budgets = ["$0 - $10K", "$10K - $20K", "$20K - $50K", "$50K+"];

const inputStyle: React.CSSProperties = {
  padding: "0 20px",
  height: "50px",
  fontSize: "18px",
  background: "#181A1B",
  border: "1px solid #1F2122",
  color: "white",
  borderRadius: "8px",
  outline: "none",
  fontFamily: "'DM Sans', sans-serif",
  width: "100%",
};

const labelStyle: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "1.4",
  color: "white",
  opacity: 0.6,
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

export default function ContactForm() {
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [countryCode, setCountryCode] = useState("+1");
  const [btnHover, setBtnHover] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-12 text-white sm:py-16 lg:py-24"
      style={contactFormSectionBackground}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[40%_60%] lg:gap-12">
          {/* Left: Contact Information */}
          <div
            className="flex flex-col gap-[30px] rounded-[20px] bg-[#1F2122] p-6 text-white sm:p-8 lg:p-[40px]"
          >
            {/* Let's Connect */}
            <div>
              <h3
                style={{
                  fontSize: "30px",
                  fontWeight: "700",
                  lineHeight: "1.3",
                  marginBottom: "10px",
                }}
              >
                Let&apos;s Connect
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "1.6",
                  opacity: 0.6,
                }}
              >
                Have questions or need support? Our friendly team is ready to
                assist you reach out anytime!
              </p>
            </div>

            {/* Canada */}
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src="https://devmark.studio/assets/img/contact-us/india-flag.png"
                  alt="India"
                  style={{ width: "28px", height: "auto" }}
                />
                India{" "}
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "6px",
                  opacity: 0.7,
                }}
              >
                Katju Nagar, Ratlam, Madhya Pradesh 457001
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "6px",
                }}
              >
                <strong style={{ fontWeight: "600" }}>Email:</strong>{" "}
                <a href="mailto:info@devmark.studio" style={{ color: "white" }}>
                  info@arthzone.co.in
                </a>
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                <strong style={{ fontWeight: "600" }}>Call/Message:</strong>{" "}
                <a
                  href="https://wa.me/918839354160?text=Hello%2C%20I%20am%20interested%20in%20your%20service"
                  style={{ color: "white" }}
                >
                  +91 9685816724
                </a>
              </p>
            </div>

            {/* India */}
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  src="https://devmark.studio/assets/img/contact-us/india-flag.png"
                  alt="India"
                  style={{ width: "28px", height: "auto" }}
                />
                India
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "6px",
                  opacity: 0.7,
                }}
              >
                Mandsaur Road, Pratapgarh, Rajsthan 312605
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  marginBottom: "6px",
                }}
              >
                <strong style={{ fontWeight: "600" }}>Email:</strong>{" "}
                <a href="mailto:info@devmark.studio" style={{ color: "white" }}>
                  info@arthzone.co.in
                </a>
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                <strong style={{ fontWeight: "600" }}>Call/Message:</strong>{" "}
                <a
                  href="https://wa.me/918839354160?text=Hello%2C%20I%20am%20interested%20in%20your%20service"
                  style={{ color: "white" }}
                >
                  +91 8839354160
                </a>
              </p>
            </div>

            {/* Follow Us */}
            <div>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: "600",
                  lineHeight: "1.3",
                  marginBottom: "10px",
                }}
              >
                Follow Us:
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  opacity: 0.6,
                  marginBottom: "15px",
                }}
              >
                Stay connected and inspired follow us for the latest updates,
                tech tips, and behind-the-scenes moments.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {[
                  {
                    href: "https://www.instagram.com/arthzone_technologies/",
                    title: "Instagram - @arthzone_technologies",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.instagram.com/arthzone_technologies/",
                    title: "Facebook - @arthzone_technologies",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.instagram.com/arthzone_technologies/",

                    title: "Dribbble - @arthzone_technologies",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.instagram.com/arthzone_technologies/",

                    title: "Behance - @arthzone_technologies",
                    icon: (
                      <svg
                        viewBox="0 0 25 16"
                        width="20"
                        height="14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.96875 7.19221C11.3352 6.53909 12.0484 5.55081 12.0484 4.01252C12.0484 0.978931 9.78828 0.239868 7.18008 0.239868H0V15.468H7.38203C10.1492 15.468 12.7488 14.1403 12.7488 11.0465C12.7488 9.1344 11.8422 7.72073 9.96875 7.19221ZM3.34727 2.83948H6.48828C7.6957 2.83948 8.78281 3.17893 8.78281 4.57971C8.78281 5.87307 7.93633 6.39299 6.7418 6.39299H3.34727V2.83948ZM6.92656 12.8813H3.34727V8.68752H6.99531C8.46914 8.68752 9.40156 9.30198 9.40156 10.8617C9.40156 12.4 8.28867 12.8813 6.92656 12.8813ZM22.3309 2.5387H16.1562V1.03909H22.3309V2.5387ZM24.75 10.1141C24.75 6.85276 22.8422 4.13284 19.3832 4.13284C16.023 4.13284 13.7414 6.6594 13.7414 9.96799C13.7414 13.4012 15.9027 15.7559 19.3832 15.7559C22.0172 15.7559 23.723 14.5699 24.5438 12.0477H21.8711C21.5832 12.9887 20.3973 13.4871 19.4777 13.4871C17.7031 13.4871 16.7707 12.4473 16.7707 10.6813H24.7242C24.7371 10.5008 24.75 10.3074 24.75 10.1141ZM16.775 8.77346C16.8738 7.32542 17.8363 6.41877 19.2887 6.41877C20.8098 6.41877 21.5746 7.31252 21.7035 8.77346H16.775Z"
                          fill="currentColor"
                        />
                      </svg>
                    ),
                  },
                  {
                    href: "https://www.instagram.com/arthzoneindia/",

                    title: "LinkedIn - @arthzone_technologies",
                    icon: (
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "44px",
                      height: "44px",
                      background: "#101010",
                      border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "10px",
                      color: "white",
                      transition: "0.3s",
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="mt-10 lg:mt-0 lg:pl-[60px]">
            <form
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {/* First Name */}
              <div style={fieldStyle}>
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  style={inputStyle}
                />
              </div>

              {/* Last Name */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Last Name</label>
                <input type="text" placeholder="Last Name" style={inputStyle} />
              </div>

              {/* Email */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="random@gmail.com"
                  style={inputStyle}
                />
              </div>

              {/* Phone Number */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Phone Number</label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    style={{
                      padding: "0 8px",
                      height: "50px",
                      fontSize: "16px",
                      background: "#181A1B",
                      border: "1px solid #1F2122",
                      color: "white",
                      borderRadius: "8px",
                      outline: "none",
                      minWidth: "80px",
                      cursor: "pointer",
                      appearance: "none" as const,
                      WebkitAppearance: "none" as const,
                      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg width='16' height='16' viewBox='0 0 20 20' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 6px center",
                      backgroundSize: "14px",
                      paddingRight: "26px",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {countryCodes.map((code, idx) => (
                      <option key={`${code}-${idx}`} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="555-55-55-55"
                    style={{ ...inputStyle, flex: 1 }}
                  />
                </div>
              </div>

              {/* Current Website */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Current Website</label>
                <input
                  type="url"
                  placeholder="https://yourwebsite.com"
                  style={inputStyle}
                />
              </div>

              {/* Reference Website */}
              <div style={fieldStyle}>
                <label style={labelStyle}>Reference Website</label>
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  style={inputStyle}
                />
              </div>

              {/* Service Select - Full Width */}
              <div style={fieldStyle} className="sm:col-span-2">
                <label style={labelStyle}>
                  What service are you looking for?
                </label>
                <select
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    appearance: "none" as const,
                    WebkitAppearance: "none" as const,
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg width='16' height='16' viewBox='0 0 20 20' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "18px",
                    paddingRight: "40px",
                  }}
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget - Full Width */}
              <div style={fieldStyle} className="sm:col-span-2">
                <label style={labelStyle}>
                  What&apos;s your project budget?
                </label>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {budgets.map((budget) => (
                    <div
                      key={budget}
                      onClick={() => setSelectedBudget(budget)}
                      style={{
                        padding: "12px 20px",
                        fontSize: "18px",
                        background:
                          selectedBudget === budget ? "white" : "#181A1B",
                        border: "1px solid #1F2122",
                        color: selectedBudget === budget ? "#101010" : "white",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "0.4s",
                        userSelect: "none",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {budget}
                    </div>
                  ))}
                </div>
              </div>

              {/* Message - Full Width */}
              <div style={fieldStyle} className="sm:col-span-2">
                <label style={labelStyle}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what we can help you with"
                  style={{
                    padding: "12px 20px",
                    fontSize: "18px",
                    background: "#181A1B",
                    border: "1px solid #1F2122",
                    color: "white",
                    borderRadius: "8px",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "'DM Sans', sans-serif",
                    width: "100%",
                  }}
                />
              </div>

              {/* Attach File - Full Width */}
              <div style={fieldStyle} className="sm:col-span-2">
                <label style={labelStyle}>Attach File</label>
                <input
                  type="file"
                  style={{
                    padding: "12px 20px",
                    fontSize: "16px",
                    background: "#181A1B",
                    border: "1px solid #1F2122",
                    color: "white",
                    borderRadius: "8px",
                    outline: "none",
                    cursor: "pointer",
                    width: "100%",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              </div>

              {/* Submit Button - Full Width */}
              <button
                type="submit"
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
                className="sm:col-span-2"
                style={{
                  padding: "0 26px",
                  border: "2px solid #7614EF",
                  borderRadius: "12px",
                  height: "60px",
                  background: btnHover ? "white" : "#7614EF",
                  color: btnHover ? "#7614EF" : "white",
                  fontSize: "20px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.4s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
