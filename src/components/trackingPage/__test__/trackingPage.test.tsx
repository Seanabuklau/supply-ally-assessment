import React from 'react'
import ReactDom from 'react-dom'
import TrackingCard from '../TrackingCard'
import TrackingPage from '../TrackingPage';
import Navbar from '../../navBar/Navbar'
import Footer from '../../footer/Footer'
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup); 

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<TrackingPage/>, div)
})

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<TrackingCard/>, div)
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
    const tree = renderer.create(<TrackingPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })

