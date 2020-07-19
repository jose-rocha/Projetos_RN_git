import React, {useState, useCallback} from 'react';
import {FaGithub, FaPlus, FaSpinner} from 'react-icons/fa';
import {Container, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false); //state para abilitar o botão de adicionar +
    
  const handleSubmit = useCallback((e)=> {
    e.preventDefault(); //  e.preventDefault() serve para prevenir de dar o refresh na página ao adicionar o item

      async  function submit(){
        setLoading(true);
        try{
            const response = await api.get(`repos/${newRepo}`);

            const data = {
                name: response.data.full_name,
            }
    
            setRepositorios([...repositorios, data]);
            setNewRepo('');
            
            //console.log(newRepo);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
       
        
      }

      submit();
  }, [newRepo, repositorios]);
     
    

    function handleinputChange(e){
        setNewRepo(e.target.value);
    }

    

    return(

        <Container>
            
            <h1>
            <FaGithub size={25} />    
            Meus Repositórios
            </h1> 

            <Form onSubmit={handleSubmit}>
                <input 
                type="text"
                 placeholder="Adicionar Repositórios" 
                 value={newRepo}
                 onChange={handleinputChange}
                 />

                <SubmitButton loading={loading ? 1 : 0}>  {/* Se loading for verdadeiro é = 1 se não é = 0*/ }
                    {loading ? (
                        <FaSpinner color="#fff" size={14} />
                    ): (
                        <FaPlus color="#fff" size={14} />
                    )}
                   
                </SubmitButton>
                
            </Form>           
        </Container>
    )
}

