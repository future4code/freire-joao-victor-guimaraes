import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: ''
  }

  componentDidUpdate() {
    const tarefasReload = this.state.tarefas
    const tarefasString = JSON.stringify(tarefasReload)
    localStorage.setItem('tarefas', tarefasString)


  };

  componentDidMount() {
    if (localStorage.getItem('tarefas')) {
      const tarefasLs = localStorage.getItem('tarefas')
      const tarefasArray = JSON.parse(tarefasLs)
      this.setState({ tarefas: tarefasArray })
    } else {
      console.log("Taefas não encontradas.")
    }


  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    //Aqui criei o que gostaria dentro do array
    const novaTarefa = {

      id: Date.now(),
      texto: this.state.inputValue,
      filtrado: this.state.filtro,
      completa: false
    }

    const copiaTarefas = [...this.state.tarefas, novaTarefa]
    // OU copiar  =>  const copiaDoEstado = [...this.state.tarefas]
    // copiaDoEstado.push(novaTarefa)
    console.table(copiaTarefas)

    this.setState({ tarefas: copiaTarefas })

  }

  selectTarefa = (id) => {
    const copiaTarefas = this.state.tarefas.map((taf) => {
      if (id === taf.id) {
        const novaTarefa = {
          ...taf,

          completa: !taf.completa

        }
        return novaTarefa;
      }
      else {
        return taf
      }
    })

    this.setState({ tarefas: copiaTarefas })
  }



  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
