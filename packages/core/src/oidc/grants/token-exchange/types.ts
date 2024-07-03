import { z } from 'zod';

export const tokenExchangeActGuard = z.object({
  act: z.object({
    sub: z.string(),
  }),
});

export type TokenExchangeAct = z.infer<typeof tokenExchangeActGuard>;
