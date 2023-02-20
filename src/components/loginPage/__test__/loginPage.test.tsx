import React from 'react'
import ReactDom from 'react-dom'
import LoginCard from '../LoginCard'
import LoginPage from '../LoginPage';
import Navbar from '../../navBar/Navbar'
import Footer from '../../footer/Footer'
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'; 

afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<LoginPage/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<LoginCard/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Navbar/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Footer/>, div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(<LoginPage/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree)
  });

