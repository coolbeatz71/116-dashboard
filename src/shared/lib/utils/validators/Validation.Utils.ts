import type { Rule } from "antd/es/form";

interface IMinMax {
    min?: number;
    max: number;
}

export const ValidationUtils = {
    required: (name: string): Rule => ({
        required: true,
        message: `${name} obligatoire`
    }),

    max: (name: string, max: number): Rule => ({
        max,
        message: `${name} doit contenir au maximum ${max} caractères`
    }),

    minmax: (name: string, len: IMinMax): Rule => {
        const rule = { min: len.min, max: len.max };
        return {
            ...rule,
            message: `${name} doit contenir entre ${len.min} et ${len.max} caractères`
        };
    }
} as const;
