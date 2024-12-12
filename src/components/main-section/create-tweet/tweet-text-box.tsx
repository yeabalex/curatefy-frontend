const TweetTextBox = ({
  handleTextChange,
}: {
  handleTextChange: (text: string) => void;
}) => {
  function textChange(text: string) {
    handleTextChange(text);
  }
  return (
    <div className="flex-1">
      <textarea
        placeholder="What's happening?"
        className="max-w-3xl w-full bg-transparent text-[1.25rem] focus:outline-none placeholder-gray-500 resize-none overflow-hidden"
        rows={3}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          textChange(e.target.value)
        }
      />
    </div>
  );
};

export default TweetTextBox;
