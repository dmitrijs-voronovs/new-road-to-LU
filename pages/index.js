import React from "react";
import Head from "next/head";
import { ProjectCard } from "@components/ProjectCard";

/** eslint-ignore react/react-in-jsx-scope */
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Mans jaunais ceļš no mājām uz Latvijas Universitāti</title>
      </Head>

      <div className="flex flex-col md:flex-row w-full max-w-screen-2xl md:pb-5 md:mt-16 mx-auto">
        <div className="p-5 text-center m-auto">
          <h1 className="text-p1 pb-8 md:text-4xl md:px-5 lowercase">
            Mans jaunais ceļš no mājām uz Latvijas Universitāti
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
          <p>
            2 gadus katru dienu apmeklējot universitāti, es izstaigāju vairāk
            nekā vienu apavu pāri. Es pamatīgi gatavojos trešajam gadam, rūpīgi
            atlasīju jaunus augstas stiprības apavus, taču šoreiz tie man nebija
            noderīgi ...
          </p>
          <p className="">
            Trešais gads bija ļoti svarīgs manā bezgalīgajā ceļojumā no mājām uz
            universitāti un no universitātes uz mājām. Kovīds man lika domāt ne
            tikai par to, vai iet uz universitāti, vai ne, bet arī par globālāku
            jautājumu:
          </p>
          <p className="text-p4 text-2xl text-center !mt-20 !mb-16">
            vai ir kāda jēga pamest mājas?
          </p>
          <p>
            Es pilnībā pārdomāju pēdējos pāris savas dzīves gadus, īpaši
            pārvietošanās aspektu no mājām uz universitāti, un nolēmu padalīties
            ar savu jauno, pilnīgi unikālu kustības stratēģiju.
          </p>
          <p>
            Tas man sagādā neticamu prieku un bezgalīgu enerģiju visai dienai,
            taču tam ir arī savi mīnusi. Iepazīstieties - Mans jaunais ceļš no
            mājām uz Latvijas Universitāti!
          </p>
        </div>
        <div className="grid mt-16">
          <ProjectCard
            className="bg-p1 bg-opacity-10"
            text="Pirmais solis"
            heading="Kā karājas, tā arī karājas"
            src="/det1@3x.png"
            path="/step/1"
          />
          <ProjectCard
            text="Otrais solis"
            heading="Smaga sega - smaga dzīve"
            src="/det2@3x.png"
            path="/step/2"
          />
          <ProjectCard
            className="bg-p2 bg-opacity-10"
            text="Trešais solis"
            heading="Pirmais čelendžs"
            src="/det3@3x.png"
            path="/step/3"
          />
          <ProjectCard
            text="Ceturtais solis"
            heading="Mani grib nogalināt"
            src="/det4@3x.png"
            path="/step/4"
          />
          <ProjectCard
            className="bg-p3 bg-opacity-10"
            text="Piektais solis"
            heading="Piezemēšanās"
            src="/det5@3x.png"
            path="/step/5"
          />
          <ProjectCard
            text="Sestais solis"
            heading="Garšīgs atalgojums"
            src="/det6@3x.png"
            path="/step/6"
          />
          <ProjectCard
            className="bg-p6 bg-opacity-10"
            text="Septītājs solis"
            heading="Finālais boss"
            src="/det7@3x.png"
            path="/step/7"
          />
        </div>
        <p className="text-p4 text-2xl text-center m-16 mt-8">VISS!</p>
      </div>
    </div>
  );
}
