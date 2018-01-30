
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        // this.state = {
        //     options: props.options
        // };
        // read from the saved data
        this.state = {
            options: []
        };
    }
    // Lifecycle Methods
    componentDidMount() {
        // start when rendering
        // fetching data
        try {
            // from the localStorage and set saved data
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            // when localStorage is null, will return null as options
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {
            // catch error and do nothing at all: back to the initial empty array
        }
    }
    componentDidUpdate(prevProps, prevState) {
        // called after component updated
        // saving data
        if (prevState.options.length !== this.state.options.length) {
            // need to save data without re-save: actually changing data
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        // start when/before component goes away
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((curState) => ({
           options: curState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
    
        const selectedOption = this.state.options[randomNum];
        alert(selectedOption);
    }

    handleAddOption(option) {
        // add some validations
        if (!option) { // return error msg
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { // already exist
            return 'This option already exists';
        }

        this.setState((curState) => ({ 
            options: curState.options.concat(option) 
        }));
    }

    render() {
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subTitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//     options: []
// };

const Header = (props) => {
    return (
        <div>
           <h1>{ props.title }</h1>
            { props.subtitle && <h2>{props.subtitle}</h2> }
        </div>
    );
}
Header.defaultProps = {
    title: "Indecision"
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return(
        <div>
        {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */ }
        < button onClick = { props.handleDeleteOptions } > Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            {
                props.options.map(option => 
                    <Option 
                        key={option} 
                        option={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.option);
                }}
            >
                remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = { // default as no error
            error: undefined
        };
    }
    handleAddOption(e) {
        // do something before passing data up
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        // clear input
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));