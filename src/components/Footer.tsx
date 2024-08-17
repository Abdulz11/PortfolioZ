
export default function Footer() {
  const date = new Date()
  return (
    <div className="footer-div">
        <h4>{`Z - web devloper ${date.getFullYear()}`} </h4>
        <span></span>
    </div>
  )
}
