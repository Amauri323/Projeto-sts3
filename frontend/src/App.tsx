import BarChart from "componts/Barchart";
import DataTable from "componts/DataTable";
import DonutChart from "componts/DonutChart";
import Footer from "componts/footer";
import NavBar from "componts/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="text-primary py-3">Dashboard de Vendas</h2>
        <div className="row px-3"> 
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Taxas de sucesso(%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secundary">Todas Vendas</h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Todas Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />

    </>
  );
}

export default App;
