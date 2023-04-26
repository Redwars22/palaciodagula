import { defaultOrange } from "../../data/colors";
import Typography from "../AndrewKit/typography/typography.component";

export default function Title({title} : {title: string}){
    return (
        <Typography variant="h2" color={defaultOrange}>
        {title}
      </Typography>
    );
}