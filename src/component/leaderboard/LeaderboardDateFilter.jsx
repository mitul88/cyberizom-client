import { LuCrown } from "react-icons/lu";
import { Link } from "react-router-dom";

const LeaderboardDateFilter = () => {
  return (
    <div className="p-5 flex justify-between">
        <div>
            <h2 className="text-3xl font-semibold flex items-center gap-3"><LuCrown size={30} /> Cyberizom Leaderboards</h2>
            <p className="text-sm">All leaderboards are based on the selected time period.</p>
        </div>
        <div className="flex gap-2">
            <Link className="font-semibold hover:text-red-600 ease-out duration-300">Jan-Mar 2023</Link>
            <Link className="font-semibold hover:text-red-600 ease-out duration-300">Apr-Jun 2023</Link>
            <Link className="font-semibold hover:text-red-600 ease-out duration-300">Jul-Sep 2023</Link>
            <Link className="font-semibold text-red-600 hover:text-red-600 ease-out duration-300">Oct-Dec 2023</Link>
            <Link className="font-semibold hover:text-red-600 ease-out duration-300">2023</Link>
        </div>
    </div>
  )
}

export default LeaderboardDateFilter