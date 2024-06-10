import placeholderProfile from '@assets/shared/placeholder-img.png';

interface CardPreviewProps {
  userInfo: any;
}

const CardPreview = ({ userInfo }: CardPreviewProps) => {
  if (!userInfo) {
    return <p>Loading ...</p>;
  }

  return (
    <div
      className=" rounded-3xl bg-white w-fit mx-auto px-14 py-12 flex flex-col items-center justify-center box-shadow-card
 
    "
    >
      {userInfo.url ? (
        <div
          className="h-[120px] w-[120px] bg-center bg-cover rounded-full border-4 border-purple mb-6"
          style={{
            backgroundImage: `url(${userInfo.url})`,
          }}
        ></div>
      ) : (
        <img
          src={placeholderProfile}
          className="h-[120px] w-[120px] border-4 border-purple rounded-full mb-6"
          alt="placeholder profile picture"
        />
      )}
      <h1 className="font-semibold mb-2">
        {userInfo.firstname} {userInfo.lastname}
      </h1>
      <p className="mb-14">{userInfo.email}</p>
    </div>
  );
};

export default CardPreview;
