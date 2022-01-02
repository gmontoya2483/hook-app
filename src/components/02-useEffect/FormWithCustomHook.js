import './effects.css'
import {useForm} from "../../hooks/useForm";
import {useEffect} from "react";


const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(()=> {
        console.log('email cambió');
    }, [email]);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);

    }



    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input
                    name="name"
                    type="text"
                    className={'form-control'}
                    placeholder={'Tu nombre'}
                    autoComplete={'off'}
                    value={ name }
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    name="email"
                    type="email"
                    className={'form-control'}
                    placeholder={'email@gmail.com'}
                    autoComplete={'off'}
                    value={ email }
                    onChange={handleInputChange}
                />
            </div>

            <div className="form-group">
                <input
                    name="password"
                    type="password"
                    className={'form-control'}
                    placeholder={'Password'}
                    autoComplete={'off'}
                    value={ password }
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className={'btn btn-primary'}>Enviar</button>

        </form>
    );
};

export default FormWithCustomHook;
