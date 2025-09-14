import { z } from "zod"


export const schema = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  email: z.email({ message: "El correo no es válido" }).min(1, { message: "El correo es obligatorio" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  confirmPassword: z.string().min(6, { message: "La confirmacion debe tener al menos 6 caracteres" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"]
})

export type FormValues = z.infer<typeof schema>
