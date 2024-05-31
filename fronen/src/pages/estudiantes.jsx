import React, { useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3000/registro';

const Estudiantes = () => {
    const [postEstudiante, setPostEstudiante] = useState({
        id: '',
        nombre: '',
        nota1: '',
        nota2: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostEstudiante(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(URL, postEstudiante);
            alert('Estudiante registrado:');
            console.log(response.data)
        } catch (error) {
            alert('no fue posible registrar un estdiante', error);
        }
    };

    return (
        <div>
            <h1>Registra un Estudiante</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder="ID" value={postEstudiante.id} onChange={handleChange} /><br />
                <input type="text" name="nombre" placeholder="Nombre" value={postEstudiante.nombre} onChange={handleChange} /><br />
                <input type="text" name="nota1" placeholder="Nota 1" value={postEstudiante.nota1} onChange={handleChange} /><br />
                <input type="text" name="nota2" placeholder="Nota 2" value={postEstudiante.nota2} onChange={handleChange} /><br />
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Estudiantes;
