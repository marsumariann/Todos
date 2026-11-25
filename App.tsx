import { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './todoStyles';
import TodoInput from './components/todoInput';
import TodoList from './components/todoList';

const STORAGE_KEY = '@tasks';

export interface Item {
  id: string;
  name: string;
  done: boolean;
}

export default function App() {
  
  const [items, setItems] = useState<Item[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);


//Get data
    useEffect(() => {
      const loadData = async () => {
        try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data !== null) setItems(JSON.parse(data));
      } catch {
        Alert.alert('Could not load the data');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  
// Save data
    const saveData = async () => {
      if (loading) return;

      try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      Alert.alert('Saved successfully!')
      } catch {
        Alert.alert('Unable to save');
      }
  };

//Add new task
  const addTask = () => {
      if (input.trim()) {
        setItems(prev => [
          ...prev, {id: Date.now().toString(), name: input.trim(), done: false },
        ]);
        setInput('');
      }
  };

//Mark a task done
  const markAsDone = (id: string) => {

    setItems(prevItems => 
      prevItems.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (

    <View style={styles.container}>
       <Text style={styles.title}>Todo List </Text>
       <View style={styles.inputContainer}>
        <TodoInput input={input} addTask={addTask} setInput={setInput} saveData={saveData}></TodoInput>
      </View>
    <TodoList items={items} markAsDone={markAsDone}></TodoList>
    
    </View>
  
  );
};
