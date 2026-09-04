import { createContext, useContext } from 'react'
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom'
import './App.css'

const StudentContext = createContext()

const courses = [
  { id: '1', name: 'React Fundamentals', description: 'Learn components, props, and state.' },
  { id: '2', name: 'JavaScript Basics', description: 'Practice the JavaScript skills used in React.' },
]

function Home() {
  const student = useContext(StudentContext)

  return (
    <section className="content">
      <h1>Welcome to Student Course Management</h1>
      <p>Hello, {student.name}! Choose a course to start learning.</p>
      <Link className="button" to="/courses">View Courses</Link>
    </section>
  )
}

function Courses() {
  return (
    <section className="content">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <article className="course-card" key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`}>View Course</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function CourseDetails() {
  const { id } = useParams()
  const course = courses.find((item) => item.id === id)

  if (!course) {
    return <section className="content"><h1>Course Not Found</h1></section>
  }

  return (
    <section className="content">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <p>Course ID: {course.id}</p>
      <Link to="/courses">Back to Courses</Link>
    </section>
  )
}

function About() {
  const student = useContext(StudentContext)

  return (
    <section className="content">
      <h1>About</h1>
      <p>This app helps {student.name} explore and manage learning courses.</p>
    </section>
  )
}

function App() {
  const student = { name: 'Anita Sharma', email: 'anita@example.com' }

  return (
    <StudentContext.Provider value={student}>
      <BrowserRouter>
        <header className="header">
          <h2>Student Course Manager</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </StudentContext.Provider>
  )
}

export default App
