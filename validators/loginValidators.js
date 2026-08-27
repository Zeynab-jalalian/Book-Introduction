import * as z from "zod";

const loginSchema = z.object({
  email: z
    .string("ایمیل الزامی است.")
    .trim()
    .email("لطفاً یک ایمیل معتبر وارد کنید."),

  password: z
    .string("رمز عبور الزامی است.")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد.")
    .max(128, "رمز عبور نمی‌تواند بیشتر از ۱۲۸ کاراکتر باشد.")
    .regex(/[a-z]/, "رمز عبور باید حداقل یک حرف انگلیسی کوچک داشته باشد."),
});

export default loginSchema;
