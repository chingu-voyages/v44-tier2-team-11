const HEADERS = ['Bots', 'Win', 'Loss', 'Tie'];

const LeaderboardHeader = () => {
  return (
    <div className=" my-4 flex h-min font-bold text-primary-950">
      {HEADERS.map((column) => (
        <div
          key={column}
          className="flex w-full grow items-center justify-center"
        >
          {column}
        </div>
      ))}
    </div>
  );
};

export default LeaderboardHeader;
