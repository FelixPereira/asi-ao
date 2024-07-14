import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Hr,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

interface UserRegisterEmailProps {
  totalCost: number;
  name: string;
  email: string;
  telephone: string;
  genre: string;
  birthDate: string;
  typeOfParticipants: string;
  isMember: string;
  dayOfParticipation: string;
  registrationType: string;
  acommodationType: string;
  foodType: string;
  registrationDate: string;
  registrationId: string;
  isVegan: string;
}

const baseUrl = process.env.BASE_URL ? `https://${process.env.BASE_URL}` : '';

export const UserRegisterEmail = ({
  name,
  email,
  totalCost,
  registrationId,
  acommodationType,
  birthDate,
  dayOfParticipation,
  foodType,
  genre,
  isMember,
  registrationDate,
  registrationType,
  telephone,
  typeOfParticipants,
  isVegan,
}: UserRegisterEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat('ao', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date());

  return (
    <Html>
      <Tailwind>
        <Head />
        <Body style={main}>
          <Container>
            <Section style={logo}>
              <Img src={`${baseUrl}/static/logo-asi.png`} />
            </Section>
            <Section>
              <Row style={{ ...boxInfos, paddingBottom: '0' }}>
                <Column>
                  <Section className='flex flex-col gap-2 items-center'>
                    <Heading className='text-center font-semibold text-[20px] text-[#030C3F] mb-2'>
                      Saudações, {name}.
                    </Heading>
                    <Heading
                      className='font-semibold text-[20px] text-[#030C3F] text-center'
                      as='h2'
                    >
                      Deu início ao seu processo de inscrição para a convenção
                      da ASI.
                    </Heading>
                    <Text className='text-center text-[16px] text-[#676b77]'>
                      Para que a sua inscrição seja concluída com sucesso, é
                      obrigatório o envio do comprovativo do pagamento da taxa
                      de inscrição.
                    </Text>
                  </Section>
                  <Hr className='bg-[#E8F0FE] my-5 h-2 w-full' />

                  <Section>
                    <Heading
                      as='h2'
                      className='text-[#030C3F] font-semibold text-[18px] border-l-8 border-[#E8F0FE] pl-3 mb-5'
                    >
                      Detalhes do pagamento:
                    </Heading>
                    <Text style={paragraph}>
                      O pagamento pode ser feito via depósito ou transferência
                      bancária.
                    </Text>
                    <Text style={paragraph}>
                      <b>Banco: </b>
                      BAI
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Nº da conta: </b>
                      087861057 10 001
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>IBAN: </b>
                      AO06 0040 0000 8786 1057 1018 4
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Beneficiário: </b>
                      Associação de Profissionais e Empreendedores Adventistas
                      de Angola
                    </Text>
                    <Text
                      className='text-[#21409A] font-semibold'
                      style={{ ...paragraph, marginTop: -5 }}
                    >
                      <b>Data da inscrição: </b>
                      {formattedDate}
                    </Text>
                    <Text
                      className='text-[#21409A] font-semibold'
                      style={{ ...paragraph, marginTop: -5 }}
                    >
                      <b>Código de referência da inscrição: </b>
                      {registrationId}
                    </Text>
                    <Text
                      className='flex gap-2 items-center rounded-md p-3 mt-5 w-fit bg-[#21409A]'
                      style={{ ...paragraph, marginTop: -5 }}
                    >
                      <b className='text-[#FFFFFF] text-[20px] font-semibold'>
                        Valor total da taxa de inscrição: {totalCost} AOA
                      </b>
                    </Text>
                  </Section>
                  <Hr className='bg-[#E8F0FE] my-5 h-2 w-full' />

                  <Section>
                    <Heading className='text-[#030C3F] font-semibold text-[18px] border-l-8 border-[#E8F0FE] pl-3 mb-5'>
                      Detalhes da inscrição:
                    </Heading>
                    <Text style={paragraph}>
                      <b>Nome completo: </b>
                      {name}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Email: </b>
                      {email}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Telefone: </b>
                      {telephone}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Gênero: </b>
                      {genre}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Data de nascimento: </b>
                      {birthDate}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Tipo de participação: </b>
                      {typeOfParticipants}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Categoria: </b>
                      {isMember}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Dias de participação: </b>
                      {dayOfParticipation}
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Tipo de inscrição: </b>
                      {registrationType}
                    </Text>

                    {registrationType === 'Acomodação + Alimentação' && (
                      <Text style={{ ...paragraph, marginTop: -5 }}>
                        <b>Tipo de acomodação: </b>
                        {acommodationType}
                      </Text>
                    )}
                    {registrationType === 'Só alimentação' && (
                      <Text style={{ ...paragraph, marginTop: -5 }}>
                        <b>Tipo de alimentação: </b>
                        {foodType}
                      </Text>
                    )}
                    {(registrationType === 'Acomodação + Alimentação' ||
                      registrationType === 'Só alimentação') && (
                      <Text style={{ ...paragraph, marginTop: -5 }}>
                        <b>Preferencia por comida vegetariana: </b>
                        {isVegan}
                      </Text>
                    )}

                    <Text
                      className='text-[#21409A] font-semibold'
                      style={{ ...paragraph, marginTop: -5 }}
                    >
                      <b>Data da inscrição: </b>
                      {registrationDate}
                    </Text>
                    <Text
                      className='text-[#21409A] font-semibold'
                      style={{ ...paragraph, marginTop: -5 }}
                    >
                      <b>Código de ferência da inscrição: </b>
                      {registrationId}
                    </Text>
                    <Text
                      className='flex gap-2 items-center rounded-md p-3 mt-5 w-fit bg-[#21409A]'
                      style={{ ...paragraph, marginTop: -5 }}
                    >
                      <b className='text-[#FFFFFF] text-[20px] font-semibold'>
                        Valor total da taxa de inscrição: {totalCost} AOA
                      </b>
                    </Text>

                    <Text
                      style={{
                        color: 'rgb(0,0,0, 0.8)',
                        fontSize: 15,
                        marginTop: -5,
                      }}
                    >
                      <b>NOTA: </b>
                      Após efectuar o pagamento da taxa de inscrição, é
                      necessário fazer o envio do comprovativo do pagamento, via
                      e-mail. Ao enviar o comprovativo de pagamento, deve
                      incluir na mensagem o código de referência da sua
                      inscrição: <b>#ASI001</b>.
                    </Text>
                    <Text style={{ ...paragraph, marginTop: -5 }}>
                      <b>Endereço de e-mail para envio do comprovativo: </b>
                      asi.geral@asi-ao.org
                    </Text>
                  </Section>

                  <Hr className='bg-[#E8F0FE] my-5 h-2 w-full' />
                </Column>
              </Row>
            </Section>

            <Section>
              <Heading
                as='h2'
                className='text-[#030C3F] font-semibold text-[18px] border-l-8 border-[#E8F0FE] pl-3 mb-5'
              >
                Contacto:
              </Heading>
              <Text style={paragraph}>
                Pode entrar em contacto connosco caso tenha alguma dúvida.
              </Text>
              <Text style={paragraph}>
                <b>E-mail: </b>
                asi.ao@asi.org
              </Text>
              <Text style={paragraph}>
                <b>Telefone: </b>
                (+244) 923 314 591
              </Text>
            </Section>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 12,
                color: 'rgb(0,0,0, 0.7)',
              }}
            >
              | © 2024 | ASI - Associação de Profissionais e Empreendedores
              Adventistas de Angola | www.asi-ao.org |
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default UserRegisterEmail;

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: '30px 20px',
};

const boxInfos = {
  padding: '20px',
};
