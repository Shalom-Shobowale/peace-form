import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <main className="w-[25%] rounded-sm shadow-2xl ">
        <h1 className="px-5 py-3 font-semibold">Account Settings</h1>
        <div className="bg-slate-50 text-sm p-5 h-[90vh]">
          <div className="flex gap-5">
            <div className="bg-cover bg-no-repeat bg-center h-14 w-14 rounded-full" style={{backgroundImage: "url(shallom.jpg)"}}></div>
            <aside>
              <h4 className="font-bold">Shallom</h4>
              <p>Shalom@gmail.com</p>
            </aside>
          </div>
          <p className="border-b-2 border-dotted border-gray-300 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus tenetur libero voluptatibus quos sequi eum, et quasi asperiores dignissimos est vel corporis numquam ullam distinctio?</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
