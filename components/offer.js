import "../offer.css"

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Special Discount",
      description: "Get 20% off on all items!",
      expires: "2023-06-30",
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders over $50.",
      expires: "2023-07-15",
    },
    {
      id: 3,
      title: "Buy One Get One",
      description: "Buy one item and get another for free.",
      expires: "2023-06-20",
    },
  ];
  return (
    <div className="offers-page">
      <h1>Current Offers</h1>
      <ul className="offer-list">
        {offers.map((offer) => (
          <li key={offer.id} className="offer-card">
            <h2 className="offer-title">{offer.title}</h2>
            <p className="offer-description">{offer.description}</p>
            <p className="offer-expires">Expires: {offer.expires}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;
