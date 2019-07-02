
import React, { Component } from 'react';
import SingleWordComponent from '../Components/SingleWordComponent';
import Data from '../Components/Data'   //inicialna datat
import WordWiget from '../Components/WordWiget';


// import '../';
// import Data from '../Components/Data'
// import pic from './pic.png';



// export default class Home extends Component {
//     constructor() {
//         super()
//         this.state = {
//             Data: Data
//         }
//     }


//     render() {
//         const random = Math.floor(Math.random() * 11)
//         // const td = this.state.Data.map(item =>  <p>Id: {item.id} Zadanie: {item.zadanie}</p> )

//         // console.log(this.state.Data[0].id)
//         // console.log(this.state.Data[random].think)


//         return (
//             <div className="Homme">

//                 <div className="left">
//                     <h1>{this.state.Data[random].think}</h1>
//                 </div>

//                 <div className="right">
//                     <img src={pic} className="App-logo" alt="think" />
//                 </div>





//             </div>
//         )
//     }
// }


class App extends Component {

    state = {
        Data: Data,
        error: null,
        isLoading: "Czekam na uruchomienie API ;)"
    }



    componentDidMount() {        // <-----------------START
        this.loadInfoBefore();
        this.dateGet();
    }

    loadInfoBefore = () => { this.setState({ isLoading: "Oczekuje na dane z API" }); }
    loadInfoAfter = () => { this.setState({ isLoading: "Pograno dane z API" }); }
    loadInfoError = () => { this.setState({ isLoading: "Coś poszło nie tak z pobieraniem danych" }); }


    dateGet = () => {            // <-----------------POBIERANIE
        //http://numbersapi.com/random/year?json 
        // 'https://localhost:44325/api/ToDo'

        fetch('https://localhost:44381/api/Word')
            .then((response) => {
                if (response.status === 200) {
                    console.log("SUCCESSS, POBRANO DANE Z API")
                    return response.json();
                } else if (response.status === 408) {
                    console.log("SOMETHING WENT WRONG ;(")
                    this.loadInfoError();
                }
            })

            .then(data => {     // jeśli chcemy przekazać dalej do kolejnego then --> dodajemy return
                this.setState({ Data: data }, this.loadInfoAfter());
                console.log(data)
            })

            .catch(err => console.log(err));
        //   this.loadInfoError();
    }



    addItem = (e) => {                          // Prosta funkcja przekazująca event do konsoli
        e.preventDefault();
        this.setState({ isLoading: "Oczekuje" });

        const Obj = {};
        Obj.title = e.target[0].value;
        Obj.description = e.target[1].value;
        Obj.status = 0;
        // console.log(Obj);
        fetch(`https://localhost:44325/api/ToDo`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(Obj), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                console.log("Wysłałem notatkę");
                console.log(res);
                this.dateGet()            // Funkcja ponownie sciaga dane - czyli zmiania state by na stronie było widac zmiany

            })
            .catch(error => console.error('Error:', error));
    }



    dateDelete = (e) => {
        // debugger;
        this.loadInfoBefore();
        fetch(`https://localhost:44325/api/ToDo/${e.target.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ id: '{ID}' })
        })
            .then(res => console.log(res.text()), this.dateGet()) // OR res.json()
            .then(res => console.log(res), this.dateGet(), this.loadInfoAfter(), alert("x"))

        // this.dateGet();

    }

    dateEdit = (e) => {
        console.log('do zrobienia ;)')
    }

    render() {
        return (
            <div className="HomeWrapper">



                <div className="leftSide">
                    <h1>Status: {this.state.isLoading}</h1>
                    {this.state.Data.map(i => (
                        <SingleWordComponent key={i.id}
                            id={i.id}
                            wordpl={i.wordpl}
                            worden={i.worden}
                            wordCategory={i.wordCategory}
                            // stat={i.status}
                            Fn={this.dateDelete}
                            Fn2={this.dateEdit}
                        />
                    ))}
                </div>







                <div className="rightSide">
                    <h1>Dodaj słowo</h1>
                    <form onSubmit={this.addItem}>

                        <label>
                            PL:<br />
                            <input type="text" name="name" /><br />
                            EN:<br />
                            <textarea name="description" defaultValue="" /><br />
                        </label><br />
                        <input type="submit" value="Submit" className="buttonSubmit" />

                    </form>

                    <div className="wiget">
                        <h1>Losowe słowo</h1>


                        <WordWiget
                        // key={this.state.i.id}
                        // id={i.id}
                        // wordpl={i.wordpl}
                        // worden={i.worden}
                        // wordCategory={i.wordCategory}
                        // // stat={i.status}
                        // Fn={this.dateDelete}
                        // Fn2={this.dateEdit}
                        />




                    </div>
                </div>





            </div>
        );
    }
}

export default App;







