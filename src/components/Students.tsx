import { useState } from "react";

interface StudentsProps {
  id: number;
  name: string;
  course: string;
  onDelete: (id: number) => void;
  onSaveGrade: (studentId: number, course: string, score: number) => void;
}

export const Students = ({id, name, course, onDelete, onSaveGrade}: StudentsProps) => {
  const [score, setScore] = useState("");
  const [saving, setSaving] = useState(false);

  const handleDelete = () => {
    if (window.confirm(`¿Estás seguro de eliminar a ${name}?`)) {
      onDelete(id);
    }
  };

  const handleSaveGrade = async () => {
    const scoreNum = parseFloat(score);
    if (isNaN(scoreNum) || scoreNum < 0 || scoreNum > 20) {
      alert("Por favor ingresa una nota válida (0-20)");
      return;
    }

    setSaving(true);
    try {
      await onSaveGrade(id, course, scoreNum);
      setScore("");
      alert("Nota guardada exitosamente");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Error al guardar la nota");
    } finally {
      setSaving(false);
    }
  };

  return (
<div className="bg-neutral-primary-soft w-full p-6 border border-default rounded-lg shadow-xs h-full">
    <h5 className="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">{name}</h5>
    <p className="text-body mb-4">Curso : {course}</p>
    
    <div className="mb-4">
      <label htmlFor={`score-${id}`} className="block mb-2 text-sm font-medium text-heading">Nota (0-20):</label>
      <div className="flex gap-2">
        <input 
          type="number" 
          id={`score-${id}`}
          value={score}
          onChange={(e) => setScore(e.target.value)}
          min="0"
          max="20"
          step="0.1"
          placeholder="Ej: 18.5"
          className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
          disabled={saving}
        />
        <button 
          onClick={handleSaveGrade}
          disabled={saving || !score}
          className="inline-flex items-center text-white bg-green-600 box-border border border-transparent hover:bg-green-500 focus:ring-4 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 focus:outline-none transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
        >
          {saving ? "Guardando..." : "💾 Guardar"}
        </button>
      </div>
    </div>

    <button 
      onClick={handleDelete}
      className="inline-flex items-center text-white bg-red-700 box-border border border-transparent hover:bg-red-500 focus:ring-4 shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none transition-colors w-full justify-center"
    >
        🗑️ Eliminar 
        <svg className=" w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </button>
</div>
  )
}
