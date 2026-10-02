const App = () => {
  const course = {
    name: 'Information Technology',
    parts: [
      {
        name: 'Industry Elective 1',
        exercises: 3
      },
      {
        name: 'Data Analytics 1',
        exercises: 3
      },
      {
        name: 'Information Management 2',
        exercises: 3
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name="Mika Dylan T. Bartido"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Total units {total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

export default App