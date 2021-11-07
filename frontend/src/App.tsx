import DataTable from "componts/DataTable";
import Footer from "componts/footer";
import NavBar from "componts/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2 className="text-primary">ola cris</h2>
        <DataTable />
      </div>
      <Footer />

    </>
  );
}

export default App;
