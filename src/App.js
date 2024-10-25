import { useState } from "react";
import Local from "./components/Local";

function App() {
  let [nome, setNome] = useState('novo usuário');
  let [iptNome, setIptNome] = useState('');


  let [form, setForm] = useState(
    {
      nome: '',
      email: '',
      endereco: {
        logadouro: '',
        numero: '',
        bairro: '',
        cidade: ''
      }
    }
  )

  const [dados, setDados] = useState({});

  // let [mostrarDados, setMostrarDados] = useState(false)

  function mudarNome() {
    setNome(iptNome);
  }

  function enviarFormulario(e) {
    e.preventDefault();

    setDados({
      nome: form.nome,
      email: form.email,
      logadouro: form.endereco.logadouro,
      numero: form.endereco.numero,
      bairro: form.endereco.bairro,
      cidade: form.endereco.cidade
    });

    console.log(dados)


    // setMostrarDados(true);
    // Informacoes();
    resetForm();
  }

  function resetForm() {
    setForm(
      {
        ...form,
        nome: '',
        email: '',
        endereco: {
          ...form.endereco,
          logadouro: '',
          numero: '',
          bairro: '',
          cidade: ''
        }
      }
    );
  }

  return (
    <div className='content'>
      <h2>Locais</h2>
      <Local cidade='Belo Horizonte' estado='MG' /><br />
      <Local cidade='São Paulo' estado='SP' /><br />
      <br />
      <hr />

      {/* <h2>Olá, {iptNome}</h2> */}
      <h2>Olá, {nome}!</h2>

      <input type="text" value={iptNome} onChange={e => setIptNome(e.target.value)}></input>&nbsp;&nbsp;
      <button onClick={() => mudarNome()}>Mudar</button>
      <br />
      <br />
      <hr />

      <div className='formulario'>

        <div className='formEsquerda'>
          <h2>Formulário</h2>

          <form>
            <label><strong>Nome</strong></label> <br />
            <input
              type="text"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
            /> <br /><br />

            <label><strong>E-mail</strong></label> <br />
            <input type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            /> <br /><br />

            <label><strong>Logadouro</strong></label> <br />
            <input type="text"
              value={form.endereco.logadouro}
              onChange={(e) => setForm({ ...form, endereco: { ...form.endereco, logadouro: e.target.value } })}
            /> <br /><br />

            <label><strong>Nº</strong></label> <br />
            <input type="text"
              value={form.endereco.numero}
              onChange={(e) => setForm({ ...form, endereco: { ...form.endereco, numero: e.target.value } })}
            /> <br /><br />

            <label><strong>Bairro</strong></label> <br />
            <input type="text"
              value={form.endereco.bairro}
              onChange={(e) => setForm({ ...form, endereco: { ...form.endereco, bairro: e.target.value } })} /> <br /><br />

            <label><strong>Cidade</strong></label> <br />
            <input type="text"
              value={form.endereco.cidade}
              onChange={(e) => setForm({ ...form, endereco: { ...form.endereco, cidade: e.target.value } })} /> <br /><br />

            <button type="submit" onClick={enviarFormulario}>Enviar</button>
          </form>
        </div>

        <div className='formDireita'>
          {dados.nome || dados.email || dados.logadouro || dados.numero || dados.bairro || dados.cidade ? (<h2>Dados informados</h2>) : ''}
          {dados.nome ?  (<strong>Nome: </strong>) : ''} {dados.nome} {dados.nome ?  (<br />) : ''}
          {dados.email ?  (<strong>E-mail: </strong>) : ''} {dados.email} {dados.email ?  (<br />) : ''}
          {dados.logadouro ?  (<strong>Logadouro: </strong>) : ''} {dados.logadouro} {dados.logadouro ?  (<br />) : ''}
          {dados.numero ?  (<strong>Número: </strong>) : ''} {dados.numero} {dados.numero ?  (<br />) : ''}
          {dados.bairro ?  (<strong>Bairro: </strong>) : ''} {dados.bairro} {dados.bairro ?  (<br />) : ''}
          {dados.cidade ?  (<strong>Cidade:</strong>) : ''} {dados.cidade} {dados.cidade ?  (<br />) : ''}
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default App;
