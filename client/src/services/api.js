const API_URL = 'http://localhost:5050';

export async function fetchTopics() {
  const res = await fetch(`${API_URL}/topics`);
  if (!res.ok) throw new Error('Failed to fetch topics');
  return res.json();
}

export async function createTopic(title) {
  const res = await fetch('http://localhost:5050/topics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });

  if (!res.ok) throw new Error('Failed to create topic');
  return res.json();
}
