import Image from 'next/image';
import profilePic from "../../../public/images/profilepic.png"

const ProfilePic = (props) => {
  return (
    <>
        <Image 
            src={profilePic}
            alt="picture of me"
            width={200}
            height={200}
        />
    </>
  )
}

export default ProfilePic