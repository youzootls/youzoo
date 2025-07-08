import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const sponsors = [
    {
        name: 'Alterincub',
        imageSrc: '/sponsors/alterincub.png',
        imageAlt: 'Alterincub',
    },
    {
        name: 'Conseil départemental de la Haute-Garonne',
        imageSrc: '/sponsors/hg.png',
        imageAlt: 'Conseil départemental de la Haute-Garonne',
    },
    {
        name: 'Banque des territoires',
        imageSrc: '/sponsors/banque_des_territoires.png',
        imageAlt: 'Banque des territoires',
    },
    {
        name: 'Macif',
        imageSrc: '/sponsors/macif.png',
        imageAlt: 'Macif',
    },
    {
        name: 'Crédit Mutuel',
        imageSrc: '/sponsors/credit_mutuel.png',
        imageAlt: 'Crédit Mutuel',
    },
    {
        name: 'France Active',
        imageSrc: '/sponsors/france_active.png',
        imageAlt: 'France Active',
    },
    {
        name: 'Parcours Adress',
        imageSrc: '/sponsors/parcours_adress.png',
        imageAlt: 'Parcours Adress logo',
    },
    {
        name: 'Fondation Baker Tilly et Oratio',
        imageSrc: '/sponsors/fondation_baker_tilly_oratio.png',
        imageAlt: 'Fondation Baker Tilly et Oratio logo',
    },
    {
        name: 'Fondation Credit Agricole Toulouse 31',
        imageSrc: '/sponsors/fondation_credit_agricole_toulouse_31.png',
        imageAlt: 'Fondation Credit Agricole Toulouse 31 logo',
    },
];

export default function SponsorsSection() {
    return (
        <div className="py-8 mx-auto xl:pt-16 xl:pb-32 max-w-7xl">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-8 flex flex-col gap-12">
                <h2 className="text-2xl text-center font-bold tracking-tight text-theme-primary-800 md:text-4xl">
                    Ils soutiennent Youzoo
                </h2>
                <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {sponsors.map((sponsor) => (
                        <div key={sponsor.name} className="col-span-2 lg:col-span-1 ">
                            <Image
                                src={sponsor.imageSrc}
                                alt={sponsor.imageAlt}
                                width={350}
                                height={115}
                                className="w-full max-h-24 object-contain "
                            />
                        </div>
                    ))}
                </div>
                <div className="m-auto">
                    <Link href="https://www.helloasso.com/associations/youzoo/formulaires/1" rel="noopener noreferrer" target="_blank">
                        <Button className="text-white md:text-lg" variant="secondary">Soutenir Youzoo</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
