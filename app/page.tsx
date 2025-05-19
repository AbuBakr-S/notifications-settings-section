"use client"

import Toggle from "./Toggle";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-noto",
});

const NOTIFICATIONS = [
  { id: "marketing", label: "Marketing & promotional content" },
  { id: "features", label: "Feature updates" },
  { id: "comments", label: "Comments" },
  { id: "friend_updates", label: "Updates from friends" },
  { id: "friend_requests", label: "Friend requests" },
];

const CHANNELS = ["Push", "Email", "SMS"];

export default function Home() {
  return (
    <div className={`${notoSans.className} px-4 mt-16`}>
      <div>
        <h1 className="text-xl font-semibold">Manage Your Notifications</h1>
        <p className="text-sm font-normal text-neutral-500 mt-2">
          Choose how you want to be notified about the latest updates and
          messages.
        </p>
        <form>
          <div className="mb-6">
            <table className="mt-8 w-full text-sm">
              <thead>
                <tr>
                  <th></th>
                  {CHANNELS.map((channel) => (
                    <th
                      className="font-semibold px-3 py-2"
                      key={channel}
                    >
                      {channel}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NOTIFICATIONS.map(({ id, label }) => (
                  <tr key={id} className="first:border-t border-neutral-200">
                    <td className="max-w-36 pt-4">{label}</td>
                    {CHANNELS.map((channel) => (
                      // TODO: Replace with a Reusable Toggle Component
                      <td key={channel} className="text-center">
                        <Toggle checked={false} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end items-center h-[80px]">
            <button
              className="w-[176px] h-[48px] bg-neutral-100"
              type="submit"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
