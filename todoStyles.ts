import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    margin: 35,
    gap: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    margin: 20,
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 16,
  },
  rowFront: {
    margin: 15,

  },

  taskText: {
    textDecorationLine: 'none',
  },

  taskDone: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },

});

