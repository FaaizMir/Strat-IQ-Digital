import "./contact.css";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Strat IQ Digital",
  description:
    "Get in touch with Strat IQ Digital — let's talk about growing your brand.",
};

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-container">
          <div className="contact-eyebrow">Get In Touch</div>
          <h2 className="contact-h2 funnel-bold">Contact Strat IQ Digital</h2>
          <p className="contact-tagline">Let&apos;s Get Your Brand Where It Belongs.</p>
        </div>
      </div>

      <div className="contact-container contact-body">
        <div className="contact-form-wrap">
          <ContactForm />
        </div>

        <div className="contact-direct">
          <div className="contact-direct-title">Prefer to reach out directly?</div>
          <a href="mailto:info@stratiq.digital.com" className="contact-direct-link">
            info@stratiq.digital.com
          </a>
          <a href="tel:+12897487424" className="contact-direct-link">
            +1 (289) 748 7424
          </a>
        </div>
      </div>
    </div>
  );
}
