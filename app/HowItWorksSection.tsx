import HowItWorksItem from "./HowItWorksItem";
import { TruckIcon, WrenchScrewdriverIcon, ChatBubbleLeftRightIcon, HandThumbUpIcon } from "@heroicons/react/24/outline";
export default function HowItWorksSection() {
    return (
        <>
            <div className="py-8 px-6 mx-auto lg:py-16 lg:px-8 max-w-7xl">
                <div className="rounded-3xl px-8 py-8 md:py-16 bg-theme-primary-50 xl:mb-24">
                    {/* <h2 className="text-2xl text-center font-bold tracking-tight text-theme-primary-800 md:text-4xl">Comment ça marche ?</h2>
                <div className="py-12 grid grid-cols-1 gap-x-6 gap-y-10 xl:grid-cols-2 xl:gap-x-24 xl:gap-y-16 sm:px-12 lg:px-32">
                    <HowItWorksItem title="1. Collecter" text="Collecte d'aides techniques et de matériel médical pour enfants">
                        <TruckIcon strokeWidth={1} className="h-10 w-10 text-theme-primary-50"></TruckIcon>
                    </HowItWorksItem>
                    <HowItWorksItem title="2. Entretenir" text="Réparation, nettoyage, désinfection et stockage du matériel collecté">
                        <WrenchScrewdriverIcon strokeWidth={1} className="h-10 w-10 text-theme-primary-50"></WrenchScrewdriverIcon>
                    </HowItWorksItem>
                    <HowItWorksItem title="3. Conseiller" text="Identification du besoin et choix du matériel médical adapté à l'enfant">
                        <ChatBubbleLeftRightIcon strokeWidth={1} className="h-10 w-10 text-theme-primary-50"></ChatBubbleLeftRightIcon>
                    </HowItWorksItem>
                    <HowItWorksItem title="4. Utiliser" text="Prêt, revente et location du matériel remis en bon état d'usage">
                        <HandThumbUpIcon strokeWidth={1} className="h-10 w-10 text-theme-primary-50"></HandThumbUpIcon>
                    </HowItWorksItem>
                </div> */}

                    <h2 className="text-2xl text-center font-bold tracking-tight text-theme-primary-800 md:text-4xl">Louez du matériel médical en 3 étapes</h2>
                    <div className="py-12 grid grid-cols-1 gap-x-6 gap-y-10 xl:grid-cols-3 xl:gap-x-24 xl:gap-y-16 sm:px-12 lg:px-32 xl:-mb-48">
                        <HowItWorksItem title="" text="Je choisis le matériel médical adapté à mes besoins">
                            <span className="text-3xl font-semibold text-theme-primary-50">1</span>
                        </HowItWorksItem>
                        <HowItWorksItem title="" text="Je contacte l'association pour connaitre sa disponibilité">
                            <span className="text-3xl font-semibold text-theme-primary-50">2</span>
                        </HowItWorksItem>
                        <HowItWorksItem title="" text="Je récupére le matériel lors du rendez-vous d'essai">
                            <span className="text-3xl font-semibold text-theme-primary-50">3</span>
                        </HowItWorksItem>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-12">
                <h2 className="max-w-[800px] text-center text-2xl font-semibold md:font-bold justify-center text-theme-primary-800 md:text-4xl">
                    <span className="">Youzoo</span> : une alternative plus
                    <span className="text-theme-secondary-500"> économique</span>,
                    plus
                    <span className="text-theme-secondary-500"> rapide </span>
                    et plus
                    <span className="text-theme-secondary-500"> écologique</span>
                </h2>
            </div>
        </>
    );
}