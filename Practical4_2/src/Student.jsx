function Student(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>Student Details</h3>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>Age:</strong> {props.age}</p>
    </div>
  );
}

export default Student;