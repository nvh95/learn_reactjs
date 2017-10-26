const Card = (props) => {
	return (
  	<div>
  	  <img width= "75" src={props.avatar_url} />
      <div style= {{display: 'inline-block', marginLeft:10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
        <div>{props.company}</div>
      </div>
  	</div>
  );
};


const CardList = (props) => {
	return (
  	<div>
  	  {props.cards.map(card => <Card {...card}/>)}
  	</div>
    
  );
}
class Form extends React.Component {
	handleSubmit = (event) => {
  	event.preventDefault();
    console.log('Event: Form submit', this.userNameInput.value)
  };
  
	render() {
     return (
       <form onSubmit={this.handleSubmit}>
       <input type="text"
       	ref={(input)=> this.userNameInput = input } 
        placeholder="Github username" required />
       <button type="submit">Add card</button>
       </form>)
  }
}

class App extends React.Component {
  state = { data : [
  {name: "Sophie Alpert",
  company: "Facebook",
  avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4"},
  {name: "Hung Viet Nguyen",
  company: "Septeni Technology",
  avatar_url: "https://avatars3.githubusercontent.com/u/8603085?v=4"},
  ]};
	render() {
    return (
      <div>
        <Form />
        <CardList cards={this.state.data} />
      </div>
    );
	}
}
ReactDOM.render(<App />, mountNode)