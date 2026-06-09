import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// make a product card to display on webpage we can also make a separate component for this
const ProductCard = ({ thumbnail, title, price }) => {
    return <div className="w-full sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px] bg-amber-50/60 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-orange-100/50 flex flex-col gap-2 md:gap-3 group">

        {/* Aspect ratio keeps the image perfectly square on all devices */}
        <div className="w-full aspect-square rounded-lg md:rounded-xl overflow-hidden bg-orange-100/30 relative">
            <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
        </div>

        {/* Text Content - Sizes change dynamically based on screen size */}
        <div className="flex flex-col gap-0.5 md:gap-1 px-0.5">
            <span className="text-[10px] md:text-xs font-semibold text-amber-800/60 uppercase tracking-wider">
                Fresh Collection
            </span>

            {/* Clamps text to 2 lines so long titles don't break your layout */}
            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-stone-800 line-clamp-2 group-hover:text-amber-900 transition-colors min-h-[40px] md:min-h-[48px]">
                {title}
            </h3>

            <p className="text-base md:text-lg lg:text-xl font-bold text-orange-600 mt-0.5 md:mt-1">
                {price}
            </p>
        </div>
    </div>
}

const PAGE_SIZE = 10;
export default function Pagination() {
    // storing api data
    const [products, setProducts] = useState([]);
    const [currPage, setCurrPage] = useState(0);
    // fetching api data
    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products?limit=500");
        const json = await data.json();
        setProducts(json.products);
    }

    // loading api data
    useEffect(() => {
        fetchData();
    }, [])

    // Pagination Concept
    const totalProducts = products.length;
    const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
    const start = currPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    return !products.length ? (<h1>No Products</h1>) : (
        <div>
            <h1 className="text-center text-3xl font-bold text-stone-800 my-6">
                Pagination
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 mt-8 mb-4 px-4 w-full">
                <button
                    onClick={() => setCurrPage((prev) => prev - 1)}
                    disabled = {currPage===0}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl bg-amber-100/80 text-amber-900 hover:bg-amber-200 active:scale-95 transition-all duration-200 cursor-pointer select-none border border-amber-200/40"
                >
                    Prev
                </button>
                {[...Array(noOfPages).keys()].map((pageNo) => (
                    <button
                        key={pageNo}
                        onClick={() => setCurrPage(pageNo)}
                        className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-xs sm:text-sm md:text-base font-semibold rounded-lg sm:rounded-xl bg-amber-50/60 backdrop-blur-sm text-stone-700 hover:bg-amber-100/80 border border-orange-500/30 transition-all duration-200 cursor-pointer select-none"
                    >
                        {pageNo}
                    </button>
                ))}
                <button
                    onClick={() => setCurrPage((prev) => prev + 1)}
                    disabled = {currPage===noOfPages - 1}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base font-medium rounded-lg sm:rounded-xl bg-amber-100/80 text-amber-900 hover:bg-amber-200 active:scale-95 transition-all duration-200 cursor-pointer select-none border border-amber-200/40"
                >
                    Next
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
                {/* Mapping- displaying all products card */}
                {products.slice(start, end).map(p => <ProductCard key={p.id} thumbnail={p.thumbnail} title={p.title} price={p.price} />)}
            </div>
        </div>
    );
}