import React, { useState } from 'react';
import { X, Gift, DollarSign, Handshake, User, Instagram, BarChart2, CheckCircle, ChevronRight, Rocket } from 'lucide-react';

const STEPS = [
  { id: 1, label: 'Personal Info', icon: <User size={18} /> },
  { id: 2, label: 'Social Profiles', icon: <Instagram size={18} /> },
  { id: 3, label: 'Stats & Niche', icon: <BarChart2 size={18} /> },
  { id: 4, label: 'Confirmation', icon: <CheckCircle size={18} /> },
];

export default function InfluencerModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '', email: '', phone: '', age: '', location: '', profession: '',
    // Step 2
    instagram: '', youtube: '', facebook: '', tiktok: '', twitter: '',
    // Step 3
    niche: '', followers: '', avgViews: '', collab: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    if (step < 4) setStep(s => s + 1);
  };
  const handleBack = () => {
    if (step > 1) setStep(s => s - 1);
  };

  const progressPct = ((step - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="influencer-modal-overlay" onClick={onClose}>
      <div className="influencer-modal-box" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="influencer-modal-header">
          <div className="influencer-modal-title">
            <Rocket size={20} color="#D97706" />
            <span>Join Our Influencer Network</span>
          </div>
          <button className="influencer-modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Benefit Pills */}
        <div className="influencer-benefit-pills">
          <span className="benefit-pill"><Gift size={14} /> Free Registration</span>
          <span className="benefit-pill"><DollarSign size={14} /> Best Earning Opportunities</span>
          <span className="benefit-pill"><Handshake size={14} /> Brand Collaborations</span>
        </div>

        {/* Progress Bar */}
        <div className="influencer-progress-track">
          <div className="influencer-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>

        {/* Step Indicators */}
        <div className="influencer-steps-row">
          {STEPS.map(s => (
            <div key={s.id} className={`influencer-step-dot ${step >= s.id ? 'active' : ''} ${step === s.id ? 'current' : ''}`}>
              {step > s.id ? <CheckCircle size={14} /> : s.icon}
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Form Body */}
        <div className="influencer-form-body">

          {/* STEP 1: Personal Information */}
          {step === 1 && (
            <>
              <div className="influencer-step-heading">
                <div className="step-avatar-icon"><User size={26} color="#D97706" /></div>
                <h3>Personal Information</h3>
                <p>Tell us about yourself</p>
              </div>
              <div className="influencer-form-grid">
                <div className="form-field">
                  <label>Full Name <span className="required">*</span></label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" />
                </div>
                <div className="form-field">
                  <label>Email Address <span className="required">*</span></label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@email.com" />
                </div>
                <div className="form-field">
                  <label>Phone Number <span className="required">*</span></label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                </div>
                <div className="form-field">
                  <label>Age</label>
                  <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Your age" />
                </div>
                <div className="form-field">
                  <label>Location <span className="required">*</span></label>
                  <input name="location" value={formData.location} onChange={handleChange} placeholder="City, State" />
                </div>
                <div className="form-field">
                  <label>Profession / Occupation</label>
                  <input name="profession" value={formData.profession} onChange={handleChange} placeholder="e.g., Student, Professional, Content Creator" />
                </div>
              </div>
            </>
          )}

          {/* STEP 2: Social Profiles */}
          {step === 2 && (
            <>
              <div className="influencer-step-heading">
                <div className="step-avatar-icon"><Instagram size={26} color="#D97706" /></div>
                <h3>Social Media Profiles</h3>
                <p>Share your social handles with us</p>
              </div>
              <div className="influencer-form-grid">
                <div className="form-field">
                  <label>Instagram Handle</label>
                  <input name="instagram" value={formData.instagram} onChange={handleChange} placeholder="@yourusername" />
                </div>
                <div className="form-field">
                  <label>YouTube Channel</label>
                  <input name="youtube" value={formData.youtube} onChange={handleChange} placeholder="Channel name or URL" />
                </div>
                <div className="form-field">
                  <label>Facebook Page</label>
                  <input name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Page name or URL" />
                </div>
                <div className="form-field">
                  <label>Twitter / X Handle</label>
                  <input name="twitter" value={formData.twitter} onChange={handleChange} placeholder="@yourusername" />
                </div>
                <div className="form-field" style={{ gridColumn: '1 / -1' }}>
                  <label>TikTok / Other Platform</label>
                  <input name="tiktok" value={formData.tiktok} onChange={handleChange} placeholder="Handle or platform link" />
                </div>
              </div>
            </>
          )}

          {/* STEP 3: Stats & Niche */}
          {step === 3 && (
            <>
              <div className="influencer-step-heading">
                <div className="step-avatar-icon"><BarChart2 size={26} color="#D97706" /></div>
                <h3>Content Stats & Niche</h3>
                <p>Help us understand your audience</p>
              </div>
              <div className="influencer-form-grid">
                <div className="form-field">
                  <label>Primary Niche <span className="required">*</span></label>
                  <select name="niche" value={formData.niche} onChange={handleChange}>
                    <option value="">Select your niche</option>
                    <option>Fashion & Lifestyle</option>
                    <option>Food & Travel</option>
                    <option>Tech & Gadgets</option>
                    <option>Fitness & Health</option>
                    <option>Beauty & Skincare</option>
                    <option>Education & Career</option>
                    <option>Business & Finance</option>
                    <option>Entertainment & Comedy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Total Followers / Subscribers</label>
                  <select name="followers" value={formData.followers} onChange={handleChange}>
                    <option value="">Select range</option>
                    <option>Under 10K</option>
                    <option>10K – 50K</option>
                    <option>50K – 100K</option>
                    <option>100K – 500K</option>
                    <option>500K – 1M</option>
                    <option>1M+</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Avg. Views / Reach per Post</label>
                  <input name="avgViews" value={formData.avgViews} onChange={handleChange} placeholder="e.g., 5000 views" />
                </div>
                <div className="form-field">
                  <label>Open to Brand Collaborations?</label>
                  <select name="collab" value={formData.collab} onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Yes, Paid Only</option>
                    <option>Yes, Barter/Gifting OK</option>
                    <option>Yes, Both</option>
                    <option>Need More Info</option>
                  </select>
                </div>
              </div>
            </>
          )}

          {/* STEP 4: Confirmation */}
          {step === 4 && (
            <div className="influencer-confirmation">
              <div className="confirmation-checkmark">
                <CheckCircle size={56} color="#D97706" />
              </div>
              <h3>You're Almost In! 🎉</h3>
              <p>Thank you, <strong>{formData.fullName || 'Influencer'}</strong>! Our team will review your profile and reach out to <strong>{formData.email || 'your email'}</strong> within 2–3 business days.</p>
              <div className="confirmation-perks">
                <div className="perk-item"><Gift size={16} color="#D97706" /> Free Registration – No Cost to Join</div>
                <div className="perk-item"><DollarSign size={16} color="#D97706" /> Earn from Brand Collaborations</div>
                <div className="perk-item"><Handshake size={16} color="#D97706" /> Connect with Top Indian Brands</div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Buttons */}
        <div className="influencer-modal-footer">
          {step > 1 && step < 4 && (
            <button className="influencer-back-btn" onClick={handleBack}>← Back</button>
          )}
          {step < 3 && (
            <button className="influencer-next-btn" onClick={handleNext}>
              Next <ChevronRight size={16} />
            </button>
          )}
          {step === 3 && (
            <button className="influencer-next-btn" onClick={handleNext}>
              Submit <CheckCircle size={16} />
            </button>
          )}
          {step === 4 && (
            <button className="influencer-next-btn" onClick={onClose}>
              Done <CheckCircle size={16} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
