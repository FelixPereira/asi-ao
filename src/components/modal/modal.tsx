import { XIcon, InfoIcon } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    <div
      className={`
        bg-[#000]/60
        w-full
        h-full
        fixed
        top-0
        left-0
        z-10
        ${isModalOpen ? 'flex' : 'hidden'}
        justify-center
      `}
    >
      <div
        className='
          relactive
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          max-w-[90%]
          h-full
          lg:h-auto
          md:h-auto
        '
      >
        <div
          className={`
            translate
            duration-300
            h-full
            ${isModalOpen ? 'translate-y-10' : 'translate-y-full'}
          `}
        >
          <div
            className='
              translate
              lg:h-auto
              md:h-auto
              border
              rounded-md
              shadow-md
              relative
              flex
              flex-col
              w-full
              bg-light-1
              p-5
            '
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className='absolute right-10'
            >
              <XIcon />
            </button>
            <div className='flex mt-5 mb-3 flex-col items-center'>
              <div className='flex gap-2 items-center mb-3'>
                <InfoIcon className='text-titleColor font-semibold' />
                <h2 className='text-titleColor font-semibold text-[25px]'>
                  Atenção
                </h2>
              </div>
              <hr className='h-2 bg-red mb-3' />
              <p className='text-textColor'>
                A sua inscrição só estará concluída após o envio do comprovativo
                da taxa de inscrição. Foi enviado um email para o endereço{' '}
                <strong>felix@gmail.com</strong>, com as coordenadas bancárias e
                as instruções para confirmar o pagamento.
              </p>
            </div>
            

            <div className='mt-3'>
              <p className='text-red'>
                <strong>Nota: </strong>
                Após a sua inscrição, o pagamento deve ser confirmado em no
                máximo 24h. Após este período, caso não envie o comprovativo
                do pagamento, poderá ter a inscrição cancelada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
