Esse app foi baseado na terceira e  e quarta aula do módulo Firebase.

Instalando firebase e configurando & Usando a nossa Database.

O pacote instalado foi "npm install --save firebase".


usei a state para trazer do banco de dados "app-Fire" a child usuarios

       <TextInput underlineColorAndroid="transparent" style={styles.input} onChangeText={(cargo)=> {this.setState({cargo})}} />
          <View style={{margin: 10}}>
            <Button title={"Cadastrar Novo Fucionário"} onPress={this.cadastrarFucionario} />
          </View>    
          <View style={{margin: 10}}>
             <Button title={"Remover Fucionário"} onPress={this.removerFucionario}  />
          </View>

a função de deletar pelo botão foi que fiz, não tem ela sendo feita peo botão, só que para deletar tem que colocor o id no código, inda vou aprender sem necessitar disso.
