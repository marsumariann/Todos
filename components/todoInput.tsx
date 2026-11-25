import { View, TextInput, Button } from "react-native";
import { styles } from "../todoStyles";
import { Item } from "../App";

interface Props {
  input: string;
  setInput: (text: string)=> void;
  addTask: () => void;
  saveData: () => void;

}

const TodoInput = ({ input, setInput, addTask, saveData}: Props) => (
      <View style={styles.inputContainer}>
      <TextInput
      style={styles.input}
      placeholder='Enter a new task'
      onChangeText={setInput}
      onSubmitEditing={addTask}
      value={input}
      ></TextInput>

      <Button title='save' onPress={saveData}></Button>
      </View>
);

export default TodoInput;

