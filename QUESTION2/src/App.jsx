import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  })
  const [submittedStudent, setSubmittedStudent] = useState(null)

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmittedStudent(formData)
  }

  return (
    <main className={styles.page}>
      <h1>Student Registration Form</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label htmlFor="course">Course</label>
        <input id="course" name="course" type="text" value={formData.course} onChange={handleChange} required />

        <button type="submit">Register Student</button>
      </form>

      {submittedStudent && (
        <section className={styles.result}>
          <h2>Submitted Student Details</h2>
          <p><strong>Name:</strong> {submittedStudent.name}</p>
          <p><strong>Email:</strong> {submittedStudent.email}</p>
          <p><strong>Course:</strong> {submittedStudent.course}</p>
        </section>
      )}
    </main>
  )
}

export default App
