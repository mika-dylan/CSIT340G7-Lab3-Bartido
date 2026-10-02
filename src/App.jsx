const App = () => {
  const course = 'Information Technology'
  const part1 = 'Industry Elective 1'
  const exercises1 = 3
  const part2 = 'Data Analytics 1'
  const exercises2 = 3
  const part3 = 'Information Management 2'
  const exercises3 = 3

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}




export default App