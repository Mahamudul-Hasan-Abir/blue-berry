import AdminNav from "../../components/AdminNav/AdminNav";
import AdminDashboard from "../../pages/AdminDashboard/AdminDashboard";
import Container from "../Container/Container";

const AdminLayout = () => {
  return (
    <div>
      <AdminNav></AdminNav>
      <Container>
        <AdminDashboard></AdminDashboard>
      </Container>
    </div>
  );
};

export default AdminLayout;
