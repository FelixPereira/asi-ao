import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, { message: 'Insira ao menos duas letras' }),
  genre: z.enum(['Masculino', 'Feminino']),
  birthDate: z.date(),
  telephone: z
    .string()
    .min(9, { message: 'Insira um número de telefone válido' }),
  email: z.string().min(3, { message: 'Insira um email válido' }),
  participantCategory: z.enum(['Membro da ASI', 'Não membro da ASI']),
  type: z.enum([
    'Profissional',
    'Empreendedor',
    'Expositor',
    'Mídia',
    'Estudante',
    'Empresa',
  ]),
  typeOfRegister: z.enum([
    'Acomodação + alimentação',
    'Só alimentação',
    'Sem alimentação',
  ]),
  isVegan: z.boolean(),
});
