import { useEffect, useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={contactRef} className="contact-page">
      <h1 className="text-gold">Open support</h1>
      <p>Have a question about your proposal or found a bug in our smart contract?</p>

      <div className="contact-grid">
        <section className="contact-form-section">
          <h3 className="text-gold">Send a Message</h3>
          <form>
            <input type="text" placeholder="Wallet Address (Optional)" className="contact-input" />
            <input type="email" placeholder="Email Address" className="contact-input" />
            <textarea placeholder="How can we help?" className="contact-textarea"></textarea>
            <button type="submit" className="contact-submit-btn">
              Send Inquiry
            </button>
          </form>
        </section>

        <section className="contact-social-section">
          <h3 className="text-gold">Join the Flow</h3>
          <ul className="contact-list">
            <li>
              <strong>Discord:</strong> Join the DAO discussion
            </li>
            <li>
              <strong>X / Twitter:</strong> Latest funding updates
            </li>
            <li>
              <strong>GitHub:</strong> Audit our Smart Contracts
            </li>
            <li>
              <strong>Snapshot:</strong> View active governance votes
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
