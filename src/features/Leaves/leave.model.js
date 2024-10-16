import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee', 
    required: true,
  },
  leaveType: {
    type: String,
    required: true,
    enum: ["Sick", "Casual", "Earned", "Unpaid"],
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
});

const Leave = mongoose.model("Leave", leaveSchema);

export default Leave;
