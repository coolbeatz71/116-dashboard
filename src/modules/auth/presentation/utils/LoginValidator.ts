import type { Rule } from "antd/es/form";
import { ValidationUtils } from "@/shared/lib/utils/validators/Validation.Utils";

export const LoginValidator = {
    email: (name: string): Rule[] => [
        ValidationUtils.required(name),
        {
            type: "email",
            message: `${name} a un format invalide`
        }
    ],

    password: (name: string): Rule[] => [
        ValidationUtils.required(name),
        {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
            message: `${name} doit avoir au moins 6 caractères et contenir 1 majuscule, 1 minuscule, 1 chiffre`
        }
    ]
} as const;
