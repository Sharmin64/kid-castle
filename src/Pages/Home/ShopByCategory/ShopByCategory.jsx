import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";

const ShopByCategory = () => {
  const [dolls, setDolls] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/allDolls")
      .then((res) => res.json())
      .then((data) => setDolls(data));
  }, []);
  //console.log(",............", dolls);
  const babyDolls = dolls.filter((doll) => doll.category === "Baby Dolls");
  const barbies = dolls.filter((doll) => doll.category === "Barbie");
  const americans = dolls.filter((doll) => doll.category === "American Girl");

  return (
    <div className="container  mx-auto my-12">
      <h1 className="text-center text-4xl font-bold text-purple-500">
        Shop By Category
      </h1>
      <Tabs className="text-center">
        <TabList className="text-center text-2xl mb-10 underline py-6">
          <Tab>Baby Dolls</Tab>
          <Tab>Barbie</Tab>
          <Tab>American girl</Tab>
        </TabList>

        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {babyDolls.map((doll) => (
              <ToyCard key={doll._id} doll={doll}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {barbies.map((doll) => (
              <ToyCard key={doll._id} doll={doll}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {americans.map((doll) => (
              <ToyCard key={doll._id} doll={doll}></ToyCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
