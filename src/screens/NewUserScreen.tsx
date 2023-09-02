import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { User } from "../database/db";
import { endpointsNew } from "../serwers/fakeServerOne/fakeSerwer";
const NewUserScreen: React.FC = () => {
  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
  });
  const [users, setUsers] = useState<User[]>([]);
  const handleSubmit = () => {
    const randomId = Math.floor(Math.random() * 9999) + 1;
    const userWithRandomId = { ...newUser, id: randomId };
    console.log("New User:", newUser);
    addUser(userWithRandomId);
  };
  const addUser = (newUser: User) => {
    endpointsNew["/users"]["POST"](newUser).then((createdUser) => {
      setUsers((prevUsers) => [...prevUsers, createdUser]);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a New User</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={newUser.name}
          onChangeText={(text) => setNewUser({ ...newUser, name: text })}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={newUser.email}
          onChangeText={(text) => setNewUser({ ...newUser, email: text })}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    width: "100%",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default NewUserScreen;
