import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { isProfessionalEmail } from "@/lib/utils/email-utils";

export const RegistrationSchema = z.object({
     firstname: z.string().min(2, "Le prénom est trop court"),
     lastname: z.string().min(2, "Le nom est trop court"),
     email: z
          .string()
          .email("Email invalide")
          .refine((email) => isProfessionalEmail(email), {
               message: "Veuillez renseigner une adresse e-mail professionnelle.",
          }),
     phone: z
          .string()
          .optional()
          .refine((val) => !val || isValidPhoneNumber(val), {
               message: "Numéro de téléphone invalide (vérifiez le pays et le format)",
          }),
     consent: z.boolean().refine((v) => v === true, {
          message: "Vous devez accepter l'utilisation de vos données",
     }),
});

export type RegistrationData = z.infer<typeof RegistrationSchema>;
