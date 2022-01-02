import {renderHook, act} from "@testing-library/react-hooks";
import {useCounter} from "../../hooks/useCounter";

describe('prueba sobre el el Hook useCounter', () =>  {

    test('debe de retornar los valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });


    test('debe de retornar el valor que se envia por parametro', () => {

        const value = 100;

        const { result } = renderHook(() => useCounter(value));
        expect(result.current.counter).toBe(value);
    });

    test('debe de incrementar el counter en 1', ()=> {
        const value = 100;
        const { result } = renderHook(() =>  useCounter(value));

        const { increment } = result.current;


        act(() => {
            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe(value + 1);

    });


    test('debe de decrementar el counter en 1', ()=> {
        const value = 100;
        const { result } = renderHook(() =>  useCounter(value));

        const { decrement } = result.current;


        act(() => {
            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe(value - 1);

    });


    test('debe de resetear el counter', ()=> {
        const value = 100;
        const { result } = renderHook(() =>  useCounter(value));

        const { decrement, reset } = result.current;


        act(() => {
            decrement(5);
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe(value);

    });




});
