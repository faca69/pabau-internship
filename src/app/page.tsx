"use client";
import { useStore } from "@/store/useStore";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Home() {
  const { t } = useTranslation();
  const { language, setLanguage } = useStore();

  const updatedLanguage = useCallback(
    (lang: string) => {
      setLanguage(lang);
      document.documentElement.lang = lang;
    },
    [setLanguage]
  );

  useEffect(() => {
    updatedLanguage(language);
  }, [language, updatedLanguage]);

  return (
    <div>
      <h1 className="text-center text-4xl py-10">{t("starWarsFilms")}</h1>
    </div>
  );
}
