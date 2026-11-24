
import { Link } from "react-router-dom";
function Services() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "We create professional websites."
    },
    {
      id: 2,
      name: "Graphic Designing",
      description: "We create attractive designs."
    },
    {
      id: 3,
      name: "Digital Marketing",
      description: "We promote your business online."
    }
  ];
  return (
    <div className="container">

      <h1>Our Services</h1>

      <div className="service-list">

        {services.map((service) => (

          <div className="service-card" key={service.id}>

            <h2>{service.name}</h2>

            <p>{service.description}</p>

            <Link to={`/services/${service.id}`}>
              View Details
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}
export default Services;
