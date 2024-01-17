const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    changeBigShoeImage(imageURL);
    if (bigShoeImg != imageURL.bigShoe) {
      changeBigShoeImage(imageURL.bigShoe);
    }
  };
  return (
    <div className="{`border-2 rounded-xl ${bigShoeImg==imageURL?'border-coral-red`:'border-transparent'} cursor-pointer max-sm:flex-1"}       onClick={handleClick}
    >    </div>
  );
};

export default ShoeCard;
