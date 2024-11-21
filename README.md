# TasteBudsTreat

Welcome to **TasteBudsTreat**, a revolutionary food delivery service developed using the **MERN** stack. Our platform brings a seamless user experience, offering modern web technologies and an **AI-driven recipe generator** to add a unique twist to your culinary journey. Built by **Ansh Bansal**, **Arjun Gupta**, and **Adarsh Sharma**, this project aims to bring delicious food right to your door while inspiring new recipes!

---

## 🥘 Project Overview

**TasteBudsTreat** is a full-featured food delivery application that offers:

- **User Authentication & Management**: Powered by [Clerk](https://clerk.dev/) for a secure, smooth user experience.
- **Online Payments**: Integrated with [Razorpay](https://razorpay.com/) for real-time, secure payments.
- **AI-Powered Recipe Generator**: Suggests unique recipes based on your available ingredients.
- **Responsive UI**: Built using React to provide a user-friendly, dynamic interface.

---

## 🚀 Key Features

- **Secure User Authentication**: Integrated with Clerk for an intuitive sign-in experience.
- **AI Recipe Generation**: Machine learning-powered recipe suggestions based on ingredients.
- **Real-Time Payments**: Razorpay integration ensures secure payment transactions.
- **MERN Stack**: Built on MongoDB, Express.js, React, and Node.js for scalability and maintainability.

---

## 📂 Directory Structure

Here’s a breakdown of the updated project structure:

```plaintext
TasteBudsTreat/
├── Backend/                            # Backend-related files
│   ├── Models/                         # Mongoose models for Cart, Menu, and Restaurant
│   │   ├── Cart.js                     # Model for Cart data
│   │   ├── Menu.js                     # Model for Menu items
│   │   └── Restaurant.js               # Model for Restaurant data
│   ├── routes/                         # API route handlers
│   │   ├── cart.js                     # Cart-related API routes
│   │   ├── menu.js                     # Menu-related API routes
│   │   └── restaurant.js               # Restaurant-related API routes
│   ├── .gitignore                      # Git ignore file to exclude unnecessary files
│   ├── backend.js                      # Backend server entry point
│   ├── package-lock.json               # Locked versions of dependencies
│   ├── package.json                    # Frontend dependencies and scripts
│   └── vercel.json                     # Vercel deployment configuration
├── client/                             # React frontend files
│   ├── public/                         # Public files (HTML, images, etc.)
│   ├── src/                            # Source files
│   │   ├── Components/                 # Reusable components
│   │   ├── AboutMe/
│   │   │   ├── Myself.css              # Styles for the 'Myself' component
│   │   │   ├── Myself.jsx              # 'Myself' component for user profile
│   │   ├── About.jsx                   # About page component
│   │   ├── Admin/
│   │   │   ├── Restaurant/
│   │   │   │   ├── Menu.jsx            # Menu management component for admin
│   │   │   │   └── Register_Restaurant.jsx # Register restaurant component for admin
│   │   ├── Cart/
│   │   │   └── Cart.jsx                # Cart component
│   │   ├── ContactUs/
│   │   │   ├── ContactUs.jsx           # Contact us page component
│   │   ├── FAQ/
│   │   │   ├── FAQ.css                 # Styles for FAQ component
│   │   │   └── FAQ.jsx                 # FAQ component
│   │   ├── Footer/
│   │   │   └── Footer.jsx              # Footer component
│   │   ├── Home/
│   │   │   ├── Card/
│   │   │   │   └── Card.jsx            # Card component for displaying products
│   │   │   ├── Crousal.css             # Styles for carousel
│   │   │   ├── Favourite.jsx           # Favourite items component
│   │   │   ├── name.jsx                # Name display component
│   │   │   ├── PopularCategories/
│   │   │   │   └── PopularCategories.jsx # Popular categories component
│   │   │   ├── ServiceSection/
│   │   │   │   └── ServiceSection.jsx  # Service section component
│   │   │   ├── Testimonials/
│   │   │   │   └── Testimonials.jsx    # Testimonials section component
│   │   │   ├── Home.jsx                # Main homepage component
│   │   │   └── home.css                # Styles for the home page
│   │   ├── Main/
│   │   │   ├── App.jsx                 # Main app entry point
│   │   │   ├── Error.jsx               # Error page component
│   │   │   ├── index.css               # Global CSS styles
│   │   │   └── main.jsx                # Main entry point for React app
│   │   ├── Menu/
│   │   │   └── Menu.jsx                # Menu page component
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx              # Navbar component
│   │   ├── PaymentSuccess/
│   │   │   └── PaymentSuccess.jsx      # Payment success page component
│   ├── .env                             # Environment variables
│   ├── .eslintrc.cjs                    # ESLint configuration
│   ├── .gitignore                       # Git ignore file
│   ├── README.md                        # Project documentation
│   ├── components.json                  # JSON configuration for components
│   ├── index.html                       # HTML file for React app
│   ├── package-lock.json                # Locked versions of dependencies
│   ├── package.json                     # Project dependencies and scripts
│   ├── postcss.config.js                # PostCSS configuration
│   └── tailwind.config.js               # Tailwind CSS configuration
├── .gitignore                          # Global git ignore file
└── README.md                           # Project documentation
```
