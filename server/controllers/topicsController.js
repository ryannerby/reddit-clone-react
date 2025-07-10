const Topic = require('../models/Topic');

exports.getAllTopics = async (req, res) => {
  const topics = await Topic.find().sort({ score: -1 });
  res.json(topics);
};

exports.createTopic = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const topic = new Topic({ title });
  await topic.save();
  res.status(201).json(topic);
};

exports.deleteTopic = async (req, res) => {
  const { id } = req.params;
  await Topic.findByIdAndDelete(id);
  res.sendStatus(200);
};

exports.voteUp = async (req, res) => {
  const { id } = req.params;
  const topic = await Topic.findByIdAndUpdate(
    id,
    { $inc: { score: 1 } },
    { new: true }
  );
  res.json(topic);
};

exports.voteDown = async (req, res) => {
  const { id } = req.params;
  const topic = await Topic.findByIdAndUpdate(
    id,
    { $inc: { score: -1 } },
    { new: true }
  );
  res.json(topic);
};
