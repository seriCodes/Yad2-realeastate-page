import React from 'react';
import {GridComp} from './playground/GridComp';
import {FlexDemo} from './playground/FlexDemo';
import './App.css';
  
import Router from './components/Router';

import {NonRenderOnResizeAppContainer} from './components/NonRenderOnResizeAppContainer';
import {Results} from './components/Results'
import data from './components/database'

function App() {
  return (
    <div class ="App">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
    <script src='https://kit.fontawesome.com/a076d05399.js'> </script> 
   
<Router></Router>
<NonRenderOnResizeAppContainer>
</NonRenderOnResizeAppContainer>       
   
    </div>
  );
}

export default App;
