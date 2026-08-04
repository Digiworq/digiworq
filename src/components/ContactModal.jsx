import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Creative Branding', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h3 className="modal-title" style={{ color: '#10B981' }}>Thank You!</h3>
            <p className="modal-subtitle">Your inquiry has been received. The Digiworq team will contact you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="modal-title">Get in Touch with Digiworq</h3>
            <p className="modal-subtitle">Refining your vision with top-tier digital & creative solutions.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  required 
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  required 
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Service Interested In</label>
                <select 
                  className="form-input"
                  value={formData.service}
                  onChange={e => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Creative Branding">Creative Branding & Design</option>
                  <option value="Technology & Web">Technology & Web Development</option>
                  <option value="Video Production">Video Production & Shoots</option>
                  <option value="Digital Marketing">Digital Marketing & SEO</option>
                  <option value="2D & 3D Animation">2D & 3D Animation</option>
                  <option value="Printing Solutions">Printing Solutions</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details</label>
                <textarea 
                  className="form-textarea" 
                  rows="3" 
                  placeholder="Briefly describe your requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}>
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
