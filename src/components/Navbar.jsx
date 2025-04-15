import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Trang chủ</Link>
      <Link to="/services" className="hover:underline">Dịch vụ</Link>
    </nav>
  );
}
export default Navbar;