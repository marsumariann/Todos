import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../todoStyles";
import { Item } from "../App";

interface Props {
    items: Item[];
    markAsDone: (id: string) => void;
}

const TodoList = ({ items, markAsDone}: Props) => (

  <FlatList
      data={items}
      extraData={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> markAsDone(item.id)}>
        <View style={styles.rowFront}>

          <Text 
          key={item.done ? 'done' : 'undone'}
          style={[styles.taskText, item.done && styles.taskDone]}>{item.name}</Text>
      
        </View>
        </TouchableOpacity>
      )}>
      </FlatList>

);
export default TodoList;


