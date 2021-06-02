import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

export const usePath = () => {
  const { asPath } = useRouter();
  const isEng = useMemo(() => asPath.includes("en"), [asPath]);
  const label = isEng ? "LV" : "EN";

  const convertLink = useCallback(
    (link) => {
      if (isEng) {
        return link.replace("/en", "") || "/";
      }
      return "/en" + link;
    },
    [isEng]
  );

  const currentLink = convertLink(asPath);
  const homepageLink = isEng ? "/en/" : "/";

  console.log({ asPath, currentLink, homepageLink });

  return {
    currentLink,
    homepageLink,
    isEng,
    code: isEng ? "/en" : "",
    label,
    convertLink,
  };
};
