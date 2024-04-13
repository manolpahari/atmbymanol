import ButtonPrimary from "../Button/ButtonPrimary";

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
    <div className="card w-96 bg-neutral shadow-xl text-gray-800">
      {image && <figure className="px-10 pt-10"></figure>}
      <div className="card-body items-center text-center">
        <h2 className="card-title md:text-2xl text:lg font-bold">{title}</h2>
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
