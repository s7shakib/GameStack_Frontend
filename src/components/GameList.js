//create a gameList React component
//this component will be used in the app.js file
//create a gameList React component that retrieves a list of games from our rest service.
//this rest service is at http://35.173.74.63:8080/api/game

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

const GameList = () => {
    const [games, setgames] = useState([]);

    //TODO: Uncomment to fetch the list of games from the REST API

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/game`, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setgames(data)
            });
    }, []);

    return (
        <div className="max-w-6xl mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Game</h1>
        <Link to="/games/add" className="inline-flex justify-center py-2 px-4 mb-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 no-underline">
            Add Game
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {games.map((game) => (
                <div key={game.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                     {/* Image */}
                     <img  to={`/game/${game.id}`} src={game.imageUrl} alt={game.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                        {/* Title */}
                    <div className="text-lg font-semibold text-green-800">
                        {game.title}
                    </div>
                    <div className="my-3 text-gray-700">
                        {game.description}
                    </div>
                    <div className="text-gray-900 font-bold">
                        {game.estimatedTime}
                    </div>
                    <Link to={`/games/${game.id}`} className="inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 no-underline">
                        View Game
                    </Link>
                </div>
            ))}
        </div>
    </div>
    )
}

export default GameList;





