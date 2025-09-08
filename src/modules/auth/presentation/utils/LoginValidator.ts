import type { Rule } from "antd/es/form";
import { ValidationRules } from "@/shared/lib/validators/ValidationRules";

export const LoginValidator = {
    email: (name: string): Rule[] => [
        ValidationRules.required(name),
        {
            type: "email",
            message: `${name} a un format invalide`
        }
    ],

    password: (name: string): Rule[] => [
        ValidationRules.required(name),
        {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
            message: `${name} doit avoir au moins 6 caractères et contenir 1 majuscule, 1 minuscule, 1 chiffre`
        }
    ]
} as const;
