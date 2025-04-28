import React, { useEffect } from "react";
import { useState } from "react";
import "../assets/styles/products.css";
const products = [
  {
    id: 1,
    name: "წითელი ვარდი",
    nameEn: "Red Rose",
    price: 50,
    image: "/images/rose.png",
    alt: "წითელი ვარდი - Red Rose",
  },
  {
    id: 2,
    name: "თეთრი ვარდი",
    nameEn: "White Rose",
    price: 45,
    image: "/images/rose.png",
    alt: "თეთრი ვარდი - White Rose",
  },
  {
    id: 3,
    name: "ყვითელი ტიტა",
    nameEn: "Yellow Tulip",
    price: 35,
    image: "/images/rose.png",
    alt: "ყვითელი ტიტა - Yellow Tulip",
  },
];
export default function Products() {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "products";
  });
  const [locationLoaded, setLocationLoaded] = useState(() => {
    return localStorage.getItem("locationLoaded") === "true";
  });

  const handleNavigate = (section) => {
    setActiveSection(section);
    if (section === "location") {
      setLocationLoaded(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
    localStorage.setItem("locationLoaded", locationLoaded);
  }, [activeSection, locationLoaded]);

  return (
    <section id="products">
      <div className="navigate">
        <h2 onClick={() => handleNavigate("products")}>პროდუქტები</h2>
        <h2 onClick={() => handleNavigate("location")}>მდებარეობა</h2>
      </div>

      {activeSection === "products" && (
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product">
              <div className="overflow-hidden">
                <img
                  className="product-img"
                  src={product.image}
                  alt={product.alt}
                />
              </div>
              <h2>{product.name}</h2>
              <div className="product-details">
                <p className="price">
                  <span className="amount">{product.price}</span>
                  <span className="currency"></span>
                </p>
                <button
                  className="buy-button"
                  aria-label={`დაამატე კალათში ${product.name}`}
                >
                  კალათში დამატება
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {locationLoaded && (
        <div
          className="location"
          style={{
            visibility: activeSection === "location" ? "visible" : "hidden",
            height: activeSection === "location" ? "auto" : "0",
          }}
        >
          <iframe
            title="FloraLevan Store Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4569.121474221943!2d44.72929713039764!3d41.738364441248834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4044737232998237%3A0x1953223854674cce!2z4YOh4YOQ4YOl4YOQ4YOg4YOX4YOV4YOU4YOd4YOhIOGDpOGDlOGDruGDkeGDo-GDoOGDl-GDmOGDoSDhg6Thg5Thg5Phg5Thg6Dhg5Dhg6rhg5jhg5jhg6Eg4YOh4YOQ4YOV4YOQ4YOg4YOv4YOY4YOo4YOdIOGDquGDlOGDnOGDouGDoOGDmA!5e1!3m2!1ska!2sge!4v1745691290221!5m2!1ska!2sge"
            width="800"
            height="450"
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </section>
  );
}
