import React from 'react'
import ReactDom from 'react-dom'
import DetailsCard from '../DetailsCard'
import DetailsPage from '../DetailsPage';
import Navbar from '../../navBar/Navbar'
import Footer from '../../footer/Footer'
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup); 

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<DetailsPage/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<DetailsCard/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Navbar/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Footer/>, div)
})

test('About renders a snapshot properly', () => {
    const tree = renderer.create(<DetailsPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })

