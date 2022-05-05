import { ContainerButton, Content, Form, Header, Icon } from "./style";
import { Container } from "./style";
import { FiMoreVertical } from 'react-icons/fi'
import { FormEvent, useState } from "react";
import { Wrapper } from "../../globalStyle";
import { GiFilmProjector } from 'react-icons/gi'
import { BiArrowBack } from 'react-icons/bi'
import { api } from "../../service/api";
import { Link } from "react-router-dom";

export function ActionsMovie() {
    const [ showButtons, setShowButtons ] = useState<boolean>(false)
    const [ showDeleteMovie, setShowDeleteMovie ] = useState<boolean>(false)

    const [ name, setName ] = useState<string>('')
    const [ genre, setGenre ] = useState<string>('')
    const [ duration, setDuration ] = useState<number>()
    const [ classification, setClassification ] = useState<string>('')
    const [ release, setRelease ] = useState<string>('')
    const [ pathImg, setPathImg ] = useState<string>('')
    const [ synopsis, setSynopsis ] = useState<string>('')

    const handleDeleteMovie = async () => {
        const inputDelete = prompt("digite aqui o ID do filme que deseja excluir da base...")
        setShowButtons(false)
        const infoMovie = await api.delete(`/movies/${inputDelete}`)

        if(infoMovie.status == 204) alert("Filme deletado com sucesso!")
    }

    const cleanAllInputs = () => {
        setName('')
        setGenre('')
        setDuration(0)
        setClassification('')
        setRelease('')
        setPathImg('')
        setSynopsis('')
    }

    const handleInfoCreateMovie = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const date = new Date(release)
            const dataMovie = {
                name,
                genre,
                duration,
                classification,
                release: date,
                pathImg,
                synopsis
            }

            const info =  await api.post('/movies', dataMovie)

            if(info.status == 201) alert("Novo filme inserido com sucesso!")
            if(info.data.status == 409) alert("Já existem um filme cadastrado com este nome")
        
            cleanAllInputs()

        } catch(err) {
            console.log(err)
        }
    }

    const handleShowButtons = () => {
        setShowButtons(oldState => !oldState)
    }

    return (
        <Wrapper>
            <Container>
                <Header>
                    <div>
                        <Link to="/movies">
                            <BiArrowBack/>
                        </Link>
                        <p>Adicione um novo filme</p>
                    </div>
                    <FiMoreVertical onClick={handleShowButtons} />
                    <ContainerButton>
                    { showButtons && 
                       <button onClick={handleDeleteMovie} type="button">Deletar</button>
                    }
                    </ContainerButton>
                </Header>
                <Content>
                    {<Form onSubmit={e => handleInfoCreateMovie(e)}>
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
                                <label>Link da imagem:</label>
                                <input value={pathImg} required type="text" 
                                    name="genre"id="genre" onChange={(e) => setPathImg(e.target.value)}/>
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
                    </Form>}
                    <Icon>
                    < GiFilmProjector />
                    </Icon>
                </Content>
            </Container>
        </Wrapper>
    )
}