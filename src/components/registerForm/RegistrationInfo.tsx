import { items } from '@/shared';
import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const RegistrationInfo = ({
  form,
  selectedRegisterType,
}: {
  form: any;
  selectedRegisterType: any;
}) => {
  return (
    <>
      <h3 className='text-titleColor font-semibold text-center text-[20px]'>
        Dados do registo
      </h3>
      <hr className='h-1 mt-2 mb-5 bg-lightBlue' />
      <FormField
        control={form.control}
        name='registrationType'
        render={({ field }) => (
          <FormItem className='w-full mt-3'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              Escolha o tipo de participação
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className='flex flex-col space-y-1'
              >
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='Acomodação + Alimentação' />
                  </FormControl>
                  <FormLabel className='text-[16px] font-normal'>
                    Acomodação + Alimentação
                  </FormLabel>
                </FormItem>
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='Só alimentação' />
                  </FormControl>
                  <FormLabel className='text-[16px] font-normal'>
                    Só alimentação
                  </FormLabel>
                </FormItem>
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='Sem alimentação' />
                  </FormControl>
                  <FormLabel className='text-[16px] font-normal'>
                    Sem alimentação
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage className='text-red font-semibold text-[13px]' />
          </FormItem>
        )}
      />

      {selectedRegisterType === 'Acomodação + Alimentação' && (
        <FormField
          control={form.control}
          name='acommodationType'
          render={({ field }) => (
            <FormItem className='w-full mt-3'>
              <FormLabel className='text-[16px] text-titleColor font-semibold'>
                Tipo de acomodação
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Acomodação individual + Alimentação' />
                    </FormControl>
                    <FormLabel className='text-[16px] font-normal leading-4'>
                      Alimentação + acomodação individual (34 500 AOA/Pax/dia)
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Acomodação partilhada + Alimentação' />
                    </FormControl>
                    <FormLabel className='text-[16px] font-normal leading-4'>
                      Alimentação + acomodação partilhada (29 500 AOA/Pax/dia)
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className='text-red font-semibold text-[13px]' />
            </FormItem>
          )}
        />
      )}

      {selectedRegisterType === 'Só alimentação' && (
        <FormField
          control={form.control}
          name='foodType'
          render={({ field }) => (
            <FormItem className='w-full mt-3'>
              <FormLabel className='text-[16px] text-titleColor font-semibold'>
                Tipo de alimentação
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Almoço' />
                    </FormControl>
                    <FormLabel className='text-[16px] font-normal'>
                      Almoço (7 000 AOA/ Pax)
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Coffee-break' />
                    </FormControl>
                    <FormLabel className='text-[16px] font-normal'>
                      Coffee-break (2) (7 000 AOA/Pax )
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className='text-red font-semibold text-[13px]' />
            </FormItem>
          )}
        />
      )}
      {selectedRegisterType === 'Sem alimentação' && (
        <h3 className='text-red mt-5 font-semibold text-[18px]'>
          NOTA: o custo de alimentação pago no dia do evento é de 10.000 AOA/Pax
        </h3>
      )}

      {(selectedRegisterType === 'Acomodação + Alimentação' ||
        selectedRegisterType === 'Só alimentação') && (
        <FormField
          control={form.control}
          name='isVegan'
          render={({ field }) => (
            <FormItem className='w-full mt-3'>
              <FormLabel className='text-[16px] text-titleColor font-semibold'>
                Informe se é vegetariano
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-col space-y-1'
                >
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Sou vegetariano' />
                    </FormControl>
                    <FormLabel className='text-[16px] font-normal'>
                      Sou vegetariano
                    </FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='Não sou vegetariano' />
                    </FormControl>
                    <FormLabel className='text-[16px] font-normal'>
                      Não sou vegetariano
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage className='text-red font-semibold text-[13px]' />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name='dayOfParticipation'
        render={() => (
          <FormItem className='w-full mt-3'>
            <div className='mb-4'>
              <FormLabel className='text-[16px] text-titleColor font-semibold'>
                Informe os dias que pretende participar
              </FormLabel>
            </div>
            <div className='flex gap-3'>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name='dayOfParticipation'
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className='flex flex-row items-start space-x-2 space-y-0'
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: any) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className='text-[16px] font-normal'>
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage className='text-red font-semibold text-[13px]' />
          </FormItem>
        )}
      />
    </>
  );
};

export default RegistrationInfo;
