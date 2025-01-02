# Nodejs-blog
img
![Screenshot 2025-01-02 171944](https://github.com/user-attachments/assets/d96c7601-470f-4c4b-ba0b-d3ba324d2688)



## Overview

The **Node.js Blog API** is a RESTful web service for managing blog posts and comments. It includes features like user authentication, CRUD operations, input validation, and error handling. Built with **Node.js**, **Express.js**, and **MongoDB**, this API is secure, scalable, and easy to extend.

---

## Key Features

1. **User Authentication**
   - Register and login functionality using **JWT**.
   - Secure password storage with **bcrypt**.

2. **Blog Post Management**
   - CRUD operations on blog posts.
   - Filter posts by title or author.
   - Authorization to ensure only creators can edit or delete their posts.

3. **Comment Management**
   - Add comments to blog posts.
   - Retrieve all comments for a specific blog post.
   - Authorization to ensure only creators can edit or delete their comments.

4. **File Upload**
   - Upload an image when creating or editing a blog post.

5. **Database Integration**
   - MongoDB with **Mongoose** for schema modeling and interaction.

6. **Bonus Features**
   - Pagination for posts and comments.
   - Modular routing for maintainability.
   - Swagger-based API documentation.
   - Unit testing using **Jest**.

---

## Installation and Setup

## Prerequisites and Setup  

### 1. Node.js  
Ensure you have **Node.js** (v14+ recommended) installed on your system.  

### 2. Database (MongoDB)  
Set up a free MongoDB cluster using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  

### 3. Environment Variables  
Create a `.env` file in the root directory to store your credentials securely.  
Example `.env` file:  
```env
MONGODB_URI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/blog
JWT_SECRET=MySecretBlog


