"use client"

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import DatePicker from "@/components/shared/DatePicker";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { contactFormSchema } from "./ContactFormSchema";
import { Checkbox } from "@/components/ui/checkbox";


interface EquipmentProps {
    id: number,
    name: string,
    manufacturer: string,
    image: string
}

export default function ContactForm({ title, submitText, type, equipment, formMessageTitle }: { title: string; submitText: string; type: string; equipment?: any, formMessageTitle: string }) {
    const now = new Date();
    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
            bookingStartDate: new Date(),
            bookingEndDate: new Date((new Date()).setDate(now.getDate() + 1)),
            consent: false,
            newsletterSubscription: false,
            childAge: '0',
            childSize: '0',
            isDonation: true,
        },
    });

    async function onSubmit(values: z.infer<typeof contactFormSchema>) {
        try {
            const formData = {
                ...values,
                type,
                equipment: equipment || undefined
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error();

            form.reset();
            toast.success("Votre demande a été envoyée avec succès !")
        } catch (error) {
            toast.error('Une erreur est survenue lors de l\'envoi du message');
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 py-20 sm:pb-32 lg:px-8">
                <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-theme-primary-800 mb-2">{title}</h2>

                    {type === 'book' && equipment ? (
                        <div className="flex py-6">
                            <div className="h-48 w-48 flex-shrink-0 overflow-hidden rounded-md bg-theme-primary-50 hover:opacity-75" >
                                <img
                                    alt={equipment.name}
                                    src={equipment.image}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                                <h3 className="text-theme-primary-800 mt-3 text-base font-bold tracking-tight">{equipment.name}</h3>
                                <p className="text-theme-primary-800 mt-2 text-sm">{equipment.manufacturer}</p>
                            </div>

                        </div>
                    ) : null}

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Prénom</FormLabel>
                                    <FormControl>
                                        <Input autoComplete="cc-given-name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Nom</FormLabel>
                                    <FormControl>
                                        <Input type="text" autoComplete="cc-family-name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />


                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" autoComplete="email" placeholder="mail@exemple.fr" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />

                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem className="space-y-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Téléphone</FormLabel>
                                    <FormControl>
                                        <Input type="tel" autoComplete="tel"  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)} />

                        {type === 'book' ? (
                            <>
                                <FormField
                                    control={form.control}
                                    name="bookingStartDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col space-y-2">
                                            <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Date de début</FormLabel>
                                            <DatePicker field={field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="bookingEndDate"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col space-y-2">
                                            <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Date de fin</FormLabel>
                                            <DatePicker field={field} />
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="childAge"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Âge de l&apos;enfant</FormLabel>
                                            <FormControl>
                                                <Input type="number" min="0" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)} />

                                <FormField control={form.control}
                                    name="childSize"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">Taille de l&apos;enfant</FormLabel>
                                            <FormControl>
                                                <Input type="number" min="0" {...field} />
                                            </FormControl>
                                            <FormDescription>La taille de votre enfant en cm.</FormDescription>
                                            <FormMessage />
                                        </FormItem>)} />
                            </>
                        ) : null}


                        {type === 'donate' ? (

                            <FormField
                                control={form.control}
                                name="isDonation"
                                render={({ field }) => (
                                    <FormItem className="sm:col-span-2 flex flex-row items-start space-x-3 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Je souhaite faire un don de matériel.
                                            </FormLabel>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ) : null}


                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-2">
                                    <FormLabel className="block text-sm font-semibold leading-6 text-theme-primary-800">{formMessageTitle}</FormLabel>
                                    <FormControl>
                                        <Textarea id="message" placeholder="Votre message..." rows={8} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)} />


                        <FormField
                            control={form.control}
                            name="newsletterSubscription"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-2 flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormDescription>
                                            J&apos;accepte de recevoir la newsletter de l&apos;association Youzoo par email.
                                        </FormDescription>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="consent"
                            render={({ field }) => (
                                <FormItem className="sm:col-span-2 flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormDescription>
                                            En soumettant le formulaire, j’accepte que l&apos;association Youzoo prenne contact avec moi.
                                            L&apos;association Youzoo n’exploite aucune donnée à des fins commerciales.
                                        </FormDescription>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <Button variant='secondary' className="w-full mt-12" type="submit">{submitText}</Button>
                </div>
            </form>
        </Form >

    );
}