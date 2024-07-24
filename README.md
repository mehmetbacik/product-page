# E-commerce Product Page

This project is a modern e-commerce web application where users can browse products, add them to their cart, and view order summaries. The project is developed using Vite, React, and TypeScript, with Tailwind CSS and SCSS for styling.

## Features

- **Product Listing:** Products are displayed in card format on the main page.
- **Product Details:** Each product card includes product name, image, price, and discount information.
- **Detailed View:** Clicking on a product navigates to the product detail page for more information.
- **Add to Cart:** Users can add products to their cart.
- **Cart Summary:** The cart displays the products added, along with the total price.
- **Animated Cart:** The cart opens and closes with an animation when interacted with.
- **Responsive Design:** All components are designed to be responsive and adapt to different screen sizes.

## Technologies

- **React.js:** A modern and fast library for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript.
- **Tailwind CSS:** A fast and flexible CSS framework, customized for this project to provide quick and simple styling.
- **SCSS:** A more powerful and feature-rich extension of CSS that enables better organization and maintainability of stylesheets.
- **Framer Motion:** An animation library for React, used to easily add animations to the project.

## Clone the Repository

To clone the project, run the following commands:

```
git clone https://github.com/mehmetbacik/product-page.git
```
```
cd product-page
```

## Installation and Running

Install the necessary dependencies and start the local server:

```
npm install
```

```
npm run dev
```

## Usage

- **Browse Products:** View products on the main page and click on them for more details.
- **Add to Cart:** Add products to the cart and view cart details.
- **Cart Summary:** Click on the cart icon in the top right corner to view a summary of the items in your cart. Hover over the icon to see a brief summary.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Deploy

For a detailed exploration of the project, you can visit the [deployed site here](https://#.vercel.app/).

## GitHub Page

GitHub Repository: [https://github.com/mehmetbacik/product-page.git](https://github.com/mehmetbacik/product-page.git).

## Contributions

If you wish to contribute to the project, please open a pull request. Any contributions and feedback are welcome!
---