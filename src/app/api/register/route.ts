import { Resend } from 'resend';

import { NextResponse } from 'next/server';
import UserRegisterEmail from 'react-email-starter/emails/UserRegisterEmail';
import AdminRegisterEmail from 'react-email-starter/emails/AdminRegisterEmail';

interface BodyType {
  registrationType: string;
  acommodationType: string;
  isVegan: string;
  name: string;
  email: string;
  telephone: string;
  birthDate: string;
  genre: string;
  isMember: string;
  typeOfParticipants: string;
  dayOfParticipation: string;
  totalCost: number;
  foodType: string;
  registrationDate: string;
  registrationId: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body: BodyType = await req.json();

  try {
    const { data, error } = await resend.batch.send([
      {
        from: 'ASI Angola <asi.geral@asi-ao.org>',
        to: [body.email],
        subject: 'Inscrição para a convenção da ASI',
        react: UserRegisterEmail(body),
        text: 'Um texto complementar',
      },
      {
        from: 'ASI Angola <asi.geral@asi-ao.org>',
        to: ['asi.geral@asi-ao.org'],
        subject: 'Nova inscrição para a convenção da ASI',
        react: AdminRegisterEmail(body),
        text: 'Um texto complementar',
      },
    ]);

    if (error) {
      console.log(error);
      return NextResponse.json({ message: 'Erro ao enviar' }, { status: 500 });
    }

    console.log(data);
    NextResponse.json({ data, status: 200 });
  } catch (error) {
    NextResponse.json({ error }, { status: 500 });
  }
}
