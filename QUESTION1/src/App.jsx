import './App.css'

function Student(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>College:</strong> {props.college}</p>
    </div>
  )
}

function App() {
  return (
    <main>
      <h1>Student Profiles</h1>
      <div className="student-list">
        <Student
          name="Anita Sharma"
          course="B.Sc. Computer Science"
          college="City College"
        />
        <Student
          name="Rahul Kumar"
          course="B.Com."
          college="National College"
        />
      </div>
    </main>
  )
}

export default App
