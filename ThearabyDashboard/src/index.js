import React, { Suspense }  from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import {AuthContextProvider} from "./context/AuthContext.js";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: "en",
    detection:{
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend:{
      loadPath: 'assete/locale/{{lng}}/translation.json',
    }
  });
  const loadingFun=(
    <div className="loading">
    <h3>Loading..</h3>
  </div>
  )
ReactDOM.render(
  <Suspense  fallback={loadingFun}>
  <React.StrictMode>
    <AuthContextProvider>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
  </Suspense>,
 
  document.getElementById("root")
);
