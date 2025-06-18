"use client"

import Toggle from "./Toggle";
import { useState, useEffect, useCallback } from "react";
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
] as const;

const CHANNELS = ["push", "email", "sms"] as const;

type NotificationId = typeof NOTIFICATIONS[number]["id"];
type Channel = typeof CHANNELS[number];

const CHANNEL_LABELS: Record<Channel, string> = {
  push: "Push",
  email: "Email",
  sms: "SMS",
};

type NotificationSettings = Record<Channel, boolean>;

interface PreferencesResponse {
  preferences: Record<NotificationId, NotificationSettings>;
}

export default function Home() {
  const [preferences, setPreferences] = useState<PreferencesResponse | null>(null);
  // TODO: Implement loading state and error state handling
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPreferences() {
      try {
        const res = await fetch("https://www.greatfrontend.com/api/projects/challenges/account/notifications");
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setPreferences(data)
      } catch {
        // setError("Error with fetching");
      } 
      // finally {
      //   setLoading(false);
      // }
    }

    fetchPreferences()
  }, []);

  const handleToggle = useCallback(
    (type: NotificationId, channel: Channel, value: boolean) => {
      setPreferences((prev) =>
        prev
          ? {
              preferences: {
                ...prev.preferences,
                [type]: {
                  ...prev.preferences[type],
                  [channel]: value,
                },
              },
            }
          : prev
      );
    },
    []
  );

  return (
    <div className={`${notoSans.className} px-4 mt-16 w-full min-w-[375px]`}>
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
                      {CHANNEL_LABELS[channel]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {NOTIFICATIONS.map(({ id, label }) => (
                  <tr key={id} className="first:border-t border-neutral-200">
                    <td className="max-w-36 align-top pt-4">{label}</td>
                    {CHANNELS.map((channel) => (
                      <td key={channel} className="text-center align-top pt-4">
                        <Toggle
                          checked={
                            preferences?.preferences?.[id]?.[channel] ?? false
                          }
                          onChange={(newValue: boolean) => handleToggle(id, channel, newValue)}
                        />
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
