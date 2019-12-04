import Browser from '@base-cms/marko-web/browser';
import DefaultTheme from '@base-cms/marko-web-theme-default/browser';
import GTM from '@base-cms/marko-web-gtm/browser';
import GCSE from '@base-cms/marko-web-gcse/browser';
import Common from '@ac-business-media/package-common/browser';

DefaultTheme(Browser);
GTM(Browser);
GCSE(Browser);
Common(Browser);

export default Browser;
