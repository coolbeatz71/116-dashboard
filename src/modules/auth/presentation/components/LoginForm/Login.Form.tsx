import { Button, Form, Input } from "antd";
import type { FC } from "react";
import { LoginValidator } from "../../utils/LoginValidator";

const { Item, useForm } = Form;
const { Password } = Input;

export const LoginForm: FC = () => {
    const [form] = useForm();

    return (
        <Form form={form} size="large" layout="vertical" name="admin_login">
            <Item
                name="credential"
                label="Adresse e-mail"
                validateTrigger={["onSubmit", "onBlur"]}
                rules={LoginValidator.email("Adresse e-mail")}
            >
                <Input size="large" placeholder="Adresse e-mail" />
            </Item>

            <Item
                name="password"
                label="Mot de passe"
                validateTrigger={["onSubmit", "onBlur"]}
                rules={LoginValidator.password("Mot de passe")}
            >
                <Password size="large" placeholder="••••••••••••••" visibilityToggle autoComplete="new-password" />
            </Item>

            <br />

            <Button block size="large" type="primary" htmlType="submit">
                Connexion
            </Button>
        </Form>
    );
};
