import { useState } from 'react';
import * as Component from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([

  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for(let i in newList){
      if(newList[i].id === id){
        newList[i].done = done;
      }
    }
    setList(newList);
  }


  return(
    <Component.Container>
      <Component.Area>
        <Component.Header>Lista de Tarefas</Component.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index)=>
          <ListItem 
            key={index} 
            item={item}
            onChange={handleTaskChange}
          />
        )}
      </Component.Area>
    </Component.Container>
  );
}
export default App;