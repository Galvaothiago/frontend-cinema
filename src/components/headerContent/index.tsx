import { IoMdAdd } from "react-icons/io";
import { Container } from "./style";

interface HeaderContentProp {
    title: string,
    showAddIcon?: boolean,
    totalItems: number
}

export function HeaderContent({title, showAddIcon = false, totalItems}: HeaderContentProp) {
    return (
        <Container>
            <h3>{title}</h3>
                <div>
                    { showAddIcon && <div><IoMdAdd /></div> }
                    <span>Total: {totalItems}</span>
                </div>
        </Container>
    )
}