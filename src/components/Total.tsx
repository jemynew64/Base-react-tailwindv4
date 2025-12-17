export const Total = ({ total }: { total: number }) => {
  return (
    <div className="bg-sky-400/50 text-center w-full p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <h5 className="mb-3 text-2xl font-semibold">Sistema de Kevin Rojas</h5>
        <p className="text-base">Total de alumnos en la BD: {total}</p>
    </div>
  )
}