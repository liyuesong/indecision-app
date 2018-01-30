class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((curState) => {
            return {
                visibility: !(curState.visibility)
            };
        });
    }

    render() {
       return (
           <div>
               <h1>Visibility Toggle</h1>
               <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show details"}
               </button>
               { this.state.visibility && (
                   <p>This is some details...</p>
               )}
           </div>
       );
   }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');
// let visibility = false;
// // let details;
// // let count = 0;

// const onShowDetails = () => {
//     visibility = !visibility;
//     // if (visibility) {
//     //     // visibility = true;
//     //     details = <p>some details to show...</p>;
//     // } else {
//     //     // visibility = false;
//     //     details = undefined;
//     // }

//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetails}>
//                 { visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {/* { details } */}
//             { visibility && (
//                 <div>
//                     <p>Show some details...</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();