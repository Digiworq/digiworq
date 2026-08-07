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

export {
  CreativeServicePage,
  TechServicePage,
  VideoProductionPage,
  DigitalMarketingPage,
  Animation2DPage,
  Animation3DPage,
  PrintingSolutionsPage,
  PhotographyPage,
  VideographyPage
};

export default function ServiceDispatcher({ categoryId, subServiceId, onOpenContact, onBackHome }) {
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
