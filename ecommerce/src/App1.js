import React from 'react'
import { Mycomponent1 } from './components/Mycomponent1';
import { Mycomponent2 } from './components/Mycomponent2';
import { Mycomponent3 } from './components/Mycomponent3';
import { Mycomponent4 } from './components/Mycomponent4';
import ClassComponent from './components/ClassComponent';
import MyClassComponent2 from './components/MyClassComponent2';
export const App = () => {
  return (
    <div><Mycomponent1 />
    <Mycomponent2 />
    <Mycomponent3 />
    <Mycomponent4 />
    <ClassComponent/>
    <MyClassComponent2/>
    </div>
  )
}
export default App;
