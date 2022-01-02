import {shallow} from "enzyme";
import HookApp from "../HookApp";

describe('Pruebas en componente <HookApp />', ()=> {

    test('debe de mostrar <HookApp /> correctamtne', () => {
       const wrapper = shallow(<HookApp />);
       expect(wrapper).toMatchSnapshot();
    });



});
