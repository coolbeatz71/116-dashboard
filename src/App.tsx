import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import fr from "dayjs/locale/fr";
import relativeTime from "dayjs/plugin/relativeTime";
import { type FC, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import { AuthLayoutLoading } from "@/core/presentation/layouts/AuthLayout/AuthLayout.Loading";
import { NotFoundPage } from "@/core/presentation/pages/NotFoundPage/NotFound.Page";
import { persistor, store } from "@/core/presentation/store/store";
import LoginPage from "@/modules/auth/presentation/pages/LoginPage/Login.Page";
import { LOGIN_PATH } from "@/shared/lib/constants/paths";
import { Theme } from "@/shared/lib/constants/theme";

const App: FC = () => {
    /**
     * Initialize Day.js configuration on mount.
     *
     * @remarks
     * Sets French as default locale and enables relative time formatting
     * (e.g., "il y a 2 heures", "dans 3 jours").
     */
    useEffect(() => {
        dayjs.locale(fr);
        dayjs.extend(relativeTime);
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={<AuthLayoutLoading />} persistor={persistor}>
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
            </PersistGate>
        </Provider>
    );
};

export default App;
