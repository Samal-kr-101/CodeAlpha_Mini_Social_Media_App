# Mini Social Media App

A full-stack **Mini Social Media Application** built using **HTML, CSS, JavaScript, Express.js, and MongoDB**. This project was developed as part of the **Code Alpha Full Stack Development Internship**.

---

## 🚀 Features

### 👤 User Authentication

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcryptjs

### 👤 User Profile

* View Profile
* Edit Profile
* Update Name
* Update Bio
* Update Profile Picture
* View Followers Count
* View Following Count

### 📝 Posts

* Create Posts
* View All Posts
* Delete Own Posts
* Image Support (Image URL)
* Display Post Creation Time

### 💬 Comments

* Add Comments
* View Comments
* Delete Own Comments

### ❤️ Like System

* Like Posts
* Unlike Posts
* Display Total Likes

### 👥 Follow System

* Follow Users
* Unfollow Users
* Followers & Following Management

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

---

## 📁 Project Structure

```text
social-media-app/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── images/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── profile.html
│
└── README.md
```

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/social-media-app.git
```

### 2. Navigate to the Project

```bash
cd social-media-app
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Create a `.env` File

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/social_media_db
JWT_SECRET=your_secret_key
```

### 5. Start the Backend Server

```bash
npm run dev
```

### 6. Run the Frontend

Open the **frontend** folder using **VS Code Live Server** (or any local web server).

---

## 🔗 API Endpoints

### Authentication

| Method | Endpoint             | Description   |
| ------ | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register User |
| POST   | `/api/auth/login`    | Login User    |

### User

| Method | Endpoint                  | Description    |
| ------ | ------------------------- | -------------- |
| GET    | `/api/users/profile`      | Get Profile    |
| PUT    | `/api/users/profile`      | Update Profile |
| PUT    | `/api/users/follow/:id`   | Follow User    |
| PUT    | `/api/users/unfollow/:id` | Unfollow User  |

### Posts

| Method | Endpoint                | Description   |
| ------ | ----------------------- | ------------- |
| GET    | `/api/posts`            | Get All Posts |
| POST   | `/api/posts`            | Create Post   |
| DELETE | `/api/posts/:id`        | Delete Post   |
| PUT    | `/api/posts/like/:id`   | Like Post     |
| PUT    | `/api/posts/unlike/:id` | Unlike Post   |

### Comments

| Method | Endpoint                | Description    |
| ------ | ----------------------- | -------------- |
| POST   | `/api/comments/:postId` | Add Comment    |
| GET    | `/api/comments/:postId` | Get Comments   |
| DELETE | `/api/comments/:id`     | Delete Comment |



## 🎯 Learning Outcomes

* REST API Development
* Express.js Backend Development
* MongoDB Database Design
* JWT Authentication
* Password Hashing
* CRUD Operations
* Frontend & Backend Integration
* DOM Manipulation
* Fetch API
* Responsive Web Design

---

## 🔮 Future Improvements

* Image Upload using Multer
* Search Users
* Notifications
* Dark Mode
* Real-time Chat
* Real-time Likes & Comments (Socket.IO)
* Infinite Scrolling
* Post Editing
* User Search
* Bookmark Posts

---

## 👨‍💻 Author

**Samal**

Built as part of the **Code Alpha Full Stack Development Internship**.

---

## 📄 License

This project is developed for educational and portfolio purposes.
