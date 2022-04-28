import React , {Component}  from 'react';
import {Link} from 'react-router-dom'
import './cards.css'
import './description.css'



class ProductDesc extends Component 
{
    constructor(props){
        super(props);
        this.state= {
            product:  null
        }
    }
    llamado(){
       fetch('http://localhost:3000/api/lastProduct')
        .then(response => response.json() )
        .then(data => this.setState( {product:data.data} ))
        .catch(e =>console.log(e)) 
    }
    componentDidMount(){
        this.llamado()
        console.log(this.state.product)
    }
   render ()
  {
      return(
        
        <div className=" contenedor" >
            <Link exact to='/product'>
            <div className="card text-white bg-dark mb-3 cards">
                <div className="card-header">Último producto creado</div>
                    <div className="card-body letra">
                    <div>
                        <h5 className="card-title letra">Modelo: {this.state.product?.modelo}</h5>
                        <h5 className="card-title letra2">{this.state.product?.modelo}</h5>
                    </div>
                    <div>
                        <h5 className="card-title letra">Talle:</h5>
                        <h5 className="card-title letra2">{this.state.product?.talle}</h5>
                    </div>
                    <div>
                        <h5 className="card-title letra">Precio:</h5>
                        <h5 className="card-title letra2">{this.state.product?.precio}</h5>
                    </div>
                    <div>
                        <h5 className="card-title letra">Fecha de Creación:</h5>
                        <h5 className="card-title letra2">{this.state.product?.fechaCreacion}</h5>
                    </div>
                    <div>
                        <h5 className="card-title letra">Descripción:</h5>
                        <h5 className="card-title letra2">{this.state.product?.descripcion}</h5>
                    </div>
                    </div>
                </div>
            </Link>
        </div>
      )
    
   }
}

export default ProductDesc;
