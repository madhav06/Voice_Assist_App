import React, {useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import logo from './logo.svg';
import './App.css';

const alanKey = '4c3bf7bc85122c276b2a2fa0bfdca40a2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () =>  {

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({command, articles}) => {
        if(command === 'newHeadlines'){
          console.log(articles);
        }
      }
    })
  }, [])
  return (
    <div className="App">
      <h1>Sophie-AI News Broadcaster</h1>
    </div>
  );
}

export default App;
