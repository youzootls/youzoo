import SponsorsSection from "../SponsorsSection";

const stats = [
    { label: 'Transactions every 24 hours', value: '44 million' },
    { label: 'Assets under holding', value: '$119 trillion' },
    { label: 'New users annually', value: '46,000' },
]
const values = [
    {
        name: 'Be world-class',
        description:
            'Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.',
    },
    {
        name: 'Share everything you know',
        description:
            'Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.',
    },
    {
        name: 'Always learning',
        description:
            'Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.',
    },
    {
        name: 'Be supportive',
        description:
            'Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.',
    },
    {
        name: 'Take responsibility',
        description:
            'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
    },
    {
        name: 'Enjoy downtime',
        description:
            'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
]

export default function AboutPage() {
    return (
        <div className="isolate">
            <div className="relative isolate -z-10">
                <div
                    aria-hidden="true"
                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                </div>
                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-theme-primary-800 sm:text-5xl">
                                    Faciliter l’accès au matériel médical pour les enfants en situation de handicap                                </h1>
                                <p className="relative mt-6 text-lg leading-8 text-theme-primary-800 sm:max-w-md lg:max-w-none">
                                    En tant qu’acteur de l’économie circulaire, l’association Youzoo est spécialisée dans le réemploi de matériel médical pour les enfants en situation de handicap.
                                </p>
                            </div>
                            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <img
                                            alt=""
                                            src="about/about01.jpg"
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <img
                                            alt=""
                                            src="about/about02.jpg"
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            alt=""
                                            src="about/about03.jpg"
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <img
                                            alt=""
                                            src="about/about04.jpg"
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            alt=""
                                            src="about/about05.jpg"
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-theme-primary-800 sm:text-4xl">Notre mission</h2>
                    <div className="mt-6 flex flex-col gap-x-20 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-theme-primary-800">
                                Rendre le matériel médical plus accessible aux enfants en situation de handicap en offrant une alternative plus abordable, rapide et écologique aux solutions actuelles.
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-theme-primary-800">
                                <p>
                                    Beaucoup de matériels essentiels (fauteuils roulants, transats de bain, poussettes, déambulateurs, etc.) ne sont pas pris en charge par la sécurité sociale ou les mutuelles, ce qui représente un coût important pour les familles.
                                </p>
                                <p className="mt-10">
                                    Les délais d&apos;obtention des aides financières via les Maisons Départementales des Personnes Handicapées (MDPH) sont souvent trop longs et ne suivent pas le rythme de développement des enfants.
                                </p>
                                <p className="mt-10">
                                    De plus, les parents ne savent pas toujours quoi faire du matériel une fois que l&apos;enfant grandit ou que le handicap évolue. Un nombre conséquent de matériel médical est jeté alors qu’il pourrait bénéficier d’une seconde vie.
                                </p>
                            </div>
                        </div>
                        <div>
                            {/* aspect-[5/2]  */}
                            <img
                                alt=""
                                src="/eco_circulaire.png"
                                className="w-full object-cover rounded-3xl"
                            />
                        </div>
                        {/* <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                        <dt className="text-base leading-7 text-theme-primary-800">{stat.label}</dt>
                                        <dd className="text-5xl font-semibold tracking-tight text-theme-primary-800">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* Image section */}
            <div className="my-24 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img
                    alt=""
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                />
            </div>

            {/* Values section */}
            {/* <div className="mx-auto my-24 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-theme-primary-800 sm:text-4xl">Nos valeurs</h2>
                    <p className="mt-6 text-lg leading-8 text-theme-primary-800">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
                        accusamus quisquam.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {values.map((value) => (
                        <div key={value.name}>
                            <dt className="font-semibold text-theme-primary-800">{value.name}</dt>
                            <dd className="mt-1 text-theme-primary-800">{value.description}</dd>
                        </div>
                    ))}
                </dl>
            </div> */}
        </div>
    );
}