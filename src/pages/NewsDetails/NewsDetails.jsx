import React from "react";
import Header from "../../components/Header/Header";
import RightAside from "../../components/homeLayout/RightAside";
import { useLoaderData, useParams } from "react-router";
import { Link } from "react-router"; 

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const data = newsData.find((news) => news.id == id);

  if (!data) {
    return (
      <div className="text-center text-red-500 font-semibold py-20">
        News not found.
      </div>
    );
  }

  const { title, details, image_url, category_id } = data;

  return (
    <div>
      <header className="my-4">
        <Header />
      </header>

      <main className="grid grid-cols-12 gap-6 py-6 w-11/12 mx-auto">
        <section className="col-span-12 md:col-span-9 space-y-4">
          <h2 className="font-bold text-xl text-gray-800">Dragon News</h2>

          {/* News Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm pb-5">
            <figure className="rounded-xl overflow-hidden m-6">
              <img
                src={image_url}
                alt={title}
                className="w-full h-[400px] object-cover rounded-xl"
              />
            </figure>

            <div className="px-6">
              <h1 className="font-bold text-2xl text-gray-700 mb-4 leading-snug">
                {title}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed whitespace-pre-line">
                {details}
              </p>
            </div>

            <div className="p-6">
              <Link to={`/category/${category_id}`}>
                <button className="btn btn-secondary text-white font-semibold">
                  ← All news in this category
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
