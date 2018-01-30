// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer.',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // stop full page refresh

    // sth. that user input into the form
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        render();
    }
};

// create "Remove All" button above list
const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    // generate a random number
    const randomNum = Math.floor(Math.random() * app.options.length);
    
    const selectedOption = app.options[randomNum];
    alert(selectedOption);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = ( 
        <div>
            <h1>{ app.title }</h1> 
            { app.subTitle && <p> { app.subTitle } </p> }
            <p>{ app.options.length > 0 ? "Here are your options" : "No options" }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map(option => {
                        return (
                            <li key={option}>{option}</li>
                        );
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();