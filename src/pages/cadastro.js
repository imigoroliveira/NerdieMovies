import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [numCartao, setNumCartao] = useState('');
  const [codigoSeg, setCvc] = useState('');
  const [opc, setSelectedOption] = useState('');

  const submit = (e) => {
    e.preventDefault();
    const data = {
      nome,
      numCartao,
      codigoSeg,
      opc,
    };
    const message = `Nome: ${data.nome}\nNúmero do cartão: ${data.numCartao}\nCódigo de segurança: ${data.codigoSeg}\nOpção escolhida: ${data.opc}`;
    console.log(message);
    alert(message);
  };

  const mudarOp = (event) => {
    setSelectedOption(event.target.value);
  };

  const getColor = () => {
    switch (opc) {
      case 'A':
        return '#FF8C00'; 
      case 'B':
        return '#33FF8D'; 
      case 'C':
        return '#3399FF';
      default:
        return '#003366';
    }
  };
  
  const getTextColor = () => {
    switch (opc) {
      case 'A':
        return 'text-color-white'; 
      case 'B':
        return 'text-color-black';
      case 'C':
        return 'text-color-white'; 
      default:
        return ''; 
    }
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
        <form onSubmit={submit}>
            <div>
                <h2>Dados Bancários</h2>
                <div className="form-group">
                    <label htmlFor="nome">Nome no cartão:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="numCartao">Número do cartão:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="numCartao"
                        value={numCartao}
                        pattern="[0-9]*"
                        maxLength={20}
                        onChange={(e) => setNumCartao(e.target.value)}
                        required/>
                    <div className="invalid-feedback">
                        Insira somente números!
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="codigoSeg">Cvc:</label>
                    <input
                    type="text"
                    className="form-control"
                    id="codigoSeg"
                    value={codigoSeg}
                    maxLength={3}
                    onChange={(e) => setCvc(e.target.value)}/>
                </div>
                <select
                    value={opc}
                    onChange={mudarOp}
                    style={{ backgroundColor: getColor() }}>
                    <option value="">Escolha uma plano</option>
                    <option value="A">Plano A</option>
                    <option value="B">Plano B</option>
                    <option value="C">Plano C</option>
                </select>
                <div className="form-group">
                        <button
                        type="submit"
                        className={`btn btn-primary ${getTextColor()}`}
                        style={{ backgroundColor: getColor() }}
                        >
                        Adquirir
                    </button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default Cadastro;