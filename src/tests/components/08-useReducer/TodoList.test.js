import {shallow} from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";
import {demoTodos} from "../../test-data/demoTodo";

describe('pruebas en <TodoList />', ()=> {

    const handleToggle= jest.fn();
    const handleDelete= jest.fn();



    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleToggle={ handleToggle }
            handleDelete={ handleDelete }
        />
    )



    test('debe de mostrarse correctamente',() => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de la cantidad de elementos correctps',() => {

        const items = wrapper.find('TodoListItem');

        expect (items.length).toBe(demoTodos.length);

        expect (items.at(0).prop('handleDelete')).toEqual(expect.any( Function ));
        expect ( typeof items.at(0).prop('handleToggle')).toBe('function');
        

    });


});
