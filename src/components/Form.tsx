import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';


interface FormData {
    email: string,
    nombre: string,
    edad: number
}

export const Form = () => {

    const {form, handleChange} = useForm<FormData>({
        email: 'james@gmail.com',
        nombre: 'james mejia',
        edad: 29
    });

   /*  const [form, setForm] = useState({
        email: '',
        nombre: ''
    });

    const handleChange = ( {target}: ChangeEvent<HTMLInputElement> ) => {
        const {name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    } */

    const { email, nombre, edad } = form;

  return (
    <form autoComplete="off">
        <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email"
                    className="form-control"
                    name="email"
                    value={ form.email }
                    onChange={ handleChange }
                    />
        </div>

        <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text"
                            className="form-control"
                            name="nombre"
                            value={form.nombre}
                            onChange={ handleChange }/>
        </div>

        <div className="mb-3">
                    <label className="form-label">Edad:</label>
                    <input type="text"
                            className="form-control"
                            name="edad"
                            value={edad}
                            onChange={ handleChange }/>
        </div>

        <pre>{ JSON.stringify(form) }</pre>
    </form>
  )
}
