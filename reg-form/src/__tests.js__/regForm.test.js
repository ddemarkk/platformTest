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
    const place = wrapper.find('div.Select').prop()
    console.log(place)
    expect(wrapper.containsAnyMatchingElements(<Select placeholder="California" />)).toEqual(true)

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