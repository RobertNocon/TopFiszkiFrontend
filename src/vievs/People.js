
import React, { Component } from 'react';
import PersonBox from '../Components/services/PersonBox';



class People extends Component {
    constructor() {
      super()
      this.state = {
        loading: true, // opcjonalnie do wyświetlenia info że ładowanie trwa
        dataApi: {}
      }
    }
   
   
   
    componentDidMount() {
      this.setState({ loading: true }) // opcjonalnie do wyświetlenia info że załadowano
      fetch("https://us-central1-react-mspm.cloudfunctions.net/api/people")
        .then(response => response.json())
        .then(data => {
        //   console.log(data)
          this.setState({
            loading: false, // opcjonalnie do wyświetlenia info że załadowano
            dataApi: data
          })
        })
    }
   
    render() {
        // console.log(this.state);
      const text = this.state.loading ? "Loading..." : this.state.dataApi[0].firstName // opcjonalnie do wyświetlenia info że załadowano
      const picture = this.state.loading ? "Loading..." : this.state.dataApi[0].picture // opcjonalnie do wyświetlenia info że załadowano
      return (
        <div className="App">
          <h1>Test</h1>


          {console.log(text)}



            <PersonBox name={text} imgUrl = {picture} />

            {/* <h2>{text}</h2>
        <img src={picture} alt="img" /> */}




        </div>
      )
    }
   }
   
   export default People;
   