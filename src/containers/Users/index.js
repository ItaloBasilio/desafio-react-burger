import React, { useState, useEffect } from "react"; //hooks
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import H1 from '../../components/Title';
import ContainerItens from '../../components/ContainerItens';
import Button from '../../components/Button'

import burger2 from '../../assets/burger-2.png';
import Trash from '../../assets/trash.svg';



import {
  Container,
  Image,
  User

} from './styles';


function Users() {
  //Criando um estado
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3006/users");

      setUsers(newUsers);
    }

    fetchUsers()

  }, [])





  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3006/users/${userId}`)

    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers);
  }


  function goBackPage() {
    navigate('/')
  }


  return (
    <Container>
      <Image src={burger2} />
      <ContainerItens isBlur={true}>
        <H1>Pedidos</H1>

        {/* Criamos uma UL e chamamos a array user, para listar todos os usuarios dentro do objeto */}
        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lata-de-lixo" /></button>
            </User>

          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>  Voltar  </Button>


      </ContainerItens>
    </Container>
  );
}

export default Users;
