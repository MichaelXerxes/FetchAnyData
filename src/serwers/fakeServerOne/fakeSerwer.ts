import { User, users } from "../../database/db";

export const endpointsNew = {
  "/users": {
    "GET": getUsers,
    "POST": createUser,
  },
  "/users/:id": {
    "GET": getUser,
    "PUT": updateUser,
    "DELETE": deleteUser,
  }
};

function getUsers(): Promise<User[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500);
  });
}

function getUser(id: number): Promise<User | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === id);
      resolve(user);
    }, 500);
  });
}

function createUser(user: User): Promise<User> {
  return new Promise((resolve) => {
    setTimeout(() => {
      user.id = Date.now();
      users.push(user);
      resolve(user);
    }, 500);
  });
}

function updateUser(id: number, updatedUser: User): Promise<User | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((u) => u.id === id);
      if (index !== -1) {
        users[index] = { ...users[index], ...updatedUser };
        resolve(users[index]);
      } else {
        resolve(undefined);
      }
    }, 500);
  });
}

function deleteUser(id: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = users.findIndex((u) => u.id === id);
      if (index !== -1) {
        users.splice(index, 1);
      }
      resolve();
    }, 500);
  });
}
