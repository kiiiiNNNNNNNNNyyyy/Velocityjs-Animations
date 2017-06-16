import Inferno from 'inferno';
import Component from 'inferno-component';
import 'bootstrap/dist/css/bootstrap.css';

const Function1 = (props) => {
    if(!props.main){
        return(
            <SomeText name={"hello"}/>
        );
    }
    
    return(
        <Main />
    )
}



class Main extends Component{
    
    constructor(props){
        super(props);
        this.state = {};
        this.state.firstname = "hello";
        this.state.secondName = "No Hello";
    }

    render(){
        return(
            <div class="col-md-12">
                <h4>I am in the Main Class. { this.props.name }</h4>
            </div>
        )
    }
}

class SomeText extends Component{
    render(){
        return(
            <div class="col-md-12">
                <h3>Hello, I am the second text!! { this.props.name }</h3>
            </div>
        );
    }
}


class Constant extends Component{
    render(){
        return(
            <div class="row">
                <h4>I am the class that will never change!!</h4>
            </div>
        );
    }
}

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {main: true};
    }

    handleToggleClick(){
        this.setState(prevState => ({
            main: !prevState.main
        }));
    }
    
    render() {
        return (
            <div class="container">
                <Constant/>
                <Function1 main={this.state.main} />
                <button class="btn btn-md btn-primary" onClick = {this.handleToggleClick.bind(this)}>{this.state.main ? 'Second Class': 'Main Class'}</button>
            </div>
        );
    }
}

// ========================================

Inferno.render(
<Container />,
document.getElementById('app')

);