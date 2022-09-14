import React from "react";
import './index.css'
import { withRouter,Link } from 'react-router-dom'
import api from '../../api/index.js'

class Home extends React.Component{
    state = { resultados: '' , id: ''}

    componentDidMount(){
        try {
            api.RecibirPersonajes()
            .then(response => {
                this.setState({resultados : response.results})
            })
        }catch{
            {(console.log('error'))}
        }
    }
    
    render() {
        const {state : {resultados}} = this
        return(
            <section className='home'>
                {(resultados || []).map(resultado => (
                    <Link to={`/personajes/${resultado.id}`}>
                        <div className='home__carta'>
                            <img src={resultado.image} />
                            <h4>{resultado.name}</h4>
                        </div>
                    </Link>
                    
                ))}
            </section>
        )
    }

}

export default withRouter(Home)