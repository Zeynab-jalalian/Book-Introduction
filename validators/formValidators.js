import * as z from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(8)
    .max(30)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export default formSchema;
