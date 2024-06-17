import placeholderProfile from '@assets/shared/placeholder-img.png';
import { useSelector } from 'react-redux';
import placeholderImg from '@assets/shared/placeholder-img.png';
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
    <div className="box-shadow-card mx-auto flex w-fit flex-col items-center justify-center rounded-3xl bg-white px-14 py-12 sm:shadow-none">
      {userInfo.url ? (
        <div
          className="mb-6 h-[130px] w-[130px] rounded-full border-4 border-purple bg-cover bg-center"
          style={{
            backgroundImage: `url(${userInfo.url})`,
          }}
        ></div>
      ) : (
        <div
          className="mb-6 h-[120px] w-[120px] rounded-full border-4 border-purple bg-cover bg-center"
          style={{
            backgroundImage: `url(${isDemo ? placeholderImg : placeholderProfile})`,
          }}
        ></div>
      )}
      <h1 className="mb-2 font-semibold">
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
