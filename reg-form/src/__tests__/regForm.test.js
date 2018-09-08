import React from 'react';
import { shallow, render, mount } from 'enzyme';
import RegForm from '../components/reg-form';
import Select from '../components/reg-form';


it('displays correctly', () => {
    const wrapper = shallow(<RegForm />)
    expect(wrapper).toMatchSnapshot();
})
it("state is correct ", () => {
    const wrapper = shallow(<RegForm />)
    expect(wrapper.state().postCode).toEqual("")
})
it("placeholder correct ", () => {
    const wrapper = shallow(<RegForm />)

    expect(wrapper.find('Select.Select').shallow().hasClass('Ohio')).toEqual(true)

    //expect(wrapper.state().postCode).toEqual('35816')
})
it("Sign Up is visible ", () => {
    const wrapper = shallow(<RegForm />)
    wrapper.find('input.check').simulate('click');
    expect(wrapper.contains(<button className="butt">
        Sign Up
  </button >)).toEqual(true)

    //expect(wrapper.state().postCode).toEqual('35816')
})

it("phone number mask displays", () => {
    const wrapper = shallow(<RegForm />)

    expect(wrapper.find('input.confPass').hasClass('placeholder')).toEqual(true)

})