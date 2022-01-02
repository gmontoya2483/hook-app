import {renderHook} from "@testing-library/react-hooks";
import {useFetch} from "../../hooks/useFetch";

describe('pruebas sobre el useFetch', ()=> {

    test('debe de retornar la informacion por defecto',()=>{

        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1') );

        // console.log({all: result.all});
        // console.log({current: result.current});
        // console.log({error: result.error});
        //
        const { data, loading, error } = result.current
        expect(data).toBe(null);
        expect(loading).toBeTruthy();
        expect(error).toBe(null);

    });


    test('debe de tener la info deseada', async() =>{

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1') );
        await waitForNextUpdate({timeout: 2000});
        const { data, loading, error } = result.current


        expect(data.length).toBe(1);
        expect(loading).toBeFalsy();
        expect(error).toBe(null);

    });

    test('debe de manejar el error', async() =>{

        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2') );
        await waitForNextUpdate({timeout: 2000});
        const { data, loading, error } = result.current


        expect(data).toBeNull()
        expect(loading).toBeFalsy();
        expect(error).toBe('No se pudo cargar la info');

    });

});
