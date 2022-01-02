import {shallow} from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import {demoTodos} from "../../test-data/demoTodo";


describe('pruebas en <TodoListItem />', () =>{

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={ demoTodos[0]}
            index={ 0 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />);



    // beforeEach(() => {
    //     jest.clearAllMocks();
    //     wrapper = shallow(
    //         <TodoListItem
    //             todo={ demoTodos[0]}
    //             index={ 0 }
    //             handleDelete={ handleDelete }
    //             handleToggle={ handleToggle }
    //         />
    //     );
    //
    //
    // });



    test('debe de mostrartse correctamente', () => {
        expect( wrapper).toMatchSnapshot();
    });

    test('debe de llamar la función handleDelete', ()=> {
        // jest.fn()
        // ToHaveBeenCalledWith

        wrapper.find('.btn-danger').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith( demoTodos[0].id);

    });


    test('debe de llamar la función handleToggle', ()=> {
        // jest.fn()
        // ToHaveBeenCalledWith

        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith( demoTodos[0].id);
    });

    test('debe de mostrar el texto correctamente', ()=> {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc.trim()}`)

    });


    test('debe de tener la clase complete si el done esta en true', ()=> {

        const completedTodo = demoTodos[0];
        completedTodo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo={ completedTodo }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            />);


        const p = wrapper.find('p');
        expect(p.hasClass('complete')).toBe(true)

    });










});
