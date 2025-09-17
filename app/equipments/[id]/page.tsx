import TruncatedText from "@/components/shared/TruncatedText";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { prisma } from "@/lib/prisma";
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
    params: {
        id: string;
    };
}

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const equipment = await prisma.equipment.findUnique({
        where: { id: params.id },
        include: { category: true }
    });

    if (!equipment) {
        return {
            title: 'Équipement non trouvé | Youzoo',
            description: 'L\'équipement recherché n\'existe pas ou n\'est plus disponible.',
        };
    }

    return {
        title: `${equipment.name} | ${equipment.category.name} | Youzoo`,
        description: equipment.description?.substring(0, 160),
        openGraph: {
            title: `${equipment.name} - ${equipment.manufacturer}`,
            description: equipment.description?.substring(0, 160),
            images: [equipment.image],
        },
    };
}

export default async function EquipmentPage({ params }: Props) {
    const equipment = await prisma.equipment.findUnique({
        where: { id: params.id },
        include: { category: true }
    });

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:py-12 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    {/* Image gallery */}
                    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-theme-primary-50">
                            <img src={equipment?.image} alt={equipment?.name} className="h-full w-full object-cover object-center" />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href="/equipments">Matériel médical</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild>
                                        <Link href={'/equipments?category=' + equipment?.category?.id}>
                                            {equipment?.category?.name}
                                        </Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-theme-primary-800">{equipment?.name}</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <div className="mt-8">
                            <div className='rounded-md inline-block px-2 py-1 text-base bg-theme-primary-500 text-white'>{equipment?.category.name}</div>
                            <h1 className="my-2 text-3xl font-bold tracking-tight text-theme-primary-800 sm:text-4xl">{equipment?.name}</h1>
                            <p className="text-lg text-theme-primary-800 sm:text-xl">{equipment?.manufacturer}</p>
                        </div>

                        <h2 id="information-heading" className="sr-only">
                            Détails du matériel
                        </h2>

                        <div className="mt-4 space-y-6">
                            <p className="text-base text-gray-500">
                                <TruncatedText text={equipment?.description}></TruncatedText>
                            </p>
                        </div>
                        <form>
                            <div className="mt-10">
                                <Link href={'/contact?type=book&equipmentId=' + params.id}>
                                    <Button size="lg" className='w-full' variant="secondary">Envoyer une demande de disponibilité</Button>
                                </Link>

                            </div>
                        </form>

                        <section aria-labelledby="details-heading" className="mt-12">
                            <h2 id="details-heading" className="sr-only">
                                Additional details
                            </h2>

                            <div className="p-2 mb-2 border drop-shadow-sm border-gray-200 rounded-md">
                                <h4>Tarifs de la location 000</h4>
                                <ul className="list-disc pl-2">
                                    <li>Prix de la location / jour : 20000000€</li>
                                    <li>Prix de la location / week-end : 30€</li>
                                    <li>Prix de la location / semaine : 40€</li>
                                    <li>Prix de la location / mois : 50€</li>
                                </ul>
                            </div>
                            <div className="p-2 mb-2 border border-gray-200 rounded-md">
                                <h4>Tarif vente d’occasion YOUZOO</h4>
                                <p>100€</p>
                            </div>
                            <div className="p-2 mb-2 border border-gray-200 rounded-md">
                                <h4>Autres frais</h4>
                                <ul className="list-disc pl-2">
                                    <li>Prévoir adhésion à l’association : 10€/an</li>
                                    <li>Caution pour la location : 100€</li>
                                </ul>
                            </div>

                            <div className="divide-y divide-gray-200 border-t">

                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className="text-theme-primary-800">Tarifs</AccordionTrigger>
                                        <AccordionContent className="text-gray-500">
                                            {equipment?.prices && (
                                                <div dangerouslySetInnerHTML={{ __html: equipment.prices }} />
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className="text-theme-primary-800">Caractéristiques</AccordionTrigger>
                                        <AccordionContent className="text-gray-500">
                                            {equipment?.specifications && (
                                                <div dangerouslySetInnerHTML={{ __html: equipment.specifications }} />
                                            )}
                                        </AccordionContent>
                                    </AccordionItem>
                                    {equipment?.documentLink && (<AccordionItem value="item-3">
                                        <AccordionTrigger className="text-theme-primary-800">Documentation</AccordionTrigger>
                                        <AccordionContent className="text-gray-500">

                                            <Link
                                                href={equipment.documentLink}
                                                target="_blank"
                                                className="text-blue-500 hover:underline">Télécharger la documentation</Link>

                                        </AccordionContent>
                                    </AccordionItem>)}
                                </Accordion>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    );
}