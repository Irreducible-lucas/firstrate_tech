
const ReviewCard = ({ imgURL, teamName, description }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] mb-3'
      />
      <h3 className='mt-1 font-sora text-md text-center font-bold '>
        {teamName}
      </h3>
      <p className="body-1 mt-3">{description}</p>
    </div>
  );
};

export default ReviewCard;
