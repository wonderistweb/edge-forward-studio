import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State =
  | { kind: "loading" }
  | { kind: "ready" }
  | { kind: "already" }
  | { kind: "invalid" }
  | { kind: "submitting" }
  | { kind: "done" }
  | { kind: "error"; message: string };

const UnsubscribePage = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>({ kind: "loading" });

  useEffect(() => {
    if (!token) {
      setState({ kind: "invalid" });
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } }
        );
        const data = await res.json();
        if (res.status === 404 || data.error) {
          setState({ kind: "invalid" });
        } else if (data.valid === false && data.reason === "already_unsubscribed") {
          setState({ kind: "already" });
        } else if (data.valid === true) {
          setState({ kind: "ready" });
        } else {
          setState({ kind: "invalid" });
        }
      } catch {
        setState({ kind: "error", message: "Could not reach the server. Please try again." });
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState({ kind: "submitting" });
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if ((data as any)?.success || (data as any)?.reason === "already_unsubscribed") {
        setState({ kind: "done" });
      } else {
        setState({ kind: "error", message: "Unable to process unsubscribe." });
      }
    } catch {
      setState({ kind: "error", message: "Unable to process unsubscribe. Please try again." });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-32">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="text-xs font-mono-display uppercase tracking-wider text-primary">
            Email Preferences
          </span>
          <h1 className="text-3xl md:text-4xl font-medium uppercase mt-3 mb-6">
            Unsubscribe
          </h1>

          {state.kind === "loading" && (
            <p className="text-muted-foreground">Validating your request…</p>
          )}

          {state.kind === "invalid" && (
            <p className="text-muted-foreground">
              This unsubscribe link is invalid or has expired.
            </p>
          )}

          {state.kind === "already" && (
            <p className="text-muted-foreground">
              You're already unsubscribed. No further emails will be sent.
            </p>
          )}

          {state.kind === "ready" && (
            <>
              <p className="text-muted-foreground mb-8">
                Click the button below to confirm and stop receiving emails from Modern Edge Technology.
              </p>
              <Button variant="hero" size="lg" onClick={confirm}>
                Confirm unsubscribe
              </Button>
            </>
          )}

          {state.kind === "submitting" && (
            <p className="text-muted-foreground">Processing…</p>
          )}

          {state.kind === "done" && (
            <p className="text-muted-foreground">
              You've been unsubscribed. We're sorry to see you go.
            </p>
          )}

          {state.kind === "error" && (
            <p className="text-destructive">{state.message}</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UnsubscribePage;