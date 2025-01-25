import { useState } from "react";
function FriendsList({ friends, onselection, selectFR }) {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend
            onselection={onselection}
            key={friend.id}
            selectFR={selectFR}
            friend={friend}
          />
        ))}
      </ul>
    </>
  );
}
function Friend({ friend, onselection, selectFR }) {
  const isSelected = friend.id === selectFR?.id;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You own {friend.name} {Math.abs(friend.balance)}$
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}$
          </p> 
        )}
        {friend.balance === 0 && <p>You and {friend.name} ara even</p>}
        <Button onCLickFN={() => onselection(friend)}>
      
          {!isSelected ? "Select" : "close"}
        </Button>
      </li>
    </>
  );
}

export function Button({ children, onCLickFN }) {
  return (
    <>
      <button onClick={onCLickFN} className="button">
        {children}
      </button>
    </>
  );
}
export default FriendsList;
