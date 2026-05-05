import { supabase } from "@/integrations/supabase/client";

export const LEAD_NOTIFICATION_RECIPIENTS = [
  "mduerwachter@modernedgetech.net",
  "michael.anderson@wonderistagency.com",
] as const;

type LeadNotificationOptions = {
  templateName: string;
  idempotencyKey: string;
  templateData: Record<string, unknown>;
};

export const sendLeadNotifications = async ({
  templateName,
  idempotencyKey,
  templateData,
}: LeadNotificationOptions) => {
  const results = await Promise.all(
    LEAD_NOTIFICATION_RECIPIENTS.map((recipientEmail) =>
      supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName,
          recipientEmail,
          idempotencyKey: `${idempotencyKey}-${recipientEmail}`,
          templateData,
        },
      })
    )
  );

  const firstError = results.find((result) => result.error)?.error;
  if (firstError) throw firstError;

  return results;
};
