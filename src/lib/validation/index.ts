import { z } from 'zod';

const baseSchema = z.object({
  name: z
    .string({ required_error: 'Este campo é obrigatório' })
    .min(3, { message: 'Insira ao menos três letras' }),
  email: z
    .string({ required_error: 'Este campo é obrigatório' })
    .email({ message: 'Insira um email válido' })
    .min(3, { message: 'Insira ao menos três letras' }),
  telephone: z
    .string({ required_error: 'Este campo é obrigatório' })
    .min(9, { message: 'Insira um número de telefone válido' }),
  birthDate: z.date({ required_error: 'Este campo é obrigatório' }),
  genre: z.enum(['Masculino', 'Feminino'], {
    required_error: 'Este campo é obrigatório',
  }),
  isMember: z.enum(['Membro da ASI', 'Não membro da ASI'], {
    required_error: 'Este campo é obrigatório',
  }),
  typeOfParticipants: z.enum(
    [
      'Profissional',
      'Empreendedor',
      'Expositor',
      'Mídia',
      'Estudante',
      'Empresa',
    ],
    { required_error: 'Este campo é obrigatório' }
  ),
  dayOfParticipation: z
    .array(z.string(), { required_error: 'Este campo é obrigatório' })
    .refine((value) => value.some((item) => item), {
      message: 'Selecciona ao menos uma opção',
    }),
});

const noFoodSchema = z.object({
  registrationType: z.literal('Sem alimentação'),
  acommodationType: z
    .enum([
      'Acomodação individual + Alimentação',
      'Acomodação partilhada + Alimentação',
    ])
    .optional(),
  foodType: z.enum(['Almoço', 'Coffee-break']).optional(),
  isVegan: z.enum(['Sou vegetariano', 'Não sou vegetariano']).optional(),
});

const withFoodAndAcommodationSchema = z.object({
  registrationType: z.literal('Acomodação + Alimentação'),
  acommodationType: z.enum(
    [
      'Acomodação individual + Alimentação',
      'Acomodação partilhada + Alimentação',
    ],
    { required_error: 'Este campo é obrigatório' }
  ),
  foodType: z.enum(['Almoço', 'Coffee-break']).optional(),
  isVegan: z.enum(['Sou vegetariano', 'Não sou vegetariano'], {
    required_error: 'Este campo é obrigatório',
  }),
});

const onlyFoodSchema = z.object({
  registrationType: z.literal('Só alimentação'),
  acommodationType: z
    .enum([
      'Acomodação individual + Alimentação',
      'Acomodação partilhada + Alimentação',
    ])
    .optional(),
  foodType: z.enum(['Almoço', 'Coffee-break'], {
    required_error: 'Este campo é obrigatorio',
  }),
  isVegan: z.enum(['Sou vegetariano', 'Não sou vegetariano'], {
    required_error: 'Este campo é obrigatório',
  }),
});

export const registerSchema = z
  .discriminatedUnion(
    'registrationType',
    [noFoodSchema, withFoodAndAcommodationSchema, onlyFoodSchema],
    {
      errorMap: (issue, ctx) => {
        if (issue.code === 'invalid_union_discriminator') {
          return { message: 'Escolha uma das opções' };
        }
        return { message: ctx.defaultError };
      },
    }
  )
  .and(baseSchema);
