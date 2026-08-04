import React, { useState } from 'react';

const clientList = [
  { name: "NIECCE", file: "NIECCE.avif" },
  { name: "Oaklyt", file: "Oaklyt.webp" },
  { name: "Falcon Impex", file: "Falcon_Impex.avif" },
  { name: "Sreenathji", file: "Sreenathji.webp" },
  { name: "Dr. Vishal", file: "Dr.Vishal.webp" },
  { name: "Pestle", file: "Pestle.png" },
  { name: "Finethy", file: "Finethy.png" },
  { name: "Nova Edu Bridge", file: "Nova_Edu_Bridge.png" },
  { name: "Aegon", file: "Aegon.png" },
  { name: "Ariah Saloon", file: "Ariah Saloon.webp" },
  { name: "Arun Nirman", file: "Arun Nirman.png" },
  { name: "BPL", file: "BPL.webp" },
  { name: "Baines Healthcare", file: "Baines Healthcare.webp" },
  { name: "Converging Mind", file: "Converging Mind.png" },
  { name: "Diamond Protection", file: "Diamond Protection.png" },
  { name: "Drive In Car", file: "Drive In Car.webp" },
  { name: "Emdee Inc", file: "Emdee Inc.png" },
  { name: "Green Tree", file: "Green_Tree.webp" },
  { name: "Hiranmayee", file: "Hiranmayee.webp" },
  { name: "InnoView", file: "InnoView.webp" },
  { name: "Juicy Tales", file: "Juicy_Tales.webp" },
  { name: "Kitchen Pod", file: "Kitchen Pod.webp" },
  { name: "Lenox", file: "Lenox.webp" },
  { name: "Massive Tronics", file: "Massive Tronics.png" },
  { name: "NV Tech", file: "NV Tech.webp" },
  { name: "Nviccta", file: "Nviccta.png" },
  { name: "Nvincy", file: "Nvincy.png" },
  { name: "Rajalakshmi", file: "Rajalakshmi.png" },
  { name: "Revlon", file: "Revlon.webp" },
  { name: "VCNR", file: "VCNR.png" },
  { name: "Work Blend", file: "Work Blend.png" },
  { name: "XPolead", file: "XPolead.webp" }
];

export default function ClientSlider() {
  const [isPaused, setIsPaused] = useState(false);

  // Split clients into 2 rows for dual infinite sliding track
  const row1 = clientList.slice(0, 16);
  const row2 = clientList.slice(16, 32);

  // Duplicate items for seamless 100% loop
  const duplicatedRow1 = [...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2];

  return (
    <section className="client-slider-section">
      <div className="client-slider-container">
        {/* Section Header */}
        <div className="client-section-header">
          <h2 className="client-title-main">Our Clients Trust Us Worldwide For</h2>
          <h3 className="client-title-sub">
            Our Excellent Works In <span className="highlight">Marketing and Technology Solutions</span>
          </h3>
        </div>

        {/* Slow Smooth Marquee Slideshow */}
        <div 
          className={`marquee-wrapper ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Row 1: Slow Left Scroll */}
          <div className="marquee-track track-left">
            {duplicatedRow1.map((client, idx) => {
              const imageSrc = new URL(`../../images/${client.file}`, import.meta.url).href;
              return (
                <div key={`r1-${idx}`} className="client-card-box marquee-card">
                  <div className="client-logo-wrapper">
                    <img 
                      src={imageSrc} 
                      alt={client.name} 
                      className="client-logo-img"
                      onError={(e) => {
                        e.target.src = `/images/${client.file}`;
                      }}
                    />
                  </div>
                  <span className="client-name-label">{client.name}</span>
                </div>
              );
            })}
          </div>

          {/* Row 2: Slow Right Scroll */}
          <div className="marquee-track track-right">
            {duplicatedRow2.map((client, idx) => {
              const imageSrc = new URL(`../../images/${client.file}`, import.meta.url).href;
              return (
                <div key={`r2-${idx}`} className="client-card-box marquee-card">
                  <div className="client-logo-wrapper">
                    <img 
                      src={imageSrc} 
                      alt={client.name} 
                      className="client-logo-img"
                      onError={(e) => {
                        e.target.src = `/images/${client.file}`;
                      }}
                    />
                  </div>
                  <span className="client-name-label">{client.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
