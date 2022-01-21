import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import App from 'components/App/App';

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


// import { render } from 'react-dom'
// import Container from './components/DND/example'
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
//
// function App() {
//     return (
//         <div className="App">
//             <DndProvider backend={HTML5Backend}>
//                 <Container />
//             </DndProvider>
//         </div>
//     )
// }
//
// const rootElement = document.getElementById('root')
// render(<App />, rootElement)