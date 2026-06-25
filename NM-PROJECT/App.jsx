import { useState } from "react";

function App() {
  const [employee, setEmployee] = useState("");
  const [reason, setReason] = useState("");
  const [filter, setFilter] = useState("");
  const [leaveList, setLeaveList] = useState([]);

  const applyLeave = () => {
    if (employee === "" || reason === "") {
      alert("Please fill all fields");
      return;
    }

    const newLeave = {
      employee,
      reason,
      status: "Pending"
    };

    setLeaveList([...leaveList, newLeave]);
    setEmployee("");
    setReason("");
  };

  const updateStatus = (index, status) => {
    const updated = [...leaveList];
    updated[index].status = status;
    setLeaveList(updated);
  };

  const filteredLeaves = leaveList.filter((leave) =>
    leave.employee.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🏢 Leave Management Tool</h1>

      <div className="form-box">
        <input
          type="text"
          placeholder="Employee Name"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />

        <input
          type="text"
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <button onClick={applyLeave}>
          Apply Leave
        </button>
      </div>

      <br />

      <input
        type="text"
        placeholder="Search Employee"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <h2>Leave History</h2>

      {filteredLeaves.map((leave, index) => (
        <div className="leave-card" key={index}>
          <h3>{leave.employee}</h3>
          <p>{leave.reason}</p>

          <p>
            Status :
            <span className={leave.status}>
              {" "}
              {leave.status}
            </span>
          </p>

          <button
            onClick={() => updateStatus(index, "Approved")}
          >
            Approve
          </button>

          <button
            onClick={() => updateStatus(index, "Rejected")}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;