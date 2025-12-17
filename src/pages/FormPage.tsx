import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Navbar } from "../components/Navbar"

export const FormPage = () => {
  const [name, setName] = useState("")
  const [course, setCourse] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post("http://localhost:3000/api/students", {
        name,
        course
      })
            setName("")
      setCourse("")
        navigate("/")
      
    } catch (error) {
      console.error("Error al crear el alumno:", error)
      alert("Error al crear el alumno")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-6">
<form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
    <div>
        <label htmlFor="name" className="block mb-2.5 text-sm font-medium text-heading">Nombre :</label>
        <input 
          type="text" 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" 
          placeholder="Kevin levin" 
          required 
        />
    </div>
    <div>
        <label htmlFor="course" className="block mb-2.5 text-sm font-medium text-heading">Curso :</label>
        <input 
          type="text" 
          id="course" 
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" 
          placeholder="React avanzado" 
          required 
        />
    </div>
    <button 
      type="submit" 
      disabled={loading}
      className="bg-sky-400 text-white px-4 py-2 rounded w-full hover:bg-sky-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
    >
      {loading ? "Creando..." : "Crear"}
    </button>
</form>
    
        </main>


    </>
)
}
