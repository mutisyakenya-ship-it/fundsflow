import { useEffect,useRef } from "react";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div ref={contactRef} style={styles.container}>
      <h1 style={{color:"gold"}}>Open support</h1>
      <p>Have a question about your proposal or found a bug in our smart contract?</p>

      <div style={styles.grid}>
        {/* Inquiry Form */}
        <section style={styles.formSection}>
          <h3 style={{color:"gold"}}>Send a Message</h3>
          <form style={styles.form}>
            <input type="text" placeholder="Wallet Address (Optional)" style={styles.input} />
            <input type="email" placeholder="Email Address" style={styles.input} />
            <textarea placeholder="How can we help?" style={styles.textarea}></textarea>
            <button type="submit" style={{backgroundColor:"gold", color:"black", border:"none", borderRadius:"5px", cursor:"pointer"}}>Send Inquiry</button>
          </form>
        </section>

        {/* Social/Web3 Links */}
        <section style={styles.socialSection}>
          <h3 style={{color:"gold"}}>Join the Flow</h3>
          <ul style={styles.list}>
            <li><strong>Discord:</strong> Join the DAO discussion</li>
            <li><strong>X / Twitter:</strong> Latest funding updates</li>
            <li><strong>GitHub:</strong> Audit our Smart Contracts</li>
            <li><strong>Snapshot:</strong> View active governance votes</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: '50px', maxWidth: '1000px', margin: '0 auto', color: '#333' },
  grid: { display: 'flex', gap: '40px', marginTop: '30px' },
  formSection: { flex: 2 },
  socialSection: { flex: 1,color:"white", backgroundColor: '#1a0e35', padding: '20px', borderRadius: '12px' },
  input: { width: '100%', marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' },
  textarea: { width: '100%', height: '100px', marginBottom: '15px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' },
  button: { padding: '10px 20px', backgroundColor: 'gold', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  list: { listStyle: 'none', padding: 0, lineHeight: '2' }
};

export default Contact;