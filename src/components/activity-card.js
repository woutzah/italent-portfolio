import React from "react"

export default function ActivityCard({ imageUrl, title, description, place, time }) {
  return (
    <div className="card">
        <span
          className="card-header"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        >
          <span className="card-title">
            <h3>{title}</h3>
          </span>
        </span>
      <span className="card-summary">
          {description}
        </span>
      <span className="card-meta">{place}</span>
      <span className="card-meta">{time}</span>
    </div>
  )
}