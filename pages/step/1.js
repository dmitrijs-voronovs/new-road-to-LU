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

export default function Step1() {
  const { t } = useTranslation("common");
  return (
    <div>
      <Head>
        <title>{t("step1.title")}</title>
      </Head>

      <div className="relative w-full max-w-screen-lg md:pb-5 mx-auto my-10 md:my-20">
        <img src="/il1@3x.png" />
      </div>
      <div className="p-5 text-center">
        <h1 className="text-p1 text-4xl mb-5 break-words">
          {t("step1.title")}
        </h1>
        <h2 className="text-p2 md:mb-8">{t("step1.description")}</h2>
      </div>
      {/* TEXT AND OTHER SECTIONS */}
      <div className="md:mt-20 md:max-w-screen-sm md:mx-auto">
        <div className="text-justify flex flex-col space-y-10 my-10">
          <p>{t("step1.text.1")}</p>
          <p>{t("step1.text.2")}</p>
          <p>{t("step1.text.3")}</p>
          <p className="font-montserrat font-extrabold text-p4 text-2xl text-center !mt-16 !mb-6">
            <p>{t("step1.text.4")}</p>
          </p>
        </div>
        <div className="grid my-16">
          <ProjectCard
            className="bg-p1 bg-opacity-10"
            text={t("step2.description")}
            heading={t("step2.title")}
            src="/det2@3x.png"
            path="/step/2"
          />
        </div>
      </div>
    </div>
  );
}
