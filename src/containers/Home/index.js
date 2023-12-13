import React, { useState, useRef } from "react"; //hooks
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Images
import burger from '../../assets/burgerOne.png';

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button';

import { Container, Image, InputLabel, Input } from './styles';

function App() {
  //Criando um estado
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef()
  const inputAge = useRef()



  // conexao com o back end com axios
  async function addNewUser() {

    //Endereço da porta no back end
    const { data: newUser } = await axios.post("http://localhost:3006/users", { name: inputName.current.value, age: inputAge.current.value });

    console.log(newUser)


    setUsers([...users, newUser]);//... spread operator

    navigate('/usuarios')

  }


  //props
  return (
    <Container>
      <Image src={burger} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputName} placeholder="1 Coca-Cola, 1 X-Salada" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputAge} placeholder="Digite o seu nome" />


        <Button onClick={addNewUser} >Novo Pedido </Button>



        {/* Criamos uma UL e chamamos a array user, para listar todos os usuarios dentro do objeto */}
       
      </ContainerItens>
    </Container>
  );
}

export default App;
