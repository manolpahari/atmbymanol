import ButtonPrimary from '../Button/ButtonPrimary';

const Card = ({
  image,
  title,
  description,
  buttonName,
  onClick,
}: {
  image?: string;
  title: string;
  description?: React.ReactNode;
  buttonName?: string;
  onClick: () => void;
}) => {
  return (
    <div className="card w-96 bg-primary shadow-xl text-gray-800">
      {image && (
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
      )}
      <div className="card-body items-center text-center">
        <h2 className="card-title md:text-2xl text:xl font-bold">{title}</h2>
        {description && <p>{description}</p>}
        <div className="card-actions">
          {buttonName && (
            <ButtonPrimary buttonName={buttonName} onClick={onClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
