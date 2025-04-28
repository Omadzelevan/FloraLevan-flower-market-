import "../App.css";
import "../assets/styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>FloraLevan</h1>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/">მთავარი</Link>
          </li>
          <li>
            <Link to="/products">მაღაზია</Link>
          </li>
          <li>
            <Link to="/about">ჩვენ შესახებ</Link>
          </li>
          <li>
            <Link to="/contact">კონტაქტი</Link>
          </li>
          <li>
            <Link to="/cart">🛒</Link>
          </li>
          <li>
            <Link to="/login">შესვლა</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
