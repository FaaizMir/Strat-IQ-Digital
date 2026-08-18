"use client";

import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
  consent: false,
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.firstName.trim()) {
      nextErrors.firstName = "First name is required.";
    }
    if (!formData.lastName.trim()) {
      nextErrors.lastName = "Last name is required.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!EMAIL_RE.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.consent) {
      nextErrors.consent = "Please agree to be contacted before submitting.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData(initialFormData);
      setErrors({});
    } catch (err) {
      setServerError(err.message || "");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-message contact-form-message--success" role="status">
        Thank you! Your submission has been received!
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <div className="contact-field">
          <label className="contact-label" htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            className="contact-input"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <div id="firstName-error" className="contact-field-error">
              {errors.firstName}
            </div>
          )}
        </div>

        <div className="contact-field">
          <label className="contact-label" htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            className="contact-input"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && (
            <div id="lastName-error" className="contact-field-error">
              {errors.lastName}
            </div>
          )}
        </div>
      </div>

      <div className="contact-field">
        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="contact-input"
          placeholder="you@company.com"
          value={formData.email}
          onChange={handleChange}
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <div id="email-error" className="contact-field-error">
            {errors.email}
          </div>
        )}
      </div>

      <div className="contact-field">
        <label className="contact-label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="contact-input contact-textarea"
          placeholder="Tell us a bit about your brand and goals..."
          value={formData.message}
          onChange={handleChange}
          rows={6}
        />
      </div>

      <div className="contact-consent">
        <label className="contact-checkbox-label" htmlFor="consent">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="contact-checkbox"
            checked={formData.consent}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            By submitting this form, you agree to receive helpful resources and event updates.
          </span>
        </label>
        {errors.consent && (
          <div id="consent-error" className="contact-field-error">
            {errors.consent}
          </div>
        )}
      </div>

      {status === "error" && (
        <div className="contact-form-message contact-form-message--error" role="alert">
          Oops! Something went wrong while submitting the form.
          {serverError ? <span className="contact-form-message-detail"> {serverError}</span> : null}
        </div>
      )}

      <button type="submit" className="contact-submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Please wait..." : "Contact Us"}
      </button>
    </form>
  );
}
