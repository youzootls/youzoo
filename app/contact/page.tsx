import { prisma } from '@/lib/prisma';
import { equipmentsMock } from '../api/data-mock';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';

export default async function ContactPage({ searchParams }: {
    searchParams?: {
        type?: string;
        equipmentId?: string;
    };
}) {
    const type = searchParams?.type || 'contact';
    const equipmentId = searchParams?.equipmentId || '0';
    const contactPageContent: {
        [key: string]: {
            pageTitle: string;
            formTitle: string;
            formMessageTitle: string;
            formSubmitText: string;
            texts: string[]
        }
    } = {
        'book': {
            pageTitle: 'Demande de disponiblité de matériel',
            formTitle: 'Formulaire de demande',
            formMessageTitle: 'Commentaires',
            formSubmitText: 'Envoyer demande de disponibilité',
            texts: [
                'Pour connaitre la disponibilité du matériel choisi, merci de remplir le formulaire en précisant la période d’utilisation souhaitée.',
                'Nos équipes vous contacteront dans les meilleurs délais pour vous proposer un rendez-vous d’essai du matériel.',
                'Vous pouvez également nous adresser vos demandes ou questions par téléphone ou email.'
            ]
        },
        'donate': {
            pageTitle: 'Collecte de matériel',
            formTitle: 'Formulaire de collecte',
            formMessageTitle: 'Description du matériel',
            formSubmitText: 'Envoyer demande de collecte',
            texts: [
                'Offrez une seconde vie à votre matériel médical. En faisant don de dispositifs médicaux, vous contribuez à améliorer la qualité de vie des enfants en situation de handicap.',
                'Ces dons permettent à des familles de bénéficier de l’équipement essentiel qu’elles ne pourraient pas se procurer autrement.',
                'Qu’il s’agisse de fauteuils roulants, de dispositifs de positionnement ou d’autres aides techniques, chaque don compte. Ensemble, offrons à ces enfants le soutien et les outils nécessaires pour grandir et s’épanouir.',
                'Nos équipes vous contacteront dans les meilleurs délais pour organiser et planifier l’enlèvement du matériel.'
            ]
        },
        'contact': {
            pageTitle: 'Nous contacter',
            formTitle: 'Formulaire de contact',
            formMessageTitle: 'Message',
            formSubmitText: 'Envoyer message',
            texts: ['Pour toute demande ou question, vous pouvez nous contacter par téléphone, par email ou en remplissant le formulaire de contact ci-contre']
        }
    };

    let equipment = null;
    if (type === 'book' && equipmentId !== '0') {
        equipment = await prisma.equipment.findUnique({
            where: {
                id: equipmentId
            }
        });
    }

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <ContactContent title={contactPageContent[type].pageTitle} texts={contactPageContent[type].texts}></ContactContent>
                <ContactForm title={contactPageContent[type].formTitle} submitText={contactPageContent[type].formSubmitText} type={type} equipment={equipment} formMessageTitle={contactPageContent[type].formMessageTitle}></ContactForm>
            </div>
        </div>
    )
}
