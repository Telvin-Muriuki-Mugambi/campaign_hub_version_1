import "../styling/Vision.css"

export default function Vision({visionData}) {
  return (
    <section className="vision-section">
      <div className="vision-header">
        <p className="vision-eyebrow">THE KARURA BLUEPRINT</p>
        <h1 className="vision-title">My Vision for Karura</h1>
      </div>

      <div className="vision-grid">
        {visionData.map((item, index) => (
          <div key={index} className="vision-card">
            <div className="icon-wrapper">
              {item.icon}
            </div>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}