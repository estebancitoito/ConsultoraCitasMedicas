import React from "react";
import {useState, useEffect} from 'react'
import '../App.css';

/* class App extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            field: {},
            error: {},
            send: false 
        } 
    }
} */


export const Home = () =>{

    const [name, setName] = useState('')
    const [fLastName, setFLastName] = useState('')
    const [sLastName, setSLastName] = useState('')
    const [rut, setRut] = useState('')
    const [age, setAge] = useState('')
    const [doctorName, setDoctorName] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [email, setEmail] = useState('')

    
/*
function validateForm(){
        var field = this.state.field;
        var error = {};
        var checkForm = true;

        if (!field["name"]){
            checkForm = false;
            error["name"] = "Por favor, ingresa tu primer nombre";
        }

        if (!field["fLastName"]){
            checkForm = false;
            error["fLastName"] = "Por favor, ingresa tu primer apellido";
        }

        if (!field["sLastName"]){
            checkForm = false;
            error["sLastName"] = "Por favor, ingresa tu segundo apellido";
        }

        if (!field["rut"]){
            checkForm = false;
            error["rut"] = "Por favor, ingresa un rut válido";
        }

        if (!field["age"]){
            checkForm = false;
            error["age"] = "Por favor, ingrese una edad mayor o igual a 0";
        }

        if (!field["doctorName"]){
            checkForm = false;
            error["doctorName"] = "Por favor, ingresa un médico";
        }

        if (!field["date"]){
            checkForm = false;
            error["date"] = "Por favor, ingresa una fecha";
        }

        if (!field["time"]){
            checkForm = false;
            error["time"] = "Por favor, ingresa una hora";
        }

        if (!field["email"]){
            checkForm = false;
            error["email"] = "Por favor, ingresa un correo electrónico";
        }

        if (typeof field["email"] !== "undefined"){
            var pos = field["email"].lastIndexOf('@');
            var dotPos = field["email"].lastIndexOf('.');

            if (!(pos < dotPos && pos > 0 && field["email"].indexOf('@@') == -1 && dotPos > 2 && (field["email"].length - dotPos) > 2)) {
                checkForm = false;
                error["email"] = "Por favor, ingresa un correo válido.";
            }
        }

        if (typeof field["email"] !== "undefined"){
            if (field["age"] < 0 && field["age"] > 120){
                error["age"] = "Por favor, ingresa una edad válida.";
            }
        }

        this.setState({
            error: error
        });

        return checkForm;
    }

    function sendForm(e){
        e.preventDefault();

        if(this.checkForm()){
            this.setState({
                send: true
            })
        }
    }

    function sendMessage(state){
        const send = this.state.send;

        if(send == true){
            return{
                __html: '<div class="alert alert-success mt-3" role="alert">Cita médica agendada</div>'
            }
        }
    }

    function detectChange(field, e){
        var field = this.state.field;

        this.setState({
            field
        })
    }


*/
    
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                fLastName,
                sLastName,
                rut,
                age,
                doctorName,
                date,
                time,
                email
            })
        })
        const data = await res.json();
        console.log(data);
    }

    const getUsers = async () => {
        const res = await fetch(`http://localhost:5000/users`)
        const data = await res.json();
        console.log(data)
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div classname="row">
            <div className="col-md-4">
                {/* Field for name of the person */}
                <form onSubmit={ /*this.sendForm.bind(this)*/handleSubmit} className="card card-body">
                <div className="form-group">
                    <input type="text" 
                        id="asunto"
                        onChange={e => setName(e.target.value) /* this.detectChange.bind(this, "asunto")*/}
                        value={name /* this.state.campo["asunto"] || ''*/}
                        className="form-control"
                        placeholder="Nombre"
                        state={name}
                        //changeState={}
                        autoFocus
                    />
                    {/* <span style={{color: "red"}}>{this.state.error["asunto"]}</span>*/}
                </div>
                    {/* Field for the first last name */}
                    <div className="form-group">
                        <input type="text" 
                        onChange={e => setFLastName(e.target.value)}
                        value={fLastName}
                        className="form-control"
                        placeholder="Primer apellido"
                        />
                    </div>

                    {/* Field for the second last name */}
                    <div className="form-group">
                        <input type="text" 
                        onChange={e => setSLastName(e.target.value)}
                        value={sLastName}
                        className="form-control"
                        placeholder="Segundo apellido"
                        />
                    </div>

                    {/* Field for  rut*/}
                    <div className="form-group">
                        <input type="text" 
                        onChange={e => setRut(e.target.value)}
                        value={rut}
                        className="form-control"
                        placeholder="RUT"
                        />
                    </div>

                    {/* Field for age */}
                    <div className="form-group">
                        <input type="number" 
                        onChange={e => setAge(e.target.value)}
                        value={age}
                        className="form-control"
                        placeholder="Edad"
                        />
                    </div>

                    {/* Field for the doctor's name */}
                    <div className="form-group">
                        <input type="text" 
                        onChange={e => setDoctorName(e.target.value)}
                        value={doctorName}
                        className="form-control"
                        placeholder="Nombre del médico"
                        />
                    </div>

                    {/* Field for the date of the appointment */}
                    <div className="form-group">
                        <input type="date" 
                        onChange={e => setDate(e.target.value)}
                        value={date}
                        className="form-control"
                        placeholder="Fecha de consulta"
                        />
                    </div>

                    {/* Field for the time of the appointment */}
                    <div className="form-group">
                        <input type="time" 
                        onChange={e => setTime(e.target.value)}
                        value={date}
                        className="form-control"
                        placeholder="Hora de consulta"
                        />
                    </div>

                    {/* Field for the email of the person */}
                    <div className="form-group">
                        <input type="email" 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="form-control"
                        placeholder="Correo electrónico"
                        />
                    </div>
                    <button className="btn btn-primary btn-block">
                        
                        Agendar hora
                    </button>
                    
                </form>
                {/*<div className="msgok" dangerouslySetInnerHTML={this.mensajeEnviado()} />*/}

               

            </div>
        </div>
    )
}