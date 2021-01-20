import React from 'react'
// import logo from './logo.svg';
import './App.css';
import BasicInfo from './BasicInfo/BasicInfo.js';


//Very Easy 
class App extends React.Component {
//Easy
  constructor(props){
    super(props)
//Hard
  this.state = {
      person: [
        { Name: 'Judith Espinoza', Phone: '704-299-3638', DOB: '08/08/1999', Job:'R2H'},
        { Name: 'Bill Bob', Phone: '123-456-7890', DOB: '10/02/3030', Job:'NA'},
        { Name: 'Winter Snow', Phone: '704-123-4567', DOB: '01/20/2021', Job:'NA'},
        { Name: 'Elizabeth Romero', Phone: '704-704-0000', DOB: '01/01/1010', Job :'NA'},
        { Name: 'Oliver Romero', Phone: '120-123-1234', DOB: '05/15/2021', Job:'NA'} 
      ]
    }
  }
render() {
    return (
      <div className="App">
<BasicInfo person={this.state.person} />
</div>
    )
  }
}

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
