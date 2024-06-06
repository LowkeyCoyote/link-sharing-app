import illustrationEmptyLinks from '@assets/shared/illustration-empty.svg';
import Button from '@components/shared/ui/Button';

const EmptyLinks = () => {
  return (
    <section>
      <div className='flex flex-col items-center bg-light-grey rounded-lg pt-16 pb-16 mb-10'>
        <img src={illustrationEmptyLinks} className="mb-10" alt="no links" />
        <h1 className="mb-6"> Let’s get you started</h1>
        <p className="w-9/12 text-center">
          Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them.
          We’re here to help you share your profiles with everyone!
        </p>
      </div>

      <div className="border-t border-border justify-end flex -px-10 self-end">
        <Button type="submit" className="px-7 mr-10 mt-6 pointer-events-none bg-purple-hover">
          Save
        </Button>
      </div>
    </section>
  );
};

export default EmptyLinks;
