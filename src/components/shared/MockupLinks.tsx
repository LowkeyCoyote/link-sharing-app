import { useSelector } from 'react-redux';

const MockupLinks = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);

  if (!userInfo) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="relative h-[631px] w-[307px] bg-illustration-mockup-links bg-no-repeat flex flex-col items-center">
      <img src={userInfo.url} className="w-24 h-24 rounded-full mt-16" />
      <p className="text-[18px] text-dark-grey mt-5 bg-white w-[160px] text-center">
        {userInfo.firstname} {userInfo.lastname}
      </p>
      <p className="text-[14px] w-[160px] text-center bg-white">{userInfo.email}</p>
    </div>
  );
};

export default MockupLinks;
