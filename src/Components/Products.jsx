import React from 'react'
import PropTypes from 'prop-types'
import SpecsA from '../Images/SpecsA.jpg'
import SpecsB from '../Images/SpecsB.jpg'
const Products = props => {
  return (
    <div className="px-4 py-6">
      <h1 className="text-4xl font-heading text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
        <div className="border border-gray-500 min-h-[300px] rounded hover:shadow-md">
          <div className="min-h-[50%] m-[auto] grid place-items-center relative">
            {/* First Image */}
            <img
              src={SpecsA}
              className="w-[80%] object-cover hover:opacity-0 transition-opacity duration-300"
              alt=""
            />

            {/* Second Image */}
            <img
              src={SpecsB}
              className="w-[80%] object-cover absolute  hover:opacity-100 opacity-0 transition-opacity duration-300"
              alt=""
            />
          </div>
          <div className="h-[50%] ">
            <ul className="text-left p-[1em]">
              <li className="font-bold font-roboto text-lg">New specs</li>
              <li className="font-roboto text-gray-500 ">Price : 00.00</li>
              <li className="font-roboto text-gray-500 ">
                Offer : <span className="text-primary line-through">00.00</span>
              </li>
              <li>Stars</li>
              <li>Product:Discrp</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {}

export default Products