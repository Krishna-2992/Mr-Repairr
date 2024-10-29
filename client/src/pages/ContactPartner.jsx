import { useLocation } from 'react-router-dom';
import data from '../data/data.json';
import electricianImage from '../assets/electrician.png'; // Adjust the path
import plumberImage from '../assets/plumber.png'; // Adjust the path
import carpenterImage from '../assets/carpenter.png'; // Adjust the path
import pestControlImage from '../assets/pest_control.jpg'; // Adjust the path
import { useState } from 'react';

export default function ContactPartner() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const initialProfession = params.get('profession');

    // Mapping of profession titles to their corresponding image imports
    const professionImages = {
        Electrician: electricianImage,
        Plumber: plumberImage,
        Carpenter: carpenterImage,
        "Pest Control": pestControlImage,
    };

    const [userDetails, setUserDetails] = useState({
        name: '',
        contactNumber: '',
        address: '',
        profession: initialProfession || '', // Default value set from parameters
        problemDescription: '', // New field for problem description
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Details:", userDetails);
        // You can send this data to your backend or API here
    };

    // Find the profession data from the JSON
    const professionData = data.professions.find(p => p.title.toLowerCase() === userDetails.profession.toLowerCase());
    const professionImageUrl = professionData ? professionImages[professionData.title] : '';

    return (
        <div className="flex">
            <div className="w-1/2 p-6">
                <h1 className="text-3xl font-bold mb-4">Contact Partner</h1>
                {userDetails.profession ? (
                    <div className='flex flex-col items-center'>
                        <p>You are looking for a: <strong>{userDetails.profession}</strong></p>
                        {professionImageUrl && (
                            <img
                                src={professionImageUrl}
                                alt={userDetails.profession}
                                className="mt-4 h-[75vh] rounded-md"
                            />
                        )}
                    </div>
                ) : (
                    <p>No profession specified.</p>
                )}
            </div>
            <div className="w-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Get Contact Details</h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <select
                        name="profession"
                        value={userDetails.profession}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="" disabled>Select a profession</option>
                        {data.professions.map((profession) => (
                            <option key={profession.id} value={profession.title}>
                                {profession.title}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={userDetails.name}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="tel"
                        name="contactNumber"
                        placeholder="Contact Number"
                        value={userDetails.contactNumber}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={userDetails.address}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <textarea
                        name="problemDescription"
                        placeholder="Describe your problem"
                        value={userDetails.problemDescription}
                        onChange={handleChange}
                        className="border rounded p-2"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white rounded p-2">Contact Partner Now!!</button>
                </form>
            </div>
        </div>
    );
}