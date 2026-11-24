
import { useParams, Link } from "react-router-dom";
function ServiceDetails() {
  const { id } = useParams();
  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "We build responsive and professional websites."
    },
    {
      id: 2,
      name: "Graphic Designing",
      description: "We design logos, banners and social media posts."
    },
    {
      id: 3,
      name: "Digital Marketing",
      description: "We help businesses grow through online marketing."
    }
  ];
  const selectedService = services.find(
    (service) => service.id === Number(id)
  );

  if (!selectedService) {
    return <h2 className="container">Service Not Found!</h2>;
  }
  return (
    <div className="container">

      <h1>{selectedService.name}</h1>

      <p>{selectedService.description}</p>

      <Link to="/services">
        Back to Services
      </Link>

    </div>
  );
}
export default ServiceDetails;
