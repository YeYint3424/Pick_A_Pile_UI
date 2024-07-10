import TagManager from "react-gtm-module";

export const GTM_ID = "GTM-56398SFN";

export const GTMEvent = (obj) => {
  TagManager.dataLayer({
    dataLayer: obj,
  });
};
