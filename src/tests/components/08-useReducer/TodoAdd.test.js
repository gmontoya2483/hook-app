import {shallow} from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";


describe ('Pruebas en <TodoAdd />', ()=> {

    const handleAddTodo = jest.fn();


    const wrapper = shallow(
        <TodoAdd handleAddTodo={handleAddTodo} />
    );


    test('se debe de mostrar correctamnte', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    test('NO debe de llamar el handleAddTodo', ()=> {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        expect(handleAddTodo).not.toHaveBeenCalled();

    });


    test('debe de llamar el handleAddTodo', ()=> {
        const value = 'Todo Prueba';

        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });
        // expect(handleAddTodo).toHaveBeenCalled();

        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');

    });





})
