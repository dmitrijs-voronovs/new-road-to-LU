import React from "react";
import Head from "next/head";
import { ProjectCard } from "@components/ProjectCard";

/** eslint-ignore react/react-in-jsx-scope */
export default function Step7() {
  return (
    <div>
      <Head>
        <title>New road to LU</title>
      </Head>

      <div className="relative w-full max-w-screen-lg md:pb-5 mx-auto my-10 md:my-20">
        {/* <Image src="/hp@3x.png" layout="fill" /> */}
        <img src="/il7@3x.png" />
      </div>
      <div className="p-5 text-center">
        <h1 className="text-p1 mb-8">
          Мой новый путь от дома до Латвийского университета
        </h1>
      </div>
      {/* TEXT AND OTHER SECTION */}
      <div className="md:mt-20 md:max-w-screen-sm md:mx-auto">
        <div className="text-justify flex flex-col space-y-10 my-10">
          <p>
            2 gadus katru dienu apmeklējot universitāti, es izstaigāju vairāk
            nekā vienu apavu pāri. Es pamatīgi gatavojos trešajam gadam, rūpīgi
            atlasīju jaunus augstas stiprības apavus, taču
            <span className="italic text-p2">
              šoreiz tie man nebija noderīgi ...
            </span>
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
        <div className="grid">
          <ProjectCard
            className="bg-p1 bg-opacity-10"
            text="Cool"
            heading="Fresh look"
            src="/hp@3x.png"
            path="/"
          />
        </div>
      </div>
    </div>
  );
}
