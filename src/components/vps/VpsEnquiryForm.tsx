import React, { useState } from "react";
import User from "lucide-react/dist/esm/icons/user";
import Phone from "lucide-react/dist/esm/icons/phone";
import Server from "lucide-react/dist/esm/icons/server";
import MessageSquare from "lucide-react/dist/esm/icons/message-square";
import Send from "lucide-react/dist/esm/icons/send";
import Sparkles from "lucide-react/dist/esm/icons/sparkles";
import ShieldCheck from "lucide-react/dist/esm/icons/shield-check";
import AlertCircle from "lucide-react/dist/esm/icons/alert-circle";
import Check from "lucide-react/dist/esm/icons/check";
import { Reveal } from "@/components/Reveal";
import "./VpsEnquiryForm.css";

type FormErrors = Partial<Record<"name" | "number" | "requirements" | "message", string>>;

const PRESET_REQUIREMENTS = [
  "VPS Business (4 vCPU / 8GB RAM)",
  "VPS Starter (2 vCPU / 4GB RAM)",
  "VPS Enterprise (8 vCPU / 16GB RAM)",
  "cPanel / Plesk Managed VPS",
  "Custom Cloud Migration & Setup",
];

export function VpsEnquiryForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [requirements, setRequirements] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSelectPreset = (preset: string) => {
    setRequirements(preset);
    if (errors.requirements) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.requirements;
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    const trimmedRequirements = requirements.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters).";
    }

    if (
      !trimmedNumber ||
      trimmedNumber.length < 7 ||
      !/^[+\d\s()./-]+$/.test(trimmedNumber)
    ) {
      newErrors.number = "Please enter a valid phone/WhatsApp number.";
    }

    if (!trimmedRequirements || trimmedRequirements.length < 2) {
      newErrors.requirements =
        "Please enter your VPS requirements or choose a preset package.";
    }

    if (!trimmedMessage || trimmedMessage.length < 3) {
      newErrors.message = "Please share a brief message about your project.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSuccess(true);

    // Format strictly as requested:
    // Business VPS Hosting Enquiry
    // Name: [Name]
    // Number: [Number]
    // Requirements: [Requirements]
    // Message: [Message]
    const formattedMessage = `Business VPS Hosting Enquiry
Name: ${trimmedName}
Number: ${trimmedNumber}
Requirements: ${trimmedRequirements}
Message: ${trimmedMessage}`;

    const whatsappUrl = `https://wa.me/923100101777?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Reset success banner after 4 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <section className="vps-enquiry-section" aria-labelledby="vps-enquiry-title">
      <div className="vps-enquiry-container">
        {/* Section Header */}
        <Reveal className="vps-enquiry-header">
          <div className="vps-enquiry-badge">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Instant Consultation &amp; Quotes</span>
          </div>
          <h2 id="vps-enquiry-title" className="vps-enquiry-title">
            Tell Us Your VPS Requirements
          </h2>
          <p className="vps-enquiry-lead">
            Share your requirements and our team will assist you with the right Business VPS solution.
          </p>
        </Reveal>

        {/* Single Large Premium Responsive Card */}
        <Reveal y={25}>
          <div className="vps-enquiry-card" data-card>
            {/* Ambient Lighting Accents */}
            <div className="vps-enquiry-card__glow-top" aria-hidden="true" />
            <div className="vps-enquiry-card__glow-bottom" aria-hidden="true" />

            <form onSubmit={handleSubmit} noValidate className="vps-enquiry-form">
              {/* Row 1: Name & Phone Number */}
              <div className="vps-form-row">
                {/* Name */}
                <div className="vps-field-group">
                  <label htmlFor="vps-name" className="vps-field-label">
                    <span>Name</span>
                    <span className="vps-required-star">*</span>
                  </label>
                  <div
                    className={`vps-input-wrapper ${
                      errors.name ? "has-error" : ""
                    }`}
                  >
                    <User className="vps-input-icon" />
                    <input
                      id="vps-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.name;
                            return next;
                          });
                        }
                      }}
                      className="vps-input"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "vps-name-error" : undefined}
                    />
                  </div>
                  {errors.name && (
                    <p id="vps-name-error" className="vps-field-error">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Number */}
                <div className="vps-field-group">
                  <label htmlFor="vps-number" className="vps-field-label">
                    <span>Number</span>
                    <span className="vps-required-star">*</span>
                  </label>
                  <div
                    className={`vps-input-wrapper ${
                      errors.number ? "has-error" : ""
                    }`}
                  >
                    <Phone className="vps-input-icon" />
                    <input
                      id="vps-number"
                      name="number"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+92 310 0101777"
                      value={number}
                      onChange={(e) => {
                        setNumber(e.target.value);
                        if (errors.number) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.number;
                            return next;
                          });
                        }
                      }}
                      className="vps-input"
                      aria-invalid={!!errors.number}
                      aria-describedby={errors.number ? "vps-number-error" : undefined}
                    />
                  </div>
                  {errors.number && (
                    <p id="vps-number-error" className="vps-field-error">
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.number}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Requirements with preset chips */}
              <div className="vps-field-group">
                <label htmlFor="vps-requirements" className="vps-field-label">
                  <span>Requirements</span>
                  <span className="vps-required-star">*</span>
                </label>
                <div
                  className={`vps-input-wrapper ${
                    errors.requirements ? "has-error" : ""
                  }`}
                >
                  <Server className="vps-input-icon" />
                  <input
                    id="vps-requirements"
                    name="requirements"
                    type="text"
                    placeholder="e.g. VPS Business (4 vCPU / 8GB RAM), cPanel setup, or custom migration"
                    value={requirements}
                    onChange={(e) => {
                      setRequirements(e.target.value);
                      if (errors.requirements) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.requirements;
                          return next;
                        });
                      }
                    }}
                    className="vps-input"
                    aria-invalid={!!errors.requirements}
                    aria-describedby={
                      errors.requirements ? "vps-requirements-error" : undefined
                    }
                  />
                </div>

                {/* Helpful Quick Selection Chips */}
                <div className="vps-chips-container">
                  <span className="vps-chips-label">Quick Select:</span>
                  {PRESET_REQUIREMENTS.map((preset) => {
                    const isSelected = requirements === preset;
                    return (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handleSelectPreset(preset)}
                        className={`vps-chip-btn ${isSelected ? "active" : ""}`}
                      >
                        {isSelected && <Check className="h-3 w-3" />}
                        <span>{preset}</span>
                      </button>
                    );
                  })}
                </div>

                {errors.requirements && (
                  <p id="vps-requirements-error" className="vps-field-error">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.requirements}</span>
                  </p>
                )}
              </div>

              {/* Row 3: Message multiline textarea */}
              <div className="vps-field-group">
                <label htmlFor="vps-message" className="vps-field-label">
                  <span>Message</span>
                  <span className="vps-required-star">*</span>
                </label>
                <div
                  className={`vps-input-wrapper vps-textarea-wrapper ${
                    errors.message ? "has-error" : ""
                  }`}
                >
                  <MessageSquare className="vps-input-icon" />
                  <textarea
                    id="vps-message"
                    name="message"
                    rows={4}
                    placeholder="Describe your current hosting setup, expected traffic, target OS (Ubuntu/Rocky/Windows), or any specific questions..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) {
                        setErrors((prev) => {
                          const next = { ...prev };
                          delete next.message;
                          return next;
                        });
                      }
                    }}
                    className="vps-textarea"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "vps-message-error" : undefined}
                  />
                </div>
                {errors.message && (
                  <p id="vps-message-error" className="vps-field-error">
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button & Direct WhatsApp Connection Info */}
              <div className="vps-submit-area">
                <button
                  type="submit"
                  className="vps-enquiry-submit-btn"
                  id="vps-submit-button"
                >
                  <span>Send Message</span>
                  <Send className="vps-submit-icon" />
                </button>

                <div className="vps-enquiry-trust-note">
                  <ShieldCheck className="h-4 w-4 text-[#25d2dd]" />
                  <span>
                    Opens WhatsApp chat with +92 310 0101777 with pre-filled enquiry
                  </span>
                </div>
              </div>

              {isSuccess && (
                <div className="mt-2 rounded-xl border border-[#25d2dd]/50 bg-[#25d2dd]/10 p-3 text-center text-sm font-semibold text-[#25d2dd]">
                  ✓ Opening WhatsApp chat with your enquiry details...
                </div>
              )}
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
