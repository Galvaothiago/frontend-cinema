import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { Container } from "./style";

interface HeaderContentProp {
    title: string,
    showAddIcon?: boolean,
    totalItems: number | undefined
}

export function HeaderContent({title, showAddIcon = false, totalItems}: HeaderContentProp) {
    return (
        <Container>
            <h3>{title}</h3>
                <div>
                    { showAddIcon && 
                        <div><Link to="/movies/create">
                            <IoMdAdd />
                        </Link></div> }
                    <span>Total: {totalItems}</span>
                </div>
        </Container>
    )
}