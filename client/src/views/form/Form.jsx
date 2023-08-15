import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

const Form = ()=>{
    
    const [form, setForm] = useState({
        name:'',
        image:'',
        description:'',
        platforms:'',
        releaseDate:'YYYY-MM-DD',
        rating:'',
    }); 

    const [errors, setErrors] = useState({
        name:'',
        image:'',
        description:'',
        platforms:'',
        releaseDate:'',
        rating:'',
    });

    const changeHandler = (event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setForm({...form, [property]:value});
        validate({...form, [property]:value});
    };

    const validate = (form)=>{
        //Validar que el campo de nombre sea valido y no este vacio

        if(/^(?=.*\S)[\s\S]{1,50}$/.test(form.name)){
            setErrors({...errors, name: ''});
        } else setErrors({...errors, name: 'Falta completar'});
        
        //Validar que la URL de la imagen sea correcta

        if(/^(http|https):\/\/[^ "]+(?:\.jpg|\.gif|\.png)$/.test(form.image)){
            setErrors({...errors, image:''});
        } else setErrors({...errors, image: 'Ingrese una URL valida'});

        //Validar que el campo de descripcion no este vacio

        if(form.description.length > 0 && form.description.length <= 250){
            setErrors({...errors, description: ''});
        } else {
            if(form.description.length === 0){
                setErrors({...errors, description: 'Falta completar'});
            } else setErrors({...errors, description: 'Maximo 250 caracteres'});
        };

        //Validar que el formato de fecha en releaseDate sea valido
        
        if(/^\d{4}-\d{2}-\d{2}$/.test(form.releaseDate)){
            setErrors({...errors, releaseDate:''});
        } else setErrors({...errors, releaseDate: 'Hay un error en la fecha'});
    };

    return (      

        <>
            <NavBar/>
            <form>
                <div>
                    <label>Nombre: </label>
                    <input type = 'text' value={form.name} onChange={changeHandler} name='name'/>
                </div>
                <div>
                    <label>Imagen: </label>
                    <input type = 'text' value={form.image} onChange={changeHandler} name='image'/>
                </div>
                <div>
                    <label>Descripcion: </label>
                    <input type = 'text'value={form.description} onChange={changeHandler} name='description'/>
                </div>
                <div>
                    <label>Plataformas: </label>
                    <input type = 'text' value={form.platforms} onChange={changeHandler} name='platforms'/>
                </div>
                <div>
                    <label>Fecha de Lanzamiento: </label>
                    <input type = 'text'value={form.releaseDate} onChange={changeHandler} name='releaseDate'/>
                </div>
                <div>
                    <label>Rating: </label>
                    <input type = 'text' value={form.rating} onChange={changeHandler} name='rating'/>
                </div>
            </form>
            <button>Crear</button>
        
        </>
             
    );
};

export default Form;