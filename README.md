# Understory Botanical Studio

An immersive, high-performance e-commerce experience for a boutique botanical studio. This project showcases intricate floral arrangements through a rich, interactive user interface featuring smooth scrolling, complex animations, and a custom bouquet builder.

Live Link: https://understorybotanicalstudio.vercel.app/

## ✨ Features

- **Immersive User Interface**:
  - **Smooth Scrolling**: Implemented with [Lenis](https://github.com/darkroomengineering/lenis) for a highly polished, premium feel.
  - **Rich Animations**: Extensive use of [Framer Motion](https://www.framer.com/motion/) for scroll-triggered reveals, layout transitions, and interactive feedbacks.
  - **Responsive Design**: Fully responsive layout built with Tailwind CSS, ensuring a seamless experience across all devices.

- **Interactive Shopping Experience**:
  - **Custom Bouquet Builder**: An advanced interactive tool allowing users to customize their arrangements by selecting specific flowers, foliage, and styles.
  - **Dynamic Cart**: Real-time cart management with a sleek overlay interface.
  - **Product Showcases**: Detailed views for "Signature Arrangements" and "Seasonal Collections" with "Add to Cart" functionality.

- **Content Sections**:
  - **About & Process**: Story-telling sections that elaborate on the studio's philosophy and working methods.
  - **Events & Workshops**: Information on upcoming botanical workshops and event services.
  - **Testimonials**: Social proof section featuring client reviews.
  - **Contact**: Integrated contact for inquiries and location details.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (with custom configuration for typography and color palette)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx` + `tailwind-merge` for robust class handling.

## 🚀 Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/iamarshiya/Understory-Botanical_Studio.git
    cd Understory-Botanical_Studio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/             # Static assets (images, fonts)
├── components/         # Reusable React components
│   ├── About.jsx
│   ├── BouquetBuilder.jsx  # Complex builder logic
│   ├── CartOverlay.jsx     # Cart UI
│   ├── Hero.jsx
│   ├── Navigation.jsx
│   └── ...
├── index.css           # Global styles and Tailwind directives
├── App.jsx             # Main application layout and routing
└── main.jsx            # Entry point
```

## 🎨 Design System

The project uses a custom Tailwind configuration to define its unique "Verdant" color palette and typography, ensuring a cohesive brand identity throughout the application.

- **Colors**: `verdant-cream`, `verdant-forest`, `verdant-sage`
- **Typography**: Custom font stack optimized for readability and aesthetic appeal.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
