import { colors } from "../../globalStyle";
import { Container } from "./style";

interface AgeRatingProp {
    age?: string
}
export function AgeRating({ age }: AgeRatingProp) {
    let bgColor = ''
    let ratingContent = age
    
    const verifyColorByAge = (age: string = 'L') => {
        ratingContent = age
        switch (age) {
            case 'L':
                bgColor = colors.greenMedium;
                break;
            case '10':
                bgColor = colors.blueMedium;
                break;
            case '12':
                bgColor = colors.yellowMedium;
                break;
            case '14':
                bgColor = colors.orangeMedium;
                break;
            case '16':
                bgColor = colors.redMedium;
                break;
            case '18':
                bgColor = colors.black;
                break
            default:
                bgColor = colors.greenMedium;
                break;
        }

        return bgColor;
    }

    return (
        <Container bg={verifyColorByAge(age)}>
            <span>{ ratingContent }</span>
        </Container>
    )
}