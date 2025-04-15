import { useState, useEffect } from "react";
import axios from "axios";

function ServiceList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  
    useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:3000/services").then((response) => {
      setServices(response.data);
      setLoading(false);
    });
  }, []);
    useEffect(() => {
    axios
      .get("http://localhost:3000/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dịch vụ:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {services.map((s) => (
        <div key={s.id} className="border rounded p-4 shadow">
          <h2 className="text-xl font-semibold">{s.name}</h2>
          <p>{s.price.toLocaleString()} VND</p>
          <p>{s.category}</p>
        </div>
      ))}
    </div>
  );
}
export default ServiceList;