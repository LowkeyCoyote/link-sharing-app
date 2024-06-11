import { useSelector } from 'react-redux';
import demoProfile from '@assets/shared/demo-profile.png'

const MockupLinks = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const isDemo = useSelector((state: any) => state.authSlice.isDemo);


  console.log(userInfo)

  if (!userInfo) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="relative h-[631px] w-[307px] bg-illustration-mockup-links bg-no-repeat flex flex-col items-center mt-[101px]">
      <div className='w-24 h-24 rounded-full bg-center bg-no-repeat bg-contain mt-16' style={{backgroundImage : `url(${isDemo ? demoProfile : userInfo.url})`}}>
      </div>
      <p className="text-[18px] text-dark-grey mt-5 bg-white w-[160px] text-center">
        {userInfo.firstname} {userInfo.lastname}
      </p>
      <p className="text-[14px] w-[160px] text-center bg-white">{userInfo.email}</p>
    </div>
  );
};

export default MockupLinks;
