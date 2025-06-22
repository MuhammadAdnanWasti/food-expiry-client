
import { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";


const FoodDetails = () => {
    const {user}=use(AuthContext)
  const food = useLoaderData()
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState(food.notes || []);
   const [timeLeft, setTimeLeft] = useState("");

  // Countdown logic
  useEffect(() => {
    const expiry = new Date(food.expiry_date);

    const updateCountdown = () => {
      const now = new Date();
      const diff = expiry - now;

      if (diff <= 0) {
        setTimeLeft("Expired");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); 
  }, [food.expiry_date]);
// console.log(user)
  const isMatched=food.email===user?.email
// console.log(user.email)
 
const handleAddNote = async () => {
    if (!noteText.trim()) return;

    const res = await fetch(`https://food-expiry-tracker-server-alpha.vercel.app/foods/${food._id}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: noteText }),
    });

    if (res.ok) {
      const newNote = {
        text: noteText,
        postedAt: new Date().toISOString(), 
      };
      setNotes([...notes, newNote]);
      setNoteText(""); 
    }
  };

  return (
    <div className="card bg-base-100 md:w-120 m-9 shadow-sm" key={food._id}>
      <figure>
        <img src={food.food_image} alt="Food" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{food.title}</h2>
        <p>Quantity: {food.quantity}</p>
        <p>{food.description}</p>
        <div className="mt-2 text-sm text-red-500 font-medium">
          Expires in: {timeLeft}
        </div>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{food.catagory}</div>
        </div>

        {/* Note Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Add Note</h3>
          <textarea
            className="textarea textarea-bordered w-full mt-2"
            rows="3"
            placeholder="Write your note..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          ></textarea>
          <button
            onClick={handleAddNote} 
            className="btn btn-primary mt-2" disabled={!isMatched}
          >
            Add Note
          </button>
        </div>

        {/* Notes Display */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Notes:</h3>
          {notes.length === 0 && <p className="text-gray-500">No notes yet.</p>}
          {notes.map((note, idx) => (
            <div key={idx} className="border p-2 rounded mb-2">
              <p>{note.text}</p>
              <p className="text-sm text-gray-400">
                Posted: {new Date(note.postedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
