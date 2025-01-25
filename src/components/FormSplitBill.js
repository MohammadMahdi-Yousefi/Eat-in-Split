import { useState } from "react";
import { Button } from "./FriendsList";
function FormSplitBill({ selectFR, onsplitbill }) {
  const [bill, setBill] = useState("");
  const [paidByUSer, setPaidByUser] = useState("");
  const [whoPaysBill, setWhoPaysBill] = useState("user");
  const PaidByFreind = bill ? bill - paidByUSer : "";
  function submitHandler(e) {
    e.preventDefault();
    if (!bill && !paidByUSer) return;
    onsplitbill(whoPaysBill === "user" ? PaidByFreind : -paidByUSer);
  }
  return (
    <div>
      <form action="" className="form-split-bill" onSubmit={submitHandler}>
        <h2> split a bill with {selectFR.name} </h2>
        <label htmlFor="">💵Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => {
            setBill(+e.target.value);
          }}
        />

        <label htmlFor="">🧑‍🦱Your expense</label>
        <input
          type="text"
          value={paidByUSer}
          onChange={(e) =>
            setPaidByUser(+e.target.value > bill ? paidByUSer : +e.target.value)
          }
        />

        <label htmlFor="">🚶‍➡️{selectFR.name}'s expense</label>
        <input type="text" disabled value={PaidByFreind} />

        <label htmlFor="">💵Who pays the bill</label>
        <select
          name=""
          id=""
          value={whoPaysBill}
          onChange={(e) => {
            setWhoPaysBill(e.target.value);
          }}
        >
          <option value="You">You</option>
          <option value={selectFR.name}>{selectFR.name}</option>
        </select>
        <Button>Split Value</Button>
      </form>
    </div>
  );
}

export default FormSplitBill;
