# 🛒 Product Filter App

A React + Vite-based web application to browse and filter food products using the OpenFoodFacts API. Users can filter products by category (e.g., beverages, snacks, dairy, etc.) and view details like name, brand, nutrition grade, and image.

---

## 🚀 Tech Stack

- **React** – UI library
- **Vite** – Fast bundler for development
- **Tailwind CSS** – Utility-first CSS framework
- **OpenFoodFacts API** – Public food product data source

---

## 📦 Features

- 🔍 Filter products by category (e.g., beverages, dairies, snacks, desserts)
- 🖼️ Display product name, brand, nutrition grade, and image
- ⚡ Fast load times with API field filtering
- 📱 Responsive layout for mobile and desktop
- 🎯 Clean, minimal, and accessible UI

---

## 🧪 API Reference

All product data is fetched from:  
🔗 [https://world.openfoodfacts.org](https://world.openfoodfacts.org)

Example endpoint used:
https://world.openfoodfacts.org/category/snacks.json?fields=_id,code,product_name,brands,quantity,categories,ingredients_text,nutrition_grade_fr,image_url


---

## 🧠 Method Used to Solve the Problem

### 1. Understanding the Requirements
- Build a frontend app to display food products from OpenFoodFacts.
- Allow users to filter by category such as beverages, dairy, snacks, etc.

### 2. Setting Up the Project
- Used **Vite** to scaffold the React app for better performance and faster dev server.
- Integrated **Tailwind CSS** for rapid and responsive UI development.
- Structured components into `Filter`, `ProductCard`, and main layout.

### 3. Building the Category Filter
- Created a sidebar with radio inputs listing predefined categories.
- On category selection, updated the `selectedCategory` state.
- Triggered new fetch calls to retrieve products in that category.

### 4. Fetching and Rendering Products
- Used `useEffect` to fetch product data from:

https://world.openfoodfacts.org/category/[category].json?fields=_id,code,product_name,brands,quantity,categories,ingredients_text,nutrition_grade_fr,image_url

Displayed data in cards with name, brand, nutrition grade, and image.
- Handled cases where data was missing (e.g., fallback for image or name).

### 5. Optimizing Performance
- Used the `?fields=` parameter to reduce API payload size.
- Used basic React state instead of external libraries for simplicity.
- Ensured full responsiveness using Tailwind’s utility classes.

---

## ⏳ Time Taken

> Approximate total time spent: **18 hours**

---

## 📝 How to Run Locally

```bash
git https://github.com/Adi-thya-G/product-filter-app/
cd product-filter-app
npm install
npm run dev



