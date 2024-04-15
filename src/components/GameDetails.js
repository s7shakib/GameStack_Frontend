//creaet a react all to show the game details for a single game
//the game details will be displayed in a card
//the card will be displayed in a container

import React, { useState, useEffect } from 'react';
// import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';


const GameDetails = () => {
    const navigate = useNavigate();
    const [game, setgame] = useState({});
    const { id } = useParams();


    const handleDelete = (event) => {
        event.preventDefault();
        //TODO: Uncomment to delete the game from the REST API
        fetch(`${process.env.REACT_APP_API_URL}/api/game/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(data => {
                navigate('/games');
            }
            );
    }


    //TODO: Uncomment to fetch the game details from the REST API
    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/api/game/${id}`, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setgame(data)
            }
            );
    }, [id]);

    return (
        <div className="max-w-6xl mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">{game.title}</h1>
        <div className="flex space-x-4 mb-6">
            <button
                onClick={() => navigate(-1)}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Back
            </button>
            <Link
                to={`/games/update/${id}`}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
                Edit game
            </Link>
            <button
                onClick={handleDelete}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
                Delete
            </button>
        </div>
        <div className="flex">
            <div className="flex-1 bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold">{game.title}</h2>
                <div className="my-3 text-gray-700">
                    {game.description}
                </div>
                <div className="text-gray-900 font-bold">
                    {game.estimatedTime}
                </div>
            </div>
            <div className="flex-1">
                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover rounded-lg" />
            </div>
        </div>
    </div>
    )
}

export default GameDetails;

