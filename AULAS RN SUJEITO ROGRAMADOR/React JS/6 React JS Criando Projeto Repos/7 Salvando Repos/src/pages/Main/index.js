import React, {useState, useCallback, useEffect} from 'react';
import {FaGithub, FaPlus, FaSpinner, FaBars, FaTrash} from 'react-icons/fa';
import {Container, Form, SubmitButton, List, DeleteButton } from './styles';

import api from '../../services/api';

export default function Main(){

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false); //state para abilitar o botão de adicionar +
    const [alerta, setAlerta] = useState(null);

    // DidMount -> Buscar
        useEffect(()=> {
            const repoStorage = localStorage.getItem('repos');

            if(repoStorage){
                setRepositorios(JSON.parse(repoStorage));
            }
        }, [])



    // DidUpate -> atualizar , salvar alterações

        useEffect(()=>{
            localStorage.setItem('repos', JSON.stringify(repositorios));
        }, [repositorios]);
    
  const handleSubmit = useCallback((e)=> {
    e.preventDefault(); //  e.preventDefault() serve para prevenir de dar o refresh na página ao adicionar o item

      async  function submit(){
        setLoading(true);
       setAlerta(null);
        try{

            if(newRepo === ''){
                alert( 'Você precisa  indicar um repositório!'); 
               
               throw new Error('Você precisa  indicar um repositório!'); //deixei esse para impedir de adicionar se estiver vazio
                
            }

            const response = await api.get(`repos/${newRepo}`);

            const hasRepo = repositorios.find(repo => repo.name === newRepo);

            if(hasRepo){
                alert('Não pode haver repositório duplicado!');

                throw new Error('Não pode haver repositório duplicado!');
            }

            const data = {
                name: response.data.full_name,
            }
    
            setRepositorios([...repositorios, data]);
            setNewRepo('');
            
            //console.log(newRepo);
        }catch(error){
            setAlerta(true)
            console.log(error);
        }finally{
            setLoading(false);
        }
       
        
      }

      submit();
  }, [newRepo, repositorios]);
     
    

    function handleinputChange(e){
        setNewRepo(e.target.value);
        setAlerta(null);
    }


    const handleDelete = useCallback((repo)=> {
        const find = repositorios.filter(r => r.name !== repo);
        setRepositorios(find);
    }, [repositorios]);
    

    return(

        <Container>
            
            <h1>
            <FaGithub size={25} />    
            Meus Repositórios
            </h1> 

            <Form onSubmit={handleSubmit} error={alerta} >
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

            <List>
                {repositorios.map(repo => (
                    <li key={repo.name} >
                        <span>
                            <DeleteButton onClick={()=> handleDelete(repo.name)} >
                                <FaTrash color="red" size={14} />
                            </DeleteButton>
                            {repo.name}</span>
                        <a href="" >
                            <FaBars size={20} />
                        </a>
                    </li>
                ))}

            </List>      
        </Container>
    )
}

