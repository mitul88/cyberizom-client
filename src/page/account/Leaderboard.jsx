import LeaderboardDateFilter from "../../component/leaderboard/LeaderboardDateFilter";

const Leaderboard = () => {
  return (
    <div>
        <div className="w-full bg-white p-5 border-b border-gray-300 font-semibold">LEADERBOARDS</div>
        <div className="px-36">
            <LeaderboardDateFilter />
        </div>
    </div>
  )
}

export default Leaderboard