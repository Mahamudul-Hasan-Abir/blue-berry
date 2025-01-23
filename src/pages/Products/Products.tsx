import AllProducts from "../../components/AllProducts/AllProducts";
import Carusal from "../../components/Carusal/Carusal";
import Navigator from "../../components/Navigator/Navigator";
import { TChildren } from "../../Types/randomTypes";

const Products = () => {
  const children: TChildren = {
    page: "Products",
    pageName: "Product Page",
  };
  return (
    <div>
      <Navigator page={children.page} pageName={children.pageName}></Navigator>
      <div className="md:block hidden">
        <Carusal></Carusal>
      </div>
      <AllProducts></AllProducts>
    </div>
  );
};

export default Products;
