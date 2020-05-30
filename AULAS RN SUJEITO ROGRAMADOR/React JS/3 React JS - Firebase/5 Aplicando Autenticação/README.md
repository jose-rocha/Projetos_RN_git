Pacotes usados no projeto web

1: yarn add firebase --save





Soluções para erros.

1: Erro da Key

index.js:formatted:1 Warning: Each child in a list should have a unique "key" prop.

esse da key consegui resolver colocando a key na div de mapeamento  

 return (
     
      <div  >
        {this.state.lista.map((item)=>{
          return(
            <div key={item.key} >
              <h2>ID: {item.key} </h2>
              <h1>Olá {item.nome} </h1>
              <h1>Idade {item.idade} anos </h1>
              <h1>Cargo: {item.cargo} </h1> <hr/>
            </div> 
          )
        })}

      </div>
    )




2: Para o erro abaixo 

index.js:formatted:1 Warning: Can't call setState on a component that is not yet mounted.
 This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};
 ` class property with the desired state in the ReactJS component

criei o componentDidMount e coloquei as dentro e ficou assim

constructor(props){
    super(props);
    this.state = {
      lista: [
        
      ]

    };


   

 }

 componentDidMount(){

  firebase.database().ref('usuarios').on('value', (snapshot)=>{
    let state = this.state;
    state.lista = [];


    

    snapshot.forEach((childeItem)=>{
      state.lista.push({
        key: childeItem.key,
        nome: childeItem.val().nome,
        idade: childeItem.val().idade,
        cargo: childeItem.val().cargo,

      })
    });

    this.setState(state);
  })

 }

 Para o erro abaixo 

index.js:formatted:1 Warning: Can't call setState on a component that is not yet mounted.
 This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};
 ` class property with the desired state in the ReactJS component

criei o componentDidMount e coloquei as dentro e ficou assim

constructor(props){
    super(props);
    this.state = {
      lista: [
        
      ]

    };


   

 }

 componentDidMount(){

  firebase.database().ref('usuarios').on('value', (snapshot)=>{
    let state = this.state;
    state.lista = [];


    

    snapshot.forEach((childeItem)=>{
      state.lista.push({
        key: childeItem.key,
        nome: childeItem.val().nome,
        idade: childeItem.val().idade,
        cargo: childeItem.val().cargo,

      })
    });

    this.setState(state);
  })

 }









