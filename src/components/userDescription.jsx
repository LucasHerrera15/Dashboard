import React , {Component}  from 'react';
import {Link} from 'react-router-dom'
import './cards.css'
import './description.css'



class UserDesc extends Component 
{
    constructor(props){
        super(props);
        this.state= {
            ultimoUser: null
        }
    }
    llamado(){
        fetch('http://localhost:3000/api/lastUser')
         .then(response => response.json())
         .then(data => this.setState( {ultimoUser:data.data} ))
         .catch(e =>console.log(e)) 
     }
     componentDidMount(){
         this.llamado() 
     }
   render ()
  {
      return(
          <div className=" contenedor" >
              <Link to='/users'>
                <div className="card text-white bg-dark mb-3 cards">
                    <div className="card-header">Último usuario creado</div>
                        <div className="card-body info">
                            <div>
                                <h5 className="card-title letra">Nombre de usuario:</h5>
                                <h5 className="card-title letra2">{this.state.ultimoUser?.nombreUsuario}</h5>
                            </div>
                            <div>
                                <h5 className="card-title letra">Nombre completo:</h5>
                                <h5 className="card-title letra2">{this.state.ultimoUser?.nombreCompleto}</h5>
                            </div>
                            <div>
                                <h5 className="card-title letra">Email:</h5>
                                <h5 className="card-title letra2">{this.state.ultimoUser?.email}</h5>
                            </div>
                            <div>
                                <h5 className="card-title letra">Domicilio:</h5>
                                <h5 className="card-title letra2">{this.state.ultimoUser?.domicilio}</h5>
                            </div>
                            <div>
                                <h5 className="card-title letra">Teléfono:</h5>
                                <h5 className="card-title letra2">{this.state.ultimoUser?.telefono}</h5>
                            </div>
                        </div>
                </div>
                </Link>
        </div>
      )
    
   }
}

export default UserDesc;
