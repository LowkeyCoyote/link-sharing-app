import FormUpdateProfile from "@components/profile/FormUpdateProfile"
import Navbar from "@components/shared/layout/Navbar"

const ProfilePage = () => {
  return (
    <section>
        <Navbar />
        <div className="flex px-6 gap-6">
            <div className="bg-white h-screen w-[35%] rounded-xl">

            </div>
            <div className="bg-white h-screen w-[65%] rounded-xl">
                <FormUpdateProfile />
            </div>
        </div>
    </section>
  )
}

export default ProfilePage
