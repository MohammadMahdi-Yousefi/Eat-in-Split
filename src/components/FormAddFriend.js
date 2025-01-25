import { useState } from "react";
import { Button } from "./FriendsList";
function FormAddFriend({ onhandlefriends  ,setAddFR}) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !imgUrl) return;
    const id = crypto.randomUUID();
    const NewFR = {
      name,
      image: `${imgUrl}?u=${id}`,
      balance: 0,
      id,
    };
    onhandlefriends(NewFR);
    setName("");
    setImgUrl("https://i.pravatar.cc/48");
    setAddFR(false)
  }
  return (
    <div>
      <form action="" className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor=""> 🧑‍🦱Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">🖼️image Url</label>
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        />
        <Button> Add</Button>
      </form>
    </div>
  );
}

export default FormAddFriend;
