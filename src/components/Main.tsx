import { ReactNode } from "react";
import Typography from "./AndrewKit/typography/typography.component";
import Icon from "./AndrewKit/icon/icon.component";
import Card from "./AndrewKit/card/card.component";
import { useGlobalStore } from "../modules/store";
import React from "react";

export default function Main({ children }: { children: ReactNode }) {
  const store = useGlobalStore();

  React.useEffect(() => {
    let opacity = 0;

    (
      document.querySelector(`.animated`) as HTMLDivElement
    ).style.opacity = opacity.toString();

    const animation = setInterval(() => {
      opacity += 0.1;

      (
        document.querySelector(`.animated`) as HTMLDivElement
      ).style.opacity = opacity.toString();

      if (opacity > 1.0) clearInterval(animation);
    }, 100);
  }, [store.step]);

  return (
    <>
      <>
        <Typography variant="h1" color="orange">
          <Icon icon="egg-fried" size="4rem" />
          <br />
          Palácio da Gula
        </Typography>
      </>
      <Card customCSS={{
        margin: "1rem",
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto"
      }}><div className="animated">{children}</div></Card>
    </>
  );
}
