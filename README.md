# 🏡 Airbnb Clone

A full-stack web application inspired by Airbnb, allowing users to create, browse, and book rental property listings. Built with Node.js, Express, EJS, Tailwind CSS, and MongoDB, with features like authentication, Google Maps integration, Cloudinary image storage, and responsive design.

## 🚀 Live Demo

👉 [View Live Project](https://listing-2.onrender.com/listings)


## 🛠 Tech Stack

- **Frontend**: EJS, Tailwind CSS, Bootstrap (minor), Vanilla CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Other Libraries & Services**:
  - Cloudinary (for image uploads)
  - Google Maps API (for location display)
  - Express-session, connect-flash (for auth feedback)

## ✨ Features

- ✅ User authentication (Register/Login/Logout)
- ✅ Create, edit, and delete listings
- ✅ Upload listing images via Cloudinary
- ✅ Comment system on each listing
- ✅ Google Maps integration for listing location
- ✅ Full mobile responsiveness using Tailwind
- ✅ Error handling with custom middleware
- ✅ Form validation and flash messages
- ✅ Secure routes with middleware protections

## 🧑‍💻 Getting Started (Run Locally)

```bash
# Clone the repository
git clone https://github.com/gaga375/listing.git
cd listing

# Install dependencies
npm install

# Set up environment variables
Create a `.env` file with the following:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=your_mongo_db_url
SECRET=session_secret_key

# Start the server
npm start
