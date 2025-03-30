import React from "react";
import UserCard from "../../src/components/SixthTask/UserCard";

const UserCardPage = () => {
  const handleButtonClick = () => {
    alert("Hello User!");
  };
  const user1 = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    address: { city: "New York", country: "USA" },
    onButtonClick: handleButtonClick,
  };
  const user2 = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: "45",
    address: { city: "London", country: "UK" },
    onButtonClick: handleButtonClick,
  };
  const user3 = {
    name: "Alice Brown",
    email: "alice.brown@example.com",
    age: 25,
    address: { city: "Paris", country: "France" },
    onButtonClick: handleButtonClick,
  };
  const user4 = {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 35,
    address: { city: "Sydney", country: "Australia" },
    onButtonClick: handleButtonClick,
  };
  const user5 = {
    name: "Charlie Williams",
    email: "charlie.williams@example.com",
    age: 15,
    address: { city: "Tokyo", country: "Japan" },
    onButtonClick: handleButtonClick,
  };

  return (
    <div className="user-card-page">
      <UserCard {...user1} />
      <UserCard {...user2} />
      <UserCard {...user3} />
      <UserCard {...user4} />
      <UserCard {...user5} />
    </div>
  );
};

export default UserCardPage;
