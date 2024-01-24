const EventModel = require("../models/eventSchema");

const createEventService = async (data) => {
  console.log({ data });
  const doc = await EventModel.create({ ...data });
  console.log({ doc });
  return doc;
};

const getEventService = async () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  const doc = await EventModel.find({ initialDate: { $gte: date } }).limit(4);
  return doc;
};

const getEventWithoutLimitService = async () => {
  const doc = await EventModel.find();
  return doc;
};

const deleteEventService = async (id) => {
  const doc = await EventModel.deleteOne({ _id: id });
  return doc;
};

module.exports = {
  createEventService,
  getEventService,
  deleteEventService,
  getEventWithoutLimitService,
};
