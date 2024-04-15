import React from 'react';

const Home = () => {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center bg-cover bg-top" style={{ backgroundImage: 'url(/game7.jpg)' }}>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div className="z-10 text-center p-5 animate-fadeIn">
                <h1 className="text-2xl md:text-6xl font-bold text-gray-200">Welcome to the GameStack</h1>
                <p className="mt-4 text-xl text-gray-300 max-w-md mx-auto">
                    Discover, create, and manage your favorite games in one place.
                </p>
            </div>
        </div>
    )
}

export default Home;
