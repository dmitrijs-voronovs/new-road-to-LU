import React from "react";
import Head from "next/head";
import { ProjectCard } from "@components/ProjectCard";

/** eslint-ignore react/react-in-jsx-scope */
export default function EnHome() {
  return (
    <div className="container">
      <Head>
        <title>New road to LU</title>
      </Head>

      <div className="flex flex-col md:flex-row">
        <div className="p-5 text-center">
          <h1 className="text-p1 mb-8">
            Мой новый путь от дома до Латвийского университета
          </h1>
        </div>
        <div className="relative w-full pb-5">
          {/* <Image src="/hp@3x.png" layout="fill" /> */}
          <img src="/hp@3x.png" />
        </div>
      </div>
      <div className="text flex flex-col space-y-10 my-10">
        <p>
          За 2 года ежедневного посещения университета я исходил не одну пару
          туфель. Я основательно подготовился и к третьему году, тщательно
          подобрал новые высокопрочные туфли, но{" "}
          <span className="italic text-p2">
            на этот раз они мне не пригодились…
          </span>
        </p>
        <p className="text-p4 text-2xl">WHY?</p>
        <p className="">
          Третий год стал переломным моментом в моём бесконечном путешествии от
          дома до университета и от университета до дома. Ковид заставил меня
          задуматься не только над тем, ходить мне в университет или нет, но и
          над более глобальным вопросом - есть ли смысл выходить из дома?
        </p>
        <p>
          Я полностью переосмыслил последние пару лет своей жизни , конкретно
          аспект передвижения от дома до университета, и решил поделиться своей
          новой, абсолютно уникальной стратегией передвижения.
        </p>
        <p>
          Он приносит мне неимоверную радость и нескончаемый заряд энергии на
          весь день, но и имеет свои недостатки. Встречайте - Мой новый путь от
          дома до Латвийского университета!
        </p>
      </div>
      <div className="grid">
        <ProjectCard
          text="Cool"
          heading="Fresh look"
          src="/det1@3x.png"
          path="/step/1"
        />
        <ProjectCard text="Cool" heading="Fresh look" src="/det2@3x.png" />
        <ProjectCard text="Cool" heading="Fresh look" src="/det3@3x.png" />
        <ProjectCard text="Cool" heading="Fresh look" src="/det4@3x.png" />
        <ProjectCard text="Cool" heading="Fresh look" src="/det5@3x.png" />
      </div>
    </div>
  );
}
