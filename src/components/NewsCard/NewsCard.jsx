import React from "react";
import { FaEye, FaStar, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  // For 5-star rating display
  const stars = Array(5).fill(0);

  return (
    <div className="card bg-base-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Top-right icons */}
        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3 text-gray-800 leading-snug">
          {title}
        </h2>

        <figure className="mb-3">
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-xl w-full h-56 object-cover"
          />
        </figure>

        <p className="text-gray-700 text-sm leading-relaxed mb-4">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          {details.length > 200 && (
            <span className="text-blue-600 font-semibold cursor-pointer">
              {" "}
              Read More
            </span>
          )}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="badge badge-outline badge-sm text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1 text-orange-400">
            {stars.map((_, i) => (
              <FaStar
                key={i}
                className={i < rating.number ? "text-orange-500" : "text-gray-300"}
              />
            ))}
            <span className="ml-1 text-gray-600 font-semibold text-sm">
              {rating.number.toFixed(1)}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
