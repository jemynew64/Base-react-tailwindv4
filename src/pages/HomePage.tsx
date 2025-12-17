import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Total } from "../components/Total";
import { Students } from "../components/Students";

export const HomePage = () => {

interface Student {
  id: number;
  name: string;
  course: string;
}
  
  const [total, setTotal] = useState(0);
  const [students, setStudents] = useState<Student[]>([])

  const deleteStudent = async (id: number) => {
    try {
      await axios.delete(`http://localhost:3000/api/students/${id}`);
      setStudents(students.filter(student => student.id !== id));
      setTotal(total - 1);
    } catch (error) {
      console.error("Error al eliminar el estudiante:", error);
      alert("Error al eliminar el estudiante");
    }
  };

  const saveGrade = async (studentId: number, course: string, score: number) => {
    try {
      await axios.post("http://localhost:3000/api/grades", {
        student_id: studentId,
        course: course,
        score: score
      });
    } catch (error) {
      console.error("Error al guardar la nota:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/students/total/count");
        setTotal(response.data.total);
      } catch (error) {
        console.error("Error al obtener el total:", error);
      }
    };
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/students");
        setStudents(response.data);
      } catch (error) {
        console.error("Error al obtener estudiantes:", error);
      }
    };
    fetchStudents()
    fetchTotal();
  }, []); 

  return (
    <>
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 py-6">
        <Total total={total} />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((student) => (
            <Students 
              key={student.id} 
              id={student.id}
              name={student.name} 
              course={student.course}
              onDelete={deleteStudent}
              onSaveGrade={saveGrade}
            />
          ))}
        </div>
    </main>
    </>
  );
};
