import * as z from "zod";

const registerSchema = z
  .object({
    name: z
      .string("نام کاربری الزامی است.")
      .trim()
      .min(8, "نام کاربری باید حداقل ۸ کاراکتر باشد.")
      .max(30, "نام کاربری نمی‌تواند بیشتر از ۳۰ کاراکتر باشد.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "نام کاربری فقط می‌تواند شامل حروف انگلیسی، اعداد و _ باشد.",
      ),

    email: z
      .string("ایمیل الزامی است.")
      .trim()
      .email("لطفاً یک ایمیل معتبر وارد کنید."),

    password: z
      .string("رمز عبور الزامی است.")
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد.")
      .max(128, "رمز عبور نمی‌تواند بیشتر از ۱۲۸ کاراکتر باشد.")
      .regex(/[a-zA-Z]/, "رمز عبور باید حداقل یک حرف انگلیسی داشته باشد.")
      .regex(/[0-9]/, "رمز عبور باید حداقل یک عدد داشته باشد."),

    confirmPassword: z.string("تکرار رمز عبور الزامی است."),

    acceptedTerms: z.boolean().refine((value) => value === true, {
      message: "لطفاً قوانین و شرایط را بپذیرید.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمزهای عبور یکسان نیستند.",
    path: ["confirmPassword"],
  });

export default registerSchema;
