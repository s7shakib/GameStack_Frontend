import React, { useState, useEffect } from 'react';
// import { Form, Card, Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

const GameUpdate = () => {
    const navigate = useNavigate();
    const [game, setgame] = useState({});
    const { id } = useParams();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setgame({ ...game, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //TODO: Uncomment to update the game in the REST API
        
        fetch(`${process.env.REACT_APP_API_URL}/api/game/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                navigate(-1);
            }
           );
    }

    //TODO:  Uncomment to fetch the game details from the REST API
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/game/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setgame(data)
            });
    }
        , [id]);

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Modify Game</h1>
        <form>
            <div className="mb-4">
                <label htmlFor="formTitle" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    id="formTitle"
                    name="title"
                    placeholder="Enter game Title"
                    value={game.title}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="formDescription" className="block text-sm font-medium text-gray-700">Description</label>
                <input
                    type="text"
                    id="formDescription"
                    name="description"
                    placeholder="Enter game Description"
                    value={game.description}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="formEstimatedTime" className="block text-sm font-medium text-gray-700">Estimated Time</label>
                <input
                    type="text"
                    id="formEstimatedTime"
                    name="estimatedTime"
                    placeholder="Enter game Time Estimate"
                    value={game.estimatedTime}
                    onChange={handleInputChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex space-x-4">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-400 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
    )
}

export default GameUpdate;
