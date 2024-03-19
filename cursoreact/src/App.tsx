import React, {useState, useTransition} from 'react';



function App() {

  const [nome, SetNome] = useState('');
  const [email, SetEmail] = useState('');
  const [mensagem, setMensagem] = useState('');


  return (
    <>
    <form>

      <p>Nome:</p>
      <input type='text' onChange= {(e) => {SetNome(e.target.value)}} value={nome}/>

      <br/>

      <p>E-mail:</p>
      <input type='email'onChange= {(e) => {SetEmail(e.target.value)}} value={email}/>

      <p>Mensagem:</p>
      <textarea placeholder='Digige a sua mensagem' onChange= {(e) => {setMensagem(e.target.value)}}>
        {mensagem}

      </textarea>

      <br /><br />

      <button type='submit'>ENVIAR</button>



    </form>

    </>

  );
}

export default App;
