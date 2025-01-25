import { React, useState } from "react";
import ReactDom from "react-dom/client";
import "../index.css";
import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import { Button } from "./FriendsList";
import FormSplitBill from "./FormSplitBill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function EatSplit() {
  const [AddFR, setAddFR] = useState(false);
  const [friends, setFriends] = useState([]);
  const [selectFR, setSelectFR] = useState(null);
  function handleSelect(friend) {
    setSelectFR((cur) => (cur?.id === friend.id ? null : friend));
    setAddFR(false);
  }
  function handlefriends(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function addformfriend() {
    setAddFR(!AddFR);
    setSelectFR(null);
  }
  function handleSolitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectFR.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectFR(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectFR={selectFR}
          onselection={handleSelect}
        />
        {AddFR && (
          <FormAddFriend onhandlefriends={handlefriends} setAddFR={setAddFR} />
        )}
        <Button onCLickFN={addformfriend}>
          {!AddFR ? "Add Friend" : "close"}
        </Button>
      </div>
      {selectFR && (
        <FormSplitBill
          key={selectFR.id}
          selectFR={selectFR}
          onsplitbill={handleSolitBill}
        />
      )}
    </div>
  );
}

export default EatSplit;
