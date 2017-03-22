import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import MainApp from '../../app/components/MainApp.jsx';

var expect = chai.expect;

describe('MainApp', () => {
  let app;

  beforeEach(() => {
    app = shallow(<MainApp />);
  });

  it('should render title', () => {    
    expect(app.find('h1').text()).to.equal('REACTJS');
  });

  it('should render one Navigation component', () => {    
    expect(app.find('Navigation').length).to.equal(1);  
  })

  it('should render one PostsList component', () => {    
    expect(app.find('PostsList').length).to.equal(1);  
  })

  it('should render one ShowMoreButton component', () => {    
    expect(app.find('ShowMoreButton').length).to.equal(1);  
  })
});

