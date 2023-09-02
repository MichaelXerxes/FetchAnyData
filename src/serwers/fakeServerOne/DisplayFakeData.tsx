import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { endpointsNew } from "./fakeSerwer";
import { User } from "../../database/db";
const screenWidth = Dimensions.get("window").width;
interface Props {
  openItem?: () => void;
}
interface State {
  users: User[];
}

class FakeTwo extends Component<Props, State> {
  constructor(props: Props) {
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
    <TouchableOpacity onPress={this.props.openItem}>
      <View style={styles.container}>
        <View style={styles.viewName}>
          <Text style={styles.textName}>{`${item.name} `}</Text>
        </View>
        <Text style={styles.textEmail}>{item.email}</Text>
      </View>
    </TouchableOpacity>
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
const styles = StyleSheet.create({
  container: {
    padding: 2,
    width: screenWidth,

    paddingHorizontal: 16,
    marginTop: 5,
    borderBottomColor: "orange",
    borderBottomWidth: 1,
  },
  viewName: {
    alignItems: "center",
  },
  textName: {
    fontSize: 16,
    color: "brown",
    fontWeight: "bold",
  },
  textEmail: {
    fontSize: 14,
    color: "grey",
  },
});
export default FakeTwo;
