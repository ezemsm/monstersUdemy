import React, {Component} from 'react';
import './App.css';
import{CardList} from './components/card-list/card-list.component'
import{SearchBox} from './components/search-box/search-box.component'

//import logo from './logo.svg';


//#1
//creating class allows use of render method
 //also gives the ablity to give state 



class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[
      
      //#1
      //string:'hello sam'

      //#2
      // {
      //   name: 'Franstien',
      //   id:'a1'
      // },
      // {
      //   name: 'Dracula',
      //   id:'a2'
      // },
      // {
      //   name: 'Zombie',
      //   id:'a3'
      // },
      
      ], 

      searchField: '',
      title: ''
    
    }
  }
  
  
//      #######################inside render App  
  
// #1  watch the example for the onclick that will change the state
//   <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//   {this.state.string}      
//   {this.state.string}      
//   </p>
//   <button onClick = {()=>this.setState({string:'hello dipshit'})}> 
//     Change Text
//   </button>
// </header>

// #2 
// this.state.monsters.map(monster => (
//   <h1 key={monster.id} > {monster.name} </h1>  
 


//bingo!!!! the solution to load the state from the server!!!
componentDidMount(){
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users=>this.setState({monsters:users}));
}


onSearchChange = event => {
  this.setState({
    searchField: event.target.value, 
    title: event.target.value },
    ()=>console.log(this.state))
}
// handleChange = (e) => { 
//   this.setState({ searchField:e.target.value, title: e.target.value },()=>console.log(this.state))
// }

// #5 setState is asyncronous and lagging behind on the search text filed
// note that the text will be one behind and must be included on the callback defined by lambda fn in this example
// setState should not be in render 
// rerednering occurs witht he filteredMonsters using the updated state value of searchField
// #2 adding keys idea using monster.id monsters is mount
  render( ){
    const {monsters,searchField, title} = this.state;
    const filteredMonsters  = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>{title}</h1>
        <SearchBox onSearchChange={this.onSearchChange}/>
         <CardList monsters={filteredMonsters} /> 

        
      </div>
    );
  }
}

export default App;


// <CardList monsters={this.state.monsters} />  good example for simple defiintions and not needing the <> 
// A component should only worry about rendering



// so when fn has () it will run at the time the code is being set