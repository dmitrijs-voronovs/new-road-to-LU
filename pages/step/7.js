import React from "react";
import Head from "next/head";
import { ProjectCard } from "@components/ProjectCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

/** eslint-ignore react/react-in-jsx-scope */
export default function Step7() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>{t("step7.title")}</title>
      </Head>

      <div className="relative w-full max-w-screen-lg md:pb-5 mx-auto my-10 md:my-20">
        {/* <Image src="/hp@3x.png" layout="fill" /> */}
        <img src="/il7@3x.png" />
      </div>
      <div className="p-5 text-center">
        <h1 className="text-p1 mb-8">{t("step7.title")}</h1>
        <h2 className="text-p1 mb-8">{t("step7.description")}</h2>
      </div>
      {/* TEXT AND OTHER SECTIONS */}
      <div className="md:mt-20 md:max-w-screen-sm md:mx-auto">
        <div className="text-justify flex flex-col space-y-10 my-10">
          <p>{t("step7.text.1")}</p>
          <p>{t("step7.text.2")}</p>
          <p className="text-p4 text-2xl text-center !mt-20 !mb-16">
            <p>{t("step7.text.3")}</p>
          </p>
          <p>{t("step7.text.4")}</p>
          <p>{t("step7.text.5")}</p>
        </div>
        <div className="grid">
          <ProjectCard
            className="bg-p1 bg-opacity-10"
            text={t("index.description")}
            heading={t("index.title")}
            src="/hp@3x.png"
            path="/"
          />
        </div>
      </div>
    </div>
  );
}
