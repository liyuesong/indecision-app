import React from 'react';

export default class AddOption extends React.Component {
    // new syntax class
    state = {
        error: undefined
    };
    handleAddOption = (e) => {
        // do something before passing data up
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        // clear input
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
        
    //     // old syntax
    //     // this.state = { // default as no error
    //     //     error: undefined
    //     // };
    // }
    // handleAddOption(e) {
    //     // do something before passing data up
    //     e.preventDefault();

    //     const option = e.target.elements.option.value.trim();

    //     const error = this.props.handleAddOption(option);
    //     this.setState(() => ({ error }));

    //     // clear input
    //     if (!error) {
    //         e.target.elements.option.value = '';
    //     }
    // }

    render() {
        return (
            <div>
                {
                    this.state.error && 
                    <p className="add-option-error">
                        {this.state.error}
                    </p>
                }
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}