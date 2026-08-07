import React from 'react';
import CreativeServicePage from './CreativeServicePage';
import TechServicePage from './TechServicePage';
import VideoProductionPage from './VideoProductionPage';
import DigitalMarketingPage from './DigitalMarketingPage';
import Animation2DPage from './Animation2DPage';
import Animation3DPage from './Animation3DPage';
import PrintingSolutionsPage from './PrintingSolutionsPage';
import PhotographyPage from './PhotographyPage';
import VideographyPage from './VideographyPage';

// Dedicated Rich Sub-Service Page Imports
import BrandingSolutionsPage from './creative/BrandingSolutionsPage';
import WebsiteDevPage from './tech/WebsiteDevPage';

// Dedicated Video Production Sub-Services
import IndoorOutdoorShootingPage from './video-production/IndoorOutdoorShootingPage';
import VideoEditingPage from './video-production/VideoEditingPage';
import ExplainerVideosPage from './video-production/ExplainerVideosPage';
import AdFilmsPage from './video-production/AdFilmsPage';
import PodcastVideosPage from './video-production/PodcastVideosPage';
import BrandFilmsPage from './video-production/BrandFilmsPage';
import CorporateShootVideosPage from './video-production/CorporateShootVideosPage';
import ElearningVideosPage from './video-production/ElearningVideosPage';
import VoiceOverRecordingsPage from './video-production/VoiceOverRecordingsPage';
import TestimonialsPage from './video-production/TestimonialsPage';
import SocialMediaVideosPage from './video-production/SocialMediaVideosPage';

// Dedicated Digital Marketing Sub-Services
import SocialMediaMarketingPage from './digital-marketing/SocialMediaMarketingPage';
import ContentWritingServicesPage from './digital-marketing/ContentWritingServicesPage';
import PerformanceMarketingPage from './digital-marketing/PerformanceMarketingPage';
import SeoPage from './digital-marketing/SeoPage';
import SocialAdsManagementPage from './digital-marketing/SocialAdsManagementPage';
import LeadGenerationPage from './digital-marketing/LeadGenerationPage';

export {
  CreativeServicePage,
  TechServicePage,
  VideoProductionPage,
  DigitalMarketingPage,
  Animation2DPage,
  Animation3DPage,
  PrintingSolutionsPage,
  PhotographyPage,
  VideographyPage,
  BrandingSolutionsPage,
  WebsiteDevPage,
  IndoorOutdoorShootingPage,
  VideoEditingPage,
  ExplainerVideosPage,
  AdFilmsPage,
  PodcastVideosPage,
  BrandFilmsPage,
  CorporateShootVideosPage,
  ElearningVideosPage,
  VoiceOverRecordingsPage,
  TestimonialsPage,
  SocialMediaVideosPage,
  SocialMediaMarketingPage,
  ContentWritingServicesPage,
  PerformanceMarketingPage,
  SeoPage,
  SocialAdsManagementPage,
  LeadGenerationPage
};

export default function ServiceDispatcher({ categoryId = "creative", subServiceId = "", onOpenContact, onBackHome }) {
  // Direct Dedicated Sub-Service Component Routing
  if (subServiceId === 'branding-solutions') {
    return <BrandingSolutionsPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'website-development') {
    return <WebsiteDevPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }

  // Video Production Sub-Services
  if (subServiceId === 'indoor-and-outdoor-shooting') {
    return <IndoorOutdoorShootingPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'video-editing') {
    return <VideoEditingPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'explainer-videos') {
    return <ExplainerVideosPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'ad-films') {
    return <AdFilmsPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'podcast-videos') {
    return <PodcastVideosPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'brand-films') {
    return <BrandFilmsPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'corporate-shoot-videos') {
    return <CorporateShootVideosPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'e-learning-videos') {
    return <ElearningVideosPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'voice-over-recordings') {
    return <VoiceOverRecordingsPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'testimonials') {
    return <TestimonialsPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'social-media-videos') {
    return <SocialMediaVideosPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }

  // Digital Marketing Sub-Services
  if (subServiceId === 'social-media-marketing') {
    return <SocialMediaMarketingPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'content-writing-services') {
    return <ContentWritingServicesPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'performance-marketing') {
    return <PerformanceMarketingPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'search-engine-optimization' || subServiceId === 'seo') {
    return <SeoPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'social-ads-management') {
    return <SocialAdsManagementPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
  if (subServiceId === 'lead-generation') {
    return <LeadGenerationPage onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }

  // Category Level Dedicated Component Dispatcher (All categories & sub-services render rich Bento Grid layouts!)
  switch (categoryId) {
    case 'creative':
      return <CreativeServicePage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case 'technology':
      return <TechServicePage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case 'video-production':
      return <VideoProductionPage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case 'digital-marketing':
      return <DigitalMarketingPage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case '2d-animation':
      return <Animation2DPage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case '3d-animation':
      return <Animation3DPage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case 'printing-solutions':
      return <PrintingSolutionsPage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case 'photography':
      return <PhotographyPage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    case 'videography':
      return <VideographyPage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
    default:
      return <CreativeServicePage subServiceId={subServiceId} onOpenContact={onOpenContact} onBackHome={onBackHome} />;
  }
}
