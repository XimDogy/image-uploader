import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home/Home';

const App = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [data, setData] = useState({});
    return (
        <Router>
            <Switch>
                <Route path="/" exact >
                    <Home 
                        setIsUploading={setIsUploading} 
                        setIsComplete={setIsComplete} 
                        setData={setData} 
                        isUploading={isUploading}
                        isComplete={isComplete}
                        data={data}
                    />
                    <Home />
                </Route>
            </Switch>
        </Router>
        
        
    )
}

export default App;