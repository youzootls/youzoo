import { NextRequest, NextResponse } from 'next/server';

const getEmailSubject = (type: string) => {
    switch (type) {
        case 'book':
            return "Nouvelle demande de réservation de matériel";
        case 'donate':
            return "Nouvelle proposition de don de matériel";
        default:
            return "Nouveau message de contact";
    }
};

const formatDateToFr = (date: string) => {
    return new Date(date).toLocaleDateString('fr-FR');
};

const getEmailContent = (data: any) => {
    let specificContent = '';

    switch (data.type) {
        case 'book':
            specificContent = `
                <h3>Détails de la réservation</h3>
                <p><strong>Période souhaitée:</strong> du ${formatDateToFr(data.bookingStartDate)} au ${formatDateToFr(data.bookingEndDate)}</p>
                <p><strong>Âge de l'enfant:</strong> ${data.childAge} ans</p>
                <p><strong>Taille de l'enfant:</strong> ${data.childSize} cm</p>
                ${data.equipment ? `
                <h3>Équipement demandé</h3>
                <p><strong>Nom:</strong> ${data.equipment.name}</p>
                <p><strong>Fabricant:</strong> ${data.equipment.manufacturer}</p>
                ` : ''}
            `;
            break;
        case 'donate':
            specificContent = `
                <h3>Don de matériel</h3>
                <p>La personne souhaite faire un don de matériel.</p>
            `;
            break;
    }

    return `
        <h2>Informations du contact</h2>
        <p><strong>Nom:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Téléphone:</strong> ${data.phoneNumber}</p>
        ${specificContent}
        <h3>Message</h3>
        <p>${data.message}</p>
        <p><strong>Inscription newsletter:</strong> ${data.newsletterSubscription ? 'Oui' : 'Non'}</p>
    `;
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const url = 'https://api.brevo.com/v3/smtp/email';
        const options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY!,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                sender: {
                    name: "Site Youzoo.fr",
                    email: process.env.CONTACT_EMAIL
                },
                to: [{
                    email: process.env.CONTACT_EMAIL
                }],
                replyTo: {
                    email: body.email,
                    name: `${body.firstName} ${body.lastName}`
                },
                subject: getEmailSubject(body.type),
                htmlContent: getEmailContent(body)
            })
        };

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error('Failed to send email');
        }

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}