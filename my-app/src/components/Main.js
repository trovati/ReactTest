import React, { Component } from "react";
import "./Main.css";
import { FaSearch, FaEdit, FaWindowClose } from "react-icons/fa";

export default class Main extends Component {
  state = {
    pesquisaNFE: "",
    resultado: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { resultado } = this.state;
    let { pesquisaNFE } = this.state;
    pesquisaNFE = pesquisaNFE.trim();

    if (resultado.indexOf(pesquisaNFE) !== -1) return;

    const newSearch = [...resultado];

    this.setState({
      resultado: [...newSearch, pesquisaNFE],
      pesquisaNFE: '',
    });
  };
  handleEdit = (e, index) => {
    console.log("Editando", index);
  };

  handleDelete = (e, index) => {
    const { resultado } = this.state;
    const newSearch = [...resultado];
    newSearch.splice(index, 1);

    this.setState({
      resultado: [...newSearch],
    });
  };

  handleChange = (e) => {
    this.setState({
      pesquisaNFE: e.target.value,
    });
  };

  render() {
    const { pesquisaNFE, resultado } = this.state;
    return (
      <div className="main">
        <h1>Digite o Número da Nota Fiscal</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="1111 2222 3333 4444 5555 6666 7777 8888 9999 0000 1010"
            value={pesquisaNFE}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <ul className="resultados">
          {resultado.map((resultado, index) => (
            <li key={resultado}>
              {resultado}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />
                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
