import React, { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function Cadastro() {
  const [nome, setNome] = useState("");
  const [endereco, setEnd] = useState("");
  const [telefone, setTel] = useState("");
  const [nomeCartao, setNmCartao] = useState("");
  const [numeroCartao, setNumCartao] = useState("");
  const [cvcCartao, setCvcCartao] = useState("");
  const [planoSelecionado, setPlanoSelecionado] = useState(null);
  const [modal, setModal] = useState(false);


  function handleSelecionarPlano(plano) {
    setPlanoSelecionado(plano);
  }

  const validaNumero = (event) => {
    const regex = /^[0-9]*$/;
    const numCartao = event.target.value;
    if (regex.test(numCartao) && numCartao.length <= 20) {
      setNumCartao(numCartao);
    }
  };

  const validaCvc = (event) => {
    const regex = /^[0-9]*$/;
    const cvc = event.target.value;
    if (regex.test(cvc) && cvc.length <= 3) {
      setCvcCartao(cvc);
    }
  };


  const validaTelefone = (event) => {
    let novoTelefone = event.target.value.replace(/\D/g, '');
    novoTelefone = novoTelefone.slice(0, 11); 
    setTel(novoTelefone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!nome || !endereco || !telefone || !planoSelecionado || !nomeCartao || !numeroCartao || !cvcCartao) {
      alert("Preencha todos os campos antes de confirmar assinatura!");
      return;
    }
    console.log("Dados preenchidos:", {
      nome,
      endereco,
      telefone,
      planoSelecionado,
      nomeCartao,
      numeroCartao,
      cvcCartao,
    });
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form>
            <h4>Dados Pessoais</h4>
            <div className="mb-2">
              <label htmlFor="nome" className="form-label">Nome</label>
              <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="endereco" className="form-label">Endereço</label>
              <input type="text" className="form-control" id="endereco" value={endereco} onChange={(e) => setEnd(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="telefone" className="form-label">Telefone</label>
              <input type="text" className="form-control" id="telefone" value={telefone} onChange={validaTelefone} />
            </div>

            <h4 className='mt-5'>Plano escolhido:</h4>
            <div className="row mt-1">
              <div className="col">
                <button
                  type="button"
                  className={`btn ${planoSelecionado === "free" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => handleSelecionarPlano("free")}
                >
                  Free
                </button>
                <button
                  type="button"
                  className={`btn ${planoSelecionado === "plus" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => handleSelecionarPlano("plus")}
                >
                  Plus
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <form>
            <h4>Dados do Cartão</h4>
            <div className="mb-2">
              <label htmlFor="nomeCartao" className="form-label">Nome do Dono do Cartão</label>
              <input type="text" className="form-control" id="nomeCartao" value={nomeCartao} onChange={(e) => setNmCartao(e.target.value)} />
            </div>
            <div className="mb-2">
              <label htmlFor="numeroCartao" className="form-label">Número do Cartão</label>
              <input type="text" className="form-control" id="numeroCartao" value={numeroCartao}  onChange={validaNumero} required />
            </div>
            <div className="mb-2">
              <label htmlFor="cvcCartao" className="form-label">CVC do Cartão</label>
              <input type="text" className="form-control" id="cvcCartao" value={cvcCartao} onChange={validaCvc} required />
            </div>
            <button className="btn btn-primary btn-lg mt-5" style={{ borderRadius: "10px", fontWeight: "bold" }} onClick={handleSubmit}>Assinar</button>
          </form>
        </div>
      </div>

      <ReactModal isOpen={modal} onRequestClose={closeModal} className="modal-content" overlayClassName="modal-overlay">
        <div className="modal-header bg-secondary text-white">
          <h5 className="modal-title">Assinatura confirmada!</h5>
          <button type="button" className="btn-close text-white" onClick={closeModal}></button>
        </div>
        <div className="modal-body">
        <p><b>Nome: </b> {nome}</p>
        <p><b>Endereço: </b> {endereco}</p>
        <p><b>Telefone: </b> {telefone}</p>
        <p><b>Plano Selecionado: </b> {planoSelecionado}</p>
        <p><b>Nome do Dono do Cartão: </b> {nomeCartao}</p>
        <p><b>Número do Cartão: </b> {numeroCartao}</p>
        <p><b>CVC do Cartão: </b> {cvcCartao}</p>
        </div>
      </ReactModal>

    </div>
  );
}

export default Cadastro;