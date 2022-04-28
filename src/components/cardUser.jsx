import React , {Component}  from 'react';
import {Link} from 'react-router-dom'
import './cards.css'



class CardUser extends Component 
{
    constructor(props){
        super(props);
        this.state= {
            card:  0
        }
    }
    llamado(){
        fetch('http://localhost:3000/api/listaUsuarios')
         .then(response => response.json() )
         .then(data => this.setState( {card:data['total']} ))
         .catch(e =>console.log(e)) 
     }
     componentDidMount(){
         this.llamado()
     }
   render ()
  {
      return(
        <div>
            <div className=" contenedor" >
                <Link to='/users'>
                    <div className="card text-white bg-dark mb-3 cards">
                        <div className="card-header">Usuarios</div>
                            <div className="card-body letra">
                            <p className="card-text letra">La cantidad de usuarios es:</p>
                            <h5 className="card-title letra api">{this.state.card}</h5>
                            </div>
                    </div>
                    </Link>
            </div>
        </div>  
      )
    
   }
}

export default CardUser;
