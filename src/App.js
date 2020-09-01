import React from 'react';
 
import './App.css';
import {NonRenderOnResizeAppContainer} from './components/NonRenderOnResizeAppContainer';

function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
    <script src='https://kit.fontawesome.com/a076d05399.js'> </script> 

 
<NonRenderOnResizeAppContainer>
</NonRenderOnResizeAppContainer>       
   
    </div>
  );
}

export default App;
