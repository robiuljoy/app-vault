import { Download, Star, ThumbsUp } from "lucide-react";
import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { saveAppToDB, getInstalledApps } from "../Utility/addToDB";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find((app) => app.id === appId);

  // Initialize installed state from localStorage
  const [isInstalled, setIsInstalled] = useState(
    () => !!singleData && getInstalledApps().some((a) => a.id === singleData.id)
  );

  const handleInstall = () => {
    if (!singleData) return;
    const success = saveAppToDB(singleData);
    if (success) setIsInstalled(true);
  };

  if (!singleData) return <p>App not found!</p>;

  const chartData = [...singleData.ratings].reverse().map((r) => ({
    name: r.name,
    count: r.count,
  }));

  const maxCount = Math.max(...chartData.map((r) => r.count));

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex flex-col md:flex-row gap-10 border-b-2 border-gray-200 pb-5">
        <div className="flex-shrink-0">
          <img
            className="w-64 rounded-xl"
            src={singleData.image}
            alt={singleData.title}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">{singleData.title}</h2>
          <span className="text-gray-500">
            Developed by{" "}
            <span className="font-semibold text-purple-500">
              {singleData.companyName}
            </span>
          </span>

          <div className="flex flex-wrap gap-6 mt-6">
            <span className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] px-3 py-2 rounded-2xl">
              <Download /> {singleData.downloads}
            </span>
            <span className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] px-3 py-2 rounded-2xl">
              <Star /> {singleData.ratingAvg}
            </span>
            <span className="flex items-center gap-2 bg-[#F5E8FF] text-[#9F62F2] px-3 py-2 rounded-2xl">
              <ThumbsUp /> {singleData.reviews}
            </span>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`mt-6 px-10 py-3 rounded-lg font-semibold transition-all shadow-md ${
              isInstalled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#00b47d] text-white"
            }`}
          >
            {isInstalled ? "Installed" : "Install Now"}
          </button>
        </div>
      </div>

      {/* Rating chart */}
      <div className="mt-10 border-b-2 border-gray-200 pb-5">
        <h3 className="text-xl font-bold mb-5">Rating Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => value.toLocaleString()}
              domain={[0, maxCount]}
            />
            <YAxis type="category" dataKey="name" reversed />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="count" fill="#FF8811" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2 className="mt-7 mb-6 font-bold"> Description:</h2>
      <p className="text-gray-400">
        This focus app takes the proven Pomodoro technique and makes it even
        more practical for modern lifestyles. Instead of just setting a timer,
        it builds a complete environment for deep work, minimizing distractions
        and maximizing concentration. Users can create custom work and break
        intervals, track how many sessions they complete each day, and review
        detailed statistics about their focus habits over time. The design is
        minimal and calming, reducing cognitive load so you can focus entirely
        on the task at hand. Notifications gently let you know when to pause and
        when to resume, helping you maintain a healthy rhythm between work and
        rest.
      </p>
      <p className="mt-15 text-gray-400">
        A unique feature of this app is the integration of task lists with
        timers. You can assign each task to a specific Pomodoro session, making
        your schedule more structured. The built-in analytics show not only how
        much time you’ve worked but also which tasks consumed the most energy.
        This allows you to reflect on your efficiency and adjust your workflow
        accordingly. The app also includes optional background sounds such as
        white noise, nature sounds, or instrumental music to create a
        distraction-free atmosphere.
      </p>
      <p className="mt-15 text-gray-400">
        For people who struggle with procrastination, the app provides
        motivational streaks and achievements. Completing multiple Pomodoro
        sessions unlocks milestones, giving a sense of accomplishment. This
        gamified approach makes focusing more engaging and less like a chore.
        Whether you’re studying for exams, coding, writing, or handling office
        work, the app adapts to your routine. By combining focus tracking, task
        management, and motivational tools, this Pomodoro app ensures that you
        not only work harder but also smarter. It is a personal trainer for your
        brain, keeping you disciplined, refreshed, and productive throughout the
        day.
      </p>
    </div>
  );
};

export default AppDetails;
