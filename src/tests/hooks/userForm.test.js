import {renderHook, act} from "@testing-library/react-hooks";
import {useForm} from "../../hooks/useForm";
import {reset} from "enzyme/build/configuration";

describe('Pruebas en useForm', ()=> {

    const initialForm = {
        name: 'gabriel',
        email: 'gabriel@gabriel.com'
    };


    test(('debe de regresar un formulario pordefecto'), () =>  {

        const { result } = renderHook( () => useForm(initialForm));
        const [ values, handleInputChange, reset ] = result.current

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');


    });

    test(('debe de cambiar el valor del formulario (name)'), () =>  {

        const newName = 'Melisa'

        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange ] = result.current

        act(()=> {
           handleInputChange({
               target: {
                   name: 'name',
                   value: newName
               }
           })
        });

        const [values] = result.current;
        expect(values).toEqual({... initialForm, name: newName })



    });


    test(('debe de re-establecer el formulario con RESET'), ()=>  {

        const newName = 'Melisa'

        const { result } = renderHook( () => useForm(initialForm));
        const [ , handleInputChange, reset ] = result.current

        act(()=> {
            handleInputChange({
                target: {
                    name: 'name',
                    value: newName
                }
            });

            reset();

        });

        const [values] = result.current;
        expect(values).toEqual( initialForm )

    });



});
