"use server";

import * as Brevo from "@getbrevo/brevo";
import { parsePhoneNumber } from "libphonenumber-js";

import { RegistrationSchema } from "@/lib/schemas/contact-schema";

export async function submitContact(formData: FormData) {
     const apiKey = process.env.BREVO_API_KEY;
     const listId = parseInt(process.env.LIST_ID || "45", 10);

     if (!apiKey) {
          console.error("CRITICAL: BREVO_API_KEY is not defined in environment variables.");
          return { success: false, error: "Configuration du serveur incomplète (Missing API Key)." };
     }

     if (Number.isNaN(listId) || listId <= 0) {
          console.error("CRITICAL: LIST_ID is invalid:", process.env.LIST_ID);
          return { success: false, error: "Configuration du serveur incomplète (Invalid LIST_ID)." };
     }

     // Configure API instance
     const apiInstance = new Brevo.ContactsApi();
     apiInstance.setApiKey(Brevo.ContactsApiApiKeys.apiKey, apiKey);

     // Extract data for validation
     const rawData = {
          firstname: formData.get("firstname"),
          lastname: formData.get("lastname"),
          email: formData.get("email"),
          phone: formData.get("phone") || undefined,
          consent: formData.get("consent") === "on",
     };

     // Server-side validation
     const result = RegistrationSchema.safeParse(rawData);
     if (!result.success) {
          return { success: false, error: "Données invalides : " + result.error.issues[0].message };
     }

     const { email, firstname, lastname, phone } = result.data;

     // Format phone for Brevo SMS using libphonenumber-js
     let formattedSMS: string | undefined;
     if (phone) {
          try {
               const phoneNumber = parsePhoneNumber(phone, "FR");
               if (phoneNumber && phoneNumber.isValid()) {
                    formattedSMS = phoneNumber.format("E.164");
               } else {
                    formattedSMS = phone.replace(/[\s.-]/g, "");
                    if (formattedSMS.startsWith("0")) {
                         formattedSMS = "+33" + formattedSMS.substring(1);
                    } else if (!formattedSMS.startsWith("+")) {
                         formattedSMS = "+" + formattedSMS;
                    }
               }
          } catch (e) {
               console.error("Phone parsing error:", e);
               formattedSMS = phone.replace(/[\s.-]/g, "");
               if (formattedSMS.startsWith("0")) {
                    formattedSMS = "+33" + formattedSMS.substring(1);
               } else if (!formattedSMS.startsWith("+")) {
                    formattedSMS = "+" + formattedSMS;
               }
          }
     }

     try {
          const contact = new Brevo.CreateContact();
          contact.email = email;

          const attributes: Record<string, string | boolean> = {
               NOM: lastname,
               PRENOM: firstname,
          };

          if (formattedSMS) attributes.SMS = formattedSMS;

          contact.attributes = attributes;

          contact.listIds = [listId];
          contact.updateEnabled = true;

          await apiInstance.createContact(contact);
          return { success: true };
     } catch (error: unknown) {
          console.error("Error submitting to Brevo");
          if (error && typeof error === "object" && "response" in error) {
               const apiError = error as { response: { body?: { message?: string; error?: string } } };
               const apiErrorMessage =
                    apiError.response.body?.message ||
                    apiError.response.body?.error ||
                    "Erreur Brevo inconnue.";
               return {
                    success: false,
                    error: `Erreur Brevo: ${apiErrorMessage}`,
               };
          } else {
               return { success: false, error: "Erreur serveur lors de l'inscription." };
          }
     }
}
