import React , {Component}  from 'react';
import {Link} from 'react-router-dom'
import './cards.css'

class CardProduct extends Component 
{
     constructor(props){
        super(props);
        this.state= {
            card:  0
        }
    }
    llamado(){
       fetch('http://localhost:3000/api/listaProductos')
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
            <Link exact to='/product'>
            <div className="card text-white bg-dark mb-3 cards">
                <div className="card-header">Productos</div>
                    <div className="card-body letra">
                    <p className="card-text letra">La cantidad de productos es:</p>
                    <h5 className="card-title letra api">{this.state.card}</h5>
                    </div>
                </div>
            </Link>
        </div>
        </div>
      )
    
   }
}

export default CardProduct;
