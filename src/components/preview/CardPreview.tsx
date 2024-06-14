import placeholderProfile from '@assets/shared/placeholder-img.png';
import { useSelector } from 'react-redux';
import placeholderImg from "@assets/shared/placeholder-img.png"
import LinkTab from '@components/shared/LinkTab';

interface CardPreviewProps {
  userInfo: any;
}

const CardPreview = ({ userInfo }: CardPreviewProps) => {
  const isDemo = useSelector((state: any) => state.authSlice.isDemo);

  if (!userInfo) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="rounded-3xl bg-white w-fit mx-auto px-14 py-12 flex flex-col items-center justify-center box-shadow-card"
>
      {userInfo.url ? (
        <div
          className="h-[120px] w-[120px] bg-center bg-cover rounded-full border-4 border-purple mb-6"
          style={{
            backgroundImage: `url(${userInfo.url})`,
          }}
        ></div>
      ) : (
        <div
          className="h-[120px] w-[120px] bg-center bg-cover rounded-full border-4 border-purple mb-6"
          style={{
            backgroundImage: `url(${isDemo ? placeholderImg : placeholderProfile})`,
          }}
        ></div>
      )}
      <h1 className="font-semibold mb-2">
        {userInfo.firstname} {userInfo.lastname}
      </h1>
      <p className="mb-14">{userInfo.email}</p>
      {userInfo.links &&
        userInfo.links.map((link: any) => (
          <LinkTab platform={link.platform} key={link.id} id={link.id} link={link.url} />
        ))}
    </div>
  );
};

export default CardPreview;
