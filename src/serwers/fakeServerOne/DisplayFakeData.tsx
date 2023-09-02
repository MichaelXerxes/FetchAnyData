import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { endpointsNew } from "./fakeSerwer";
import { User } from "../../database/db";

interface State {
  users: User[];
}

class FakeTwo extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    endpointsNew["/users"]["GET"]().then((data) => {
      this.setState({ users: data });
    });
  }

  keyExtractor = (item: User) => item.id.toString();

  renderItem = ({ item }: { item: User }) => (
    <Text>{`${item.name} (${item.email})`}</Text>
  );

  render() {
    console.log(endpointsNew);
    return (
      <View>
        <Text>User List:</Text>

        <FlatList
          data={this.state.users}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default FakeTwo;
