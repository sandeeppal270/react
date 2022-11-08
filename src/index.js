import React from 'react';
import ReactDOM from 'react-dom/client';

const App=()=>(
    <React.Fragment>
    <div>
        <h1>
            hello world
        </h1>
    </div>
    <div>
        <Person/>
        <h2>second hello world</h2>
    </div>
    </React.Fragment>

)
const Person=()=><h1>sandeep pal</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)


