import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GAM from '@base-cms/marko-web-gam/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import Common from '@ac-business-media/package-common/browser';
import Inquiry from '@ac-business-media/package-inquiry/browser';
import SocialSharing from '@base-cms/marko-web-social-sharing/browser';

export default (Browser) => {
  DefaultTheme(Browser);
  GTM(Browser);
  GAM(Browser);
  GCSE(Browser);
  Common(Browser);
  Inquiry(Browser);
  SocialSharing(Browser);
};
