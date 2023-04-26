import { burgers } from "../../data/burgers";
import { defaultOrange } from "../../data/colors";
import { calculatePrice } from "../../modules/calculate";
import { useGlobalStore } from "../../modules/store";
import { IItems } from "../../types/types";
import Typography from "../AndrewKit/typography/typography.component";
import Burger from "../Layout/Burger";
import FlexV from "../Layout/FlexV";
import StepChanger from "../Layout/StepChanger";
import Title from "../Layout/Title";

export default function TotalValue() {
  const store = useGlobalStore();

  return (
    <FlexV>
      <Title title={"Valor Total do Pedido"}></Title>
      <Burger />
      <Typography variant="paragraph" color={defaultOrange}>
        <em>
          Esse é o valor a ser pago pelo seu hambúrguer e itens adicionais
          escolhidos:
        </em>
      </Typography>
      <Typography variant={"h1"} color={defaultOrange}>
        R$ {calculatePrice(store.selectedBurger, store.additions)}
      </Typography>
      <StepChanger canGoToNextStep={true} />
    </FlexV>
  );
}
