import React from 'react'

const Banner = () => {
  return (
      <div className="carousel w-full h-[400px] rounded-lg overflow-hidden">
   
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/BVtqpBWB/Plain-Polao-Sultans-Dine.webp"
          className="w-full"
          alt="Fresh Food"
        />
        <div className="absolute flex items-center h-full left-0 top-0 bg-black bg-opacity-50 text-white p-6">
          <div>
            <h2 className="text-3xl font-bold">Delicious Meals</h2>
            <p className="text-lg">Enjoy tasty and healthy food every day.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-4">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>


      <div id="slide2" className="carousel-item relative w-full">
        <img
          src='https://i.ibb.co/G3cqTGTt/Burger.jpg'
          className="w-full "
          alt="Healthy Meal"
        />
        <div className="absolute flex items-center h-full left-0 top-0 bg-black bg-opacity-50 text-white p-6">
          <div>
            <h2 className="text-3xl font-bold">Always Fresh</h2>
            <p className="text-lg">We ensure freshness in every bite.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-4">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>


      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/GvV2WsMR/Pizza.jpg"
          className="w-full"
          alt="Family Dining"
        />
        <div className="absolute flex items-center h-full left-0 top-0 bg-black bg-opacity-50 text-white p-6">
          <div>
            <h2 className="text-3xl font-bold">Feed the Community</h2>
            <p className="text-lg">Share meals, share smiles, share hope.</p>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-4">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Banner
