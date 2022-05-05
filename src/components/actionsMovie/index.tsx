import { ContainerButton, Content, Form, Header, Icon } from "./style";
import { Container } from "./style";
import { FiMoreVertical } from 'react-icons/fi'
import { IoTrashBinOutline } from 'react-icons/io5'
import { AiTwotoneEdit } from 'react-icons/ai'
import { FormEvent, useEffect, useState } from "react";
import { Wrapper } from "../../globalStyle";
import { GiFilmProjector } from 'react-icons/gi'
import { api } from "../../service/api";


export function ActionsMovie() {
    const [ showButtons, setShowButtons ] = useState<boolean>(false)

    const [ name, setName ] = useState<string>('')
    const [ genre, setGenre ] = useState<string>('')
    const [ duration, setDuration ] = useState<number>()
    const [ classification, setClassification ] = useState<string>('')
    const [ release, setRelease ] = useState<string>('')
    const [ synopsis, setSynopsis ] = useState<string>('')

    const cleanAllInputs = () => {
        setName('')
        setGenre('')
        setDuration(0)
        setClassification('')
        setRelease('')
        setSynopsis('')
    }

    const handleInfoCreateMovie = async (e: FormEvent) => {
        e.preventDefault()
        const date = new Date(release)

        const data = {}

        
            const info =  await api.post('/movies', {
                name,
                genre,
                duration,
                classification,
                release: date,
                synopsis
            })
            if(info.status == 201) {
                alert("Novo filme inserido com sucesso!")
            }

            console.log(info)

            cleanAllInputs()
        
            // console.log(err)
        
            cleanAllInputs()
    
    }
    const handleShowButtons = () => {
        
        setShowButtons(oldState => !oldState)
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <p>Adicione um novo filme</p>
                    <FiMoreVertical onClick={handleShowButtons} />
                    <ContainerButton>
                    { showButtons && 
                        <>
                            <div>
                                <AiTwotoneEdit />
                                <button type="button">Editar</button>
                            </div>

                            <div>
                                < IoTrashBinOutline />
                                <button type="button">Deletar</button>
                            </div> 
                        </>
                    }
                    </ContainerButton>
                </Header>
                <Content>
                    <Form onSubmit={e => handleInfoCreateMovie(e)}>
                            <div>
                                <label>Titulo:</label>
                                <input value={name} required type="text" 
                                    name="title"id="title" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div>
                                <label>Gênero:</label>
                                <input value={genre} required type="text" 
                                    name="genre"id="genre" onChange={(e) => setGenre(e.target.value)}/>
                            </div>
                            <div>
                                <div>
                                    <label>Duração</label>
                                    <input value={duration} required type="number" 
                                        name="duration"id="duration" onChange={(e) => setDuration(Number(e.target.value))}/>
                                </div>
                                <div>
                                    <label>Lançamento:</label>
                                    <input value={release} required type="date" 
                                        name="release"id="release" onChange={(e) => setRelease(e.target.value)}/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label>Classificação</label>
                                    <select value={classification} onChange={(e) => setClassification(e.target.value)}>
                                        <option value="L">Livre</option>
                                        <option value="10">10 anos</option>
                                        <option value="12">12 anos</option>
                                        <option value="14">14 anos</option>
                                        <option value="16">16 anos</option>
                                        <option value="18">18 anos</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Sinopse:</label>
                                    <textarea required value={synopsis} onChange={(e) => setSynopsis(e.target.value)}></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit">Salvar</button>
                            </div>
                    </Form>
                    <Icon>
                    < GiFilmProjector />
                    </Icon>
                </Content>
            </Container>
        </Wrapper>
    )
}