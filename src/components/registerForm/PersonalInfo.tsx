'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { typeOfParticipants } from '@/shared';
import { format } from 'date-fns';

const PersonalInfo = (form: any) => {
  return (
    <>
      <h3 className='text-titleColor font-semibold text-center text-[20px]'>
        Dados pessoais
      </h3>
      <hr className='h-1 mt-2 mb-10 bg-lightBlue' />
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem className='w-full'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              Nome completo
            </FormLabel>
            <FormControl>
              <Input type='text' className='form-input' {...field} />
            </FormControl>
            <FormMessage className='form-message' />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <FormItem className='w-full mt-3'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              Seu email
            </FormLabel>
            <FormControl>
              <Input type='email' className='form-input' {...field} />
            </FormControl>
            <FormMessage className='form-message' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='telephone'
        render={({ field }) => (
          <FormItem className='w-full mt-3'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              Telefone
            </FormLabel>
            <FormControl>
              <Input type='number' className='form-input' {...field} />
            </FormControl>
            <FormMessage className='form-message' />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='genre'
        render={({ field }) => (
          <FormItem className='w-full mt-3'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              Gênero
            </FormLabel>

            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Seleccione o tipo de participante' />
                </SelectTrigger>
              </FormControl>
              <SelectContent className='bg-light-1'>
                <SelectItem value='Masculino'>Masculino</SelectItem>
                <SelectItem value='Feminino'>Feminino</SelectItem>
              </SelectContent>
            </Select>

            <FormMessage className='form-message' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='birthDate'
        render={({ field }) => (
          <FormItem className='w-full mt-4 flex flex-col'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              Data de nascimento
            </FormLabel>
            <Popover>
              <PopoverTrigger asChild className='border-none bg-lightBlue h-12'>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full pl-3 text-left font-normal',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    {field.value ? (
                      format(field.value, 'dd/MM/yyyy')
                    ) : (
                      <span>Escolha uma data</span>
                    )}
                    <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className='w-auto p-0' align='start'>
                <Calendar
                  mode='single'
                  selected={field.value}
                  onSelect={field.onChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date('1900-01-01')
                  }
                  initialFocus
                  className='bg-light-1 rounded-5'
                />
              </PopoverContent>
            </Popover>
            <FormMessage className='form-message' />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='type'
        render={({ field }) => (
          <FormItem className='w-full mt-3'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              Tipo de participação
            </FormLabel>

            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder='Seleccione uma opção' />
                </SelectTrigger>
              </FormControl>
              <SelectContent className='bg-light-1'>
                {typeOfParticipants.map((typeOfParticipant) => (
                  <SelectItem
                    key={typeOfParticipant.value}
                    value={typeOfParticipant.value}
                  >
                    {typeOfParticipant.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <FormMessage className='form-message' />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name='isMember'
        render={({ field }) => (
          <FormItem className='w-full mt-3'>
            <FormLabel className='text-[16px] text-titleColor font-semibold'>
              É membro da ASI?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className='flex flex-col'
              >
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='Membro da ASI' />
                  </FormControl>
                  <FormLabel className='text-[16px] font-normal'>
                    Sou membro da ASI
                  </FormLabel>
                </FormItem>
                <FormItem className='flex items-center space-x-3 space-y-0'>
                  <FormControl>
                    <RadioGroupItem value='Não membro da ASI' />
                  </FormControl>
                  <FormLabel className='text-[16px] font-normal'>
                    Não sou membro da ASI
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage className='form-message' />
          </FormItem>
        )}
      />
    </>
  );
};

export default PersonalInfo;
