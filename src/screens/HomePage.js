import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


import Card from '../components/Card';

const  Heading = styled.h2`
    color: yellow;
    font-style: bold;
    text-transform: uppercase;
`;
class HomePage extends Component {
  state = {
     
  }

  inputRef = React.createRef();
  formRef= React.createRef();


  componentDidMount() {
      console.log(this);
      this.inputRef.current.focus();
  };
  
  handleSubmit = (e) =>{
    e.prevantDefault();
    this.inputRef.current.reset();
  }

  
  render() {
const styles = {  color: "red",
                fontStyle: 'italic',
                textTransform: 'uppercase'
              }
    return (
      <React.Fragment>
         <h1 style={
                      styles
                    }
                     >Самый красивый заголовок</h1>
        <Heading> HEADER second</Heading>
          <form onSubmit={this.handleSubmit} className="form-inline" ref={this.formRef}>
            

            <input placeholder="text" className="form-control"  ref={this.inputRef} />

            <input placeholder="Name" className="form-control"  />
            <input placeholder="Age" className="form-control"  />
            <button type="submit">submit</button>
          </form>
          <Card  price={100}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    //..
  }
}
export default connect(mapStateToProps, {})(HomePage);
