
function ProfilePicture(){
 const imageUrl = './src/assets/Rachel.jpg';

  const handleClick = (e)=> e.target.style.display = "none";
 
  return (
    <img onClick= {(e) => handleClick(e)} src={imageUrl} />
 );
}
export default ProfilePicture