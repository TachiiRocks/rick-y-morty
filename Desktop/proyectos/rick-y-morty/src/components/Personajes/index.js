import React , { Component } from 'react'
import api from '../../api'
import './index.css'
import { withRouter } from 'react-router-dom'

class Personajes extends Component {

state = { id:'' , resultados : ''}  

    componentDidMount(){
        const {match:{params:{id}}} = this.props
        try{
            api.InformacionPersonaje(id)
                .then(response => {
                    this.setState({resultados : response})
                })
        }catch{
            {(console.log('error'))}
        }
    }

    render(){
        const {resultados } = this.state
        return(
            <section>
                <div className="personajes">
                    <h3>{resultados.name}</h3>
                    <img src={resultados.image}/>
                    <div className="personajes__carta">
                        <div className="personajes__carta-info">
                            <label>Status:</label>
                            <p>{resultados.status}</p>
                        </div>
                        <div className="personajes__carta-info">
                            <label>Gender:</label>
                            <p>{resultados.gender}</p>
                        </div>
                        <div className="personajes__carta-info">
                            <label>Species:</label>
                            <p>{resultados.species}</p>
                        </div>
                        <div className="personajes__carta-info">
                            <label>Location:</label>
                            <p>{resultados.location && resultados.location.name}</p>
                        </div>
                    </div>
                    <button onClick={() => this.props.history.push('/home')} className='personajes__button'>Back</button>
                </div>
            </section>
        )
    }
}

export default withRouter(Personajes)