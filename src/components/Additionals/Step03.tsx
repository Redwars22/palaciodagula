import { useCallback, useEffect, useState } from "react";
import { defaultOrange } from "../../data/colors";
import { items } from "../../data/items";
import Button from "../AndrewKit/button/button.component";
import Typography from "../AndrewKit/typography/typography.component";
import Burger from "../Layout/Burger";
import FlexH from "../Layout/FlexH";
import FlexV from "../Layout/FlexV";
import StepChanger from "../Layout/StepChanger";
import Title from "../Layout/Title";
import { IItems } from "../../types/types";
import { useGlobalStore } from "../../modules/store";
import { burgers } from "../../data/burgers";

export default function Additionals() {
  const [additionals, setAdditionals] = useState<IItems[]>([]);
  const store = useGlobalStore();
  const [price, setPrice] = useState<number>(0.0);

  useEffect(()=>{
    if(additionals.length >= 1){
        store.setState("additions", additionals)
        return;
    }

    store.setState("additions", null);
  }, [additionals]);

  const renderItems = useCallback(
    () => (
      <>
        {items.map((item) => (
          <FlexV>
            <Button
              title={item.title}
              appearance={
                additionals!.find((i) => item.title === i.title)
                  ? "success"
                  : "info"
              }
              action={() => {
                if (additionals!.find((i) => item.title === i.title)) {
                  setAdditionals(
                    additionals.filter((i) => item.title !== i.title)
                  );
                } else {
                  setAdditionals([...additionals, item]);
                }
              }}
            />
            <Typography variant={"h6"} color={defaultOrange}>
              R$ {item.price}
            </Typography>
          </FlexV>
        ))}
      </>
    ),
    [additionals]
  );

  return (
    <FlexV>
      <Title title="Escolha alguns itens adicionais" />
      <Burger />
      <Typography variant="paragraph" color={defaultOrange}>
        <em>*Ketchup e maionese vêm inclusos gratuitamente</em>
      </Typography>
      <FlexH>{renderItems()}</FlexH>
      <StepChanger canGoToNextStep={true} />
    </FlexV>
  );
}
