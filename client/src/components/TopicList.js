import React, { useEffect, useState } from 'react';
import { fetchTopics, createTopic } from '../services/api';

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    fetchTopics()
      .then(setTopics)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleAddTopic = async () => {
    if (!newTitle.trim()) {
      alert('Title cannot be empty');
      return;
    }

    try {
      const newTopic = await createTopic(newTitle);
      setTopics((prev) => [...prev, newTopic]); // append to bottom
      setNewTitle('');
    } catch (err) {
      console.error(err);
      alert('Failed to create topic');
    }
  };

  if (loading) return <p>Loading topics...</p>;
  if (topics.length === 0) return <p>No topics yet</p>;

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New topic title"
        />
        <button onClick={handleAddTopic}>Add Topic</button>
      </div>

      <ul>
        {topics.map((topic) => (
          <li key={topic._id}>
            {topic.title} — Score: {topic.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
