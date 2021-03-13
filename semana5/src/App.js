import React from "react";
import "./App.css";
import styled from "styled-components";

const CaixaDeMensagens = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  width: 400px;
  height: 500px;
  margin: auto;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  box-pack: end;
  justify-content: flex-end;
  padding: 20px;
`;

const UsuarioInput = styled.input`
  border-radius: 5px;
  width: 70px;
  margin: 3px;
`;

const MensagemInput = styled.input`
  border-radius: 5px;
  width: 230px;
  margin: 3px;
`;

const BotaoEnviar = styled.button`
  border-radius: 5px;
`;

const ParagrafoMensagem = styled.p``;

const EnvolveInput = styled.div`
  box-sizing: border-box;
  display: flex;
  position: static;
  float: none;
`;

class App extends React.Component {
  state = {
    msgs: [
      {
        nomeUsuario: "",
        novaMsg: ""
      }
    ],

    valorInputUsuario: "",
    valorInputMensagem: ""
  };

  adicionaMsg = () => {
    const addMsg = {
      nomeUsuario: this.state.valorInputUsuario + ":",
      novaMsg: this.state.valorInputMensagem
    };
    const novaMensagem = [...this.state.msgs, addMsg];
    this.setState({ msgs: novaMensagem });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const publicacoes = this.state.msgs.map((item) => {
      return (
        <div className={"app-container"}>
          {item.nomeUsuario} {item.novaMsg}
        </div>
      );
    });

    return (
      <CaixaDeMensagens>
        <ParagrafoMensagem>{publicacoes}</ParagrafoMensagem>

        <EnvolveInput>
          <UsuarioInput
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <MensagemInput
            value={this.state.valorMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"Mensagem"}
          />
          <BotaoEnviar onClick={this.adicionaMsg}>ENVIAR</BotaoEnviar>
        </EnvolveInput>
      </CaixaDeMensagens>
    );
  }
}

export default App;
