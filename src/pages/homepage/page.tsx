import { useState } from 'react'
import '../../App.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [title, setTitle] = useState("")
  const [hometown, setHometown] = useState("")
  const navigate = useNavigate();


  const onSubmit = async () => {
    if (title && name) {
      await fetch("/api/forms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            age,
            title,
            hometown

          }),
        }
      )
      navigate("/confirm");


    }
  }

  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      <div className=' bg-amber-50 rounded-2xl w-1/3 h-[55vh] shadow-2xl justify-center'>
        <div className='flex justify-center bg-blue-600 text-white text-2xl rounded-t-2xl py-2'>
          Ohio LIS Registration Form
        </div>
        <div className='flex flex-col justify-center items-center h-full px-24 space-y-2'>
          <span>Name*</span>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span>Age</span>

          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span>Title*</span>

          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span>HomeTown</span>

          <input
            type="text"
            placeholder="Hometown"
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div>
            <button
              onClick={onSubmit}
              className={`mt-2 w-full rounded-lg py-2 text-white
                  ${title && name
                  ? "!bg-blue-600 hover:bg-blue-700"
                  : "!bg-gray-300 cursor-not-allowed"
                }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>


    </main>
  )
}

export default HomePage;
