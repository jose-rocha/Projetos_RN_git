import React, {useState} from 'react';


export default function App() {
  
  const [tarefas, setTarefas] = useState([
    'Pagar Conta de luz',
    'Estudar React Hooks'
  ]);

  const [input, setInput] = useState('');

  function handleAdd(){
   setTarefas([...tarefas, input])
   setInput('');
  }

  return (
    <div className="App">
      <h1>Hooks</h1>  

      <ul>
        {tarefas.map(tarefa=> (
          <li key={tarefa}>{tarefa}  </li>
        ))}
        
      </ul>  
      
      <input type="text" value={input} onChange={e=> setInput(e.target.value) } /><br/>
      <button type="button" onClick={handleAdd} >
        Adicionar
      </button>
 
    </div>
  );
}

 
