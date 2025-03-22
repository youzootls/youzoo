import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function EquipmentDetailLoading() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:py-12 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                        <div className="animate-pulse bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 h-full w-full"></div>
                    </div>
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">

                        <div className="flex gap-2">
                            <div className="animate-pulse bg-gray-200 rounded-lg h-8 w-32"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-8 w-32"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-8 w-full"></div>
                        </div>

                        <div className="mt-8 flex flex-col gap-2">
                            <div className="animate-pulse bg-gray-400 rounded-lg h-8 w-24"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-10 w-full"></div>
                        </div>

                        <div className="mt-4 space-y-4">
                            <div className="animate-pulse bg-gray-200 rounded-lg h-4 w-32"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-4 w-full"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-4 w-full"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-4 w-full"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-4 w-full"></div>
                            <div className="animate-pulse bg-gray-200 rounded-lg h-4 w-full"></div>

                        </div>
                        <div className="mt-10">
                            <div className="mt-10 animate-pulse bg-gray-400 rounded-lg h-12 w-full"></div>
                        </div>


                        <section aria-labelledby="details-heading" className="mt-12">
                            <h2 id="details-heading" className="sr-only">
                                Additional details
                            </h2>

                            <div className="divide-y divide-gray-200 border-t">

                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Tarifs</AccordionTrigger>
                                        <AccordionContent>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Dimensions et spécifications</AccordionTrigger>
                                        <AccordionContent>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>Notices et documents</AccordionTrigger>
                                        <AccordionContent>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}