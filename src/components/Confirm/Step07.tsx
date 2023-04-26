import { burgers } from "../../data/burgers";
import { calculatePrice } from "../../modules/calculate";
import { useGlobalStore } from "../../modules/store";
import Banner from "../AndrewKit/banner/banner.component";
import Typography from "../AndrewKit/typography/typography.component";
import Burger from "../Layout/Burger";
import FlexV from "../Layout/FlexV";
import StepChanger from "../Layout/StepChanger";
import Title from "../Layout/Title";

export default function Confirm() {
  const store = useGlobalStore();

  return (
    <FlexV>
      <Title title="Pedido Finalizado com Sucesso!" />
      <Burger />
      <Typography variant={"paragraph"}>
        Oba, seu pedido será entregue dentro dos próximos 60 minutos
        <br /> no endereço informado!
      </Typography>
      <Banner title="Resumo do Pedido" type={"info"} customCSS={{
        textAlign: "center"
      }}>
        {`Hambúrguer: ${
          burgers.find((i) => i.value === store!.selectedBurger)!.text
        } - R$ ${
          burgers.find((i) => i.value === store!.selectedBurger)!.price
        }`}<br/>
        Valor Total Com Adicionais: R$ {calculatePrice(store!.selectedBurger, store!.additions)}<br/>
        CEP de Entrega: {store!.zipCode}<br/>
        Previsão de Entrega: 1h
      </Banner>
      <StepChanger canGoToNextStep={false} />
    </FlexV>
  );
}
