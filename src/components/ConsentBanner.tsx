import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "met_consent_v1";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    openConsentBanner?: () => void;
  }
}

function pushConsent(analytics: boolean, ad: boolean) {
  const gtag = window.gtag || ((...args: unknown[]) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  });
  gtag("consent", "update", {
    ad_storage: ad ? "granted" : "denied",
    ad_user_data: ad ? "granted" : "denied",
    ad_personalization: ad ? "granted" : "denied",
    analytics_storage: analytics ? "granted" : "denied",
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics, ad, ts: Date.now() }));
}

export const ConsentBanner = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setOpen(true);
    window.openConsentBanner = () => setOpen(true);
    return () => {
      delete window.openConsentBanner;
    };
  }, []);

  if (!open) return null;

  const acceptAll = () => {
    pushConsent(true, true);
    setOpen(false);
  };
  const rejectAll = () => {
    pushConsent(false, false);
    setOpen(false);
  };
  const analyticsOnly = () => {
    pushConsent(true, false);
    setOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-lg border border-border bg-background/95 p-4 shadow-lg backdrop-blur md:p-5"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-foreground/90">
          We use cookies for analytics and to improve your experience. You can accept all,
          reject non-essential, or allow analytics only. See our{" "}
          <a href="/privacy" className="underline underline-offset-2">
            privacy policy
          </a>
          .
        </p>
        <div className="flex flex-wrap gap-2 md:flex-nowrap">
          <Button variant="outline" size="sm" onClick={rejectAll}>
            Reject
          </Button>
          <Button variant="outline" size="sm" onClick={analyticsOnly}>
            Analytics only
          </Button>
          <Button size="sm" onClick={acceptAll}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner;