import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () =>(
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand">Reservas Médicas</a>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Introduzca su rut para buscar su hora</button>
        </form>
    </div>
    </nav>

    )