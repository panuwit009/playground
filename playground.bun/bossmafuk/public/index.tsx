import { useState } from "react";
import { createRoot } from "react-dom/client";
import Layout from "../layout";
import "../src/global.css";

function App() {
  return (
    <Layout>
      <main>

		<div className="flex justify-center">
        <p className="font-mono font-bold text-7xl text-center mt-24">Welcome to <span className="text-orange-500">My Playground Space!!!</span><br/> Pls Take a look </p>
		</div>

	<div className="flex justify-center p-10">
		<button className="border text-white px-10 py-4 rounded-md cursor-pointer flex items-center hover:bg-orange-600 hover:border-orange-600 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 font-bold text-3xl">
			Start Here
		</button>
	</div>


      </main>
    </Layout>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
