const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    {'part': part1, 'exercises': exercises1},
    {'part': part2, 'exercises': exercises2},
    {'part': part3, 'exercises': exercises3},
  ]

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }

  const Content = (props) => {
    return props.content.map((el, i) => 
      <p key={i}>{el.part} {el.exercises}</p> 
    )
  }

  const Total = (props) => {
    const total = props.content.reduce(
      (acc, cur) => acc + cur.exercises, 0
    )
    return (
      <p>Number of exercises {total}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )
}

export default App
