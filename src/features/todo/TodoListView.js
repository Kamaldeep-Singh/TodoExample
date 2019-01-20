import React, {Component} from 'react';
import { View, FlatList, Button, Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

// presentational component
class TodoListView extends Component {
  state = {
    text: ''
  }
  
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          testID={'input_field'}
          style={styles.container}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text} 
        />
        <Button
          testID={'add_todo_button'}          
          title={'Add Todo'}
          onPress={() => {
            this.props.container.props.addTodo(this.state.text)
          }}
        />
        <FlatList
          data={this.props.container.props.todos}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

export default TodoListView;
