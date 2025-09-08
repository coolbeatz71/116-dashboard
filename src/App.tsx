import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import fr from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import { type FC, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayoutLoading } from "@/core/presentation/layouts/AuthLayout/AuthLayout.Loading";
import { LOGIN_PATH } from "@/shared/lib/constants/paths";
import { NotFoundPage } from "./core/presentation/pages/NotFoundPage/NotFound.Page";

const App: FC = () => {
    useEffect(() => {
        dayjs.locale(fr);
        dayjs.extend(relativeTime);
    }, []);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#490fd2",
                    colorSuccess: "#1dd3b0",
                    colorError: "#ef476f",
                    colorWarning: "#f07f34",
                    borderRadius: 8
                },
                components: {
                    Button: {
                        paddingContentHorizontal: 32,
                        paddingContentVertical: 32
                    }
                }
            }}
        >
            <BrowserRouter>
                <Suspense fallback={<AuthLayoutLoading />}>
                    <Routes>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path={LOGIN_PATH} element={<div>login page here</div>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ConfigProvider>
    );
};

export default App;
