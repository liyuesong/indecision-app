import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((curState) => ({
            options: curState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);

        const selectedOption = this.state.options[randomNum];
        // alert(selectedOption);
        this.setState( () => ({
            selectedOption: selectedOption
        }));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handleAddOption = (option) => {
        // add some validations
        if (!option) { // return error msg
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { // already exist
            return 'This option already exists';
        }

        this.setState((curState) => ({
            options: curState.options.concat(option)
        }));
    };

    // constructor(props) {
    //     super(props);

    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     // this.state = {
    //     //     options: props.options
    //     // };
    //     // read from the saved data

    //     // old syntax
    //     // this.state = {
    //     //     options: []
    //     // };
    // }

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
        } catch (e) {
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

    render() {
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subTitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
// IndecisionApp.defaultProps = {
//     options: []
// };