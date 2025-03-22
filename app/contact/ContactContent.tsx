import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactContent({ title, texts }: { title: string; texts: string[] }) {
    return (
        <div className="relative px-6 py-20 lg:static lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-theme-primary-800">{title}</h2>

                {texts.map((text, index) => (
                    <p key={index} className="mt-6 text-lg leading-8 text-theme-primary-800">
                        {text}
                    </p>
                ))}

                <dl className="mt-10 space-y-4 text-base leading-7 text-theme-primary-500">
                    <h2 className="text-3xl font-bold tracking-tight text-theme-primary-800">Contact</h2>

                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                            <span className="sr-only">Téléphone</span>
                            <PhoneIcon className="h-7 w-6 text-theme-primary-500" aria-hidden="true" />
                        </dt>
                        <dd>
                            <a className="hover:text-theme-primary-800" href="tel:0782122883">
                                07 82 12 28 83
                            </a>
                        </dd>
                    </div>
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                            <span className="sr-only">Email</span>
                            <EnvelopeIcon className="h-7 w-6 text-theme-primary-500" aria-hidden="true" />
                        </dt>
                        <dd>
                            <a className="hover:text-theme-primary-800" href="mailto:contact@youzoo.fr">
                                contact@youzoo.fr
                            </a>
                        </dd>
                    </div>
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                            <span className="sr-only">Addresse</span>
                            <BuildingOffice2Icon className="h-7 w-6 text-theme-primary-500" aria-hidden="true" />
                        </dt>
                        <dd>
                            <a className="hover:text-theme-primary-800" href="https://maps.app.goo.gl/oS3TNicQM8QEHd9H9">
                                24 Rue du Général Ferrié
                                <br />
                                31500 Toulouse
                            </a>
                        </dd>
                    </div>
                </dl>
            </div>
        </div >
    )
}