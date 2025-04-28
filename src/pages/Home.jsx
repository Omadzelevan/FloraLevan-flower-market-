// import Flower from "../assets/images/rose.png";
import '../assets/styles/home.css'
export default function Home() {
  return (
    <main>
      <section className="Home">
        {/* <div className="Flower-hero">
          <img src={Flower} alt="flower" />
        </div> */}
        <div className="title-div">
            <div>
            <h1 className="title">შეუქმენი ბედნიერი წუთები</h1>
            <h1 className="title-2"> შენს მეორე ნახევარს</h1>
            </div>
            <div>
            <button className="shop-btn">შეუკვეთე ახლავე</button>
            </div>
        </div>
      </section>
    </main>
  );
}
