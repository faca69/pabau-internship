"use client";

import { format, Locale } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useTranslation } from "react-i18next";

type FilmCardProps = {
  film: {
    episodeID: number;
    title: string;
    director: string;
    releaseDate: string;
    producers: string[];
  };
  locale: Locale;
};
export default function FilmCard({ film, locale }: FilmCardProps) {
  const { t } = useTranslation();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{film.title}</CardTitle>
        <p>
          {t("director")} :{film.director}
        </p>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <p>
            {t("releaseDate")}:{" "}
            {format(new Date(film.releaseDate), "MMMM d, yyyy", { locale })}
          </p>
        </CardDescription>
      </CardContent>
      <CardFooter>
        <p>
          {t("producers")}:{film.producers.join(", ")}
        </p>
        <p>
          {t("episodeId")}:{film.episodeID}
        </p>
      </CardFooter>
    </Card>
  );
}
