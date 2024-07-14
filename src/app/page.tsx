'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/validation';
import { z } from 'zod';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import RegistrationInfo from '@/components/registerForm/RegistrationInfo';
import {
  availablePlaces,
  coffiBreackCost,
  FORM_STEPS,
  lunchCost,
  sharedAcommodationCost,
  singleAcommodationCost,
} from '@/constants';
import PersonalInfo from '@/components/registerForm/PersonalInfo';
import Modal from '@/components/modal/modal';
import axios from 'axios';
import { format } from 'date-fns';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [totalPlaces, setTotalPlaces] = useState(availablePlaces);
  const [registrationCount, setRegistrationCount] = useState(0);
  const [step, setStep] = useState(FORM_STEPS.PERSONAL_INFO);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: 'Félix Pereira',
      email: 'f@gmail.com',
      telephone: '908098098908',
      birthDate: new Date(),
      genre: 'Masculino',
      isMember: 'Membro da ASI',
      typeOfParticipants: 'Empresa',
      registrationType: undefined,
      acommodationType: undefined,
      foodType: undefined,
      isVegan: 'Sou vegetariano',
      dayOfParticipation: ['Dia 14'],
    },
  });

  const selectedRegisterType = form.watch('registrationType');

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setTotalPlaces((value) => value - 1);
    setRegistrationCount((value) => value + 1);
    setIsModalOpen(true);

    let totalCost = 0;
    const registrationId = '#ASI' + `${registrationCount}`.padStart(3, '0');

    const birthDate = format(values.birthDate, 'dd/MM/yyy');
    const daysOfParticipation = values.dayOfParticipation.length;
    const registrationDate = format(new Date(), 'dd/MM/yyyy hh:mm')
      .split(' ')
      .join(' às ');
    const dayOfParticipation =
      values.dayOfParticipation.length > 1
        ? values.dayOfParticipation.join(' | ')
        : values.dayOfParticipation[0];

    if (values.registrationType === 'Acomodação + Alimentação') {
      totalCost =
        values?.acommodationType === 'Acomodação individual + Alimentação'
          ? singleAcommodationCost * daysOfParticipation
          : sharedAcommodationCost * daysOfParticipation;
    } else if (values.registrationType === 'Só alimentação') {
      totalCost =
        values?.foodType === 'Almoço'
          ? lunchCost * daysOfParticipation
          : coffiBreackCost * daysOfParticipation;
    }

    try {
      const res = await axios.post('/api/register', {
        ...values,
        registrationDate,
        totalCost,
        registrationId,
        daysOfParticipation,
        birthDate,
        dayOfParticipation,
      });

      console.log('RES: ', res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className='py-20 flex items-center justify-center'>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <Form {...form}>
        {totalPlaces === 0 ? (
          <h3
            className='
              text-titleColor
              font-semibold
              text-center
              text-[30px]
              '
          >
            Infelizmente, já não há vagas disponíveis.
          </h3>
        ) : (
          <div
            className='
              w-[80%]
              md:max-w-[500px]
              shadow-xl
              bg-light-1
              rounded-md
              flex
              flex-col
              items-center
              border
              border-lightBlue
            '
          >
            <div className='mb-5 py-5 bg-primary w-full rounded-t-md'>
              <h3
                className='
                  text-light-1
                  font-semibold
                  text-[25px]
                  text-center
                '
              >
                Inscrição para a convenção
              </h3>
            </div>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-full px-10'
            >
              {step === FORM_STEPS.PERSONAL_INFO ? (
                <PersonalInfo form={form} />
              ) : (
                <RegistrationInfo
                  form={form}
                  selectedRegisterType={selectedRegisterType}
                />
              )}
              <div className='flex justify-between py-10'>
                {step !== 1 && (
                  <>
                    <Button
                      onClick={() => setStep((value) => value - 1)}
                      className='button-outline flex gap-2'
                    >
                      <ArrowLeft className='ml-auto h-4 w-4' />
                      Voltar
                    </Button>

                    <Button type='submit' className='button'>
                      Registar
                    </Button>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div></div>
                    <Button
                      onClick={() => setStep((value) => value + 1)}
                      className='button flex gap-2'
                    >
                      Avançar
                      <ArrowRight className='ml-auto h-4 w-4' />
                    </Button>
                  </>
                )}
              </div>
            </form>
          </div>
        )}
      </Form>
    </main>
  );
};

export default HomePage;
