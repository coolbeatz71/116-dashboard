import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import fr from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import { type FC, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthLayoutLoading } from "@/core/presentation/layouts/AuthLayout/AuthLayout.Loading";
import { NotFoundPage } from "@/core/presentation/pages/NotFoundPage/NotFound.Page";
import { LoginPage } from "@/modules/auth/presentation/pages/LoginPage/Login.Page";
import { LOGIN_PATH } from "@/shared/lib/constants/paths";
import { Theme } from "@/shared/lib/constants/theme";

const App: FC = () => {
    useEffect(() => {
        dayjs.locale(fr);
        dayjs.extend(relativeTime);
    }, []);

    return (
        <ConfigProvider theme={Theme}>
            <BrowserRouter>
                <Suspense fallback={<AuthLayoutLoading />}>
                    <Routes>
                        <Route path="*" element={<NotFoundPage />} />
                        <Route path={LOGIN_PATH} element={<LoginPage />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </ConfigProvider>
    );
};

export default App;
