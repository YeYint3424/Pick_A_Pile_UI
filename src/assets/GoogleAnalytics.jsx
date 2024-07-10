// src/components/GoogleAnalytics.jsx
import React from "react";
import { Helmet } from "react-helmet";

const GoogleAnalytics = ({ trackingId }) => (
  <Helmet>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
    ></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}');
      `}
    </script>
  </Helmet>
);

export default GoogleAnalytics;
