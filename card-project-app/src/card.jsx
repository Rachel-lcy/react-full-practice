import profilePic from './assets/Rachel.jpg'
function Card(){
  return(
    <div className="card">
      <img className='card-image' src={profilePic} alt="profile picture"/>
      <h2 className='card-title'>Rachel Hu</h2>
      <p className='card-text'>I am a student in SAIT, majoring Interactive Design</p>
    </div>
  );
}
export default Card