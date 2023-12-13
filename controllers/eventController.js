const mongoose = require("../services/loginService");
const eventService = require("../services/eventService");

const createEventController = async (req, res) => {
  try {
    const {
      eventName,
      initialDate,
      finalDate,
      eventDescription,
      eventAddress,
      initialTime,
      finalTime,
    } = req.body;
    const event = await eventService.createEventService({
      eventName,
      initialDate,
      finalDate,
      eventDescription,
      eventAddress,
      initialTime,
      finalTime,
    });
    console.log(event);
    if (!event) {
      throw new Error("EventNotCreated");
    }
    return res.status(200).json(event);
  } catch (e) {
    throw new Error(e.message);
  }
};

const getEventController = async (req, res) => {
  try {
    const events = await eventService.getEventService();
    return res.status(200).json(events);
  } catch (e) {
    throw new Error(e.message);
  }
};

const deleteEventController = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await eventService.deleteEventService(id);
    return res.status(200).json(event);
  } catch (e) {
    throw new Error(e.message);
  }
};
module.exports = {
  createEventController,
  getEventController,
  deleteEventController,
};
