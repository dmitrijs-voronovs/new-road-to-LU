import React from "react";
import Head from "next/head";
import { ProjectCard } from "@components/ProjectCard";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

/** eslint-ignore react/react-in-jsx-scope */
export default function Home() {
  const { t } = useTranslation("common");
  console.log(t("index.text.3"), t("index.title"));
  return (
    <div className="">
      <Head>
        <title>{t("index.title")}</title>
      </Head>

      <div className="flex flex-col md:flex-row w-full max-w-screen-2xl md:pb-5 md:mt-16 mx-auto">
        <div className="p-5 text-center m-auto">
          <h1 className="text-p1 pb-8 md:text-4xl md:px-5 lowercase">
            {t("index.title")}
          </h1>
        </div>
        <div className="relative w-full pb-5">
          {/* <Image src="/hp@3x.png" layout="fill" /> */}
          <img src="/hp@3x.png" />
        </div>
      </div>

      {/* TEXT AND OTHER SECTIONS */}
      <div className="md:mt-20 md:max-w-screen-sm md:mx-auto">
        <div className="text-justify flex flex-col space-y-10 my-10">
          <p>{t("index.text.1")}</p>
          <p>{t("index.text.2")}</p>
          <p className="text-p4 text-2xl text-center !mt-20 !mb-16">
            {t("index.text.3")}
          </p>
          <p>{t("index.text.4")}</p>
          <p>{t("index.text.5")}</p>
        </div>
        <div className="grid mt-16">
          <ProjectCard
            className="bg-p1 bg-opacity-10"
            text={t("step1.description")}
            heading={t("step1.title")}
            src="/det1@3x.png"
            path="/step/1"
          />
          <ProjectCard
            text={t("step2.description")}
            heading={t("step2.title")}
            src="/det2@3x.png"
            path="/step/2"
          />
          <ProjectCard
            className="bg-p2 bg-opacity-10"
            text={t("step3.description")}
            heading={t("step3.title")}
            src="/det3@3x.png"
            path="/step/3"
          />
          <ProjectCard
            text={t("step4.description")}
            heading={t("step4.title")}
            src="/det4@3x.png"
            path="/step/4"
          />
          <ProjectCard
            className="bg-p3 bg-opacity-10"
            text={t("step5.description")}
            heading={t("step5.title")}
            src="/det5@3x.png"
            path="/step/5"
          />
          <ProjectCard
            text={t("step6.description")}
            heading={t("step6.title")}
            src="/det6@3x.png"
            path="/step/6"
          />
          <ProjectCard
            className="bg-p6 bg-opacity-10"
            text={t("step7.description")}
            heading={t("step7.title")}
            src="/det7@3x.png"
            path="/step/7"
          />
        </div>
        <p className="text-p4 text-2xl text-center m-16 mt-8">{t("viss")}</p>
      </div>
    </div>
  );
}
