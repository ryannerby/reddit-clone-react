
---

# 📝 Weekly Assessment 5 (4 Hours)

In this exercise, you will demonstrate your skills as a full-stack developer by building a complete system that allows users to:

* Post and list topics
* Vote topics up or down

> ⚠️ **Please read this document thoroughly before starting the assessment.**
> 🔍 **You may search documentation, but not entire solutions.**

---

## 🛠️ Tech Stack

* **Frontend**: React with functional components and Hooks
* **Backend**: Express.js (Node.js)
* **Database**: MongoDB with Mongoose ORM

---

## 📦 Back End

Create an **Express backend** inside the `./server` folder.

* Use [this API documentation](http://docs.codemocracy.apiary.io/) to format your **endpoints** and **data models** correctly.
* You can also use the mock API as a temporary backend while developing the frontend.

### ✅ Suggested Technologies:

* **Express.js** for routing and server logic
* **Mongoose** for MongoDB interaction
* **CORS** and **dotenv** for environment configuration
* **Nodemon** for hot-reloading during development

---

## 🧩 Front End (React)

Set up your front-end React app in the `./client` directory:

```bash
npx create-react-app client
```

> Or if you're using TypeScript:
>
> ```bash
> npx create-react-app client --template typescript
> ```

### 📁 Suggested Folder Structure

```
client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   └── App.js
```

Use **React functional components** and **Hooks** (`useState`, `useEffect`) for state management and side effects. Create separate files/modules for:

* Components
* API Services (`axios` or `fetch`)
* Utility functions

---

## 🔌 Mock API

You can start building your front-end with the **mock API** provided in the backend documentation before connecting it to your Express server. This allows:

* Creating static or testable UI
* Testing `GET`, `POST`, `DELETE`, and voting functionality
* Faster UI iteration without waiting on backend readiness

---

## 🖼️ Sample UI

Here’s an example of what your app might look like:

![screenshot](readme-images/front-end.png)

---

## ✅ Requirements

### 🏠 Home Page

* List all topics, **sorted by score (descending)**
* Format the “created date”
* Show a message like **“No topics yet”** if the list is empty

### ➕ Add Topic

* Use an “Add Topic” button
* Show an error if the input is empty
* Add the new topic **to the bottom of the list** after storing it

### 🗑️ Delete Topic

* Click the trash icon to delete a topic

### 🔼🔽 Voting

* Up/Down arrows should increase or decrease the topic’s score

---

## 🌟 Extra Credit

* Automatically re-sort the list by score after a vote
* Add **loading spinners** during API requests
* Make the UI **responsive** (mobile-friendly)
* Write **unit tests for backend logic** using Jest or your preferred framework

---

