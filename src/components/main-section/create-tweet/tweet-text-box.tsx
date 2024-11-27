const TweetTextBox = () => {
  return (
    <div className="flex-1">
      <textarea
        placeholder="What's happening?"
        className="max-w-3xl w-full bg-transparent text-[1.25rem] focus:outline-none placeholder-gray-500 resize-none overflow-hidden"
        rows={3}
      />
    </div>
  );
};

export default TweetTextBox;
