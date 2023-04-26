import Typography from "../AndrewKit/typography/typography.component";
import Button from "../AndrewKit/button/button.component";
import Picture from "../AndrewKit/picture/picture.component";
import { defaultOrange } from "../../data/colors";
import FlexV from "../Layout/FlexV";
import Title from "../Layout/Title";
import StepChanger from "../Layout/StepChanger";
import Burger from "../Layout/Burger";

export default function Welcome() {
  return (
    <FlexV>
      <Title title="Bem-vindo ao Palácio da Gula" />
      <Typography variant="h6" color={defaultOrange}>
        Escolha seu hambúrguer do conforto da sua casa. Leva menos de cinco
        minutos!
      </Typography>
      <Burger />
      <StepChanger canGoToNextStep={false} />
    </FlexV>
  );
}
