import * as React from 'react';

interface UserRegisterEmailProps {
  name: string;
}

const UserRegisterEmail: React.FC<Readonly<UserRegisterEmailProps>> = ({
  name,
}) => (
  <div className='px-5'>
    <div className=''>
      <h3 className='font-semibold text-[20px] text-titleColor mb-2'>
        Saudações, Félix Pereira! Deu início ao seu processo de inscrição para a
        convenção da ASI.
      </h3>
      <p className='text-textColor'>
        Para que a sua inscrição seja concluída com sucesso, é obrigatório o
        envio do comprovativo do pagamento da taxa de inscrição.
      </p>
    </div>
    <hr className='my-5 h-2 bg-lightBlue' />
    <div>
      <h3 className='text-titleColor font-semibold text-[18px] border-l-8 border-lightBlue pl-3 mb-5'>
        Detalhes do pagamento:
      </h3>
      <p className='text-textColor mb-5'>
        O pagamento pode ser feito via depósito ou transferência bancária.
      </p>
      <div className='flex gap-2'>
        <strong className='text-titleColor'>Banco:</strong>
        <p className='text-textColor'>BAI </p>
      </div>
      <div className='flex gap-2'>
        <strong className='text-titleColor'>Nº da conta:</strong>
        <p className='text-textColor'>087861057 10 001</p>
      </div>
      <div className='flex gap-2'>
        <strong className='text-titleColor'>IBAN:</strong>
        <p className='text-textColor'>AO06 0040 0000 8786 1057 1018 4</p>
      </div>
      <div className='flex gap-2'>
        <strong className='text-titleColor'>Beneficiário:</strong>
        <p className='text-textColor'>
          Associação de Profissionais e Empreendedores Adventistas de Angola
        </p>
      </div>
      <div className='flex gap-2 mt-2'>
        <strong className='text-primary font-semibold'>
          Código de ferência da inscrição:
        </strong>
        <p className='text-primary'>#ASI001</p>
      </div>
      <div className='flex gap-2 items-center border rounded-md border-lightBlue p-3 mt-5 w-fit bg-primary'>
        <strong className='text-light-1 text-[20px] font-semibold'>
          Valor total da taxa de inscrição:
        </strong>
        <p className='text-light-1 mt-1'>50000 AOA</p>
      </div>
      <div className='mt-3'>
        <p className='text-textColor'>
          <small className='text-titleColor font-semibold text-[20px]'>
            Nota:{' '}
          </small>
          Após efectuar o pagamento da taxa de inscrição, é necessário fazer o
          envio do comprovativo do pagamento, via e-mail. Ao enviar o
          comprovativo de pagamento, deve incluir na mensagem o código de
          referência da sua inscrição: <strong>#ASI001</strong>.
        </p>
      </div>
      <div className='flex gap-2 mt-5'>
        <strong className='text-titleColor'>
          Endereço de e-mail para envio do comprovativo:
        </strong>
        <p className='text-textColor'>asi.ao@asi.org</p>
      </div>
    </div>

    <hr className='my-5 h-2 bg-lightBlue' />
    <div className='mt-10'>
      <h3 className='text-titleColor font-semibold text-[18px] border-l-8 border-lightBlue pl-3 mb-5'>
        Contacto:
      </h3>
      <p className='text-textColor mb-5'>
        Pode entrar em contacto caso tenha alguma dúvida.
      </p>
      <div className='flex gap-2'>
        <strong className='text-titleColor'>E-mail</strong>
        <p className='text-textColor'> </p>
      </div>
      <div className='flex gap-2'>
        <strong className='text-titleColor'>Telefone</strong>
        <p className='text-textColor'> </p>
      </div>
    </div>
  </div>
);

export default UserRegisterEmail;
