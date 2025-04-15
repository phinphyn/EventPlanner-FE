import { Service } from "../models/Service";
function ServiceList() {
  const services = [
    new Service(1, "Trang trí tiệc cưới", 5000000, "Trang trí"),
    new Service(2, "Catering hội nghị", 10000000, "Catering"),
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {services.map((s) => (
        <div key={s.id} className="border rounded p-4 shadow">
          <h2 className="text-xl font-semibold">{s.name}</h2>
          <p>{s.formatPrice()}</p>
          <p>{s.category}</p>
        </div>
      ))}
    </div>
  );
}
export default ServiceList;