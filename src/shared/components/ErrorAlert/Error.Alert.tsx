import { Alert, Form } from "antd";
import type { FC, MouseEventHandler } from "react";
import type { IApiProblemDetails } from "@/shared/api/type";
import { IconCloseCircleOutlined } from "../Icons/Icons";

const { Item } = Form;

/**
 * Props for the ErrorAlert component.
 *
 * @interface IErrorAlertProps
 * @property {boolean} banner - Whether to display as a banner without borders
 * @property {boolean} showIcon - Whether to show the error icon
 * @property {boolean} closable - Whether the alert can be dismissed
 * @property {IApiProblemDetails | undefined | null} error - The error object to display
 * @property {MouseEventHandler<HTMLButtonElement>} onClose - Callback when the alert is closed
 */
export interface IErrorAlertProps {
    banner: boolean;
    showIcon: boolean;
    closable: boolean;
    error: IApiProblemDetails | undefined | null;
    onClose?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Error alert component for displaying API error messages.
 *
 * @component
 *
 * @description
 * Displays error messages from API responses in a user-friendly alert format.
 * Shows the error title and detail from IApiProblemDetails.
 * Renders nothing if no error is provided.
 *
 * @returns {JSX.Element | null} The error alert or null if no error
 */
const ErrorAlert: FC<IErrorAlertProps> = ({ error, closable, banner, showIcon, onClose }) => {
    return (
        error && (
            <Item>
                <Alert
                    type="error"
                    banner={banner}
                    onClose={onClose}
                    showIcon={showIcon}
                    closable={
                        closable
                            ? {
                                  "aria-label": "close",
                                  closeIcon: <IconCloseCircleOutlined />
                              }
                            : false
                    }
                    message={error?.title}
                    description={error?.detail}
                />
            </Item>
        )
    );
};

export default ErrorAlert;
