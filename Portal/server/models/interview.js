import mongoose from 'mongoose';

const interviewSchema = mongoose.Schema({
    participants: [String],
    startTime: Date,
    endTime: Date
});

var InterviewMessage = mongoose.model('InterviewMessage', interviewSchema);

export default InterviewMessage;