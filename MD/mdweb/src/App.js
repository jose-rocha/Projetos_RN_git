import React from "react";
import {
  Pai,
  Form,
  NomeFunc,
  SpanNome,
  InfoProduct,
  InfoProductFilho,
  Selected,
  Options,
  DivDesc,
  InputDesc,
} from "./styles";

function App() {
  let dados = {
    Name: "José",
    Funcao: "Vendendor",
  };
  return (
    <Pai className="">
      <Form action="">
        <NomeFunc>
          <SpanNome>Nome do(a) Funcionário(a): {dados.Name}</SpanNome>
        </NomeFunc>
        <InfoProduct>
          <InfoProductFilho>
            <SpanNome>Quantidade:</SpanNome>
            <Selected>
              <Options value=""></Options>
              <Options value="1">1</Options>
              <Options value="2">2</Options>
              <Options value="3">3</Options>
              <Options value="4">4</Options>
              <Options value="5">5</Options>
              <Options value="6">6</Options>
              <Options value="7">7</Options>
            </Selected>
          </InfoProductFilho>
          <DivDesc>
            <SpanNome>Descrição:</SpanNome> <br></br>
            <InputDesc
              type="text"
              name="Descricao"
              placeholder="Descrição do produto"
            ></InputDesc>
          </DivDesc>
          <DivDesc>
            <SpanNome>Preço Unitário:</SpanNome> <br></br>
            <InputDesc
              type="number"
              name="Valor da Unidade"
              placeholder="Valor da Unidade"
            ></InputDesc>
          </DivDesc>
          <DivDesc>
            <SpanNome>Frete:</SpanNome> <br></br>
            <InputDesc
              type="number"
              name="Frete"
              placeholder="Valor do Frete"
            ></InputDesc>
          </DivDesc>
          <DivDesc>
            <SpanNome>Preço Total:</SpanNome> <br></br>
            <InputDesc
              type="number"
              name="Total"
              placeholder="Valor Total"
            ></InputDesc>
          </DivDesc>
        </InfoProduct>
        {/* ---  Segunda Linha  ------ */}
        <InfoProduct>
          <InfoProductFilho>
            <Selected style={{ width: 112, marginTop: 10, marginRight: 10 }}>
              <Options value=""></Options>
              <Options value="1">1</Options>
              <Options value="2">2</Options>
              <Options value="3">3</Options>
              <Options value="4">4</Options>
              <Options value="5">5</Options>
              <Options value="6">6</Options>
              <Options value="7">7</Options>
            </Selected>
          </InfoProductFilho>
          <DivDesc style={{ marginTop: 10 }}>
            <InputDesc
              type="text"
              name="Descricao"
              placeholder="Descrição do produto"
            ></InputDesc>
          </DivDesc>
          <DivDesc style={{ marginTop: 10 }}>
            <InputDesc
              type="text"
              name="Descricao"
              placeholder="Descrição do produto"
            ></InputDesc>
          </DivDesc>
          <DivDesc style={{ marginTop: 10 }}>
            <InputDesc
              type="text"
              name="Descricao"
              placeholder="Descrição do produto"
            ></InputDesc>
          </DivDesc>
          <DivDesc style={{ marginTop: 10 }}>
            <InputDesc
              type="text"
              name="Descricao"
              placeholder="Descrição do produto"
            ></InputDesc>
          </DivDesc>
        </InfoProduct>
        {/* -----Terceira Linha ----  */}
      </Form>
    </Pai>
  );
}

export default App;
