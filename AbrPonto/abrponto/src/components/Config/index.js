import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './Config.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

import {FaUserAlt} from 'react-icons/fa'; //User 
import {AiFillSetting} from 'react-icons/ai'; //settings
import {IoMdExit} from "react-icons/io"; //exit

import {GoogleApiWrapper, Marker, InfoWindow, Map, } from 'google-maps-react';

import {render} from 'react-dom';
import QrCode from 'react.qrcode.generator';



 class MapContainer extends Component{
    render() {
        return (
            <div className="container-fluid p-0">
              

                
                <nav className="navbar navbar-expand-md navbar-dark bg-dark"  >
                                

                                    <Link className="navbar-brand" to="/Itens"    >
                                        <span > BR7mobilidade</span>  {/*BR7mobilidade */}
                                    </Link>

                                    <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation" >
                                        <span className="navbar-toggler-icon" ></span>

                                    </button>

                                    <section className="collapse navbar-collapse" id="navbarMainToggler" > 
                                        
                                        <div className="navbar-nav ml-auto" > {/* ml-auto para o menu ir para a direita */}
                                            <Dropdown >
                                            <Dropdown.Toggle variant="secundary" id="dropdown-basic" className="bg-light"> 
                                            ABRIGOS
                                            </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">TODAS AS OPERAÇÕES</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">ABRIGOS</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">ABRIGOS</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">BANCOS</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">PLACAS I-23</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">PONTOS FICTICIOS (SEM IDENTIFICAÇÃO)</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">TOTENS</Dropdown.Item>
                                                </Dropdown.Menu>

                                            </Dropdown>

                                            <Link  className="nav-item nav-link" to="/user"   title="Meu perfil" >
                                                <FaUserAlt color="#fff" size="15px"  /> {/*User */} 
                                            </Link>
                                            

                                            
                                            <Link className="nav-item nav-link" to="/settings"  title="Configurações da conta"   >
                                                <AiFillSetting color="#fff" size="15px"  />  {/*configurações */}
                                            </Link>
                                            

                                            
                                            <Link  className="nav-item nav-link" to="/login"  onClick={()=> this.logout()} title="Sair" >
                                                <IoMdExit color="#fff" size="15px"  /> {/*Sair */}
                                            </Link>
                                      </div>  
                                    </section>

          
            </nav>

          <Map google={this.props.google} zoom={14} 
            containerStyle={containerStyle}
            initialCenter={{
                lat: -23.738673 ,
                lng: -46.5301798
                
              }}
            
            >
                

                <Marker onClick={this.onMarkerClick} name={'Current location'} />
                
              
                <InfoWindow onClose={this.onInfoWindowClose} >

                </InfoWindow>

            <div>

                <div className="qr">
                    <QrCode value='https://www.google.com'/>
                </div> 
        
             </div>

            
            </Map> 

            
</div>
        )
    }
}




export default GoogleApiWrapper({
    apiKey: ('AIzaSyB1Z9KJesk94fXXzkPg87ocnyN7P5RX2GY')
    
              
             
})(MapContainer)

const containerStyle = {
  width: '300px',
    height: '220px' 
   /* width: '100%',
    height: '100%' */
  }