import "./SingleCard.css";

export default function SingleCard({ card, handleChoice }) {
  handleChoice(card);

  return (
    <div className="card" key={card.id}>
      <div>
        <img className="front" src={card.src} alt="" />
        <img className="back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
}
