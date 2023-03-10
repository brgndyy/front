import React from "react";
import UserList from "../components/UserList";

export default function Users() {
  const USERS = [
    {
      id: "u1",
      name: "BRGNDY",
      image:
        "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3262&q=80",
      places: 3,
    },
  ];
  return (
    <>
      <UserList items={USERS} />
    </>
  );
}
