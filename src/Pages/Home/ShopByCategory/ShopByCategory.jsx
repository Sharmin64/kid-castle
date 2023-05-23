import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";

const ShopByCategory = () => {
  const [dolls, setDolls] = useState([]);
  useEffect(() => {
    fetch("https://assignment-11-toy-server-tau.vercel.app/allDolls")
      .then((res) => res.json())
      .then((data) => setDolls(data));
  }, []);

  const disneyPrincess = dolls.filter(
    (doll) => doll.category === "Disney Princess"
  );
  const frozenDolls = dolls.filter((doll) => doll.category === "Frozen Dolls");
  const animations = dolls.filter(
    (doll) => doll.category === "Animation Character"
  );

  return (
    <div className="container  mx-auto my-12">
      <h1 className="text-center text-4xl font-bold text-purple-500">
        Shop By Category
      </h1>
      <Tabs className="text-center">
        <TabList className="text-center text-2xl mb-10 underline py-6">
          <Tab>Disney Dolls</Tab>
          <Tab>Frozen Dolls</Tab>
          <Tab>Animation Character</Tab>
        </TabList>

        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {disneyPrincess.map((doll) => (
              <ToyCard key={doll._id} doll={doll}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {frozenDolls.map((doll) => (
              <ToyCard key={doll._id} doll={doll}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8">
            {animations.map((doll) => (
              <ToyCard key={doll._id} doll={doll}></ToyCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
