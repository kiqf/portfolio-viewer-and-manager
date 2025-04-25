'use client'
import { useState } from "react";

export default function CriarProjetoPage() {
  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    tecnologias: '',
    githubUrl: '',
    deployUrl: '',
    imagemUrl: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
    // Conectar com o POST /api/projetos para criar o projeto
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Criar novo projeto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="titulo" onChange={handleChange} placeholder="Título" className="w-full p-2 border rounded" required />
        <textarea name="descricao" onChange={handleChange} placeholder="Descrição" className="w-full p-2 border rounded" required />
        <input name="tecnologias" onChange={handleChange} placeholder="Tecnologias" className="w-full p-2 border rounded" />
        <input name="githubUrl" onChange={handleChange} placeholder="GitHub URL" className="w-full p-2 border rounded" required />
        <input name="deployUrl" onChange={handleChange} placeholder="Deploy URL" className="w-full p-2 border rounded" />
        <input name="imagemUrl" onChange={handleChange} placeholder="Imagem URL" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Salvar Projeto</button>
      </form>
    </div>
  )
}