import React from 'react'
import ReactDom from 'react-dom'
import StatsCard from '../StatsCard'
import StatsPage from '../StatsPage';
import Navbar from '../../navBar/Navbar'
import Footer from '../../footer/Footer'
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup); 

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<StatsPage/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<StatsCard/>, div)
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
    const tree = renderer.create(<StatsPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
