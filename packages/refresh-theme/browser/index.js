import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import Inquiry from '@base-cms/marko-web-inquiry/browser';
import Common from '@ac-business-media/package-common/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';
import PhotoSwipe from '@base-cms/marko-web-photoswipe/browser';
import RevealAd from '@base-cms/marko-web-reveal-ad/browser';

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  Common(Browser);
  Inquiry(Browser);
  SocialSharing(Browser);
  PhotoSwipe(Browser);
  RevealAd(Browser);
};
