import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        starWarsFilms: "Star Wars Films",
        loading: "Loading...",
        error: "Error",
        loadingMore: "Loading more...",
        episodeId: "Episode ID",
        director: "Director",
        releaseDate: "Release Date",
        producers: "Producers",
        filterByDirector: "Filter by Director",
        filterByYear: "Filter by Year",
        sortByTitle: "Sort by Title",
        sortByReleaseDate: "Sort by Release Date",
      },
    },
    de: {
      translation: {
        starWarsFilms: "Star Wars Filme",
        loading: "Laden...",
        error: "Fehler",
        loadingMore: "Mehr laden...",
        episodeId: "Episoden-ID",
        director: "Regisseur",
        releaseDate: "Veröffentlichungsdatum",
        producers: "Produzenten",
        filterByDirector: "Nach Regisseur filtern",
        filterByYear: "Nach Jahr filtern",
        sortByTitle: "Nach Titel sortieren",
        sortByReleaseDate: "Nach Veröffentlichungsdatum sortieren",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
