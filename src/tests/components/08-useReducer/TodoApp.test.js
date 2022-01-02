import {mount, shallow} from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import {demoTodos} from "../../test-data/demoTodo";
import {act} from "@testing-library/react";

describe('Pruebas en el <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn(() => {});


    test('se debe de mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de agregar un Todo', () => {

        const wrapper = mount(<TodoApp />);

        act( ()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)')
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    });




    test('debe de borrar un Todo', () => {

        //Agregar un Todo
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (1)');

        // Eliminar un Todo
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');


    });










});
