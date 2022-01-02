import {todoReducer} from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../test-data/demoTodo";

describe('Pruebas en todoReducer', () => {



    test('debe de retornar el estado por defecto', ()=> {
        const state = todoReducer(demoTodos, {});
        expect( state ).toEqual( demoTodos );
    });

    test('debe de agregar un TODO', ()=> {

        const newTodo = {
            id: 3,
            desc: 'New TODO',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe( demoTodos.length + 1 );
        expect( state ).toEqual([... demoTodos, newTodo]);

    });



    test('debe de borrar un TODO', () => {

        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe( demoTodos.length - 1 );

        expect(state.find( todo => todo.id === 2)).toBeUndefined();

    });


    test('debe de de hacer el toggle del todo', ()=>{

        const action = {
            type: 'toggle',
            payload: 2
        }

        const originalState = demoTodos.find( (todo) => todo.id === action.payload).done;

        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe( demoTodos.length);

        const currentState = state.find( (todo) => todo.id === action.payload).done;

        expect( currentState ).not.toBe(originalState);


    });







});
