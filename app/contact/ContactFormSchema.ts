import { z } from "zod";

const numberRegex = /^[0-9]*$/;
const phoneRegex = /^[0-9]{10}$/;

export const contactFormSchema = z.object({
    firstName: z.string().trim().min(1, {
        message: "Veuillez saisir votre prénom."
    }),

    lastName: z.string().min(2, {
        message: "Veuillez saisir votre nom.",
    }),

    email: z.string().email({
        message: "Adresse email invalide."
    }).trim().toLowerCase(),

    phoneNumber: z.string()
        .refine((val) => phoneRegex.test(val), {
            message: "Numéro de téléphone invalide.",
        }),

    bookingStartDate: z.date(),
    bookingEndDate: z.date(),

    newsletterSubscription: z.boolean(),
    isDonation: z.boolean(),

    consent: z.boolean().refine((val) => val === true, {
        message: "Vous devez accepter les conditions."
    }),

    message: z.string(),

    childAge: z.string()
        .refine((val) => numberRegex.test(val), {
            message: "Valeur invalide.",
        }),

    childSize: z.string()
        .refine((val) => numberRegex.test(val), {
            message: "Valeur invalide.",
        }),

}).refine(data => data.bookingEndDate > data.bookingStartDate, {
    message: "La date de fin doit être postérieure à la date de début.",
    path: ["bookingEndDate"], // path of error
});