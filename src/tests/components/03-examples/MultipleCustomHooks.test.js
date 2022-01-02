import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import {shallow} from "enzyme";
import {useFetch} from "../../../hooks/useFetch";
import {useCounter} from "../../../hooks/useCounter";
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('pruebas en multiple cuntom hooks', ()=> {


    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });

    })




    test('debe de mostrarse correctmante', ()=> {


        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de mostrar la información', ()=> {

        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBeFalsy();
        expect(wrapper.find('p').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Fernando');


    });

});
